# For Agents

本页提供开箱即用的 Agent 接入方案与提示词，让任何 AI 编程 Agent 高效使用 NutUI-React（Taro 多端）。

## 推荐：一键初始化工程（最省心）

在你的 Taro 业务项目根目录下运行以下命令：

```bash
npx @nutui/nutui-react-taro-cli init
```

CLI 会自动识别当前工程环境，完成以下配置：

- **生成 `AGENTS.md`**：通用 AI 编码 Agent 规范指南，注入 Taro 小程序环境约束（如图标必须从 `@nutui/icons-react-taro` 引入、禁止绑定浏览器私有事件）；
- **生成 `.cursorrules`**：为 Cursor 注入 NutUI Taro 专属开发约束；
- **生成 `.claude/CLAUDE.md`**：为 Claude Code 提供针对性指导；
- **注入内置 Skills**：自动安装 NutUI Taro Skills 到项目 `.cursor/skills/` 与 `.claude/skills/` 目录，开箱即用。

> **关于已有规则文件保护：**
> 若项目根目录下已存在 `AGENTS.md`、`.cursorrules` 或 `.claude/CLAUDE.md`，`init` 默认会**安全跳过**以保护你的既有配置（若需强制重新生成可加 `--force`）。
> 若希望在保留既有规则的前提下接入 NutUI，可将下文「方式二」中的提示词片段或 CLI 查询指令手动追加到对应文件末尾即可。

---

## 方式二：复制提示词到对话中

如果你在临时对话或自动化流程中使用，可以复制以下提示词给 Agent：

```text
在编写任何 NutUI-React Taro（@nutui/nutui-react-taro）代码之前，请先使用本地 CLI 确认组件真实 API 与样式定义，严禁凭记忆猜测 Prop 或枚举值：
1. 查询组件属性规格（高密度模式）：npx @nutui/nutui-react-taro-cli info <Component> --dense
2. 查询组件样式变量：npx @nutui/nutui-react-taro-cli token <Component> --dense
3. 按场景检索示例代码：npx @nutui/nutui-react-taro-cli demo <Component> --intent "<场景关键词>"
图标必须从 @nutui/icons-react-taro 引入，样式定制优先使用 var(--nutui-*) CSS 变量。
```

## Agent 获得什么

### CLI — 离线知识查询（支持 `--dense` 极简模式）

[@nutui/nutui-react-taro-cli](https://www.npmjs.com/package/@nutui/nutui-react-taro-cli) 把组件的 Props、文档、Taro 示例与 Design Token 打包随包分发，安装后本地毫秒级查询，无需网络、无需 API Key。

使用 `--dense`（别名 `-d`）参数，CLI 会以专为大模型压缩的 TypeScript 接口格式输出，消除多余排版符号，**单次查询节省 70% Token 消耗**：

```bash
npx @nutui/nutui-react-taro-cli info Button --dense
```

支持按意图快速检索 Taro 示例源码：

```bash
npx @nutui/nutui-react-taro-cli demo Empty --intent "半屏"
```

完整参考：[CLI](/#/zh-CN/ai/cli)

### MCP Server — IDE 集成

CLI 同时可作为本地 MCP 服务运行，把同一份知识注册成 IDE 原生工具，让 Claude Code、Cursor、VS Code、Codex 等在对话中按需自动调用，提供 5 个只读工具与 2 个提示词。

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

完整参考：[MCP Server](/#/zh-CN/ai/mcp)

### Skill — 教 Agent 何时用

CLI 内置一份遵循 Agent Skills 规范的 Skill 文件，随包分发。CLI/MCP 提供的是「能力」，Skill 则约束 Agent「什么时候、按什么顺序」用这些能力——例如「写组件前先查 Props 再拿示例」「定制样式用 `var(--nutui-*)` token 而非硬编码颜色」。

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro
```

### LLMs.txt — 结构化文档

把完整的组件文档直接注入 AI 上下文，适合不支持 CLI/MCP 的工具：

| 文件 | 说明 |
| --- | --- |
| [llms.txt](https://nutui.jd.com/taro/react/4x/llms.txt) | 文档导航索引 |
| [llms-full-cn.txt](https://nutui.jd.com/taro/react/4x/llms-full-cn.txt) | 全部组件文档（中文） |

> 小程序端暂无英文全量文档。如需英文文档，请参考 [H5 端](https://nutui.jd.com/h5/react/4x/llms.txt)。

也可以获取单个组件文档：`https://nutui.jd.com/taro/react/4x/components/button.md`。

完整参考：[LLMs.txt](/#/zh-CN/ai/llms)
