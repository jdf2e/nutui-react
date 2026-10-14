# Tabbar 标签栏

Tabbar 用于底部导航，导航背板默认左右各留 12px、四周内边距为 4px，并使用跟随高度的全圆角，组件外层背景透明。

## 引入

```tsx
import { Tabbar } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 徽标提示

通过 `dot` 或 `value` 可以在标签图标上展示红点、数字或文字徽标，普通图标使用组件默认定位，营销图片可通过业务样式调整徽标位置。

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 只配图标

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 只配文字

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 首坑品牌+营销态

此示例展示营销图片上的红点、数字和文字徽标，通过 `title(active)` 控制图片下方的文案，并使用 `badge-demo.scss` 调整图片徽标的位置。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义颜色+数量

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 再次点击当前项支持回调

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 固定底部与返顶

`fixed` 用于固定底部导航，传入 `fixed` 或 `safeArea` 时会渲染底部安全区；导航层默认高度为 52px，安全区高度取 `env(safe-area-inset-bottom)`，并可通过 `--nutui-safe-area-multiple` 调整。

返顶示例从 `ScrollView` 的 `onScroll` 读取滚动位置，在首页选中且滚动达到 160px 后切换图标，再次点击首页时通过 `scrollTop` 和 `scrollWithAnimation` 滚动同一容器；`icon(active)`、`onActiveClick` 和滚动状态由调用方组合，无需新增 Tabbar 属性。

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### addonBefore 前置入口

通过 `addonBefore` 传入 Taro `Image` 或自定义节点，组件默认提供右侧两角为全圆角的 52×52px 定位容器，并裁切超出容器的内容。

图片、外观和点击行为由调用方实现；`addonBefore` 不占用标签索引，点击时不会触发 `onSwitch`。

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 毛玻璃材质

Tabbar 默认使用 `MaterialView` 的 `bottom-bar` 场景作为导航背板，设置 3px 模糊和透明度为 80% 的叠加色；背板为全圆角，组件外层和底部安全区保持透明。

Taro 背板的明暗由 `MaterialView` 根据系统主题决定，页面背景建议延伸到安全区；实际模糊效果取决于目标运行环境。

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

### 换肤背板

传入 `skinBackground` 后，自定义内容会替代默认的 `MaterialView` 背板；组件负责背板裁切、全圆角和导航项层级，图片及专属定位由调用方实现。

可以通过 `icon(active)` 根据选中状态切换图标图片。

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

## Tabbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的标签的索引值 | `number` | `0` |
| value | 选中的标签的索引值 | `number` | `-` |
| fixed | 是否固定在页面底部，开启时会渲染底部安全区 | `boolean` | `false` |
| activeColor | 选中项颜色，留空时由主题样式决定 | `string` | `''` |
| inactiveColor | 未选中项颜色，留空时由主题样式决定 | `string` | `''` |
| direction | 排列方向，恰好两个标签时可设为横向 | `'vertical' \| 'horizontal'` | `'vertical'` |
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
| onActiveClick | 再次点击当前选中项时触发 | `() => void` | `-` |

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
| \--nutui-tabbar-box-shadow | 阴影 | `none` |
| \--nutui-tabbar-text-font-size | 标题字体大小 | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | 无图标时标题字体大小 | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | 无图标时标题字体粗细 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字体行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 标题上外边距 | `4px` |

<Contribution name="Tabbar" />
