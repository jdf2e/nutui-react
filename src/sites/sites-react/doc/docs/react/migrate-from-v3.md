# 从 v3 升级到 v4

本文档将帮助您从 NutUI React `3.x` 升级到 NutUI React `4.x` 版本。

## 升级步骤

1. H5 安装 NutUI React 4.x 版本

```shell
npm install @nutui/nutui-react
```

2. Taro 安装 NutUI React 4.x 版本

```shell
npm install @nutui/nutui-react-taro
```

---

## 不兼容更新与兼容升级说明

### Toast (操作反馈)

- **默认显示时长调整**：默认显示时长（`duration`）由 `2s` 调整为 `3s`。如果您的项目需要维持原有 2s 行为，请在调用时显式传入 `duration: 2`，或通过全局 `Toast.config({ duration: 2 })` 进行配置。
- **宽度与最大宽度边界对齐**：
  - 移除了历史版本在有内容时强制应用的 `max-width: 68.2%` 规则，使得 Toast 宽度不再被视口宽度比例过度干预。
  - **说明型（纯文本）**：最小宽度限制为 `88px`，最大宽度限制为 `200px`。
  - **状态型（带图标/标题）**：最小宽度限制为 `97px`，最大宽度限制为 `225px`。
- **图标及纵向间距调整**：
  - 状态型 Toast 内的图标容器从原来的 `24x24` 缩小为 `20x20`。
  - 重置了图标的外边距（margin 为 0），并增加了上下各 `10px` 的 padding，以完美契合新设计中纵向 0px 的元素间距。
- **历史类名移除（不兼容变更）**：
  - 彻底移除了在有文本内容时向组件容器追加的、带有拼写错误的辅助类名 `.nut-toast-inner-descrption`。由于本次大版本升级已将宽度规范限制直接定义在 `.nut-toast-inner` 容器的主类名上，该辅助类名已不再有任何作用，因此直接删除，不再提供替代类名。
- **引入字重主题变量**：
  - 标题和内容字重不再被硬编码，现已支持 CSS 主题变量定制：
    - 标题字重：`var(--nutui-toast-title-font-weight, 600)`
    - 文字字重：`var(--nutui-toast-text-font-weight, 400)`

### Radio (数据录入)

- **无文本热区与偏心优化**：
  - 移除了在没有 `children` 时依然渲染空 Label 标签的逻辑，消除了 `margin-left` 对纯图标造成的偏心影响。
  - 无文本内容时会追加 `.nut-radio-nolabel` 修饰类，将纯图标的触控热区扩展为不低于 `32x32px`，并在该热区内水平垂直完全居中。
- **去除选中态投影**：移除了单选框选中时的红色投影效果（设置 `box-shadow: none`），使视觉呈现更为平整扁平。

### Checkbox (数据录入)

- **暗黑模式修复与设计稿适配**：
  - 修复并适配了多选框在暗黑模式（`theme-dark`）下的背景色、勾选框边框色等异常色彩映射问题。

### Empty (反馈类)

> **v4 不提供 v3 兼容**：无 Props 别名、无运行时 fallback、无 `EmptyState` 类型别名。请按下表手动迁移。

- **`size` 枚举值变更（不兼容）**：
  - 移除 `base` / `small`，对齐 JD APP V11.0 缺省状态规范，改为 `full` / `half` / `partial` 三种尺寸。
  - 默认值由 `base` 调整为 `half`。
  - 推荐迁移映射：
    - `size="base"`（v3 默认，插图 160px）→ 整页场景用 `size="full"`，局部内嵌场景用 `size="partial"`。
    - `size="small"`（v3 插图 120px）→ `size="half"`（半屏型，插图 80px）。
- **视觉规格对齐设计稿**：
  - **全屏型 `full`**：插图 160px，标题 `$font-size-md` / 行高 24px / `#11141A`，描述 `$font-size-base` / 行高 22px / `#8D9199`，顶部间距 160px。
  - **半屏型 `half`**：插图 80px，标题 `$font-size-s` / 行高 22px，描述 `$font-size-m` / 行高 20px。
  - **局部型 `partial`**：插图 32px 横排，文案 `$font-size-m` / 行高 32px，容器 `padding: 0 16px`，图与文案间距 8px。
- **CSS 类名变更（不兼容）**：
  - 尺寸修饰类：`.nut-empty-base` / `.nut-empty-small` → `.nut-empty--full` / `.nut-empty--half` / `.nut-empty--partial`。
  - 插图容器：`.nut-empty-base` / `.nut-empty-small` → `.nut-empty-image`。
  - 操作区：`.nut-empty-actions-base` / `.nut-empty-actions-small` → `.nut-empty-actions`。
- **主题变量调整**：
  - 新增 `--nutui-empty-title-color`、`--nutui-empty-description-color` 及分尺寸变量（如 `--nutui-empty-full-image-size`）。
  - 字号默认引用 `$font-size-*` 主题 token；行高有对应 token 时引用 `$line-height-*`（如 24px、20px），其余按设计稿 px 值（如 22px、32px）。
  - 旧变量 `--nutui-empty-image-size`、`--nutui-empty-image-small-size`、`--nutui-empty-background-color` 已移除，请改用对应尺寸变量；组件本身为透明背景，展示区域背景由外层容器（如 `Cell`）控制。
- **`status` 枚举变更（不兼容）**：
  - 内置 8 种业务场景：`network` / `comment` / `search` / `shop` / `address` / `order` / `favor` / `cart`。
  - 移除 `empty`、`error`；默认值由 `empty` 调整为 `network`。
  - v3 → v4 推荐映射（需改代码，组件不会自动转换）：
    - `status="empty"` → `status="search"`（通用空态）或按场景选用上表枚举
    - `status="error"` → `status="network"` 或通过 `image` 传入自定义插图
  - 插图通过 CDN URL 运行时加载，映射表见 `src/types/spec/empty/base.ts`。

### Popover (反馈类)

> **v4 不提供 v3 兼容**：无 Props 别名、无 `.nut-popover-dark` 类名回退。请按下表手动迁移。

- **新增 `type` 气泡类型（不兼容默认值行为）**：
  - 新增 `type` 属性，枚举 `status`（状态型：图标 + 文案 + 关闭）/ `description`（说明型：仅文案）。
  - 默认值 `status`；说明型最大宽度 208px，状态型最大宽度 240px。
- **`theme` 默认值变更（不兼容）**：
  - 默认值由 `light` 调整为 `dark`（对齐设计规范深色气泡）。
  - **明亮风格保留**：设置 `theme="light"` 即可使用白底深字的明亮风格。
  - 推荐迁移映射：
    - v3 默认明亮风格 → 显式设置 `theme="light"`
    - v3 `theme="dark"` → v4 可移除该属性（已是默认外观）
- **视觉规格对齐设计稿**：
  - **通用**：高度 28px，字号 12px，背景 `$color-mask`，文案 `$color-primary-text`，垂直内边距 6px、水平内边距 8px。
  - **状态型**：图标/关闭 12×12、80% 透明度，关闭按钮触控热区不低于 36×36px。
  - **说明型**：仅文案，左右内边距各 8px。
- **CSS 类名变更（不兼容）**：
  - 移除 `.nut-popover-dark`；默认样式即为设计规范深色气泡。
  - 明亮风格改用 `.nut-popover-light`（`theme="light"`）。
  - 新增类型修饰类：`.nut-popover--status` / `.nut-popover--description`。
- **主题变量调整**：
  - 新增 `--nutui-popover-padding-horizontal`、`--nutui-popover-padding-vertical`、`--nutui-popover-height`、`--nutui-popover-icon-size`、`--nutui-popover-icon-color`、`--nutui-popover-status-max-width`、`--nutui-popover-description-max-width`、`--nutui-popover-action-hotspot-size`。
  - `--nutui-popover-content-background-color` 默认值由 `#ffffff` 改为 `$color-mask`；`--nutui-popover-text-color` 由 `$color-mask` 改为 `$color-primary-text`。
  - `--nutui-popover-item-width` 默认值由 `160px` 改为 `240px`（等同状态型最大宽度）。

### ResultPage (反馈类)

> **v4 不提供 v3 兼容**：无 Props 别名。请按下表手动迁移。

- **类型入口调整**：
  - 移除 `src/packages/resultpage/types.ts`，统一从 `@/types` 引入 `ResultPageStatus`、`ResultPageAction`、`ResultPageProps`。
- **视觉规格对齐 JD APP 16.0**：
  - 描述文案默认居中；失败状态图标色值 H5 端对齐 `$color-primary`（`#ff2159`）。
  - 图标与内容间距 4px；标题与描述间距 4px；描述与操作区间距 12px；操作按钮横向间距 12px（`margin: 0 6px`）。
  - 标题：`$font-size-md` / 行高 24px；描述行高 22px。
- **主题变量调整**：
  - 新增 `--nutui-resultpage-title-line-height`。
  - `--nutui-resultpage-icon-margin-bottom` 默认 `12px` → `4px`；`--nutui-resultpage-title-margin-bottom` `12px` → `4px`；`--nutui-resultpage-title-font-size` `$font-size-xl` → `$font-size-md`；`--nutui-resultpage-description-line-height` `20px` → `22px`；`--nutui-resultpage-actions-margin-top` `16px` → `12px`。
