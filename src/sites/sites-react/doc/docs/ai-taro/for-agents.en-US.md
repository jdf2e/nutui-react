# For Agents

This page provides out-of-the-box Agent integration setups and prompts to let any AI coding agent work effectively with NutUI-React (Taro multi-platform).

## Recommended: One-Click Project Initialization

Run the following command in your Taro project root:

```bash
npx @nutui/nutui-react-taro-cli init
```

The CLI automatically detects your project environment and creates:

- **`AGENTS.md`**: Universal AI coding guidelines with Taro multi-end constraints (e.g. icon imports from `@nutui/icons-react-taro`);
- **`.cursorrules`**: Tailored constraints for Cursor IDE;
- **`.claude/CLAUDE.md`**: Specific instructions for Claude Code;
- **Bundled Skills**: Automatically installs NutUI Taro Skills into `.cursor/skills/` and `.claude/skills/`.

> **Safe handling of existing rule files:**
> If `AGENTS.md`, `.cursorrules`, or `.claude/CLAUDE.md` already exist in your project, `init` safely **skips** them by default to protect your current project configuration (use `--force` to overwrite).
> To incorporate NutUI instructions into your existing configuration files without overwriting them, simply append the guidelines snippet from "Alternative" below into your existing files.

---

## Alternative: Copy the Prompt into Conversation

If you are using an agent in ad-hoc chat or automation, paste the following prompt:

```text
Before writing any NutUI-React Taro (@nutui/nutui-react-taro) code, first verify the real component specifications using the local CLI:
1. Query props in dense mode: npx @nutui/nutui-react-taro-cli info <Component> --dense
2. Query design tokens: npx @nutui/nutui-react-taro-cli token <Component> --dense
3. Search demos by intent: npx @nutui/nutui-react-taro-cli demo <Component> --intent "<scenario keywords>"
Icons must be imported from @nutui/icons-react-taro. Always use var(--nutui-*) CSS variables for customization.
```

## What the agent gets

### CLI — offline knowledge query (with `--dense` mode)

[@nutui/nutui-react-taro-cli](https://www.npmjs.com/package/@nutui/nutui-react-taro-cli) bundles component props, docs, Taro demos, and Design Tokens with the package, so queries run locally in milliseconds — no network, no API key.

Using `--dense` (alias `-d`), the CLI formats outputs into concise TypeScript interfaces, saving **up to 70% Token consumption**:

```bash
npx @nutui/nutui-react-taro-cli info Button --dense
```

Search demos by scenario intent:

```bash
npx @nutui/nutui-react-taro-cli demo Empty --intent "half"
```

Full reference: [CLI](/#/en-US/ai/cli)

### MCP Server — IDE integration

The CLI can also run as a local MCP server, registering the same knowledge as IDE-native tools so Claude Code, Cursor, VS Code, Codex, and others can call them on demand in conversation. It exposes 5 read-only tools and 2 prompts.

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

Full reference: [MCP Server](/#/en-US/ai/mcp)

### Skill — teaches the agent when to use it

The CLI ships with a Skill file following the Agent Skills spec. The CLI/MCP provide the _capabilities_; the Skill constrains _when and in what order_ the agent uses them — e.g. "look up props and grab a demo before writing a component" and "customize styles with `var(--nutui-*)` tokens instead of hardcoded colors".

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro
```

### LLMs.txt — structured documentation

Inject the complete component documentation directly into the AI context — ideal for tools that don't support CLI/MCP:

| File | Description |
| --- | --- |
| [llms.txt](https://nutui.jd.com/taro/react/4x/llms.txt) | Documentation navigation index |
| [llms-full-cn.txt](https://nutui.jd.com/taro/react/4x/llms-full-cn.txt) | Complete component documentation (Chinese) |

> The mini-program side has no English full-text docs yet. For English docs, see the [H5 side](https://nutui.jd.com/h5/react/4x/llms.txt).

You can also fetch a single component's docs: `https://nutui.jd.com/taro/react/4x/components/button.md`.

Full reference: [LLMs.txt](/#/en-US/ai/llms)
