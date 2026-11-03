# NutUI-React 贡献指南 (Contributing Guide)

感谢您对 NutUI-React 的关注与支持！无论是提交 Issue、改进文档、修复 Bug 还是为组件库共建新特性，我们都非常欢迎社区的贡献。

为了保证组件库代码质量、跨端体验与长期可维护性，请在参与组件开发或升级重构时，遵循以下规范与工作流。

---

## 目录

- [本地开发流程](#本地开发流程)
- [组件开发与升级核心准则](#组件开发与升级核心准则)
  - [1. 响应式等比缩放规范 (Proportional Scaling)](#1-响应式等比缩放规范-proportional-scaling)
  - [2. 向前兼容性保障 (Backward Compatibility)](#2-向前兼容性保障-backward-compatibility)
  - [3. 属性抽象与 API 设计 (Prop Design)](#3-属性抽象与-api-设计-prop-design)
  - [4. 包体大小控制 (Bundle Size Impact)](#4-包体大小控制-bundle-size-impact)
  - [5. 易用性与开发者体验 (Developer Experience)](#5-易用性与开发者体验-developer-experience)
- [双端架构（H5 & Taro）一致性](#双端架构h5--taro一致性)
- [提交 PR 前的自检清单](#提交-pr-前的自检清单)

---

## 本地开发流程

1. **安装依赖**：
   ```bash
   pnpm install
   ```
2. **启动本地开发服务**：
   ```bash
   # 启动 H5 文档与组件示例
   pnpm dev
   ```
3. **运行类型与构建检查**：
   ```bash
   # H5 端类型与代码生成检查
   npm run checked

   # Taro 端类型与代码生成检查
   npm run checked:taro
   ```
4. **运行单元测试**：
   ```bash
   # 运行指定组件的测试
   npx vitest run src/packages/[component-name]
   ```

---

## 组件开发与升级核心准则

### 1. 响应式等比缩放规范 (Proportional Scaling)

NutUI-React 在运行时通过根节点注入 `--nut-scale-f`、`--nut-scale-font`、`--nut-scale-icon` 实现屏幕自适应与大字版/老年版缩放。

- **组件 SCSS 源码书写普通裸 `px`**：
  - 在 `src/packages/*/*.scss` 中，内外边距、圆角、普通宽高**直接书写标准设计稿裸 `px`**（如 `padding: 12px 16px; border-radius: 4px;`）。
  - 打包工具（`build.mjs`）和本地开发环境（`vite.config.mts`）会在**编译期内存中自动通过 PostCSS AST 转换为 `scale-px(Npx)`**，源码中无需显式包裹 `scale-px`。
- **细边框物理像素保护**：
  - 对于 `border` 与 `outline` 属性上数值 `≤ 1px`（如 `1px`、`0.5px`）的细线条，系统已内置保护逻辑，**不会且不应缩放**，以保持在 Retina 高清屏上物理像素清晰锐利，避免锯齿与亚像素模糊。
- **变量默认值必须显式声明**：
  - AST 自动转换只处理组件私有 SCSS；若在 `src/styles/variables*.scss` 中定义组件样式变量的默认兜底值，**必须显式书写 `scale-px(Npx)`**，例如：
    ```scss
    $navbar-height: var(--nutui-navbar-height, scale-px(44px)) !default;
    ```
- **数值 0 规范**：
  - 凡数值为 0 的尺寸，一律书写字面量 `0`（如 `margin: 0; padding: 0;`），**严禁书写 `scale-px(0px)`**，防止在部分移动端浏览器上解析出非零亚像素偏差。
- **场景专用函数**：
  - 字号/文本行高使用 `scale-font-px()` 或主题字号变量 `--nutui-font-size-*`（响应大字版 1.15 倍与老年版 1.3 倍）；
  - 图标尺寸使用 `scale-icon-px()` 或主题图标变量 `--nut-icon-*`（响应老年版 1.3 倍）。

---

### 2. 向前兼容性保障 (Backward Compatibility)

作为一个拥有广泛业务依赖的基础组件库，组件升级时必须保证向下兼容：

- **禁止直接移除旧 Props**：严禁随意删除或重命名已发布的公开属性。如需演进：
  - 将旧属性在 TypeScript 中标记 `@deprecated` 注释；
  - 提供兼容映射（如 `const actualValue = props.newValue ?? props.oldValue`），并在开发环境输出警告（`console.warn`），保证升级用户旧代码不崩溃。
- **样式 Token 兼容**：`src/styles/variables.scss` 中的既有 CSS 变量名（`--nutui-*`）与 SCSS 变量名严禁任意删除或改名。如有新 Token，可建立映射别名。
- **DOM 结构稳定性**：避免无意义地增加 DOM 嵌套层级或更改主类名，防止破坏下游宿主业务工程中的 CSS 深度选择器（`:deep()` 样式穿透）。

---

### 3. 属性抽象与 API 设计 (Prop Design)

- **遵循 React 社区通用范式**：
  - 表单类组件统一遵循受控与非受控设计：`value` / `defaultValue` / `onChange`；
  - 显示/隐藏状态统一使用 `visible` 或 `open`；禁用/加载统一使用 `disabled` / `loading`；
  - 事件命名统一遵循 `on[EventName]` 规范。
- **防止属性膨胀 (Avoid Prop Bloat)**：
  - 强相关的碎属性应合并为对象配置传递或优先通过 CSS 变量定制，避免铺设大量扁平碎片 Props；
  - 复杂插槽应兼具灵活形态：同时支持 `ReactNode` 以及接收内部状态的渲染函数 `(state) => ReactNode`。
- **双端 API 严格对齐**：H5 与 Taro 端必须共享同一份 Props 类型定义（`types.ts`），杜绝单端独有属性或双端割裂。

---

### 4. 包体大小控制 (Bundle Size Impact)

- **零/轻外部依赖原则**：
  - 严禁为了简单工具函数引入大型三方库（如 lodash 全量、moment 等）；
  - 统一复用内部轻量工具库（`src/utils/*`，如 `raf`、`clamp`、`getRect` 等）。
- **Tree-shaking 友好**：
  - 组件支持按需独立解构引入；
  - 避免模块顶层执行具有副作用的代码，杜绝循环依赖，确保 Dead Code Elimination (DCE) 生效。
- **样式体积控制**：
  - 避免无意义的高特异性嵌套选择器，复用样式逻辑通过 SCSS mixin 实现，严禁大段复制粘贴样式代码。

---

### 5. 易用性与开发者体验 (Developer Experience)

- **开箱即用（Default Props）**：为常用场景提供符合直觉的默认配置，确保“零配置即可正常运行”。
- **TypeScript 强类型与 JSDoc 即文档**：
  - 所有公开 Props、事件回调、导出方法必须附带详尽的中英文 JSDoc 注释；
  - 严禁使用 `any` 作为对外暴露的类型定义，IDE 悬浮提示即文档。
- **高频场景 Demo 覆盖**：在 `demos/` 目录下必须提供基础用法、受控用法、高级自定义等核心演示。

---

## 双端架构（H5 & Taro）一致性

NutUI-React 坚持“一码多端”理念：

- 每个组件在 `src/packages/[component]/` 下均包含：
  - `[component].tsx`（H5 实现）
  - `[component].taro.tsx`（Taro 小程序/跨端实现）
  - `[component].scss`（双端共享样式）
  - `types.ts`（双端共享 Props 定义）
- 升级或修复组件时，**必须同时修改并验证双端代码**。

---

## 提交 PR 前的自检清单

在 GitHub 上提交 PR 之前，请核对：

1. 代码通过 `npm run checked && npm run checked:taro` 双端类型检查；
2. 单元测试全部通过（`npx vitest run src/packages/[component]`）；
3. 组件 SCSS 源码保持裸 `px`（未手动书写 `scale-px(0px)`）；
4. 未引入未授权的重型依赖包；
5. PR 模板中的各项自查清单已完整勾选。
