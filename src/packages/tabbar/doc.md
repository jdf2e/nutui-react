# Tabbar 标签栏

底部导航常用场景。导航背板左右各留 12px、内部四周留 4px，以 16px 圆角矩形和悬浮阴影承载内容；组件外层保持透明。

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

### 焦点时点击（模拟双击）支持回调

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 固定底部

`fixed` 或 `safeArea` 开启时，底部安全区使用系统 `env(safe-area-inset-bottom)`。组件总高为 52px 加设备实际安全区，不固定为 69px 或 74px。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Agent 组合入口

通过 `agent` 传入图片或自定义节点。组件只提供 52×52px 的定位容器，图片、外观和点击行为由调用方负责；Agent 不参与普通标签的索引，也不触发 `onSwitch`。示例使用设计稿 `1545:72` 导出的 132×132px 透明 PNG，图片居中覆盖源盒，包含阴影，点击只打印控制台日志。

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

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
| agent | 独立 Agent 入口内容，图片与点击由调用方提供 | `ReactNode` | `-` |
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
| \--nutui-tabbar-agent-source-size | Agent 定位容器尺寸 | `52px` |
| \--nutui-tabbar-agent-gap | Agent 与导航背板间距 | `8px` |
| \--nutui-tabbar-agent-outset | Agent 向外侧抽缩距离 | `16px` |
| \--nutui-tabbar-content-height | 内容层高度 | `44px` |
| \--nutui-tabbar-horizontal-padding | 导航层左右间距 | `12px` |
| \--nutui-tabbar-content-padding | 导航背板内边距 | `4px` |
| \--nutui-tabbar-background | 导航背景 | `$color-background-overlay` |
| \--nutui-tabbar-border-radius | 导航背板圆角 | `16px` |
| \--nutui-tabbar-active-background | 选中项背景 | `#F0F2F7` |
| \--nutui-tabbar-active-border-radius | 选中项圆角 | `12px` |
| \--nutui-tabbar-active-color | 选中颜色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未选中颜色 | `$color-title` |
| \--nutui-tabbar-border-top | 上边框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下边框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 导航背板阴影 | `0 0 6px 0 rgba(0, 0, 0, 0.1)` |
| \--nutui-tabbar-text-font-size | 标题字体大小 | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | 无图标时标题字体大小 | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | 无图标时标题字体粗细 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字体行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 标题上外边距 | `4px` |

<Contribution name="Tabbar" />
