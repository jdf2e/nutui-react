# TextArea

Enter or edit multiline text with character counting and over-limit feedback.

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

### Error status

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## TextArea

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | input value, controlled | `string` | `-` |
| defaultValue | input default value, uncontrolled | `string` | `-` |
| placeholder | set placeholder prompt text | `string` | `please enter content` |
| maxLength | character validation threshold; input remains editable after exceeding it, no limit with `-1` | `number` | `140` |
| rows | height of textarea, with priority higher than autoSize attribute | `number` | `2` |
| showCount | whether textarea displays the input characters. Use | `boolean` | `false` |
| autoSize | whether to adapt the content height. | `boolean` | `false` |
| readOnly | Read-only; prevents editing and focus | `boolean` | `false` |
| disabled | disable attribute | `boolean` | `false` |
| plain | whether to use the plain type; ignores `containerType` when `true` | `boolean` | `false` |
| containerType | container background type | `gray / white` | `gray` |
| status | textarea status, with default and error | `default /\ error` | `default` |
| description | error message shown only when `status="error"`, below the textarea | `ReactNode` | `-` |
| onChange | Triggered when the value of the input box changes | `(value) => void` | `-` |
| onFocus | Triggered when focusing | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |
| onBlur | Triggered when out of focus | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |

### Ref

You can get Ref of Textarea.

| Event | Description | Arguments |
| --- | --- | --- |
| clear | clear the value of textarea | `-` |
| focus | focus the textarea | `-` |
| blur | blur the textarea | `-` |
| nativeElement | get the textarea ref | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-textarea-plain-min-height | plain type minimum height | `44px` |
| \--nutui-textarea-container-min-height | container type minimum height | `60px` |
| \--nutui-textarea-padding | container padding | `8px 12px` |
| \--nutui-textarea-container-gray-background-color | gray container background | `color-background-component` |
| \--nutui-textarea-container-white-background-color | white container background | `$color-background-overlay` |
| \--nutui-textarea-limit-error-color | over-limit count color | `$color-error` |
| \--nutui-textarea-error-color | error description color | `$color-error` |
| \--nutui-textarea-text-color | text color | `$color-title` |
| \--nutui-textarea-text-line-height | Input line height | `20px` |
| \--nutui-textarea-text-curror-color | caret color | `$color-title` |

<Contribution name="TextArea" />
