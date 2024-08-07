# Loading 加载中

#

加载图标，用于显示正在加载中的状态

### 引入

```tsx
import { Loading } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义大小

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 带文字

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 带文字(竖向排列)

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义文字颜色和大小

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 自定义图标

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 与遮罩层结合

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Loading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | loading图标的样式 | `circular \| spinner` | `circular` |
| direction | loading图标和文字的排列方式 | `horizontal \| vertical` | `horizontal` |
| icon | 自定义loading的图标 | `tsx.Element` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-loading-icon-color | icon色值 | `$color-text-help` |
| \--nutui-loading-icon-size | icon大小 | `$font-size-small` |
| \--nutui-loading-color | 文本色值 | `$color-text-help` |
| \--nutui-loading-font-size | 文本字号 | `$font-size-small` |
