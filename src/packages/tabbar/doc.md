# Tabbar 标签栏

底部导航常用场景。导航背板左右各留 12px、内部四周留 4px，使用 16px 圆角；组件外层保持透明。

## 引入

```tsx
import { Tabbar } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 徽标提示

图标内容支持红点、数字和文字招手。设计标注以图标左下角为基准：红点的左/下偏移为 19/14 DP，数字与文字为 15/14 DP。外框向四周各扩 1px 后，CSS 外框偏移分别为 18/13 和 14/13 DP，保持原视觉位置。红点内部为 6×6px、含边框外径为 8×8px；数字与文字标签外高 14px（含上下各 1px 边框）、字号 9px、行高 12px、圆角 8px、左右内边距各 3px。横向布局下，文字盒宽、高各增加 1px，标签外高相应为 15px，并保持与内容水平居中。逛一逛的文字招手示例使用最多四个字。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 只配图标

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 只配文字

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 首坑品牌+营销态

同一组示例展示营销图片上的红点、数字和文字招手。设计标注以图片左下角为基准：红点的左/下偏移为 28/32 DP，数字与文字为 24/32 DP；扣除外框各侧 1px 后，CSS 外框偏移分别为 27/31 和 23/31 DP。图片下方不显示文案。图片徽标的位置由示例专用样式 `badge-demo.scss` 控制，切换图片与图标时按选中态调整样式。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义颜色+数量

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 再次点击当前项支持回调

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 固定底部与返顶

`fixed` 或 `safeArea` 开启时，底部安全区使用系统 `env(safe-area-inset-bottom)`。组件总高为 52px 加设备实际安全区，不固定为 69px 或 74px。

该示例沿用固定底部导航。示例页向 `demo9` 传入当前页面滚动位置；页面滚动超过 160px（仅为演示阈值）且首页已选中时，首页图标切换为返顶图标。点击其他项后首次点击首页只切换选中；再次点击已选中的首页才将同一页面滚动容器平滑滚回顶部。返顶由调用方组合 `icon(active)`、`onActiveClick` 和页面滚动状态实现，不需要新的 Tabbar 属性。标题“首页”是示例用语。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### addonBefore 前置入口

通过 `addonBefore` 传入图片或自定义节点。组件只提供 52×52px 的定位容器，图片、外观和点击行为由调用方负责；`addonBefore` 不参与普通标签的索引，也不触发 `onSwitch`。示例使用设计稿 `1545:72` 导出的 132×132px 透明 PNG，图片居中覆盖源盒，包含阴影，点击只打印控制台日志。

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 毛玻璃材质

Tabbar 默认使用 `MaterialView` 的 `bottom-bar` 材质作为 52px 导航背板：3px 模糊、80% 明暗叠加色，并将可见背板圆角设为 16px。明暗跟随 `MaterialView` 的系统主题处理。外层和 SafeArea 保持透明，页面背景应延伸到安全区。示例在竖向彩色背景图上展示 `addonBefore` 内容与半透明背板。各端实际视觉效果以 `MaterialView` 的目标运行时能力为准。

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 换肤背板

传入 `skinBackground` 后，背板内容替代默认的 `MaterialView` 材质。组件负责背板裁剪、16px 圆角与导航项层级；示例图片、图标选中态和专属定位均在 demo 中实现。`icon(active)` 可根据选中状态切换图片。

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Tabbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的标签的索引值 | `number` | `0` |
| value | 选中的标签的索引值 | `number` | `-` |
| fixed | 是否固定在页面底部，为 true 时默认开启 safeArea | `boolean` | `false` |
| activeColor | icon激活的颜色 | `string` | `#0073ff` |
| inactiveColor | icon未激活的颜色 | `string` | `#7d7e80` |
| safeArea | 是否开启iphone系列全面屏底部安全区适配 | `boolean` | `false` |
| skinBackground | 自定义换肤背板内容，传入时替代默认材质 | `ReactNode` | `-` |
| addonBefore | 前置入口内容，图片与点击由调用方提供 | `ReactNode` | `-` |
| onSwitch | 切换页签时触发事件 | `(value) => void` | `-` |

## Tabbar.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标签页的标题 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| icon | 自定义图标 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| value | 徽标中显示的内容，支持数字、字符和自定义内容 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| max | value 为数值时，最大值 | `number` | `99` |
| dot | 徽标是否为小点 | `boolean` | `false` |
| top | 徽标的上下偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |
| right | 徽标的左右偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |
| onActiveClick | 用于处理当元素处于焦点时，再次点击时可增加自定义事件。 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tabbar-height | 导航层高度 | `52px` |
| \--nutui-tabbar-addon-before-source-size | `addonBefore` 定位容器尺寸 | `52px` |
| \--nutui-tabbar-addon-before-gap | `addonBefore` 与导航背板间距 | `8px` |
| \--nutui-tabbar-addon-before-outset | `addonBefore` 向外侧抽缩距离 | `16px` |
| \--nutui-tabbar-content-height | 内容层高度 | `44px` |
| \--nutui-tabbar-horizontal-padding | 导航层左右间距 | `12px` |
| \--nutui-tabbar-content-padding | 导航背板内边距 | `4px` |
| \--nutui-tabbar-border-radius | 导航背板圆角 | 全圆角（跟随导航高度） |
| \--nutui-tabbar-active-background | 选中项背景 | `var(--nutui-color-background-component)` |
| \--nutui-tabbar-active-border-radius | 子项圆角 | 全圆角（跟随子项高度） |
| \--nutui-tabbar-active-color | 选中颜色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未选中颜色 | `$color-title` |
| \--nutui-tabbar-border-top | 上边框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下边框 | `1px solid #eee` |
| \--nutui-tabbar-text-font-size | 标题字体大小 | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | 无图标时标题字体大小 | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | 无图标时标题字体粗细 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字体行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 标题上外边距 | `4px` |

<Contribution name="Tabbar" />
