# Indicator 指示器

显示一个任务或流程的进度，常用于开通流程。

## 引入

```tsx
import { Indicator } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 白色

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 类型

支持三种类型：锚点指示器（anchor，2-6页）、滑动指示器（slide，2-11页）、双屏指示器（dualScreen，固定2页）。

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 自定义节点

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义颜色大小

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 竖向展示

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 定位布局

支持将指示器放置在内容模块外部或内部的不同位置。内部定位（inside-\*）时需要父容器设置 `position: relative`。

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## Indicator

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页 | `number` | `0` |
| total | 总页数 | `number` | `2` |
| direction | 方向，默认为水平方向 | `horizontal` \| `vertical` | `horizontal` |
| color | 颜色 | `primary` \| `default` | `primary` |
| type | 交互类型 | `anchor` \| `slide`\| `dualScreen` | `anchor` |
| placement | 定位布局 | `outside` \| `inside-top-right` \| `inside-bottom-center` \| `inside-bottom-left` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦点时色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默认色值 | `$color-border` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `4px` |
| \--nutui-indicator-dot-active-size | 指示器焦点时尺寸 | `8px` |
| \--nutui-indicator-border-radius | 指示器焦点时的border值 | `$radius-xxs` |
| \--nutui-indicator-dot-margin | 指示器横向时的margin值 | `$spacing-xxs` |
| \--nutui-indicator-dot-border | 指示器内描边 | `0.33px solid $color-border` |
| \--nutui-indicator-dot-inactive-color | 指示器非焦点时的填充色 | `var(--nutui-color-background-component, #f0f2f7)` |
| \--nutui-indicator-track-width | 滑动指示器轨道宽度 | `24px` |
| \--nutui-indicator-slider-width | 滑动指示器滑块宽度 | `8px` |
| \--nutui-indicator-dual-screen-inactive-width | 双屏指示器非焦点时宽度 | `16px` |
| \--nutui-indicator-placement-gap | 定位布局与内容的间距 | `8px` |
| \--nutui-indicator-placement-safe-gap | 外部定位时与下方模块的安全间距 | `12px` |

<Contribution name="Indicator" />
