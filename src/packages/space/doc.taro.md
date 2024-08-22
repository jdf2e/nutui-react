# Space组件

#

元素排列中保持相同的宽度。

### 引入

```tsx
import { Space } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 换行

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 垂直

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 间距大小

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 主轴对齐方式

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 交叉轴对齐方式

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Space

### Props

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | `'vertical'｜ 'horizontal'` | `'horizontal'` |
| align | 交叉轴对齐方式 | `'start'｜'end'｜'center'｜'baseline'` | `-` |
| justify | 主轴对齐方式 | `'start' ｜ 'end' ｜ 'center' ｜ 'between' ｜ 'around' ｜ 'evenly' ｜ 'stretch'` | `-` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | 间距大小 |
