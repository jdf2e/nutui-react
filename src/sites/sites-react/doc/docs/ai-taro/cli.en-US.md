# CLI

This guide explains how to use `@nutui/nutui-react-taro-cli` to query NutUI-React (Taro multi-platform) component knowledge from the command line.

## What is the NutUI-React Taro CLI?

[@nutui/nutui-react-taro-cli](https://www.npmjs.com/package/@nutui/nutui-react-taro-cli) is an **offline knowledge-query CLI for NutUI-React Taro**, built for AI coding. It bundles component props, docs, Taro demos, and Design Tokens with the package, so AI coding assistants (Claude Code / Cursor / Copilot, etc.) can _look up_ APIs instead of _guessing_ them — eliminating API hallucinations at the source.

It serves `@nutui/nutui-react-taro` (Taro cross-platform / mini-program). For H5, use [@nutui/nutui-react-cli](/#/en-US/ai/cli) (the H5 site).

## Highlights

- **Fully offline, zero API key** — Component metadata, docs, and demos are bundled at build time. Once installed, queries run locally in milliseconds with no network requests and no latency.
- **Structured output** — Every command supports `--format json` for agents to parse directly, instead of regex-matching text.
- **Smart correction** — Component names are case-insensitive; typed `Buttn`? The CLI suggests `Button` based on edit distance rather than just erroring out.
- **Taro-specific data** — Props and demos come from the Taro-side docs (`doc.taro.md` / `demos/taro`), which may differ from the H5 package.

## Install

```bash
npm install -g @nutui/nutui-react-taro-cli
```

Requires Node.js `>=18.12.0`. You can also skip the install and invoke it via `npx` (recommended, always uses the latest version):

```bash
npx @nutui/nutui-react-taro-cli list
npx @nutui/nutui-react-taro-cli info Button
```

After a global install, use the `nutui-react-taro` command:

```bash
nutui-react-taro info Button --format json
```

## Quick start

```bash
nutui-react-taro list                     # List all components (by category)
nutui-react-taro list --category feedback # Filter by category
nutui-react-taro info Button              # Props table (prop / desc / type / default)
nutui-react-taro doc Button               # Full Markdown docs (Chinese)
nutui-react-taro demo Button              # List all Taro demo names for the component
nutui-react-taro demo Button demo1        # View a demo's source
nutui-react-taro token                    # Global Design Tokens
nutui-react-taro token Button             # Component-level Design Tokens
nutui-react-taro mcp                      # Start a local MCP server for IDE integration
```

## Commands

| Command | Description |
| --- | --- |
| `nutui-react-taro list [--category <enName>]` | List all components (name / Chinese name / category / version); filter by category enName (e.g. `base` / `feedback`) |
| `nutui-react-taro info <Component>` | Component props table, grouped by table (prop / desc / type / default) |
| `nutui-react-taro doc <Component>` | Full component Markdown docs (Chinese) |
| `nutui-react-taro demo <Component> [name]` | Omit `name` to list all demos; pass `name` (e.g. `demo1`) for source |
| `nutui-react-taro token [Component]` | Design Tokens; omit the component name to list global tokens |
| `nutui-react-taro mcp` | Start a local MCP server (stdio) for Claude Code / Cursor / VS Code / Codex IDE integration |

When a component name isn't found, the CLI returns a "did you mean" suggestion (e.g. `Buttn` → `Button`) — use it to correct the name rather than guessing.

## Global flags

| Flag | Description | Default |
| --- | --- | --- |
| `--format, -f <text\|json>` | Output format; agents should prefer `json` | `text` |
| `--help, -h` | Show help | - |
| `--version, -v` | Print the CLI version | - |

## Usage with AI tools

The CLI ships with a Skill file following the [Agent Skills](https://github.com/vercel-labs/skills) spec, distributed with the npm package. It guides the agent to call the right command at the right time — e.g. "look up props with `info` and grab a demo before writing a component" and "customize styles with `var(--nutui-*)` tokens instead of hardcoded colors".

Install into the current project (the skill is bundled with the package; install it from the local path after installing the CLI):

```bash
npm i -D @nutui/nutui-react-taro-cli
npx skills add ./node_modules/@nutui/nutui-react-taro-cli/skills/nutui-react-taro
```

Once installed, the agent automatically follows the "look up first, then write" workflow when it encounters NutUI-React Taro tasks. Compatible with Claude Code / Cursor / VS Code / Codex and any agent that supports the skills protocol.

If your IDE supports MCP, the CLI can also run as an MCP server, registering the same capabilities as IDE-native tools. See the [MCP Server](/#/en-US/ai/mcp) guide.

## Learn more

- [MCP Server](/#/en-US/ai/mcp)
- [LLMs.txt](/#/en-US/ai/llms)
- [For Agents](/#/en-US/ai/for-agents)
