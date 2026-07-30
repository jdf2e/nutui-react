# MCP Server

This guide explains how to use NutUI-React Taro (Taro multi-platform) in AI tools through the Model Context Protocol (MCP).

## What is MCP?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open protocol that lets AI models interact with external tools and data sources. Through MCP, AI assistants can directly access NutUI-React Taro's component docs, code examples, and API references.

The CLI is "the agent runs commands"; MCP registers the same capabilities as IDE-native tools, so Claude Code / Cursor / VS Code / Codex can call them **automatically on demand** in conversation, without assembling command-line strings. Both reuse the same offline metadata snapshot — two calling protocols over one knowledge base.

## Start the MCP server

`nutui-react-taro mcp` starts a local MCP server that communicates over stdio, exposing 5 read-only tools and 2 prompts. This command shouldn't be run directly in a terminal — configure it in your AI tool instead (see below).

### Tools

| Tool | Description |
| --- | --- |
| `nutui_list` | List all components (filterable by category) |
| `nutui_info` | Get a component's props spec |
| `nutui_doc` | Get a component's full docs (Chinese) |
| `nutui_demo` | Get a component's Taro demo list / source |
| `nutui_token` | Query Design Tokens (global / component-level) |

All tools are read-only, side-effect-free, and do not access the external network.

### Prompts

| Prompt | Description |
| --- | --- |
| `nutui-expert` | Positions the agent as a NutUI-React Taro expert (look up first, then write) |
| `nutui-page-generator` | Generate a complete, runnable page from NutUI-React Taro components |

## Configuration

Shared config for **Claude Code** (`.mcp.json` or `claude mcp add`), **Cursor** (`.cursor/mcp.json`), and **VS Code** (the `servers` field in `.vscode/mcp.json`):

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

**Codex** (`~/.codex/config.toml`):

```toml
[mcp_servers.nutui-react-taro]
command = "npx"
args = ["-y", "@nutui/nutui-react-taro-cli", "mcp"]
```

`npx -y` launches it without a global install; alternatively, after a global install, change `command` to `nutui-react-taro` and `args` to `["mcp"]`.

## Usage with AI tools

| Tool | Configuration |
| --- | --- |
| **Claude Code** | Add to `.mcp.json`, or use the `claude mcp add` command |
| **Cursor** | Add to `.cursor/mcp.json`, or Settings → MCP |
| **VS Code** | Add to the `servers` field in `.vscode/mcp.json` |
| **Codex** | Add to `~/.codex/config.toml` |

When these tools are available in the conversation, the agent prefers to call them directly instead of assembling command-line strings.

## Alternative: use LLMs.txt

If your AI tool doesn't support MCP, use the [LLMs.txt](/#/en-US/ai/llms) support to inject complete component documentation directly into the AI context.

## Learn more

- [Model Context Protocol docs](https://modelcontextprotocol.io/)
- [CLI](/#/en-US/ai/cli)
- [LLMs.txt](/#/en-US/ai/llms)
- [For Agents](/#/en-US/ai/for-agents)
