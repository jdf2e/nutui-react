# NutUI Taro Knowledge

NutUI React Taro 离线文档知识查询。面向 AI 编程智能体，教它「写 NutUI Taro 代码前先查文档」。

内部通过 `@dongweb/nutui-react-taro-cli` 检索官方组件的 Props、文档、示例与 Design Token，避免凭记忆猜测 API 名、Props 或配置项。NutUI React Taro 是京东面向 Taro（小程序 / 多端）的移动端组件库，一套代码同时支持 H5 与小程序，其组件属性可能与 H5 版的 `@nutui/nutui-react` 不同。

## 安装

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro
```

## 适用场景

- **编写 NutUI React Taro 组件或页面**：在引入 `@nutui/nutui-react-taro`、使用组件 Props 或组合小程序 / 跨端页面前，先查询组件 API 与可运行示例，避免凭记忆猜测属性名、类型和枚举值，也避免误用 H5 端才有的属性。
- **排查 NutUI Taro 组件问题**：遇到组件在小程序 / 多端表现不符合预期、属性配置无效或组件名称不确定时，核对 Props、完整文档和官方 Demo，并利用组件名称纠错建议确认正确用法。
- **查询组件文档与示例**：需要了解组件的完整中文文档、子组件 API 或可运行的 Taro 示例源码时，通过离线 CLI 获取结构化结果，无需访问网络。
- **选择和确认可用组件**：在设计交互或实现功能前，按分类浏览组件列表，确认目标组件在 Taro 端是否存在、所属类别及可用版本，再决定组件方案。
- **定制主题与样式**：查询全局或组件级 Design Token，使用 `var(--nutui-*)` 变量调整颜色、间距、圆角等样式，避免硬编码设计值。
- **作为 MCP 服务器接入 IDE**：在支持 MCP 的 IDE（Claude Code、Cursor、VS Code、Codex 等）中，通过 `npx -y @dongweb/nutui-react-taro-cli mcp` 启动本地 stdio MCP 服务器，把相同的知识查询能力暴露为 IDE 原生工具。
