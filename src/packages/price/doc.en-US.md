# Price

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

## Import

```tsx
import { Price } from '@nutui/nutui-react'
```

## Demo

### Support three sizes：small、normal、large

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### No decimals

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### With RMB symbol, no thousands separator

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### With RMB symbol, separated by thousands, keep three decimal places

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Adjust the symbol position

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Do not display a symbol

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Asynchronous random changes

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Line-through price

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Price

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| price | Price | `number` | `0` |
| symbol | Symbol type | `string` | `&yen;` |
| digits | Decimal digits | `number` | `2` |
| thousands | Thousands separation | `boolean` | `false` |
| position | The symbol appear before or after the price，`before`、`after` | `string` | `before` |
| size | Size，`large`、`normal`、`small` | `string` | `large` |
| line | Line-through price | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-price-symbol-big-size | large Size Symbol font size | `18px` |
| \--nutui-price-integer-big-size | large Size Integer partial font size | `24px` |
| \--nutui-price-decimal-big-size | large Size Size of the decimal part of the font | `18px` |
| \--nutui-price-symbol-medium-size | normal Size Symbol font size | `14px` |
| \--nutui-price-integer-medium-size | normal Size Integer partial font size | `16px` |
| \--nutui-price-decimal-medium-size | normal Size Size of the decimal part of the font | `14px` |
| \--nutui-price-symbol-small-size | small Size Symbol font size | `10px` |
| \--nutui-price-integer-small-size | small Size Integer partial font size | `12px` |
| \--nutui-price-decimal-small-size | small Size Size of the decimal part of the font | `10px` |
| \--nutui-price-line-font-size | Line-through price Font size | `10px` |
| \--nutui-price-line-color | Line through price color | `#757575` |
| \--nutui-price-symbol-padding-right | Symbol padding right | `1px` |
