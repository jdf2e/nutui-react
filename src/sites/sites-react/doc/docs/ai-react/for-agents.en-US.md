# For Agents

This page provides a ready-to-use prompt that lets any AI coding agent work effectively with NutUI-React.

## Copy this prompt

Paste the following into your agent conversation or automation flow, so it builds the right context before writing any NutUI-React code:

```text
Before writing any NutUI-React (@nutui/nutui-react) code, first read https://nutui.jd.com/h5/react/4x/llms-full.txt to understand the components' real APIs, usage, and style structure. Do not guess props or enum values from memory. Always look up the docs before using a component, then write code.

If your environment supports skills, run:
npm i -D @nutui/nutui-react-cli
npx skills add ./node_modules/@nutui/nutui-react-cli/skills/nutui-react
```

## What the agent gets

### CLI — offline knowledge query

[@nutui/nutui-react-cli](https://www.npmjs.com/package/@nutui/nutui-react-cli) bundles component props, docs, demos, and Design Tokens with the package, so queries run locally in milliseconds — no network, no API key.

```bash
npx @nutui/nutui-react-cli info Button
```

Full reference: [CLI](/#/en-US/ai/cli)

### MCP Server — IDE integration

The CLI can also run as a local MCP server, registering the same knowledge as IDE-native tools so Claude Code, Cursor, VS Code, Codex, and others can call them on demand in conversation. It exposes 5 read-only tools and 2 prompts.

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

Full reference: [MCP Server](/#/en-US/ai/mcp)

### Skill — teaches the agent when to use it

The CLI ships with a Skill file following the Agent Skills spec. The CLI/MCP provide the _capabilities_; the Skill constrains _when and in what order_ the agent uses them — e.g. "look up props and grab a demo before writing a component" and "customize styles with `var(--nutui-*)` tokens instead of hardcoded colors".

```bash
npm i -D @nutui/nutui-react-cli
npx skills add ./node_modules/@nutui/nutui-react-cli/skills/nutui-react
```

### LLMs.txt — structured documentation

Inject the complete component documentation directly into the AI context — ideal for tools that don't support CLI/MCP:

| File | Description |
| --- | --- |
| [llms.txt](https://nutui.jd.com/h5/react/4x/llms.txt) | Documentation navigation index |
| [llms-full.txt](https://nutui.jd.com/h5/react/4x/llms-full.txt) | Complete component documentation (English) |
| [llms-full-cn.txt](https://nutui.jd.com/h5/react/4x/llms-full-cn.txt) | Complete component documentation (Chinese) |

You can also fetch a single component's docs: `https://nutui.jd.com/h5/react/4x/components/button.md`.

Full reference: [LLMs.txt](/#/en-US/ai/llms)
