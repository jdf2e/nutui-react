# Skill

本篇介绍 NutUI-React Taro 的两个 Agent Skill，以及它们各自解决的问题与安装方式。

## 什么是 Skill？

[Skill](https://github.com/vercel-labs/skills) 是一份遵循 Agent Skills 规范的说明文件。CLI 与 MCP 提供查询、迁移和差异对比能力，Skill 则约束 Agent 在什么时机、按什么顺序使用这些能力。

目前提供两个 Skill：

| Skill | 用途 |
| --- | --- |
| `nutui-react-taro` | 写 NutUI-React Taro 代码时「先查后写」，消除 API 幻觉 |
| `nutui-react-taro-v3-to-v4` | 将 `@nutui/nutui-react-taro` 从 v3 系统升级到 v4 |

## nutui-react-taro — 先查后写

指导 Agent 在编写 NutUI-React Taro 组件代码前，先通过 CLI 或 MCP 查询真实 API 与 Taro 示例，而不是沿用 H5 API 或凭记忆猜测。

**它约束 Agent 的行为：**

- 写组件前先用 `nutui-react-taro info <Component>` 查询 Props，再用 `demo` 获取 Taro 示例。
- 用 `doc` 核对完整文档，用 `token` 获取 `var(--nutui-*)` Design Token。
- 不确定组件名时先用 `list` 确认，并优先使用 `--format json` 结构化输出。

**安装：**

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro
```

## nutui-react-taro-v3-to-v4 — 大版本升级

指导 Agent 使用新增的 `migrate` 与 `diff` 能力，把 `@nutui/nutui-react-taro` 从 v3 升级到 v4。该 Skill 特别关注不会触发编译错误的样式、CSS 类名、Design Token、枚举值和默认值变化。

**它编排的迁移流程：**

- 升级依赖前先征求用户确认，并核对锁文件与安装结果。
- 用 `nutui-react-taro migrate 3 4 --apply ./src --format json` 扫描项目，建立实际使用组件的迁移清单。
- 对每个命中的组件结合 `migrate --component` 与 `diff 3 4`，同时核对官方迁移说明和 Props 精确差异。
- 检查项目中针对 `.nut-*` 类名与 `--nutui-*` 变量的自定义样式覆盖。
- 在目标小程序、H5 或其他 Taro 端完成构建与视觉、交互验证；编译通过不等于迁移完成。

**安装：**

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro-v3-to-v4
```

## Skill 与 CLI / MCP 的关系

- **CLI** — Agent 主动运行命令查询知识、扫描项目或比较版本。
- **MCP** — 把同一份查询、迁移和差异对比能力注册成 IDE 原生工具，在对话中按需自动调用。
- **Skill** — 定义任务触发条件、执行顺序、修改边界和验证要求。

如果你的 IDE 支持 MCP，推荐同时启用 MCP 服务，让 Skill 中的查询和迁移步骤直接调用 IDE 原生工具。

## 了解更多

- [CLI](/#/zh-CN/ai/cli)
- [MCP Server](/#/zh-CN/ai/mcp)
- [For Agents](/#/zh-CN/ai/for-agents)
- [LLMs.txt](/#/zh-CN/ai/llms)
