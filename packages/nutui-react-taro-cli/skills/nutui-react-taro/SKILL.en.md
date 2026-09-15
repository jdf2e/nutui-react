---
name: nutui-react-taro
description: >
  Use when the user's task involves NutUI React Taro (@nutui/nutui-react-taro) —
  writing NutUI React Taro components for mini-programs / cross-platform (Taro)
  apps, debugging NutUI Taro issues, or querying NutUI Taro component
  APIs/props/docs/demos/design-tokens. Triggers on NutUI Taro-related code,
  imports from '@nutui/nutui-react-taro', or explicit NutUI Taro questions.
  NutUI React Taro is JD's mobile component library for Taro (mini-program /
  multi-platform), sharing one codebase to target H5 and mini-programs.
allowed-tools:
  - Bash(nutui-react-taro *)
  - Bash(npx -y @nutui/nutui-react-taro-cli *)
  - Bash(which nutui-react-taro)
---

# NutUI React Taro CLI

You have access to `@nutui/nutui-react-taro-cli` — a local CLI tool with bundled NutUI React Taro metadata (component props, full docs, runnable Taro demos, and Design Tokens). Use it to query component knowledge before writing code. All data is offline and packaged with the CLI — no network and no API key needed.

## Setup

Before first use, check if the CLI is available. If not, invoke it via `npx` (no global install required):

```bash
which nutui-react-taro || echo "use: npx -y @nutui/nutui-react-taro-cli <command>"
```

Both forms work — use whichever is available:

- Installed globally: `nutui-react-taro info Button`
- Via npx (no install): `npx -y @nutui/nutui-react-taro-cli info Button`

Examples below use the `nutui-react-taro` form for brevity.

**Always pass `--format json` for structured output you can parse programmatically** (default output is human-readable `text`).

## Scenarios

### 1. Writing NutUI React Taro component code

Before writing any NutUI Taro component code, look up its API first — don't rely on memory. Note that Taro-side props may differ from the H5 package.

```bash
# Check what props are available (grouped by table, e.g. Props / sub-component props)
nutui-react-taro info Button --format json

# Get a runnable Taro demo as a starting point
nutui-react-taro demo Button          # list all demo names first
nutui-react-taro demo Button demo1 --format json   # then fetch one demo's source

# Check component-level Design Tokens for theming (var(--nutui-*) system)
nutui-react-taro token Button --format json
```

**Workflow:** `nutui-react-taro info` → understand props → `nutui-react-taro demo` → grab a runnable example → write code.

### 2. Looking up full documentation

When you need comprehensive component docs (not just the props table):

```bash
nutui-react-taro doc Cell --format json          # full markdown docs (Chinese)
```

Taro docs are Chinese-only.

### 3. Exploring available components

When the user is choosing which component to use, or you need to confirm a component exists before importing it:

```bash
# List all components with Chinese name and version, grouped by category
nutui-react-taro list --format json

# Filter to a category (pass the category enName, e.g. base / feedback / nav)
nutui-react-taro list --category feedback --format json
```

If you query a component name that doesn't exist, the CLI returns a "did you mean" suggestion (e.g. `Buttn` → `Button`) — use it to correct the name rather than guessing.

### 4. Querying Design Tokens

When customizing theme/colors/spacing, use the `var(--nutui-*)` token system rather than hardcoding values:

```bash
# Global tokens (colors, spacing, radius, etc.)
nutui-react-taro token --format json

# Component-level tokens
nutui-react-taro token Button --format json
```

### 5. Using as an MCP server

If working in an IDE that supports MCP (Claude Code, Cursor, VS Code, Codex, etc.), the CLI can run as a local stdio MCP server, exposing the same knowledge-query capabilities as IDE-native tools:

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

This provides 5 tools (`nutui_list`, `nutui_info`, `nutui_doc`, `nutui_demo`, `nutui_token`) and 2 prompts (`nutui-expert`, `nutui-page-generator`) via the MCP protocol. When these tools are available in the conversation, prefer calling them directly over shelling out to the CLI.

## Commands

| Command | Purpose |
| --- | --- |
| `nutui-react-taro list [--category <enName>]` | List all components (name / Chinese name / version), grouped by category |
| `nutui-react-taro info <Component>` | Component props table (prop / desc / type / default), grouped by table |
| `nutui-react-taro doc <Component>` | Full component markdown docs (Chinese) |
| `nutui-react-taro demo <Component> [name]` | Omit `name` to list demos; pass `name` (e.g. `demo1`) for source |
| `nutui-react-taro token [Component]` | Design Tokens — omit component for global tokens |
| `nutui-react-taro mcp` | Start a local stdio MCP server for IDE integration |

## Global Flags

| Flag | Purpose |
| --- | --- |
| `--format, -f <text\|json>` | Output format; agents should prefer `json` (default: `text`) |
| `--help, -h` | Show help |
| `--version, -v` | Print CLI version |

## Key Rules

1. **Always query before writing** — Don't guess NutUI Taro APIs, prop names, or enum values from memory. Run `nutui-react-taro info` (and `nutui-react-taro demo` for a working example) first. Taro props can differ from the H5 package.
2. **Use `--format json`** — Every command supports it. Parse the JSON output rather than regex-matching the human-readable text.
3. **Confirm the component exists** — If unsure of the exact name, run `nutui-react-taro list` or rely on the CLI's "did you mean" suggestion instead of importing a guessed name.
4. **Use Design Tokens for styling** — NutUI uses `nut-` flat BEM class names and the `var(--nutui-*)` token system. When customizing appearance, query `nutui-react-taro token` and use tokens rather than hardcoding colors or spacing.
5. **Import from `@nutui/nutui-react-taro`** — Not `@nutui/nutui-react`. This is the Taro (mini-program / cross-platform) package.
