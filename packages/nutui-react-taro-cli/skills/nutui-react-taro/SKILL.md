---
name: nutui-react-taro
description: >
  当用户的任务涉及 NutUI React Taro（@nutui/nutui-react-taro）时使用 ——
  为小程序 / 跨端（Taro）应用编写 NutUI React Taro 组件、调试 NutUI Taro
  问题，或查询 NutUI Taro 组件的 API/属性/文档/示例/设计变量（Design Token）。
  触发场景：与 NutUI Taro 相关的代码、从 '@nutui/nutui-react-taro' 导入，或
  明确的 NutUI Taro 相关提问。NutUI React Taro 是京东面向 Taro（小程序 /
  多端）的移动端组件库，一套代码同时支持 H5 与小程序。
allowed-tools:
  - Bash(nutui-react-taro *)
  - Bash(npx -y @nutui/nutui-react-taro-cli *)
  - Bash(which nutui-react-taro)
---

# NutUI React Taro CLI

你可以使用 `@nutui/nutui-react-taro-cli` —— 一个内置了 NutUI React Taro 元数据（组件属性、完整文档、可运行的 Taro 示例和 Design Token）的本地 CLI 工具。在编写代码前用它查询组件知识。所有数据均为离线数据并随 CLI 一起打包 —— 无需联网，也无需 API Key。

## 准备工作

首次使用前，先检查该 CLI 是否可用。若不可用，可通过 `npx` 调用（无需全局安装）：

```bash
which nutui-react-taro || echo "use: npx -y @nutui/nutui-react-taro-cli <command>"
```

两种方式均可 —— 用哪种取决于哪种可用：

- 全局安装：`nutui-react-taro info Button`
- 通过 npx（免安装）：`npx -y @nutui/nutui-react-taro-cli info Button`

下文示例为简洁起见统一使用 `nutui-react-taro` 形式。

**始终传入 `--format json` 以获得可编程解析的结构化输出**（默认输出为人类可读的 `text`）。

## 使用场景

### 1. 编写 NutUI React Taro 组件代码

在编写任何 NutUI Taro 组件代码前，先查询它的 API —— 不要依赖记忆。注意：Taro 端的属性可能与 H5 包不同。

```bash
# 查看有哪些可用属性(按表格分组,例如 Props / 子组件属性)
nutui-react-taro info Button --format json

# 获取一个可运行的 Taro 示例作为起点
nutui-react-taro demo Button          # 先列出所有示例名称
nutui-react-taro demo Button demo1 --format json   # 再获取某个示例的源码

# 查看组件级 Design Token 以便主题定制(var(--nutui-*) 体系)
nutui-react-taro token Button --format json
```

**工作流：** `nutui-react-taro info` → 理解属性 → `nutui-react-taro demo` → 获取可运行示例 → 编写代码。

### 2. 查阅完整文档

当你需要完整的组件文档（而不仅仅是属性表）时：

```bash
nutui-react-taro doc Cell --format json          # 完整的 Markdown 文档(中文)
```

Taro 文档仅提供中文。

### 3. 浏览可用组件

当用户在挑选使用哪个组件，或你需要在导入前确认某个组件是否存在时：

```bash
# 列出所有组件(含中文名与版本),按分类分组
nutui-react-taro list --format json

# 按分类筛选(传入分类的英文名,例如 base / feedback / nav)
nutui-react-taro list --category feedback --format json
```

如果你查询的组件名称不存在，CLI 会返回「你是不是想找」的建议（例如 `Buttn` → `Button`）—— 用它来纠正名称，而不是靠猜。

### 4. 查询 Design Token

在定制主题/颜色/间距时，使用 `var(--nutui-*)` 变量体系，而不是硬编码具体数值：

```bash
# 全局 Token(颜色、间距、圆角等)
nutui-react-taro token --format json

# 组件级 Token
nutui-react-taro token Button --format json
```

### 5. 作为 MCP 服务器使用

如果你在支持 MCP 的 IDE（Claude Code、Cursor、VS Code、Codex 等）中工作，该 CLI 可以作为本地 stdio MCP 服务器运行，以 IDE 原生工具的形式暴露相同的知识查询能力：

```json
{
  "mcpServers": {
    "nutui-react-taro": {
      "command": "npx",
      "args": ["-y", "@nutui/nutui-react-taro-cli", "mcp"]
    }
  }
}
```

它通过 MCP 协议提供 5 个工具（`nutui_list`、`nutui_info`、`nutui_doc`、`nutui_demo`、`nutui_token`）和 2 个提示词（`nutui-expert`、`nutui-page-generator`）。当这些工具在对话中可用时，优先直接调用它们，而不是通过 shell 执行 CLI。

## 命令

| 命令 | 用途 |
| --- | --- |
| `nutui-react-taro list [--category <enName>]` | 列出所有组件（名称 / 中文名 / 版本），按分类分组 |
| `nutui-react-taro info <Component>` | 组件属性表（属性 / 说明 / 类型 / 默认值），按表格分组 |
| `nutui-react-taro doc <Component>` | 组件完整 Markdown 文档（中文） |
| `nutui-react-taro demo <Component> [name]` | 省略 `name` 列出示例；传入 `name`（如 `demo1`）获取源码 |
| `nutui-react-taro token [Component]` | Design Token —— 省略组件名则返回全局 Token |
| `nutui-react-taro mcp` | 启动本地 stdio MCP 服务器，供 IDE 集成 |

## 全局参数

| 参数 | 用途 |
| --- | --- |
| `--format, -f <text\|json>` | 输出格式；agent 应优先使用 `json`（默认：`text`） |
| `--help, -h` | 显示帮助 |
| `--version, -v` | 打印 CLI 版本 |

## 核心规则

1. **先查询，再编写** —— 不要凭记忆猜测 NutUI Taro 的 API、属性名或枚举值。先运行 `nutui-react-taro info`（并用 `nutui-react-taro demo` 获取一个可用示例）。Taro 属性可能与 H5 包不同。
2. **使用 `--format json`** —— 每个命令都支持它。解析 JSON 输出，而不是用正则匹配人类可读的文本。
3. **确认组件存在** —— 如果不确定确切名称，运行 `nutui-react-taro list`，或借助 CLI 的「你是不是想找」建议，而不是导入一个猜测的名称。
4. **使用 Design Token 做样式** —— NutUI 采用 `nut-` 扁平 BEM 类名和 `var(--nutui-*)` 变量体系。定制外观时，查询 `nutui-react-taro token` 并使用 Token，而不是硬编码颜色或间距。
5. **从 `@nutui/nutui-react-taro` 导入** —— 不是 `@nutui/nutui-react`。这是 Taro（小程序 / 跨端）包。
