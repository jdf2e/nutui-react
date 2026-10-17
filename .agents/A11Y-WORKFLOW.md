# NutUI-React AI 无障碍开发协同指南 (A11Y Workflow)

本指南旨在教开发者如何利用 `.agents/skills-a11y.md` 指令库，驱动 AI 助手自动完成组件的无障碍（A11y）适配。

## 1. 核心原理

AI 助手在加载 `.agents/skills-a11y.md` 后，会自动获得以下“常识”：

- **双端规范**：Web 端用 `aria-xxx` (kebab-case)，Taro 端用 `ariaXxx` (CamelCase)。
- **状态绑定**：自动将 `checked/disabled/loading` 映射至 ARIA 属性。
- **视觉去噪**：自动为装饰性图标添加 `aria-hidden` / `ariaHidden`。

## 2. 如何下达指令 (Best Practices)

### 场景 A：新组件开发

**指令建议**：

> “请帮我开发一个新的 `Slider` 组件，并根据 `.agents/skills-a11y.md` 同步实现 Web 和 Taro 的无障碍支持。”

### 场景 B：现有组件重构

**指令建议**：

> “请对比 `.agents/skills-a11y.md` 中的校验清单，审计 `src/packages/xxx/xxx.tsx` 的无障碍实现，并给出重构代码。”

### 场景 C：批量 A11y 检查

**指令建议**：

> “检查当前组件是否在 Taro 环境下正确使用了驼峰式的 `ariaLabel` 而非 `aria-label`。”

## 3. 常见避坑指南

- **Taro 属性丢失**：如果发现 `ariaLabel` 没生效，检查是否在 `View` 标签上透传了 `...rest`。
- **重复 Label**：如果组件已经通过 `children` 渲染了文字，不必再在 `ariaLabel` 中重复，除非是为了给读屏器提供更清晰的上下文。
- **图标隐藏**：不要忘记给所有的辅助性 Icon 加上 `ariaHidden` / `aria-hidden="true"`，否则读屏器会尝试读取图标的 Unicode 字符。

## 4. 验证方式

- **Web 端**：使用 Chrome DevTools 的 `Accessibility` 面板查看 `Accessibility Tree`。
- **Taro 端**：在真机读屏模式（iOS VoiceOver / Android TalkBack）下测试。
