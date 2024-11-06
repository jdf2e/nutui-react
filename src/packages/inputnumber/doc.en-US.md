# InputNumber

Control the number increase or decrease by clicking the button.

## Import

```tsx
import { InputNumber } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

Initialize a default value

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Step size setting

Set step `step` 5

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Limit input range

`min` and `max` attributes represent the minimum and maximum values respectively

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Disabled state

`disabled` When disabled, you cannot click the button or modify the input box.

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Read only disable input box

`readOnly` Set read-only disable input box input behavior

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Set the button style

The buttons can be styled using the `ConfigProvider` component.

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Support decimal point

Set step size `step` 0.1 `decimal-places` keep 1 decimal place

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Support asynchronous modification

Asynchronous modification through `change` event and `model-value`

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### support formatter

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### support deselect all text

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## InputNumber

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| allowEmpty | Whether to allow the content to be empty | `boolean` | `false` |
| defaultValue | Defaults | `string` \| `number` | `0` |
| value | current value, controlled value | `string` \| `number` | `-` |
| min | Minimum limit | `string` \| `number` | `1` |
| max | Maximum limit | `string` \| `number` | `9999` |
| step | step | `string` \| `number` | `1` |
| digits | Set reserved decimal places | `string` \| `number` | `0` |
| disabled | Disable all features | `boolean` | `false` |
| readOnly | Read only status disables input box operation behavior | `boolean` | `false` |
| async | Support for asynchronous modification | `boolean` | `false` |
| select | Support deselect all text | `boolean` | `true` |
| formatter | Specifies the format of the value displayed in the input box | `function(value: number \| string): string` | `-` |
| onPlus | Triggered when the Add button is clicked | `(e: MouseEvent) => void` | `-` |
| onMinus | Triggered when the decrease button is clicked | `(e: MouseEvent) => void` | `-` |
| onOverlimit | Triggered when an unavailable button is clicked | `(e: MouseEvent) => void` | `-` |
| onChange | Triggered when the value changes | `(param: string \| number, e: MouseEvent \| ChangeEvent<HTMLInputElement>) => void` | `-` |
| onBlur | Triggered when the input box blur | `(e: ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | Triggered when the input box focus | `(e: FocusEvent<HTMLInputElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-inputnumber-input-width | The width of the input in the number input box | `40px` |
| \--nutui-inputnumber-input-height | The height of the input in the number input box | `24px` |
| \--nutui-inputnumber-input-background-color | The background color of the input in the number input box | `$color-background` |
| \--nutui-inputnumber-input-font-color | The font size color of the input in the number input box | `$color-title` |
| \--nutui-inputnumber-input-font-size | The font size of the input in the number input box | `14px` |
| \--nutui-inputnumber-input-border | The border value of the input in the number input box | `0` |
| \--nutui-inputnumber-input-border-radius | The rounded corners of the input in the number input box | `6px` |
| \--nutui-inputnumber-input-margin | The rounded corners of the input in the number input box | `0` |
| \--nutui-inputnumber-button-width | The width of the left and right buttons of the number input box | `14px` |
| \--nutui-inputnumber-button-height | The height of the left and right buttons of the number input box | `16px` |
| \--nutui-inputnumber-button-border-radius | The rounded corners of the left and right buttons of the number input box | `30px` |
| \--nutui-inputnumber-button-background-color | The background color of the left and right buttons of the number input box | `transparent` |
| \--nutui-inputnumber-icon-color | The color of the icon in the number input box | `$color-text` |
| \--nutui-inputnumber-icon-size | The size of the icon in the number input box | `8px` |
| \--nutui-inputnumber-disabled-color | The color of the disabled status of inputnumber | `$color-text-disabled` |
