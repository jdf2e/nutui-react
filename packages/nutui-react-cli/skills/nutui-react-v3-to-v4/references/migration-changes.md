# 已知不兼容更新与兼容升级

来源与版本核对规则见 [主文档「支撑工具」](../SKILL.md#支撑工具)。

## Empty —— 枚举值 + 默认值 + 类名，全部不兼容

- `size`：移除 `base`/`small`，改为 `full`/`half`/`partial`；**默认值 `base` → `half`**。
  - `size="base"` → 整页用 `full`、局部用 `partial`；`size="small"` → `half`。
- `status`：移除 `empty`/`error`；**默认值 `empty` → `network`**。
  - `status="empty"` → `search`（或按场景选枚举）；`status="error"` → `network`（或用 `image` 传自定义插图）。
- CSS 类名：`.nut-empty-base`/`.nut-empty-small` → `.nut-empty--full`/`--half`/`--partial`；插图容器 → `.nut-empty-image`。
- token：旧 `--nutui-empty-image-size` 等已移除，改用分尺寸变量。

## Popover —— 默认值 + 类名，不兼容

- 新增 `type`（`status`/`description`），默认 `status`。
- **`theme` 默认值 `light` → `dark`**：v3 默认明亮风格的，需显式加 `theme="light"`；v3 写 `theme="dark"` 的可移除该属性。
- CSS 类名：移除 `.nut-popover-dark`（深色已是默认）；明亮风格用 `.nut-popover-light`。
- token：多个 `--nutui-popover-*` 默认值调整。

## Toast —— 默认值 + 类名

- **默认 `duration` `2s` → `3s`**：要维持 2s 显式传 `duration: 2` 或全局 `Toast.config({ duration: 2 })`。
- 移除拼错的辅助类名 `.nut-toast-inner-descrption`（**无替代类名**，若有针对它的样式覆盖需删除/改到 `.nut-toast-inner`）。

## Radio / Checkbox —— 纯样式

- Radio：无文本时热区调整（新增 `.nut-radio-nolabel`）、去除选中投影。
- Checkbox：暗黑模式色彩修复。
- 一般无需改代码，但如有相关样式覆盖需核对。

## ResultPage —— 类型入口 + 视觉 / token

- 文档记录移除库内 `src/packages/resultpage/types.ts`，统一由库内 `@/types` 提供 `ResultPageStatus`、`ResultPageAction`、`ResultPageProps`。业务侧如有深层导入，应核对目标版本的公开类型导出；不要把库内 `@/types` 别名直接复制到业务项目。
- 描述默认居中，H5 失败图标色对齐 `$color-primary`；图标、标题、描述和操作区间距调整，新增标题行高 token。
- 不提供 v3 Props 别名，已有样式覆盖需复核。

## Skeleton —— 默认值 + 视觉 / token

- **`duration` 默认 `0.6` → `0.4`**；需要保留原节奏时显式传 `duration={0.6}`。
- `large` 高度 `32px` → `28px`，`normal` `24px` → `20px`，`small` 保持 `16px`。
- 背景 token 回退改为 `$color-background`，光晕改为白色斜向光带，核对动画与暗黑模式。

## CountDown —— Props 移除 / 新增 + 回调行为

- **移除 `millisecond`**：删除业务侧传参，精度由 `format` 中的 `i` / `S` / `SS` / `SSS` 决定。
- **到零仅触发 `onEnd`，不再同时触发 `onPaused`**：检查依赖结束时暂停回调的逻辑。
- 新增百毫秒格式 token `i`（`ss.i` 同块渲染）及可选 `refreshInterval`；不传后者时仍按格式最细单位更新。
- `type` 仍是 `default` / `primary` / `text`，**没有改名**；视觉规格调整需复核。

## Price —— 兼容新增 + 视觉

- 新增 `size="medium"`，调整 `xlarge` / `large` 字号及各档字体、颜色；原有尺寸用法无需因新增档位改写。
- 新增 `raw`：开启且价格含非法字符时按原文展示；未开启时仍保留无法安全格式化字符串的原样输出行为。

## Range —— 视觉 / token + DOM 结构

- 游标 `24px` → `20px`，边框、投影、未激活与禁用色令牌变化；禁用态不再使用整体透明度。
- `currentDescription` 改为气泡；`.nut-range-button-number` 内新增 `.nut-range-button-number-body` 与 `.nut-range-button-number-arrow`，检查旧覆盖。
- 范围文字、刻度字号及尺寸调整，需核对横向、纵向与禁用态。

## ActionSheet —— 行为 + 类名 / token + 兼容新增

- **`position` 开始生效**：原先被忽略的传值可能改变弹出位置；依赖旧行为时移除误传值，默认仍为 `bottom`。
- **`optionKey` 默认新增 `icon: 'icon'`**：已有数据中的 `icon` 会触发左对齐图标列表；不需要时映射到其它字段或清理该字段。
- 头部 `.nut-popup-title*` 改为 `.nut-actionsheet-header*`，按标题、描述对应迁移覆盖。
- 移除 `--nutui-actionsheet-border-color`，改用 `--nutui-actionsheet-item-border-bottom`；后者默认 `none` → `$color-border`，需保留无分隔线时设为 `none`。
- 列表及取消按钮间距、行高变化；顶部弹出、`layout="grid"`、`columns`（`4` / `5`，默认 `5`）及头部/关闭相关 Props 属新增能力，按需采用。

## NavBar —— token 移除 / 默认值 + 兼容新增

- 删除无实际作用的 `--nutui-navbar-margin-bottom` 声明，无需替代。
- **背景默认白色 → 透明**：依赖白底时显式设置 `--nutui-navbar-background` 或外层背景。
- 内边距、左右区域宽度变量化，部分主题标题字号统一为 `18px`；新增 `subBar` 为可选二级楼层，不传无需改写。

## Cell —— 类名 + 布局行为 + 兼容新增

- **`.nut-cell-left` → `.nut-cell-body`**，迁移自定义覆盖。
- **内边距 `13px 16px` → `16px`**；需保留旧高度时显式设置 `--nutui-cell-padding: 13px 16px`。
- **标题改为单行省略、右侧按内容宽度占位**：核对长标题 / 长右侧内容；需要多行时自定义标题节点并覆盖截断样式。
- 新增 `leading`、`content` 为可选能力；传入 `content` 后 `description` 改为通栏展示，不能当作无布局影响的替换。
