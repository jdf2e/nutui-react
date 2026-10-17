# NutUI-React AI 研发助手库使用说明

这是一个为 AI 编程助手（如 GitHub Copilot, Cursor）设计的 NutUI-React 专用知识增强包。通过它，AI 能更精准地理解 NutUI 的 **BEM 规范**、**Design Tokens** 以及 **组件 API**。

## 📂 目录结构

- `instructions.md`: 核心指令库。包含全量补全规范与 API 索引。
- `../build-copilot-ctx.mjs`: 知识库自动提取脚本（建议组件库更新后运行）。

## 🛠 如何使用 (业务方开发同学)

### 方式一：作为项目指令 (推荐)

1. 将 `instructions.md` 拷贝到你的业务项目根目录。
2. 重命名为 `.github/copilot-instructions.md`。
3. **效果**：你的 Copilot Chat 和自动补全将自动识别 NutUI 规范。当你说“写一个按钮”时，AI 会自动帮你带上 `nut-button` 前缀。

### 方式二：在 Copilot Chat 中按需挂载

1. 在 VS Code 的 Copilot 聊天框中输入 `#file`。
2. 选择本目录下的 `instructions.md`。
3. **效果**：AI 会在本次对话中参考最新的 NutUI 组件参数。

## 🔄 维护与更新 (组件库核心成员)

如果您在 `src/packages` 中新增了组件或修改了 `Props`，请运行以下命令刷新知识库：

```bash
node scripts/build-copilot-ctx.mjs
```

脚本会自动同步 `scripts/properties.json` 和 `src/styles/variables.scss` 的最新数据。

## 💡 开发 Tip

- **类名自动生成**：引入该指令后，AI 生成类名时会严格遵循 `.nut-{block}-{suffix}` 格式（如 `.nut-button-text`）。
- **Token 智能联想**：尝试输入 `color: var(--nut`，AI 会根据本知识库的内容提示正确的 Token 变量。
