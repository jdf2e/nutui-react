# For Agents

This page provides out-of-the-box Agent integration setups and prompts to let any AI coding agent work effectively with NutUI-React.

## Recommended: One-Click Project Initialization

Run the following command in your project root:

```bash
npx @nutui/nutui-react-cli init
```

The CLI automatically detects your project environment and creates:

- **`AGENTS.md`**: Universal AI coding guidelines with component query, styling, and best practices;
- **`.cursorrules`**: Tailored constraints for Cursor IDE;
- **`.claude/CLAUDE.md`**: Specific instructions for Claude Code;
- **Bundled Skills**: Automatically installs NutUI Skills into `.cursor/skills/`.

---

## Alternative: Copy the Prompt into Conversation

If you are using an agent in ad-hoc chat or automation, paste the following prompt:

```text
Before writing any NutUI-React (@nutui/nutui-react) code, first verify the real component specifications using the local CLI:
1. Query props in dense mode: npx @nutui/nutui-react-cli info <Component> --dense
2. Query design tokens: npx @nutui/nutui-react-cli token <Component> --dense
3. Search demos by intent: npx @nutui/nutui-react-cli demo <Component> --intent "<scenario keywords>"
Always use var(--nutui-*) CSS variables for customization instead of hardcoded hex values.
```

## What the agent gets

### CLI — offline knowledge query (with `--dense` mode)

[@nutui/nutui-react-cli](https://www.npmjs.com/package/@nutui/nutui-react-cli) bundles component props, docs, demos, and Design Tokens with the package, so queries run locally in milliseconds — no network, no API key.

Using `--dense` (alias `-d`), the CLI formats outputs into concise TypeScript interfaces, saving **up to 70% Token consumption**:

```bash
npx @nutui/nutui-react-cli info Button --dense
```

Search demos by scenario intent:

```bash
npx @nutui/nutui-react-cli demo Empty --intent "network"
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
npx skills add jdf2e/nutui-react --skill nutui-react
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
