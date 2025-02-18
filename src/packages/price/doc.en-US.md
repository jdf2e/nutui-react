# Price

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

## Import

```tsx
import { Price } from '@nutui/nutui-react'
```

## Demo

### Support sizes：small、normal、large、xlarge

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Field classification: atomic, module, list, page

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

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
| color | Price type | `primary` \| `gray` \| `darkgray` | `primary` |
| price | Price | `number` | `0` |
| symbol | Symbol type | `string` | `&yen;` |
| digits | Decimal digits | `number` | `2` |
| thousands | Thousands separation | `boolean` | `false` |
| position | The symbol appear before or after the price，`before`、`after` | `string` | `before` |
| size | Size，`xlarge` \| `large` \| `normal` \| `small` | `string` | `large` |
| line | Line-through price | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-price-primary-color | Text color when type is primary | `#ff0f23` |
| \--nutui-price-color | Text color when type is gray | `#888b94` |
| \--nutui-price-darkgray-color | Text color when type is darkgray | `#1a1a1a` |
| \--nutui-price-line-color | Underline price color | `#888b94` |
| \--nutui-price-symbol-padding-right | Right padding of symbol | `0px` |
| \--nutui-price-symbol-xlarge-size | xlarge size symbol font size | `12px` |
| \--nutui-price-integer-xlarge-size | xlarge size integer part font size | `24px` |
| \--nutui-price-decimal-xlarge-size | xlarge size decimal part font size | `12px` |
| \--nutui-price-symbol-large-size | large size symbol font size | `12px` |
| \--nutui-price-integer-large-size | large size integer part font size | `18px` |
| \--nutui-price-decimal-large-size | large size decimal part font size | `12px` |
| \--nutui-price-symbol-normal-size | normal size symbol font size | `12px` |
| \--nutui-price-integer-normal-size | normal size integer part font size | `16px` |
| \--nutui-price-decimal-normal-size | normal size decimal part font size | `12px` |
| \--nutui-price-symbol-small-size | small size symbol font size | `12px` |
| \--nutui-price-integer-small-size | small Size integer part font size | `12px` |
| \--nutui-price-decimal-small-size | small Size decimal part font size | `12px` |
