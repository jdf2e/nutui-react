# NutUI-React AI 研发效能与质量闭环实操手册

本手册旨在指导维护者与开发者如何利用本项目内建的 AI 工具链，高效、可控地处理 NutUI-React 的**功能迭代**、**Bug 修复**与**代码评审**。

---

## 一、 架构与已落地的能力清单

| 模块 | 落地文件路径 | 核心作用 |
| --- | --- | --- |
| **质量守护脚本** | `scripts/agents/nutui-verify.mjs` | 本地执行多端对称性检查、白皮书红线静态扫描、TypeScript 检查与关联 Vitest 单测自动运行 |
| **快捷脚本命令** | `npm run verify:agent [comp]` | 开发者或 Agent 一键调用验证闭环 |
| **功能迭代流水线** | `.claude/commands/nutui-feature.md` | 指导 AI 按“双端实现 + API 文档 + Demo + 单测 + 自动检验”交付新特性 |
| **Bug 修复流水线** | `.claude/commands/nutui-bugfix.md` | 指导 AI 走 TDD 模式（先写失败单测复现，再打补丁转绿） |
| **代码评审流水线** | `.claude/commands/nutui-review.md` | 依据《组件标准白皮书》按阻断级 (Blocker) / 警告级 (Warning) 输出高信噪比报告 |
| **IDE 规约注入** | `.cursor/rules/nutui-workflow.mdc` | 为 Cursor / IDE 内智能助手注入实时白皮书约束 |

---

## 二、 核心使用流程：易用、可控、高效

### 场景 1：功能迭代（Feature 开发）

> **目标**：为现有组件新增特性，或开发全新组件，保证双端同步、文档齐备、单测通过。

1. **发起指令**（在 AI 会话或终端输入）：
   ```bash
   /nutui-feature button 支持 round-pill 形状胶囊样式与 loading 状态文案
   ```
2. **AI 执行过程（可控且透明）**：
   - 阶段 1：给出 API 设计与 Props 方案（供你确认）。
   - 阶段 2：同步修改 `button.tsx` 与 `button.taro.tsx`，并遵循样式等比缩放规范。
   - 阶段 3：自动在 `doc.md`、`doc.en-US.md` 补齐表格，在 `button.spec.tsx` 补充用例。
   - 阶段 4：自动运行 `npm run verify:agent button` 进行自检自愈。
3. **开发者确认**：
   - 检查 AI 输出的修改总结，确认无误即可提交。

---

### 场景 2：Bug 修复（Bugfix 开发）

> **目标**：修复 Issue 中提出的偶现或特定端 Bug，杜绝“假修复”与“代码退化”。

1. **发起指令**：
   ```bash
   /nutui-bugfix #1234 修复 Picker 组件在小程序端快速滑动时抛出 Cannot read property 错误
   ```
2. **AI 执行过程（TDD 驱动）**：
   - 阶段 1（防退化）：先在 `picker.spec.tsx` 编写重现该 Bug 的单测，运行确认为 **Red（失败）**。
   - 阶段 2（根因排查）：分析是否属于 Taro 环境生命周期或 DOM 访问差异。
   - 阶段 3（最小补丁）：应用兼容性修复代码。
   - 阶段 4（质量转绿）：运行 `npm run verify:agent picker`，确保用例转为 **Green（通过）**。
3. **开发者确认**：
   - 查看单测变绿结果及修复分析。

---

### 场景 3：代码评审（Code Review）

> **目标**：PR 提交前或合并前，排查破坏性变更与规范违背，告别无效人工拉扯。

1. **发起指令**：
   ```bash
   /nutui-review
   # 或指定对比分支：
   /nutui-review origin/main
   ```
2. **AI 执行过程**：
   - 扫描当前 Git Diff，提取涉及的组件。
   - 执行 `scripts/agents/nutui-verify.mjs` 获取硬性指标（单测、类型、对称性）。
   - 核查《组件标准白皮书》红线：是否有破坏性 API 改动？Taro 端是否裸调了 `window/document`？样式是否手写了 `scale-px(0px)`？
3. **产出报告**：
   - 输出清晰的 **🔴 阻断项 (Blockers)**、**🟡 改进项 (Warnings)** 与 **🟢 合规项**。
   - 明确给出 **建议合并 (Approve)** 或 **需要修改 (Changes Requested)**。

---

## 三、 本地手工验证指南

无论何时，如果想快速排查本地修改的组件是否达标，只需一行命令：

```bash
# 自动分析当前 git diff 涉及的所有组件并执行守护校验
pnpm verify:agent

# 或直接针对特定组件执行全面校验
pnpm verify:agent button
```
