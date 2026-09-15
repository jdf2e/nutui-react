---
name: nutui-react
description: >
  Use when the user's task involves NutUI React (@nutui/nutui-react) — writing
  NutUI React components, debugging NutUI issues, or querying NutUI component
  APIs/props/docs/demos/design-tokens. Triggers on NutUI-related code, imports
  from '@nutui/nutui-react', or explicit NutUI questions. NutUI React is JD's
  lightweight mobile (H5) component library.
allowed-tools:
  - Bash(nutui-react *)
  - Bash(npx -y @nutui/nutui-react-cli *)
  - Bash(which nutui-react)
---

# NutUI React CLI

You have access to `@nutui/nutui-react-cli` — a local CLI tool with bundled NutUI React metadata (component props, full docs, runnable demos, and Design Tokens). Use it to query component knowledge before writing code. All data is offline and packaged with the CLI — no network and no API key needed.

## Setup

Before first use, check if the CLI is available. If not, invoke it via `npx` (no global install required):

```bash
which nutui-react || echo "use: npx -y @nutui/nutui-react-cli <command>"
```

Both forms work — use whichever is available:

- Installed globally: `nutui-react info Button`
- Via npx (no install): `npx -y @nutui/nutui-react-cli info Button`

Examples below use the `nutui-react` form for brevity.

**Always pass `--format json` for structured output you can parse programmatically** (default output is human-readable `text`).

## Scenarios

### 1. Writing NutUI React component code

Before writing any NutUI component code, look up its API first — don't rely on memory.

```bash
# Check what props are available (grouped by table, e.g. Props / sub-component props)
nutui-react info Button --format json

# Get a runnable demo as a starting point
nutui-react demo Button          # list all demo names first
nutui-react demo Button demo1 --format json   # then fetch one demo's source

# Check component-level Design Tokens for theming (var(--nutui-*) system)
nutui-react token Button --format json
```

**Workflow:** `nutui-react info` → understand props → `nutui-react demo` → grab a runnable example → write code.

### 2. Looking up full documentation

When you need comprehensive component docs (not just the props table):

```bash
nutui-react doc Cell --format json          # full markdown docs (Chinese, default)
nutui-react doc Cell --lang en --format json  # English docs
```

`--lang` accepts `zh` (default) or `en`.

### 3. Exploring available components

When the user is choosing which component to use, or you need to confirm a component exists before importing it:

```bash
# List all components with Chinese name and version, grouped by category
nutui-react list --format json

# Filter to a category (pass the category enName, e.g. base / feedback / nav)
nutui-react list --category feedback --format json
```

If you query a component name that doesn't exist, the CLI returns a "did you mean" suggestion (e.g. `Buttn` → `Button`) — use it to correct the name rather than guessing.

### 4. Querying Design Tokens

When customizing theme/colors/spacing, use the `var(--nutui-*)` token system rather than hardcoding values:

```bash
# Global tokens (colors, spacing, radius, etc.)
nutui-react token --format json

# Component-level tokens
nutui-react token Button --format json
```

### 5. Using as an MCP server

If working in an IDE that supports MCP (Claude Code, Cursor, VS Code, Codex, etc.), the CLI can run as a local stdio MCP server, exposing the same knowledge-query capabilities as IDE-native tools:

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

This provides 5 tools (`nutui_list`, `nutui_info`, `nutui_doc`, `nutui_demo`, `nutui_token`) and 2 prompts (`nutui-expert`, `nutui-page-generator`) via the MCP protocol. When these tools are available in the conversation, prefer calling them directly over shelling out to the CLI.

## Commands

| Command | Purpose |
| --- | --- |
| `nutui-react list [--category <enName>]` | List all components (name / Chinese name / version), grouped by category |
| `nutui-react info <Component>` | Component props table (prop / desc / type / default), grouped by table |
| `nutui-react doc <Component> [--lang zh\|en]` | Full component markdown docs (default Chinese) |
| `nutui-react demo <Component> [name]` | Omit `name` to list demos; pass `name` (e.g. `demo1`) for source |
| `nutui-react token [Component]` | Design Tokens — omit component for global tokens |
| `nutui-react mcp` | Start a local stdio MCP server for IDE integration |

## Global Flags

| Flag | Purpose |
| --- | --- |
| `--format, -f <text\|json>` | Output format; agents should prefer `json` (default: `text`) |
| `--lang, -l <zh\|en>` | Doc language for `doc` / `mcp` (default: `zh`) |
| `--help, -h` | Show help |
| `--version, -v` | Print CLI version |

## Key Rules

1. **Always query before writing** — Don't guess NutUI APIs, prop names, or enum values from memory. Run `nutui-react info` (and `nutui-react demo` for a working example) first.
2. **Use `--format json`** — Every command supports it. Parse the JSON output rather than regex-matching the human-readable text.
3. **Confirm the component exists** — If unsure of the exact name, run `nutui-react list` or rely on the CLI's "did you mean" suggestion instead of importing a guessed name.
4. **Use Design Tokens for styling** — NutUI uses `nut-` flat BEM class names and the `var(--nutui-*)` token system. When customizing appearance, query `nutui-react token` and use tokens rather than hardcoding colors or spacing.
