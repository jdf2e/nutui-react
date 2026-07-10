# LLMs.txt

This guide explains how to enable AI tools to better understand NutUI-React, so they generate more accurate code when working with NutUI-React.

## What is LLMs.txt?

We support [LLMs.txt](https://llmstxt.org/) files for making the NutUI-React documentation available to large language models (LLMs). This helps AI tools such as Cursor, GitHub Copilot, Claude and others better understand our component library, its APIs, and usage patterns, reducing hallucinated or incorrect code.

Each component ships a plain-text `.md` document, so AI tools can precisely fetch usage, APIs, and style structure on demand without parsing the site's HTML.

## Available Resources

### LLMs.txt Aggregated Files

We provide several aggregated files to help AI tools access the NutUI-React (H5, `@nutui/nutui-react`) documentation:

| File | Description |
| --- | --- |
| [llms.txt](https://nutui.jd.com/h5/react/4x/llms.txt) | Navigation index with links to all component docs and style-structure files |
| [llms-full-cn.txt](https://nutui.jd.com/h5/react/4x/llms-full-cn.txt) | Complete component documentation (Chinese) with usage and examples |
| [llms-full.txt](https://nutui.jd.com/h5/react/4x/llms-full.txt) | Complete component documentation (English) |
| [llms-semantic-cn.txt](https://nutui.jd.com/h5/react/4x/llms-semantic-cn.txt) | Component style structure (Chinese) with CSS classes and CSS variables |
| [llms-semantic.txt](https://nutui.jd.com/h5/react/4x/llms-semantic.txt) | Component style structure (English) |

### Single Component Documentation

Append the component id (lowercase) under the site's `components/` path with a `.md` suffix to fetch that component's plain-text documentation, without loading the full file:

- [`https://nutui.jd.com/h5/react/4x/components/button.md`](https://nutui.jd.com/h5/react/4x/components/button.md)
- [`https://nutui.jd.com/h5/react/4x/components/cell.md`](https://nutui.jd.com/h5/react/4x/components/cell.md)

### Semantic Documentation

Each component has a semantic (style structure) description file:

- [`https://nutui.jd.com/h5/react/4x/components/button/semantic.md`](https://nutui.jd.com/h5/react/4x/components/button/semantic.md)

Semantic documentation includes:

- The CSS classes available on the component's rendered output and their purposes
- The overridable CSS variables (design tokens)
- Precise anchors for customizing styles and overriding themes

## Usage with AI Tools

| Tool | Description | Prompt |
| --- | --- | --- |
| **Cursor** | Use the `@Docs` feature to add the LLMs.txt URL, or add the prompt to `.cursor/rules`. [Documentation](https://docs.cursor.com/context/@-symbols/@-docs) | `Read https://nutui.jd.com/h5/react/4x/llms-full.txt and understand NutUI-React components. Use this knowledge when writing code with NutUI-React.` |
| **GitHub Copilot** | Reference the `llms.txt` URL in chat, or add `llms-full.txt` content to context. | `Read https://nutui.jd.com/h5/react/4x/llms-full.txt and understand NutUI-React components. Use this knowledge when writing code with NutUI-React.` |
| **Claude / Claude Code** | Add to `CLAUDE.md` or use `/memory` to persist. [Documentation](https://docs.anthropic.com/en/docs/claude-code) | `Read https://nutui.jd.com/h5/react/4x/llms-full.txt and understand NutUI-React components. Use this knowledge when writing code with NutUI-React.` |
| **Others** | Add the link to your knowledge base or docs source. | `Read https://nutui.jd.com/h5/react/4x/llms-full.txt and understand NutUI-React components. Use this knowledge when writing code with NutUI-React.` |
| **Custom RAG / Agent** | Fetch `llms.txt` to parse navigation, then request each component's `.md` on demand to build an index. | `Read https://nutui.jd.com/h5/react/4x/llms.txt for navigation, then fetch each component's .md on demand.` |
