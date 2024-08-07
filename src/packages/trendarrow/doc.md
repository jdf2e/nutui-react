# TrendArrow 指标趋势

带有箭头指示的百分比数字,用以展示指标趋势

## 引入

```tsx
import { TrendArrow } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 改变文字颜色

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 指定小数位

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 箭头在前面

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 显示正负号

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 是否展示0

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定义图标

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## TrendArrow

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 数值，大于0时箭头向上，小于0时箭头向下 | `number` | `-` |
| digits | 小数位精度 | `number` | `2` |
| symbol | 是否显示加减号 | `boolean` | `false` |
| zero | 是否显示 0 | `boolean` | `false` |
| left | 是否在数字左侧显示箭头 | `boolean` | `false` |
| sync | 文字颜色是否与箭头同步 | `boolean` | `true` |
| color | 文字颜色 | `string` | `#333333` |
| riseColor | 向上箭头颜色 | `string` | `#fa2c19` |
| dropColor | 向下箭头颜色 | `string` | `#64b578` |
| riseIcon | 自定义向上箭头icon | `React.ReactNode` | `<TriangleUp/>` |
| dropIcon | 自定义向下箭头icon | `React.ReactNode` | `<TriangleDown/>` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | 指标趋势的文字大小 | `14px` |
| \--nutui-trendarrow-icon-margin | 指标趋势的文字与图标间距 | `4px` |
