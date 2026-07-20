# CLI

本篇介绍如何使用 `@nutui/nutui-react-cli` 从命令行查询 NutUI-React 的组件知识。

## 什么是 NutUI-React CLI？

[@nutui/nutui-react-cli](https://www.npmjs.com/package/@nutui/nutui-react-cli) 是面向 AI Coding 的 **NutUI-React 离线知识查询 CLI**。它把组件的 Props、文档、示例与 Design Token 打包随包分发，让 AI 编程助手（Claude Code / Cursor / Copilot 等）从「猜 API」变成「查 API」，从根源消除 API 幻觉。

## 亮点

- **完全离线、零 API Key** — 组件元数据与文档、示例在构建期打包进入，安装后本地毫秒级查询，无网络请求、无延迟。
- **结构化输出** — 所有命令支持 `--format json`，供 Agent 直接解析，而非正则抓文本。
- **智能纠错** — 组件名大小写不敏感；输入 `Buttn`？CLI 基于编辑距离建议 `Button`，而非直接报错。
- **双语文档** — `doc` 命令支持 `--lang zh|en` 切换中英文。

## 安装

```bash
npm install -g @nutui/nutui-react-cli
```

需要 Node.js `>=18.12.0`。也可以免安装，用 `npx` 直接调用（推荐，始终使用最新版）：

```bash
npx @nutui/nutui-react-cli list
npx @nutui/nutui-react-cli info Button
```

全局安装后使用 `nutui-react` 命令：

```bash
nutui-react info Button --format json
```

## 快速开始

```bash
nutui-react list                     # 列出全部组件（按分类）
nutui-react list --category feedback # 按分类筛选
nutui-react info Button              # 组件 Props 表（属性 / 说明 / 类型 / 默认值）
nutui-react doc Button               # 组件完整 Markdown 文档（默认中文）
nutui-react doc Button --lang en     # 英文文档
nutui-react demo Button              # 列出组件的全部 H5 示例名
nutui-react demo Button demo1        # 查看某个示例的源码
nutui-react token                    # 全局 Design Token
nutui-react token Button             # 组件级 Design Token
nutui-react mcp                      # 启动本地 MCP 服务，供 IDE 集成
```

## 命令

| 命令 | 说明 |
| --- | --- |
| `nutui-react list [--category <enName>]` | 列出全部组件（英文名 / 中文名 / 分类 / 版本），可按分类英文名筛选（如 `base` / `feedback`） |
| `nutui-react info <Component>` | 组件 Props 表，按表格分组（属性 / 说明 / 类型 / 默认值） |
| `nutui-react doc <Component> [--lang zh\|en]` | 组件完整 Markdown 文档，默认中文 |
| `nutui-react demo <Component> [name]` | 省略 `name` 列出全部示例；指定 `name`（如 `demo1`）输出源码 |
| `nutui-react token [Component]` | Design Token；省略组件名则列出全局 token |
| `nutui-react mcp` | 启动本地 MCP 服务（stdio），供 Claude Code / Cursor / VS Code / Codex 等 IDE 集成 |

未命中组件名时，CLI 会给出「你是否想找」建议（如 `Buttn` → `Button`），据此纠正而非凭空猜测。

## 全局参数

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `--format, -f <text\|json>` | 输出格式；Agent 应优先用 `json` | `text` |
| `--lang, -l <zh\|en>` | 文档语言（用于 `doc` / `mcp`） | `zh` |
| `--help, -h` | 显示帮助 | - |
| `--version, -v` | 打印 CLI 版本号 | - |

## 在 AI 工具中使用

CLI 内置一份遵循 [Agent Skills](https://github.com/vercel-labs/skills) 规范的 Skill 文件，随 npm 包分发，指导 Agent 在正确的时机调用正确的命令——例如「写组件前先 `info` 查 Props、再 `demo` 拿示例」「定制样式用 `var(--nutui-*)` token 而非硬编码颜色」。

安装到当前项目（skill 已随包 bundle，装好 CLI 后从本地路径安装）：

```bash
npm i -D @nutui/nutui-react-cli
npx skills add ./node_modules/@nutui/nutui-react-cli/skills/nutui-react
```

安装后，Agent 在遇到 NutUI-React 相关任务时会自动遵循「先查后写」的流程。兼容 Claude Code / Cursor / VS Code / Codex 等所有支持 skills 协议的 Agent。

如果你的 IDE 支持 MCP，CLI 也能作为 MCP 服务运行，把同一份能力注册成 IDE 原生工具，详见 [MCP Server](/#/zh-CN/ai/mcp) 指南。

## 了解更多

- [MCP Server](/#/zh-CN/ai/mcp)
- [LLMs.txt](/#/zh-CN/ai/llms)
- [For Agents](/#/zh-CN/ai/for-agents)
