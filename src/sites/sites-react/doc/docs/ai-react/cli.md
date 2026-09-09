# CLI

本篇介绍如何使用 `@nutui/nutui-react-cli` 从命令行查询 NutUI-React 的组件知识。

## 什么是 NutUI-React CLI？

[@nutui/nutui-react-cli](https://www.npmjs.com/package/@nutui/nutui-react-cli) 是面向 AI Coding 的 **NutUI-React 离线知识查询 CLI**。它把组件的 Props、文档、示例与 Design Token 打包随包分发，让 AI 编程助手（Claude Code / Cursor / Copilot 等）从「猜 API」变成「查 API」，从根源消除 API 幻觉。

## 亮点

- **完全离线、零 API Key** — 组件元数据与文档、示例在构建期打包进入，安装后本地毫秒级查询，无网络请求、无延迟。
- **多版本快照** — 随包内置 v3 / v4 多个大版本的离线快照，`--nutui-version` 可查询任意版本的精确 API，未指定时自动检测项目所用版本。
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
nutui-react --nv 3.1.0 info Button   # 查指定 NutUI 版本的 API（省略则自动检测）
nutui-react migrate 3 4 --apply ./src # 扫描项目并生成 v3 → v4 迁移提示
nutui-react diff 3 4 Empty           # 对比 Empty 在 v3 / v4 的 Props 差异
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
| `nutui-react migrate [from] [to]` | 输出大版本迁移指南（默认 `3 4`）；支持 `--component <Component>` 查看单组件，或 `--apply <dir>` 扫描项目并生成迁移提示 |
| `nutui-react diff <v1> <v2> [Component]` | 对比两个版本快照的 Props 差异，包括新增、移除、类型和默认值变更 |
| `nutui-react mcp` | 启动本地 MCP 服务（stdio），供 Claude Code / Cursor / VS Code / Codex 等 IDE 集成 |

未命中组件名时，CLI 会给出「你是否想找」建议（如 `Buttn` → `Button`），据此纠正而非凭空猜测。

## 全局参数

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `--format, -f <text\|json>` | 输出格式；Agent 应优先用 `json` | `text` |
| `--nutui-version, --nv <version>` | 目标 NutUI 版本（如 `3`、`3.1.0`、`4.0.0-beta.7`） | 自动检测 |
| `--lang, -l <zh\|en>` | 文档语言（用于 `doc` / `mcp`） | `zh` |
| `--help, -h` | 显示帮助 | - |
| `--version, -v` | 打印 CLI 自身版本号（非 NutUI 版本） | - |

## 多版本

CLI 随包内置多个 NutUI 大版本的离线快照（当前：`v3.0.20`、`v3.1.0`、`v4.0.0-beta.7`），可对同一台机器上不同 NutUI 版本给出对应的组件知识。用 `--nutui-version`（别名 `--nv`）指定目标版本，支持 `3`、`3.1.0`、`4.0.0-beta.7` 等写法：

```bash
nutui-react --nv 3.1.0 info Button      # 查 3.1.0 的 Button Props
nutui-react --nv 3 list                 # 查 v3 最新快照
nutui-react --nv 4.0.0-beta.7 doc Cell
```

未指定 `--nutui-version` 时，按以下顺序**自动检测**目标版本：

1. `--nutui-version <v>` 显式指定；
2. 项目 `node_modules/@nutui/nutui-react/package.json` 的实际安装版本；
3. 项目 `package.json` 的 `dependencies` / `devDependencies` / `peerDependencies` 声明（兼容 `^3.1.0`、`~3.1.0` 等）；
4. 兜底到默认大版本（`v4`）的 latest。

版本路由按 `major.minor` 粒度：请求 `3.0.5` 会落到该 minor 系列的最高 patch 快照 `v3.0.20`；请求的 minor 若高于已有，回退到该 major 最近的旧 minor。每次查询的输出都会标明实际命中的版本与来源（`text` 输出的头部、`json` 输出的 `_meta` 字段）。

> 在项目里能自动推断版本时，优先不显式传 `--nutui-version`，让 CLI 自行检测更省心。`-v / --version` 语义保持不变，仍输出 CLI 自身版本。

## v3 → v4 迁移

`migrate` 与 `diff` 都基于随 CLI 分发的离线数据，但用途不同：

- `migrate` 读取官方迁移文档，说明为什么改、怎么改，并覆盖样式、CSS 类名和 Design Token 等 Props 表之外的变化。
- `diff` 实时比较两个版本快照，精确列出 Props 的新增、移除、类型和默认值变化。

推荐先扫描项目，再逐组件核对：

```bash
nutui-react migrate 3 4 --apply ./src --format json
nutui-react migrate 3 4 --component Empty --format json
nutui-react diff 3 4 Empty --format json
```

`--apply` 只扫描源码并输出项目实际使用组件的迁移步骤与 Agent 提示，**不会自动修改文件**。输出中的 `matchedComponents` 是需要重点处理的组件，`componentsWithoutBreakingChanges` 是已使用但当前迁移文档未记录破坏性变更的组件。

完整升级流程可安装 [nutui-react-v3-to-v4 Skill](/#/zh-CN/ai/skill)，由 Agent 按「升级依赖 → 扫描盘点 → 逐组件改写 → 构建与视觉验证」执行。

## 在 AI 工具中使用

CLI 随 npm 包分发遵循 [Agent Skills](https://github.com/vercel-labs/skills) 规范的 Skill，分别覆盖组件开发与 v3 → v4 升级流程，指导 Agent 在正确的时机调用正确的命令。

安装到当前项目（从 GitHub 仓库直接安装）：

```bash
npx skills add jdf2e/nutui-react --skill nutui-react
```

安装后，Agent 在遇到 NutUI-React 相关任务时会自动遵循「先查后写」的流程。兼容 Claude Code / Cursor / VS Code / Codex 等所有支持 skills 协议的 Agent。

如果你的 IDE 支持 MCP，CLI 也能作为 MCP 服务运行，把同一份能力注册成 IDE 原生工具，详见 [MCP Server](/#/zh-CN/ai/mcp) 指南。

## 了解更多

- [Skill](/#/zh-CN/ai/skill)
- [MCP Server](/#/zh-CN/ai/mcp)
- [LLMs.txt](/#/zh-CN/ai/llms)
- [For Agents](/#/zh-CN/ai/for-agents)
