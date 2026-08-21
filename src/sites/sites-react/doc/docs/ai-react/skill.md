# Skill

本篇介绍两个 NutUI-React Agent Skill，以及它们各自解决的问题与安装方式。

## 什么是 Skill？

[Skill](https://github.com/vercel-labs/skills) 是一份遵循 Agent Skills 规范的说明文件。CLI 与 MCP 提供的是「能力」（查 Props、查文档、拿示例、查 Design Token），而 Skill 约束 Agent「**在什么时机、按什么顺序**」使用这些能力——把「有工具」变成「会用工具」。

安装后，Agent 在遇到对应任务时会自动加载 Skill 并遵循其中的流程，无需你每次手动提示。兼容 Claude Code / Cursor / VS Code / Codex 等所有支持 skills 协议的 Agent。

目前提供两个 Skill：

| Skill | 用途 |
| --- | --- |
| `nutui-react` | 写 NutUI-React 代码时「先查后写」，消除 API 幻觉 |
| `nutui-react-to-taro` | 把 H5 项目从 `@nutui/nutui-react` 迁移到 `@nutui/nutui-react-taro`（Taro / 小程序） |

## `nutui-react` — 先查后写

指导 Agent 在写任何 NutUI-React 组件代码前，先用 CLI 查询真实 API，而非凭记忆猜测 Prop 或枚举值。

**它约束 Agent 的行为：**

- 写组件前先 `nutui-react info <Component>` 查 Props，再 `nutui-react demo <Component>` 拿一个可运行示例作为起点。
- 定制样式时用 `var(--nutui-*)` Design Token（`nutui-react token`），而非硬编码颜色与间距。
- 不确定组件名时先 `nutui-react list` 确认，或采纳 CLI 的「你是否想找」建议，而非导入猜测的名字。
- 所有查询优先用 `--format json`，解析结构化输出而非正则抓文本。

**安装：**

```bash
npm i -D @nutui/nutui-react-cli
npx skills add ./node_modules/@nutui/nutui-react-cli/skills/nutui-react
```

## `nutui-react-to-taro` — H5 迁移到 Taro

指导 Agent 把使用 `@nutui/nutui-react`（H5）的项目，迁移到 `@nutui/nutui-react-taro`（Taro 跨端 / 小程序）。两个包共用同一套组件，绝大多数组件一一对应，因此迁移高度规则化——Skill 负责把规则化改写与需要判断的语义改写编排成清晰流程。

**它编排的迁移流程：**

- **环境准备**：安装 `@nutui/nutui-react-taro`、`@tarojs/plugin-html` 等依赖，配置 `config/index.js` 的 `designWidth`，入口引入全局样式。
- **规则化改写**：包名 / import 替换（`@nutui/nutui-react` → `@nutui/nutui-react-taro`）、原生标签替换（`<div>` → `<View>`、`<img>` → `<Image>`）、样式单位修正、触摸事件类型补全。
- **交叉核对**：对每个组件同时调用 `nutui-react info` 与 `nutui-react-taro info` 对比两端 Props 差异（少数组件如 Uploader / Image 两端属性不同），避免盲目照搬导致小程序端失效。
- **语义改写与陷阱处理**：把 Web-only API（`document` / `window`）改写成 `@tarojs/taro` API；识别 `Audio` 组件在 Taro 端缺失、canvas 类组件需重写等需要人工判断的场景并标记出来。

> 该 Skill 会同时用到 `@nutui/nutui-react-taro-cli` 做目标端核对，通过 `npx -y @nutui/nutui-react-taro-cli` 免安装调用即可。

**安装：**

```bash
npm i -D @nutui/nutui-react-cli
npx skills add ./node_modules/@nutui/nutui-react-cli/skills/nutui-react-to-taro
```

## Skill 与 CLI / MCP 的关系

三者复用同一份离线知识，只是调用协议不同：

- **CLI** — Agent 主动敲命令查询。
- **MCP** — 把同一份能力注册成 IDE 原生工具，在对话中按需自动调用。
- **Skill** — 不提供新能力，而是告诉 Agent「何时、按什么顺序」调用 CLI / MCP，把流程固化下来。

如果你的 IDE 支持 MCP，推荐同时启用 MCP 服务，让 Skill 里的查询步骤自动走 IDE 原生工具。

## 了解更多

- [CLI](/#/zh-CN/ai/cli)
- [MCP Server](/#/zh-CN/ai/mcp)
- [For Agents](/#/zh-CN/ai/for-agents)
- [LLMs.txt](/#/zh-CN/ai/llms)
