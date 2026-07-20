# CLI

This guide explains how to use `@nutui/nutui-react-cli` to query NutUI-React component knowledge from the command line.

## What is the NutUI-React CLI?

[@nutui/nutui-react-cli](https://www.npmjs.com/package/@nutui/nutui-react-cli) is an **offline knowledge-query CLI for NutUI-React**, built for AI coding. It bundles component props, docs, demos, and Design Tokens with the package, so AI coding assistants (Claude Code / Cursor / Copilot, etc.) can _look up_ APIs instead of _guessing_ them — eliminating API hallucinations at the source.

## Highlights

- **Fully offline, zero API key** — Component metadata, docs, and demos are bundled at build time. Once installed, queries run locally in milliseconds with no network requests and no latency.
- **Structured output** — Every command supports `--format json` for agents to parse directly, instead of regex-matching text.
- **Smart correction** — Component names are case-insensitive; typed `Buttn`? The CLI suggests `Button` based on edit distance rather than just erroring out.
- **Bilingual docs** — The `doc` command supports `--lang zh|en` to switch between Chinese and English.

## Install

```bash
npm install -g @nutui/nutui-react-cli
```

Requires Node.js `>=18.12.0`. You can also skip the install and invoke it via `npx` (recommended, always uses the latest version):

```bash
npx @nutui/nutui-react-cli list
npx @nutui/nutui-react-cli info Button
```

After a global install, use the `nutui-react` command:

```bash
nutui-react info Button --format json
```

## Quick start

```bash
nutui-react list                     # List all components (by category)
nutui-react list --category feedback # Filter by category
nutui-react info Button              # Props table (prop / desc / type / default)
nutui-react doc Button               # Full Markdown docs (Chinese by default)
nutui-react doc Button --lang en     # English docs
nutui-react demo Button              # List all H5 demo names for the component
nutui-react demo Button demo1        # View a demo's source
nutui-react token                    # Global Design Tokens
nutui-react token Button             # Component-level Design Tokens
nutui-react mcp                      # Start a local MCP server for IDE integration
```

## Commands

| Command | Description |
| --- | --- |
| `nutui-react list [--category <enName>]` | List all components (name / Chinese name / category / version); filter by category enName (e.g. `base` / `feedback`) |
| `nutui-react info <Component>` | Component props table, grouped by table (prop / desc / type / default) |
| `nutui-react doc <Component> [--lang zh\|en]` | Full component Markdown docs (Chinese by default) |
| `nutui-react demo <Component> [name]` | Omit `name` to list all demos; pass `name` (e.g. `demo1`) for source |
| `nutui-react token [Component]` | Design Tokens; omit the component name to list global tokens |
| `nutui-react mcp` | Start a local MCP server (stdio) for Claude Code / Cursor / VS Code / Codex IDE integration |

When a component name isn't found, the CLI returns a "did you mean" suggestion (e.g. `Buttn` → `Button`) — use it to correct the name rather than guessing.

## Global flags

| Flag | Description | Default |
| --- | --- | --- |
| `--format, -f <text\|json>` | Output format; agents should prefer `json` | `text` |
| `--lang, -l <zh\|en>` | Doc language (for `doc` / `mcp`) | `zh` |
| `--help, -h` | Show help | - |
| `--version, -v` | Print the CLI version | - |

## Usage with AI tools

The CLI ships with a Skill file following the [Agent Skills](https://github.com/vercel-labs/skills) spec, distributed with the npm package. It guides the agent to call the right command at the right time — e.g. "look up props with `info` and grab a demo before writing a component" and "customize styles with `var(--nutui-*)` tokens instead of hardcoded colors".

Install into the current project (the skill is bundled with the package; install it from the local path after installing the CLI):

```bash
npm i -D @nutui/nutui-react-cli
npx skills add ./node_modules/@nutui/nutui-react-cli/skills/nutui-react
```

Once installed, the agent automatically follows the "look up first, then write" workflow when it encounters NutUI-React tasks. Compatible with Claude Code / Cursor / VS Code / Codex and any agent that supports the skills protocol.

If your IDE supports MCP, the CLI can also run as an MCP server, registering the same capabilities as IDE-native tools. See the [MCP Server](/#/en-US/ai/mcp) guide.

## Learn more

- [MCP Server](/#/en-US/ai/mcp)
- [LLMs.txt](/#/en-US/ai/llms)
- [For Agents](/#/en-US/ai/for-agents)
