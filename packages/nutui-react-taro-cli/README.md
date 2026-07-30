# @nutui/nutui-react-taro-cli

面向 AI Coding 的 **NutUI React Taro 离线知识查询 CLI**。把组件的 Props、文档、Taro 示例、Design Token 打包随包分发，让 AI 编程助手（Claude Code / Cursor / Copilot 等）从「猜 API」变成「查 API」，从根源消除 API 幻觉。

服务于 `@nutui/nutui-react-taro`（Taro 跨端 / 小程序场景）。H5 场景请使用 [@nutui/nutui-react-cli](../nutui-react-cli)。

## 特点

- **完全离线、零 API Key**：组件元数据与文档/示例在构建期打包进入，安装后本地毫秒级查询。
- **结构化输出**：所有命令支持 `--format json`，供 Agent 直接解析，而非正则抓文本。
- **拼写纠错**：组件名大小写不敏感，未命中时给出「你是否想找」建议。
- **Taro 端专属数据**：Props 与示例取自 Taro 端文档（`doc.taro.md` / `demos/taro`），与 H5 包可能不同。

## 使用

免安装（推荐）：

```bash
npx -y @nutui/nutui-react-taro-cli list
npx -y @nutui/nutui-react-taro-cli info Button
```

或全局安装后用 `nutui-react-taro` 命令：

```bash
npm i -g @nutui/nutui-react-taro-cli
nutui-react-taro info Button --format json
```

## 命令

| 命令 | 说明 |
| --- | --- |
| `nutui-react-taro list [--category <enName>]` | 按分类列出全部组件（名称 / 中文名 / 版本） |
| `nutui-react-taro info <Component>` | 查看组件 Props 表（属性 / 说明 / 类型 / 默认值） |
| `nutui-react-taro doc <Component>` | 查看组件完整文档（中文） |
| `nutui-react-taro demo <Component> [name]` | 省略 `name` 列出全部示例；指定 `name`（如 `demo1`）输出源码 |
| `nutui-react-taro token [Component]` | 查看 Design Token；省略组件名则列出全局 token |
| `nutui-react-taro mcp` | 启动本地 MCP 服务（stdio），供 Claude Code / Cursor / VS Code / Codex 等 IDE 调用 |

全局选项：`--format, -f <text\|json>`（默认 `text`）、`--help, -h`、`--version, -v`。

示例：

```bash
nutui-react-taro list --category feedback
nutui-react-taro info Button --format json
nutui-react-taro doc Button
nutui-react-taro demo Button          # 列出示例
nutui-react-taro demo Button demo1    # 查看某个示例源码
nutui-react-taro token Button
```

## MCP（IDE 集成）

CLI 是「Agent 主动敲命令」，MCP 则把同一份能力注册成 IDE 原生工具，让 Claude Code / Cursor / VS Code / Codex 在对话中**按需自动调用**，无需拼命令行字符串。二者复用同一份离线 meta 快照，等于给同一个知识库套了两种调用协议。

`nutui-react-taro mcp` 启动一个 stdio MCP 服务，暴露 5 个只读工具与 2 个提示词：

| 工具 | 说明 |
| --- | --- |
| `nutui_list` | 列出全部组件（可按分类筛选） |
| `nutui_info` | 组件 Props 规格 |
| `nutui_doc` | 组件完整文档（中文） |
| `nutui_demo` | Taro 示例列表 / 源码 |
| `nutui_token` | Design Token（全局 / 组件级） |

| 提示词 | 说明 |
| --- | --- |
| `nutui-expert` | 把 Agent 定位为 NutUI React Taro 专家（先查后写） |
| `nutui-page-generator` | 基于组件生成完整可运行页面 |

### 客户端配置

**Claude Code**（`.mcp.json` 或 `claude mcp add`）、**Cursor**（`.cursor/mcp.json`）、**VS Code**（`.vscode/mcp.json` 的 `servers` 字段）通用配置：

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

**Codex**（`~/.codex/config.toml`）：

```toml
[mcp_servers.nutui-react-taro]
command = "npx"
args = ["-y", "@nutui/nutui-react-taro-cli", "mcp"]
```

> `npx -y` 免全局安装即可拉起；也可全局安装后把 `command` 换成 `nutui-react-taro`、`args` 换成 `["mcp"]`。

## CLI 内 Skill（教 Agent 何时用）

CLI 内置一份 [Skill 文件](./skills/nutui-react-taro/SKILL.md)（遵循 Anthropic Agent Skills 规范），随 npm 包一起分发。CLI / MCP 提供的是「能力」，Skill 则约束 Agent「**什么时候、按什么顺序**」用这些能力——例如「写组件前先 `nutui-react-taro info` 查 Props、再 `nutui-react-taro demo` 拿示例」「定制样式用 `var(--nutui-*)` token 而非硬编码颜色」。

安装（skill 已随包 bundle，装好 CLI 后从本地路径装进当前项目）：

```bash
npm i -D @nutui/nutui-react-taro-cli
npx skills add ./node_modules/@nutui/nutui-react-taro-cli/skills/nutui-react-taro
```

兼容 Claude Code / Cursor / VS Code / Codex 等所有支持 [skills](https://github.com/vercel-labs/skills) 协议的 Agent。安装后，Agent 在遇到 NutUI React Taro 相关任务时会自动遵循「先查后写」的流程。

## 本地开发

```bash
# 本包：构建（build 会先自动 generate:meta 再 prepare-data + tsup）
pnpm --dir packages/nutui-react-taro-cli build
# 本地试跑
node packages/nutui-react-taro-cli/dist/cli.js list
```

## 发布

```bash
# 发布 beta（bumpp 选版本 -> prepublishOnly 跑 build -> pnpm publish --tag beta）
pnpm --dir packages/nutui-react-taro-cli release:beta
# 或发布正式版
pnpm --dir packages/nutui-react-taro-cli release
```
