# Skeleton 骨架屏组件

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

## 引入

```tsx
import { Skeleton } from '@nutui/nutui-react-taro'
```

## 示例代码

### 标题

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 正文

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 模拟头像

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 标题段落

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 显示子组件

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

## Skeleton

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示骨架屏(true不显示骨架屏，false显示骨架屏) | `boolean` | `true` |
| animated | 是否开启骨架屏动画 | `boolean` | `false` |
| size | 指定使用的内置高度 | `'small' \| 'normal' \| 'large'` | `normal` |
| shape | 设置形状 | `'square' \| 'round' \| 'circle'` | `round` |
| duration | 动画时长 | `number` | `0.6` |
| rows | 设置行数 | `number` | `1` |
| width | 设置宽度，优先级高于 `size` 属性 | `string\|number` | `-` |
| height | 设置高度，优先级高于 `size` 属性 | `string\|number` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-skeleton-background | 背景 | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | 线条宽度 | `100%` |
| \--nutui-skeleton-line-small-height | 线条高度 | `16px` |
| \--nutui-skeleton-line-normal-height | 线条高度 | `24px` |
| \--nutui-skeleton-line-large-height | 线条高度 | `32px` |
| \--nutui-skeleton-line-border-radius | 线条边框圆角 | `4px` |

<Contribution name="Skeleton" />
