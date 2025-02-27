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
| plain | mark textarea's container type, false is for `container`, true is for `纯文本型` | `boolean` | `false` |
| status | textarea status, with default and error | `default /\ error` | `default` |
| onChange | Triggered when the value of the input box changes | `(value) => void` | `-` |
| onFocus | Triggered when focusing | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |
| onBlur | Triggered when out of focus | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-textarea-padding | padding | `10px 25px` |
| \--nutui-textarea-text-color | text color | `$color-title` |
| \--nutui-textarea-text-curror-color | caret color | `$color-title` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20TextArea)

### Component Logs

- 🐛 fix(textarea): 字数限制文本遮挡输入框的内容 ([#2910](https://github.com/jdf2e/nutui-react/pull/2910)) `v2.7.5`
- 🐛 fix(textarea): handle undefined placeholder explicitly ([#2748](https://github.com/jdf2e/nutui-react/pull/2748)) `v2.7.1`
- 🐛 fix(textarea): demo拆解与规范 ([#2132](https://github.com/jdf2e/nutui-react/pull/2132)) @Amylee9712 `v2.5.1`
- 🐛 fix(textarea): 修复maxlength=-1时无法输入字符的情况 ([#1910](https://github.com/jdf2e/nutui-react/pull/1910)) @xiaoyatong `v2.3.9`
- 🐛 fix(Textarea): 文档demo中props拼写错误修改 ([#1874](https://github.com/jdf2e/nutui-react/pull/1874)) @songsong `v2.3.7`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=textarea&expanded=true)
