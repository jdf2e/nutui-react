# Price 价格

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

## 引入

```tsx
import { Price } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法 small normal large

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 不保留小数

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 有人民币符号，无千位分隔

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 带人民币符号，有千位分隔，保留小数点后三位

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 调整 symbol 符号位置

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 不展示 symbol 符号

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 异步随机变更

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 划线价

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Price

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 价格数量 | `number` | `0` |
| symbol | 符号类型 | `string` | `&yen;` |
| digits | 小数位位数 | `number` | `2` |
| thousands | 是否按照千分号形式显示 | `boolean` | `false` |
| position | 符号显示在价格前或者后，`before`、`after` | `string` | `before` |
| size | 价格尺寸，`large`、`normal`、`small` | `string` | `large` |
| line | 是否划线价 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-price-symbol-big-size | large 尺寸符号字体大小 | `18px` |
| \--nutui-price-integer-big-size | large 尺寸整数部分字体大小 | `24px` |
| \--nutui-price-decimal-big-size | large 尺寸小数部分字体大小 | `18px` |
| \--nutui-price-symbol-medium-size | normal 尺寸符号字体大小 | `14px` |
| \--nutui-price-integer-medium-size | normal 尺寸整数部分字体大小 | `16px` |
| \--nutui-price-decimal-medium-size | normal 尺寸小数部分字体大小 | `14px` |
| \--nutui-price-symbol-small-size | small 尺寸符号字体大小 | `10px` |
| \--nutui-price-integer-small-size | small 尺寸整数部分字体大小 | `12px` |
| \--nutui-price-decimal-small-size | small 尺寸小数部分字体大小 | `10px` |
| \--nutui-price-line-font-size | 划线价字体大小 | `10px` |
| \--nutui-price-line-color | 划线价颜色 | `#757575` |
| \--nutui-price-symbol-padding-right | 符号的右内边距 | `1px` |
