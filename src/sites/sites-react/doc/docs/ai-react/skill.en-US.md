# Skill

This page introduces three NutUI-React Agent Skills, the problem each one solves, and how to install them.

## What is a Skill?

A [Skill](https://github.com/vercel-labs/skills) is an instruction file following the Agent Skills spec. The CLI and MCP provide the _capabilities_ (query props, docs, demos, Design Tokens); the Skill constrains _when and in what order_ the agent uses them — turning "has tools" into "knows how to use them".

Once installed, the agent automatically loads the Skill and follows its workflow when it hits a matching task, with no need for you to prompt it every time. Compatible with Claude Code / Cursor / VS Code / Codex and any agent that supports the skills protocol.

Three Skills are available:

| Skill | Purpose |
| --- | --- |
| `nutui-react` | Look up the API before writing NutUI-React code, eliminating API hallucination |
| `nutui-react-v3-to-v4` | Systematically upgrade `@nutui/nutui-react` from v3 to v4 |
| `nutui-react-to-taro` | Migrate an H5 project from `@nutui/nutui-react` to `@nutui/nutui-react-taro` (Taro / mini-program) |

## nutui-react — look up before writing

Guides the agent to query the real API with the CLI before writing any NutUI-React component code, instead of guessing props or enum values from memory.

**It constrains the agent to:**

- Run `nutui-react info <Component>` for props, then `nutui-react demo <Component>` to grab a runnable example as a starting point — before writing a component.
- Customize styles with `var(--nutui-*)` Design Tokens (`nutui-react token`) rather than hardcoding colors and spacing.
- Confirm a component name with `nutui-react list` (or take the CLI's "did you mean" suggestion) instead of importing a guessed name.
- Prefer `--format json` for every query and parse the structured output rather than regex-matching text.

**Install:**

```bash
npx skills add jdf2e/nutui-react --skill nutui-react
```

## nutui-react-v3-to-v4 — major-version upgrade

Guides the agent through upgrading `@nutui/nutui-react` from v3 to v4 with the new `migrate` and `diff` capabilities. It focuses on style, CSS class, Design Token, enum, and default-value changes that may not produce compile errors.

**Workflow:**

- Ask for confirmation before upgrading dependencies, then verify the lockfile and installation result.
- Run `nutui-react migrate 3 4 --apply ./src --format json` to inventory the components actually used by the project.
- For every matched component, combine `migrate --component` with `diff 3 4` to check both the official migration guidance and exact prop changes.
- Inspect custom styles targeting `.nut-*` classes and `--nutui-*` variables.
- Validate builds, rendering, and interactions; a successful compilation alone does not complete the migration.

**Install:**

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-v3-to-v4
```

## nutui-react-to-taro — migrate H5 to Taro

Guides the agent to migrate a project using `@nutui/nutui-react` (H5) to `@nutui/nutui-react-taro` (Taro cross-platform / mini-program). The two packages share one component set and almost every component maps 1:1, so migration is highly regular — the Skill orchestrates the mechanical rewrites and the judgment-heavy semantic rewrites into a clear workflow.

**The migration workflow it orchestrates:**

- **Environment prep**: install `@nutui/nutui-react-taro`, `@tarojs/plugin-html`, etc.; configure `designWidth` in `config/index.js`; import the global styles at the entry.
- **Mechanical rewrites**: package/import swaps (`@nutui/nutui-react` → `@nutui/nutui-react-taro`), native-tag swaps (`<div>` → `<View>`, `<img>` → `<Image>`), style-unit fixes, touch-event type widening.
- **Cross-check**: for each component, call both `nutui-react info` and `nutui-react-taro info` to diff props across the two ends (a few components like Uploader / Image differ), avoiding blind copies that silently break on the mini-program.
- **Semantic rewrites & traps**: rewrite Web-only APIs (`document` / `window`) to `@tarojs/taro` APIs; flag judgment-heavy cases such as the missing `Audio` component on Taro and canvas components that need rewriting.

> This Skill also uses `@nutui/nutui-react-taro-cli` for target-side cross-checking; invoke it install-free via `npx -y @nutui/nutui-react-taro-cli`.

**Install:**

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-to-taro
```

## How Skill relates to CLI / MCP

All three reuse the same offline knowledge — only the calling protocol differs:

- **CLI** — the agent runs commands to query knowledge, scan a project, or compare versions.
- **MCP** — registers the same query, migration, and diff capabilities as IDE-native tools, called on demand in conversation.
- **Skill** — provides no new capability; it tells the agent _when and in what order_ to call the CLI / MCP, codifying the workflow.

If your IDE supports MCP, enabling the MCP server alongside lets the Skill's query steps route through IDE-native tools automatically.

## Learn more

- [CLI](/#/en-US/ai/cli)
- [MCP Server](/#/en-US/ai/mcp)
- [For Agents](/#/en-US/ai/for-agents)
- [LLMs.txt](/#/en-US/ai/llms)
