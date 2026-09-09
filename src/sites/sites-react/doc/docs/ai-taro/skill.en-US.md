# Skill

This page introduces the two NutUI-React Taro Agent Skills, the problem each one solves, and how to install them.

## What is a Skill?

A [Skill](https://github.com/vercel-labs/skills) is an instruction file following the Agent Skills spec. The CLI and MCP provide query, migration, and diff capabilities, while a Skill defines when and in what order the agent should use them.

Two Skills are available:

| Skill | Purpose |
| --- | --- |
| `nutui-react-taro` | Look up the API before writing NutUI-React Taro code, eliminating API hallucination |
| `nutui-react-taro-v3-to-v4` | Systematically upgrade `@nutui/nutui-react-taro` from v3 to v4 |

## `nutui-react-taro` — look up before writing

Guides the agent to query real APIs and Taro demos through the CLI or MCP before writing NutUI-React Taro code, rather than reusing H5 APIs or guessing from memory.

**Behavior it enforces:**

- Run `nutui-react-taro info <Component>` for props and `demo` for a Taro example before writing component code.
- Use `doc` for complete documentation and `token` for `var(--nutui-*)` Design Tokens.
- Confirm uncertain component names with `list`, and prefer structured `--format json` output.

**Install:**

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro
```

## `nutui-react-taro-v3-to-v4` — major-version upgrade

Guides the agent through upgrading `@nutui/nutui-react-taro` from v3 to v4 with the new `migrate` and `diff` capabilities. It focuses on style, CSS class, Design Token, enum, and default-value changes that may not produce compile errors.

**Workflow:**

- Ask for confirmation before upgrading dependencies, then verify the lockfile and installation result.
- Run `nutui-react-taro migrate 3 4 --apply ./src --format json` to inventory the components actually used by the project.
- For every matched component, combine `migrate --component` with `diff 3 4` to check both the official migration guidance and exact prop changes.
- Inspect custom styles targeting `.nut-*` classes and `--nutui-*` variables.
- Validate builds, rendering, and interactions on the target mini-program, H5, or other Taro platforms; successful compilation alone does not complete the migration.

**Install:**

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro-v3-to-v4
```

## How Skill, CLI, and MCP relate

- **CLI** — The agent runs commands to query knowledge, scan a project, or compare versions.
- **MCP** — Registers the same query, migration, and diff capabilities as IDE-native tools for automatic, on-demand calls in conversation.
- **Skill** — Defines task triggers, execution order, change boundaries, and verification requirements.

If your IDE supports MCP, enable the MCP server as well so the Skill's query and migration steps can call IDE-native tools directly.

## Learn more

- [CLI](/#/en-US/ai/cli)
- [MCP Server](/#/en-US/ai/mcp)
- [For Agents](/#/en-US/ai/for-agents)
- [LLMs.txt](/#/en-US/ai/llms)
