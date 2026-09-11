# Changelog

本包版本号自 `4.0.0` 起与组件包 `@nutui/nutui-react-taro` 对齐,便于未来支持多版本查询。

## v4.0.0

`2026-08-21`

- :sparkles: 版本号对齐 `@nutui/nutui-react-taro`(此前为独立的 `0.1.x`),同一大版本的 CLI 与组件库保持一致,为未来多版本支持奠定基础。
- :sparkles: 离线知识查询 CLI:`list` / `info` / `doc` / `demo` / `token`,元数据随包分发,无需网络与 API Key。
- :sparkles: 内置 stdio MCP Server(`mcp` 命令),暴露 5 个工具与 2 个 prompt,供 Claude Code / Cursor / VS Code / Codex 等 IDE 集成。
- :sparkles: 随包分发 Skill:`nutui-react-taro`(编写 / 调试 NutUI React Taro 小程序 / 跨端代码时查询组件知识)。
- :sparkles: 为 Skill 补充 `metadata.json`,声明版本、兼容性、触发词等元信息。
