---
name: nutui-react
description: >
  当用户的任务涉及 NutUI React（@nutui/nutui-react）时使用 —— 编写
  NutUI React 组件、调试 NutUI 问题，或查询 NutUI 组件的
  API/属性/文档/示例/设计变量（Design Token）。触发场景：与 NutUI 相关的代码、
  从 '@nutui/nutui-react' 导入，或明确的 NutUI 相关提问。NutUI React 是京东的
  轻量级移动端（H5）组件库。
allowed-tools:
  - Bash(nutui-react *)
  - Bash(npx -y @nutui/nutui-react-cli *)
  - Bash(which nutui-react)
---

# NutUI React CLI

你可以使用 `@nutui/nutui-react-cli` —— 一个内置了 NutUI React 元数据（组件属性、完整文档、可运行示例和 Design Token）的本地 CLI 工具。在编写代码前用它查询组件知识。所有数据均为离线数据并随 CLI 一起打包 —— 无需联网，也无需 API Key。

## 准备工作

首次使用前，先检查该 CLI 是否可用。若不可用，可通过 `npx` 调用（无需全局安装）：

```bash
which nutui-react || echo "use: npx -y @nutui/nutui-react-cli <command>"
```

两种方式均可 —— 用哪种取决于哪种可用：

- 全局安装：`nutui-react info Button`
- 通过 npx（免安装）：`npx -y @nutui/nutui-react-cli info Button`

下文示例为简洁起见统一使用 `nutui-react` 形式。

**始终传入 `--format json` 以获得可编程解析的结构化输出**（默认输出为人类可读的 `text`）。

## 使用场景

### 1. 编写 NutUI React 组件代码

在编写任何 NutUI 组件代码前，先查询它的 API —— 不要依赖记忆。

```bash
# 查看有哪些可用属性(按表格分组,例如 Props / 子组件属性)
nutui-react info Button --format json

# 获取一个可运行的示例作为起点
nutui-react demo Button          # 先列出所有示例名称
nutui-react demo Button demo1 --format json   # 再获取某个示例的源码

# 查看组件级 Design Token 以便主题定制(var(--nutui-*) 体系)
nutui-react token Button --format json
```

**工作流：** `nutui-react info` → 理解属性 → `nutui-react demo` → 获取可运行示例 → 编写代码。

### 2. 查阅完整文档

当你需要完整的组件文档（而不仅仅是属性表）时：

```bash
nutui-react doc Cell --format json          # 完整的 Markdown 文档(默认中文)
nutui-react doc Cell --lang en --format json  # 英文文档
```

`--lang` 可取 `zh`（默认）或 `en`。

### 3. 浏览可用组件

当用户在挑选使用哪个组件，或你需要在导入前确认某个组件是否存在时：

```bash
# 列出所有组件(含中文名与版本),按分类分组
nutui-react list --format json

# 按分类筛选(传入分类的英文名,例如 base / feedback / nav)
nutui-react list --category feedback --format json
```

如果你查询的组件名称不存在，CLI 会返回「你是不是想找」的建议（例如 `Buttn` → `Button`）—— 用它来纠正名称，而不是靠猜。

### 4. 查询 Design Token

在定制主题/颜色/间距时，使用 `var(--nutui-*)` 变量体系，而不是硬编码具体数值：

```bash
# 全局 Token(颜色、间距、圆角等)
nutui-react token --format json

# 组件级 Token
nutui-react token Button --format json
```

### 5. 作为 MCP 服务器使用

如果你在支持 MCP 的 IDE（Claude Code、Cursor、VS Code、Codex 等）中工作，该 CLI 可以作为本地 stdio MCP 服务器运行，以 IDE 原生工具的形式暴露相同的知识查询能力：

```json
{
  "mcpServers": {
    "nutui-react": {
      "command": "npx",
      "args": ["-y", "@nutui/nutui-react-cli", "mcp"]
    }
  }
}
```

它通过 MCP 协议提供 5 个工具（`nutui_list`、`nutui_info`、`nutui_doc`、`nutui_demo`、`nutui_token`）和 2 个提示词（`nutui-expert`、`nutui-page-generator`）。当这些工具在对话中可用时，优先直接调用它们，而不是通过 shell 执行 CLI。

## 命令

| 命令 | 用途 |
| --- | --- |
| `nutui-react list [--category <enName>]` | 列出所有组件（名称 / 中文名 / 版本），按分类分组 |
| `nutui-react info <Component>` | 组件属性表（属性 / 说明 / 类型 / 默认值），按表格分组 |
| `nutui-react doc <Component> [--lang zh\|en]` | 组件完整 Markdown 文档（默认中文） |
| `nutui-react demo <Component> [name]` | 省略 `name` 列出示例；传入 `name`（如 `demo1`）获取源码 |
| `nutui-react token [Component]` | Design Token —— 省略组件名则返回全局 Token |

## 全局参数

| 参数 | 用途 |
| --- | --- |
| `--format, -f <text\|json>` | 输出格式；agent 应优先使用 `json`（默认：`text`） |
| `--lang, -l <zh\|en>` | `doc` / `mcp` 的文档语言（默认：`zh`） |
| `--help, -h` | 显示帮助 |
| `--version, -v` | 打印 CLI 版本 |

## 核心规则

1. **先查询，再编写** —— 不要凭记忆猜测 NutUI 的 API、属性名或枚举值。先运行 `nutui-react info`（并用 `nutui-react demo` 获取一个可用示例）。
2. **使用 `--format json`** —— 每个命令都支持它。解析 JSON 输出，而不是用正则匹配人类可读的文本。
3. **确认组件存在** —— 如果不确定确切名称，运行 `nutui-react list`，或借助 CLI 的「你是不是想找」建议，而不是导入一个猜测的名称。
4. **使用 Design Token 做样式** —— NutUI 采用 `nut-` 扁平 BEM 类名和 `var(--nutui-*)` 变量体系。定制外观时，查询 `nutui-react token` 并使用 Token，而不是硬编码颜色或间距。
