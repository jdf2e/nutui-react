# NutUI Taro Knowledge

本篇介绍如何通过 Model Context Protocol (MCP) 在 AI 工具中使用 NutUI-React（Taro 多端）。

## 启动 MCP 服务

`nutui-react-taro mcp` 启动一个通过 stdio 通信的本地 MCP 服务，暴露 5 个只读工具与 2 个提示词。该命令不应在终端直接裸跑，而应在 AI 工具中配置（见下方）。

### 工具

| 工具 | 说明 |
| --- | --- |
| `nutui_list` | 列出全部组件（可按分类筛选） |
| `nutui_info` | 获取组件的 Props 规格 |
| `nutui_doc` | 获取组件完整文档（仅 `zh`，Taro 端暂无英文文档） |
| `nutui_demo` | 获取组件 Taro 示例列表 / 源码 |
| `nutui_token` | 查询 Design Token（全局 / 组件级） |

所有工具均为只读、无副作用、不访问外部网络。

### 提示词

| 提示词 | 说明 |
| --- | --- |
| `nutui-expert` | 把 Agent 定位为 NutUI-React（Taro 多端）专家（先查后写） |
| `nutui-page-generator` | 基于 NutUI-React（Taro 多端）组件生成完整可运行页面 |

## 配置

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

`npx -y` 免全局安装即可拉起；也可全局安装 CLI 后把 `command` 换成 `nutui-react-taro`、`args` 换成 `["mcp"]`。

## 在 AI 工具中的使用

| 工具 | 配置 |
| --- | --- |
| **Claude Code** | 添加到 `.mcp.json`，或用 `claude mcp add` 命令 |
| **Cursor** | 添加到 `.cursor/mcp.json`，或设置 → MCP |
| **VS Code** | 添加到 `.vscode/mcp.json` 的 `servers` 字段 |
| **Codex** | 添加到 `~/.codex/config.toml` |

当这些工具在对话中可用时，Agent 会优先直接调用，而非再拼命令行字符串。
