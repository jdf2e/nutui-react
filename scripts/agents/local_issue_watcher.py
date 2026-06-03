import os
import sys
import time
import subprocess
import urllib.request
import json

# ==============================================================================
# 配置参数
# ==============================================================================
# 您需要监控的 GitHub 仓库信息
REPO_OWNER = "jdf2e"
REPO_NAME = "nutui-react"
# 触发修复的标签
TRIGGER_LABEL = "auto-fix"
# 成功或失败后，移除触发标签，以防重复运行
PROCESSED_LABEL = "auto-fix-processing"

def get_headers():
    token = os.environ.get("GITHUB_TOKEN")
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "NutUI-Local-Agent-Watcher"
    }
    if token:
        headers["Authorization"] = f"token {token}"
    return headers

def fetch_issues_with_label():
    """从 GitHub API 获取带特定标签的 Open Issues"""
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues?labels={TRIGGER_LABEL}&state=open"
    req = urllib.request.Request(url, headers=get_headers())
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                return json.loads(response.read().decode())
    except Exception as e:
        print(f"❌ 获取 GitHub Issues 失败: {str(e)}")
        # 如果是 403，通常是没有配额了，需要配置 GITHUB_TOKEN
        if "403" in str(e):
            print("💡 提示：请在本地配置 export GITHUB_TOKEN='您的GitHub_PAT' 来解锁更高的 GitHub API 配额。")
    return []

def remove_label_and_comment(issue_number, comment_text):
    """移除触发标签，并给 Issue 留下一条处理总结的评论"""
    token = os.environ.get("GITHUB_TOKEN")
    if not token:
        print("⚠️ 未配置 GITHUB_TOKEN，无法自动在 GitHub 上移除标签或留评。")
        return

    # 1. 留评
    comment_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues/{issue_number}/comments"
    comment_data = json.dumps({"body": comment_text}).encode('utf-8')
    req_comment = urllib.request.Request(comment_url, data=comment_data, headers=get_headers(), method="POST")
    
    # 2. 移除标签
    label_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues/{issue_number}/labels/{TRIGGER_LABEL}"
    req_label = urllib.request.Request(label_url, headers=get_headers(), method="DELETE")

    try:
        urllib.request.urlopen(req_comment)
        urllib.request.urlopen(req_label)
        print(f"✅ 已为 Issue #{issue_number} 移除标签并发表了评论回复。")
    except Exception as e:
        print(f"❌ 更新 Issue 状态失败: {str(e)}")

def process_issue(issue):
    issue_number = issue["number"]
    issue_title = issue["title"]
    issue_body = issue["body"] or "无详细内容描述。"
    
    print(f"\n🔔 检测到需要修复的 Issue #{issue_number}: {issue_title}")
    
    # 1. 设置环境变量，方便子进程（Agent 脚本）读取
    env = os.environ.copy()
    env["ISSUE_ID"] = str(issue_number)
    env["ISSUE_TITLE"] = issue_title
    env["ISSUE_BODY"] = issue_body
    
    # 2. 调用我们之前写好的 issue_resolver.py Agent 脚本进行本地分析与修改
    print(f"🛠️ 正在启动本地 AI Agent 解决此问题，请稍候...")
    try:
        # 执行脚本并在终端输出 stdout
        res = subprocess.run(
            [sys.executable, "scripts/agents/issue_resolver.py"],
            env=env,
            capture_output=True,
            text=True
        )
        print(res.stdout)
        
        if res.returncode != 0:
            print(f"❌ Agent 运行失败 (退出码: {res.returncode}):\n{res.stderr}")
            remove_label_and_comment(issue_number, f"❌ 本地 AI Agent 尝试修复时发生错误，请检查本地日志。\n报错详情：\n```\n{res.stderr}\n```")
            return

        # 3. 推送本地 Agent 生成的修复分支
        branch_name = f"fix/issue-{issue_number}"
        print(f"📤 Agent 修复完毕，正在推送本地分支 {branch_name} 到远程仓库...")
        subprocess.run(["git", "push", "origin", branch_name, "--force"], check=True)
        
        # 4. 创建 GitHub Pull Request
        print(f"🔀 正在尝试自动创建 PR...")
        # 如果本地配置了 gh 命令行，优先使用 gh
        try:
            subprocess.run([
                "gh", "pr", "create",
                "--title", f"fix: automatically resolved issue #{issue_number}",
                "--body", f"This PR was generated automatically by the local Antigravity Issue Resolver Agent. Closes #{issue_number}",
                "--head", branch_name
            ], check=True)
            comment_msg = f"🎉 本地 AI Agent 已成功修复此问题并创建了 PR！分支名：`{branch_name}`。"
        except Exception:
            # 如果没有安装 gh，提示用户手动创建
            comment_msg = (
                f"🎉 本地 AI Agent 已成功修复此问题并推送了分支 `{branch_name}` 到 GitHub。\n"
                f"👉 请手动访问此链接创建 PR：https://github.com/{REPO_OWNER}/{REPO_NAME}/pull/new/{branch_name}"
            )
            
        print(comment_msg)
        # 5. 更新 GitHub 上的标签和状态
        remove_label_and_comment(issue_number, comment_msg)
        
    except Exception as e:
        print(f"❌ 修复流程中断: {str(e)}")

def watch_loop():
    print(f"👀 本地 Issue 监听器已启动（监听仓库: {REPO_OWNER}/{REPO_NAME}，触发标签: {TRIGGER_LABEL}）...")
    print("按下 Ctrl+C 可停止运行。")
    
    # 鉴权环境变量检查说明
    if not os.environ.get("GEMINI_API_KEY"):
        print("⚠️ 警告：未检测到 GEMINI_API_KEY 环境变量，Agent 执行可能会失败。")
        
    while True:
        issues = fetch_issues_with_label()
        if issues:
            print(f"🎯 发现 {len(issues)} 个待修复的 Issue，准备开始处理...")
            for issue in issues:
                process_issue(issue)
        else:
            # 终端打印心跳以示正常运行
            print(".", end="", flush=True)
            
        # 每隔 60 秒轮询一次 GitHub 接口
        time.sleep(60)

if __name__ == "__main__":
    try:
        watch_loop()
    except KeyboardInterrupt:
        print("\n👋 监听已退出。")
        sys.exit(0)
