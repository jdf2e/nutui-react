# LLMs.txt

本篇介绍如何让 AI 工具更好地理解 NutUI-React,从而在使用 NutUI-React 编写代码时获得更准确的建议。

## 什么是 LLMs.txt?

我们支持 [LLMs.txt](https://llmstxt.org/) 规范,将 NutUI-React 的文档以对大语言模型(LLM)友好的形式提供出来。借助这些文件,Cursor、GitHub Copilot、Claude、通义灵码等 AI 工具能够更准确地理解我们的组件库、API 与用法,减少「幻觉」式的错误代码。

每个组件都提供纯文本 `.md` 文档,AI 工具无需解析站点 HTML,即可按需精确拉取组件的用法、API 与样式结构。

## 可用资源

### LLMs.txt 聚合文件

我们提供了一组聚合文件,方便 AI 工具访问 NutUI-React(H5,`@nutui/nutui-react`)的文档:

| 文件 | 说明 |
| --- | --- |
| [llms.txt](https://nutui.jd.com/h5/react/4x/llms.txt) | 文档导航索引,包含全部组件文档与样式结构文件的链接 |
| [llms-full-cn.txt](https://nutui.jd.com/h5/react/4x/llms-full-cn.txt) | 全部组件文档(中文),含用法说明与示例,可整体注入上下文 |
| [llms-full.txt](https://nutui.jd.com/h5/react/4x/llms-full.txt) | 全部组件文档(英文) |
| [llms-semantic-cn.txt](https://nutui.jd.com/h5/react/4x/llms-semantic-cn.txt) | 全部组件样式结构(中文),含 CSS class 与 CSS 变量 |
| [llms-semantic.txt](https://nutui.jd.com/h5/react/4x/llms-semantic.txt) | 全部组件样式结构(英文) |

### 单组件文档

将组件的 id(小写)拼接到站点路径下的 `components/` 后,并加上 `.md` 后缀,即可获取该组件的纯文本文档,无需加载全量文件:

- [`https://nutui.jd.com/h5/react/4x/components/button.md`](https://nutui.jd.com/h5/react/4x/components/button.md)(中文文档)
- [`https://nutui.jd.com/h5/react/4x/components/cell.md`](https://nutui.jd.com/h5/react/4x/components/cell.md)

### 样式结构(Semantic)文档

每个组件都提供一份样式结构文档:

- [`https://nutui.jd.com/h5/react/4x/components/button/semantic.md`](https://nutui.jd.com/h5/react/4x/components/button/semantic.md)

样式结构文档包含:

- 组件渲染产物中可用的 CSS class 及其用途
- 可覆盖的 CSS 变量(设计 token)
- 便于自定义样式与主题覆盖时精确定位

## 配合 AI 工具使用

| 工具 | 使用方式 | 提示词 |
| --- | --- | --- |
| **Cursor** | 使用 `@Docs` 功能添加 LLMs.txt 地址,或将提示词写入 `.cursor/rules`。[文档](https://docs.cursor.com/context/@-symbols/@-docs) | `阅读 https://nutui.jd.com/h5/react/4x/llms-full-cn.txt 并理解 NutUI-React 组件,在编写 NutUI-React 代码时运用这些知识。` |
| **GitHub Copilot** | 在对话中引用 `llms.txt` 链接,或将 `llms-full-cn.txt` 内容加入上下文。 | `阅读 https://nutui.jd.com/h5/react/4x/llms-full-cn.txt 并理解 NutUI-React 组件,在编写 NutUI-React 代码时运用这些知识。` |
| **Claude / Claude Code** | 添加到 `CLAUDE.md` 或使用 `/memory` 持久化。[文档](https://docs.anthropic.com/en/docs/claude-code) | `阅读 https://nutui.jd.com/h5/react/4x/llms-full-cn.txt 并理解 NutUI-React 组件,在编写 NutUI-React 代码时运用这些知识。` |
| **通义灵码 / 其他** | 将链接添加到知识库或文档源。 | `阅读 https://nutui.jd.com/h5/react/4x/llms-full-cn.txt 并理解 NutUI-React 组件,在编写 NutUI-React 代码时运用这些知识。` |
| **自建 RAG / Agent** | 抓取 `llms.txt` 解析导航,再按需请求各组件 `.md` 建立索引。 | `阅读 https://nutui.jd.com/h5/react/4x/llms.txt 获取文档导航,并按需拉取各组件的 .md 文档。` |
