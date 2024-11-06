# Input

The user can enter content in the text box.

## Import

```tsx
import { Input } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Uncontrolled

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Type

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Disabled and read-only

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Show clear icon

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### With Form

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Word count

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Visible with password

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Formatter

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Alignment

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Event

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### Layout

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

### Border

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

## Input

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | default value | `string` | `-` |
| value | input value | `string` | `-` |
| type | input box type, supports all `type` attributes of native `input` tags, and also supports `number` `digit` | `string` | `text` |
| name | Component name, used for form submission to get data | `string` | `-` |
| placeholder | placeholder when the input box is empty | `string` | `-` |
| align | Alignment of input box content, optional values `left`, `center`, `right` | `string` | `left` |
| disabled | Whether to disable | `boolean` | `false` |
| readOnly | Whether to read only | `boolean` | `false` |
| autoFocus | Whether to automatically get the focus, iOS system does not support this property | `boolean` | `false` |
| maxLength | Limit the longest input characters | `string, number` | `-` |
| clearable | show clear Icon | `boolean` | `false` |
| clearIcon | clear icon Icon <a href="#/icon">refer to Icon </a> | `ReactNode` | `MaskClose` |
| formatter | input content formatting function | `(val: string) => string` | `-` |
| formatTrigger | The timing when the format function is triggered, the optional values are `onChange`, `onBlur` | `string` | `-` |
| onChange | Triggered when the content of the input box changes | `(value: string) => void` | `-` |
| onBlur | Triggered when focus is lost | `(value: string) => void` | `-` |
| onFocus | Triggered after gaining focus | `(value: string) => void` | `-` |
| onClear | Triggered when the clear button is clicked | `(value: string) => void` | `-` |
| onClick | Triggered when the input container is clicked | `(value: MouseEvent<HTMLDivElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-input-border-bottom | border color | `#eaf0fb` |
| \--nutui-input-border-bottom-width | border width | `0px` |
| \--nutui-input-color | color | `$color-title` |
| \--nutui-input-disabled-color | disable color | `#c8c9cc` |
| \--nutui-input-background-color | background color | `$color-background-overlay` |
| \--nutui-input-border-radius | border radius | `0` |
| \--nutui-input-font-size | font size | `$font-size-base` |
| \--nutui-input-padding | input padding | `10px 25px` |
