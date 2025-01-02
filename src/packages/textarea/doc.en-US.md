# TextArea

Enter or edit text in the text box, and limit the number of entries is supported.

## Import

```tsx
import { TextArea } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Display word count

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom rows, auto height

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom limit color

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### read-only

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### disabled

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### TextAlign

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## TextArea

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | input value, controlled | `string` | `-` |
| defaultValue | input default value, uncontrolled | `string` | `-` |
| placeholder | set placeholder prompt text | `string` | `please enter content` |
| maxLength | limit the maximum input characters, no limit with `-1` | `number` | `140` |
| rows | height of textarea, with priority higher than autoSize attribute | `number` | `2` |
| showCount | whether textarea displays the input characters. Use | `boolean` | `false` |
| autoSize | whether to adapt the content height. | `boolean` | `false` |
| readOnly | read only attribute | `boolean` | `false` |
| disabled | disable attribute | `boolean` | `false` |
| onChange | Triggered when the value of the input box changes | `(value) => void` | `-` |
| onFocus | Triggered when focusing | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |
| onBlur | Triggered when out of focus | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-textarea-font | fontSize | `$font-size-base` |
| \--nutui-textarea-padding | padding | `10px 25px` |
| \--nutui-textarea-limit-color | limit color | `$color-text` |
| \--nutui-textarea-text-color | text color | `$color-title` |
| \--nutui-textarea-text-curror-color | caret color | `$color-title` |
| \--nutui-textarea-disabled-color | disabled color | `$color-text-disabled` |
| \--nutui-textarea-limit-align | text align | `right` |
