# For Agents

本页提供一段开箱即用的提示词，让任何 AI 编程 Agent 高效使用 NutUI-React。

## 复制这段提示词

把下面这段话复制到你的 Agent 对话或自动化流程中，让它在写 NutUI-React 代码前先建立正确的上下文：

```text
在编写任何 NutUI-React（@nutui/nutui-react）代码之前，请先阅读 https://nutui.jd.com/h5/react/4x/llms-full-cn.txt 理解组件的真实 API、用法与样式结构，不要凭记忆猜测 Prop 或枚举值。使用任何组件前先查文档，再写代码。

如果你的环境支持 skills，请运行：
npx skills add jdf2e/nutui-react --skill nutui-react
```

## Agent 获得什么

### CLI — 离线知识查询

[@nutui/nutui-react-cli](https://www.npmjs.com/package/@nutui/nutui-react-cli) 把组件的 Props、文档、示例与 Design Token 打包随包分发，安装后本地毫秒级查询，无需网络、无需 API Key。

```bash
npx @nutui/nutui-react-cli info Button
```

完整参考：[CLI](/#/zh-CN/ai/cli)

### MCP Server — IDE 集成

CLI 同时可作为本地 MCP 服务运行，把同一份知识注册成 IDE 原生工具，让 Claude Code、Cursor、VS Code、Codex 等在对话中按需自动调用，提供 5 个只读工具与 2 个提示词。

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

完整参考：[MCP Server](/#/zh-CN/ai/mcp)

### Skill — 教 Agent 何时用

CLI 内置一份遵循 Agent Skills 规范的 Skill 文件，随包分发。CLI/MCP 提供的是「能力」，Skill 则约束 Agent「什么时候、按什么顺序」用这些能力——例如「写组件前先查 Props 再拿示例」「定制样式用 `var(--nutui-*)` token 而非硬编码颜色」。

```bash
npx skills add jdf2e/nutui-react --skill nutui-react
```

### LLMs.txt — 结构化文档

把完整的组件文档直接注入 AI 上下文，适合不支持 CLI/MCP 的工具：

| 文件 | 说明 |
| --- | --- |
| [llms.txt](https://nutui.jd.com/h5/react/4x/llms.txt) | 文档导航索引 |
| [llms-full-cn.txt](https://nutui.jd.com/h5/react/4x/llms-full-cn.txt) | 全部组件文档（中文） |
| [llms-full.txt](https://nutui.jd.com/h5/react/4x/llms-full.txt) | 全部组件文档（英文） |

也可以获取单个组件文档：`https://nutui.jd.com/h5/react/4x/components/button.md`。

完整参考：[LLMs.txt](/#/zh-CN/ai/llms)
