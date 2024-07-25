# ActionSheet

Action menu panel that pops up from the bottom.

## Import

```tsx
import { ActionSheet } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Show Cancel Button

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Display Description Information

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Option Status

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom content

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom key

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## ActionSheet

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Mask layer visible | `boolean` | `false` |
| title | Set panel title | `string` | `-` |
| description | Set panel subtitle/description | `string` | `-` |
| cancelText | Cancel Text | `string` | `Cancel` |
| options | Menu Item | `Array` | `[]` |
| optionKey | Menu Item Custom key | `{ [key: string]: string }` | `-` |
| onSelect | Triggered after selection | `(item: any, index: number) => void` | `-` |
| onCancel | Triggered when onCancel copy is clicked | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-actionsheet-background-color | the backgroundColor of actionsheet panel | `$color-background-overlay` |
| \--nutui-actionsheet-border-radius | the borderRadius of list and cancel button | `0` |
| \--nutui-actionsheet-border-color | title border-bottom and cancle border-top | `#f6f6f6` |
| \--nutui-actionsheet-item-text-align | item text align | `center` |
| \--nutui-actionsheet-item-border-bottom | item border bottom | `none` |
| \--nutui-actionsheet-item-line-height | item line height | `24px` |
| \--nutui-actionsheet-item-color | item color | `$color-title` |
| \--nutui-actionsheet-item-danger | item danger color | `$color-primary` |
