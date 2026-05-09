# Agent Skill: NutUI-React Accessibility (A11y) Adaptation

本技能库指导 AI 助手如何根据 NutUI-React 的多端架构（Web & Taro）进行精准的无障碍适配。

## 1. 环境感知与属性规范 (Context & Convention)

AI 必须根据当前编辑的文件后缀切换属性命名风格：

| 平台 | 文件后缀 | 属性格式 | 示例 |
| --- | --- | --- | --- |
| **Web H5** | `*.tsx` | **Kebab-case** | `aria-label`, `aria-disabled` |
| **Taro** | `*.taro.tsx` | **CamelCase** | `ariaLabel`, `ariaDisabled` |

---

## 2. 核心适配规则 (Core Rules)

### 2.1 状态映射逻辑

自动将组件的逻辑状态映射到无障碍状态：

- **选中状态**:
  - Web: `aria-checked={checked}`
  - Taro: `ariaChecked={checked}`
- **禁用状态**:
  - Web: `aria-disabled={disabled || loading}`
  - Taro: `ariaDisabled={disabled || loading}`
- **忙碌/加载状态**:
  - Web: `aria-busy={loading}`
  - Taro: `ariaBusy={loading}`

### 2.2 角色显式声明 (Roles)

交互式容器或承载特定功能的组件必须声明 `role` (Web) 或 `ariaRole` (Taro)：

- **Button**: `role="button"` / `ariaRole="button"`
- **Dialog/Popup**: `role="dialog"` / `ariaRole="dialog"` + `aria-modal="true"` / `ariaModal={true}`
- **TabItem**: `role="tab"` / `ariaRole="tab"`

### 2.3 视觉隐藏处理

- **装饰性元素**: Icon、装饰线等对视障用户无意义的元素必须隐藏。
  - Web: `aria-hidden="true"`
  - Taro: `ariaHidden` (Boolean 属性)

### 2.4 图标治理决策树 (Icon Strategy)

治理图标时，必须识别其在上下文中的角色：

1. **装饰性 (Icon + Text)**:
   - **场景**：图标旁边有力所能及的文字说明。
   - **规则**：彻底隐藏图标，避免信息重复。
   - **实现**：`<Icon aria-hidden="true" />`。
2. **交互式 (Standalone Icon as Button)**:
   - **场景**：图标是唯一的点击入口（如关闭按钮、搜索提交）。
   - **规则**：**容器承载语义，内部图标隐藏**。
   - **实现**：
     ```tsx
     <span role="button" aria-label="搜索" tabIndex={0}>
       <Search aria-hidden="true" />
     </span>
     ```
3. **语义化 (Standalone Icon as Status)**:
   - **场景**：图标独立表示某种状态（如“成功/失败”徽标）。
   - **规则**：图标直接承载语义，**严禁使用 aria-hidden**。
   - **实现**：`<Icon aria-label="已完成" />`。

---

## 3. 实现范式 (Implementation Patterns)

### 3.1 Web H5 示例 (`button.tsx`)

```tsx
<button
  className={classes}
  aria-disabled={disabled || loading}
  aria-busy={loading}
  aria-label={props['aria-label'] || props.ariaLabel}
>
  <div className="nut-button-wrap" aria-hidden="true">
    {icon}
    <span>{children}</span>
  </div>
</button>
```

### 3.2 Taro 示例 (`button.taro.tsx`)

```tsx
<View
  className={classes}
  ariaRole="button"
  ariaDisabled={disabled || loading}
  ariaBusy={loading}
  ariaLabel={props.ariaLabel}
>
  <View className="nut-button-wrap">
    <View ariaHidden>{icon}</View>
    <View>{children}</View>
  </View>
</View>
```

---

## 4. 键盘与焦点管理 (Keyboard & Focus)

- **Tab 键支持**: 确保通过原生标签或 `tabIndex={0}` 使元素可聚焦。
- **Esc 交互**: 弹出层必须支持 Esc 键触发 `onClose`。
- **焦点捕获**: 复杂弹出层（Modal/Drawer）应引导用户使用 `FocusTrap` 逻辑或在文档中提示焦点管理。

## 5. 校验清单 (A11y Reviewer)

AI 在生成的代码中必须自检：

1. [ ] 所有的图片/图标是否有 `alt` 或 `aria-hidden`？
2. [ ] 无文字的按钮是否强制要求了 `aria-label`/`ariaLabel`？
3. [ ] 状态（Disabled/Busy）是否双向绑定到 ARIA？
4. [ ] 弹出层是否设置了 `role="dialog"` 和 `modal` 标记？

## 6. 自动化治理工具 (Automation Tools)

项目提供了一个统一的自动化修复脚本 `scripts/a11y-governance.mjs`，该脚本集成了属性映射、图标隐藏与语法修复功能。

### 脚本功能：

- **图标安全隐藏**: 自动为 Web/Taro 端的图标添加隐藏属性，具备组件识别过滤机制（自动避开 SearchBar 等）。
- **多端属性对齐**: 自动将 `.taro.tsx` 文件中的 `aria-*` 转换为驼峰式规范。
- **语法自动修复**: 修复 JSX 中的语法瑕疵，并保护箭头函数不受损。

### 使用建议：

- 在开展新批次治理前运行：
  ```bash
  /usr/local/bin/node scripts/a11y-governance.mjs
  ```
- AI 在生成代码时，应参考该脚本的逻辑，确保装饰性图标默认隐藏，交互式图标通过容器承载语义。
- AI 在生成新组件代码时，应参考该脚本的逻辑，确保图标默认携带隐藏属性，除非该图标具有独立的交互功能。
