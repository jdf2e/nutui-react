import os
import sys
import asyncio
import subprocess
from google.antigravity import Agent, LocalAgentConfig, ToolContext, types
import pydantic

# ==============================================================================
# 1. 定义结构化输出 Schema
# ==============================================================================
# 使用 Pydantic 来定义 Agent 执行完毕后返回的结构化 JSON 数据格式。
# 这样可以确保 Agent 最终输出的信息是机器可读的、规律的，方便 CI/CD 流水线做后续逻辑判定（如决定是否提交 PR）。
class FixSummary(pydantic.BaseModel):
    issue_id: str = pydantic.Field(description="被修复的 GitHub Issue ID")
    root_cause: str = pydantic.Field(description="分析出的 Bug 根本原因说明")
    files_modified: list[str] = pydantic.Field(description="被修改的文件路径列表")
    tests_run: bool = pydantic.Field(description="是否运行了测试套件验证")
    test_results: str = pydantic.Field(description="测试执行的输出结果或简要状态")
    pr_submitted: bool = pydantic.Field(description="是否已经创建了对应的修复分支与提交")
    commit_hash: str | None = pydantic.Field(default=None, description="生成的 Git 提交哈希值")

# ==============================================================================
# 2. 为 Agent 装配自定义工具集 (Custom Tools)
# ==============================================================================
# 在 Google Antigravity SDK 中，Python 函数可以直接作为 Tool 被 Agent 消费。
# 函数的 Docstring（文档注释）至关重要，Agent 将根据这些注释来判断何时使用该工具以及如何传入参数。

def run_git_command(command: str) -> str:
    """在代码仓库中执行指定的 git 命令（例如 'status', 'diff', 'log'）。

    Args:
        command: 欲运行的 git 命令及参数（不需要包含开头的 'git'，如 'status'）。
    """
    try:
        # 使用 subprocess 在本地 shell 安全运行 git 命令
        res = subprocess.run(
            ["git"] + command.split(),
            capture_output=True,
            text=True,
            check=True
        )
        return res.stdout or "命令成功执行，但输出为空。"
    except subprocess.CalledProcessError as e:
        return f"Git 命令执行出错: {e.stderr}"

def run_test_suite() -> str:
    """自动运行项目的 vitest 测试套件，以验证代码的正确性。
    """
    try:
        # 执行 pnpm/npm 原生测试命令
        res = subprocess.run(
            ["npx", "vitest", "run"],
            capture_output=True,
            text=True,
            timeout=180 # 设置 3 分钟超时保护，防止死循环测试阻塞流水线
        )
        return res.stdout + "\n" + res.stderr
    except subprocess.TimeoutExpired:
        return "测试套件执行超时（180秒）。"
    except Exception as e:
        return f"运行测试时发生异常: {str(e)}"

def git_create_branch_and_commit(issue_id: str, commit_message: str) -> str:
    """为当前 Issue 自动创建专属的 Git 修复分支，并将本地所有修改暂存并提交。

    Args:
        issue_id: Issue 的数字 ID（如 '3396'），用于生成分支名。
        commit_message: 符合 Angular 规范的 commit 信息（如 'fix(datepicker): solve range bounds'）。
    """
    branch_name = f"fix/issue-{issue_id}"
    try:
        # 1. 检出并创建新分支
        subprocess.run(["git", "checkout", "-b", branch_name], check=True)
        # 2. 将所有本地改动加入暂存区
        subprocess.run(["git", "add", "."], check=True)
        # 3. 提交代码
        subprocess.run(["git", "commit", "-m", commit_message], check=True)
        return f"成功创建分支 {branch_name} 并提交了修复代码。"
    except subprocess.CalledProcessError as e:
        return f"创建分支或提交时发生错误: {e.stderr or str(e)}"

# ==============================================================================
# 3. 主逻辑控制 (Agent 启动与交互)
# ==============================================================================
async def main():
    # 从环境变量中动态获取 Issue 详细信息（在 CI/CD 中通过 GitHub Webhook 注入）
    issue_id = os.environ.get("ISSUE_ID", "3396")
    issue_title = os.environ.get("ISSUE_TITLE", "DatePicker type time range boundary bug")
    issue_body = os.environ.get("ISSUE_BODY", "DatePicker fails to calculate minutes range for restricted hours under time/hour-minutes mode.")
    
    # 鉴权检查：必须提供 GEMINI_API_KEY 以便调用 Gemini 模型进行推理与编写代码
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("错误：缺少 GEMINI_API_KEY 环境变量。")
        print("请前往 Google AI Studio 申请密钥并配置到环境中: https://aistudio.google.com/app/api-keys")
        sys.exit(1)

    print(f"🚀 正在启动 Antigravity 智能 Agent 来自动修复 Issue #{issue_id}...")
    
    # 1. 实例化 AgentConfig
    # 配置 Agent 的能力矩阵、系统设定（System Instructions）、外部工具和期望的返回 schema
    config = LocalAgentConfig(
        model="gemini-3.5-flash", # 使用最新的 Gemini 3.5 Flash 高性能模型
        api_key=api_key,
        system_instructions=(
            "你是一个受雇于 NutUI-React 项目的资深 AI 自主开发专家。\n"
            "你的任务是阅读并分析给出的 GitHub Issue，定位 Bug 所在的文件，进行代码修改，"
            "运行测试用例确认无误，并使用 git 工具在本地提交代码。\n\n"
            "必须严格遵守的 NutUI 规范：\n"
            "1. NutUI 是一码双端（H5 和 Taro）架构。任何对 .tsx 的修改，必须同步对齐修改 .taro.tsx！\n"
            "2. 禁止在样式文件（.scss）中使用任何硬编码颜色或魔法值，必须使用带有 Fallback 默认值的 CSS 变量。\n"
            "3. 修改完代码后，必须通过运行 run_test_suite() 进行自动化测试拦截，有错必改。\n"
            "4. 提交时请使用 git_create_branch_and_commit 进行本地分支提交。"
        ),
        tools=[
            run_git_command,
            run_test_suite,
            git_create_branch_and_commit
        ],
        response_schema=FixSummary, # 设定结构化输出格式
        capabilities=types.CapabilitiesConfig(
            enable_subagents=True  # 允许主 Agent 孵化专有 Subagent（如生成单测、重构样式的专职 Agent）
        )
    )

    # 2. 启动 Agent 对话上下文
    async with Agent(config=config) as agent:
        # 组装 prompt，给 Agent 下达多步骤的指令
        prompt = (
            f"以下是待解决的 Issue 详细情况：\n"
            f"ID: {issue_id}\n"
            f"标题: {issue_title}\n"
            f"详情: {issue_body}\n\n"
            f"请按照以下任务流执行修复：\n"
            f"1. 检索 codebase 寻找与该组件相关的代码文件。\n"
            f"2. 对源码进行修复，解决 Issue 描述的问题。\n"
            f"3. 运行测试套件（run_test_suite），如果测试失败，继续分析并修正，直到全部测试通过。\n"
            f"4. 使用提供的 git 工具创建分支并提交代码。\n"
            f"5. 输出最终的修复总结 JSON。"
        )

        # 唤醒 Agent 执行自动编写、分析、测试和提交的一体化 Turn
        response = await agent.chat(prompt)
        
        # 3. 提取结构化结果
        data = await response.structured_output()
        print("\n✨ Agent 执行完成！结构化修复总结如下：")
        import json
        print(json.dumps(data, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    # 使用 asyncio 异步驱动 Agent 的事件循环
    asyncio.run(main())
