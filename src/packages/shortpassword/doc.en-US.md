# ShortPassword

Short password input box, which can be used to enter passwords, SMS verification codes, etc.

## Import

```tsx
import { ShortPassword } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Display Plaintext

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Show Button Group

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Password Length

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Forget password callback

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Auto Focus

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## ShortPassword

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | password value | `string` | `-` |
| visible | Whether to show shortpassword | `boolean` | `false` |
| plain | Whether to show plaintext | `boolean` | `false` |
| title | title | `ReactNode` | `Please input a password` |
| description | description | `ReactNode` | `Verify` |
| tips | tips | `ReactNode` | `Forget password` |
| hideFooter | whether to hide the bottom button | `boolean` | `true` |
| length | ShortPassword length The value is 4~6 | `number` | `6` |
| error | Error message | `ReactNode` | `-` |
| autoFocus | Be focused when ShortPassword is displayed | `boolean` | `false` |
| onChange | Trigger event when password is entered | `(value) => void` | `-` |
| onConfirm | Trigger event when true is clicked | `(value) => void` | `-` |
| onCancel | Trigger an event when the popup layer is clicked or canceled | `() => void` | `-` |
| onClose | Trigger an event when the close icon is clicked | `() => void` | `-` |
| onTips | Trigger an event when the forget password is clicked | `() => void` | `-` |
| onComplete | Input complete callback | `(value) => void` | `-` |
| onFocus | input focus | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-shortpassword-background-color | backgroundColor | `rgba(245, 245, 245, 1)` |
| \--nutui-shortpassword-border-color | border color | `#ddd` |
| \--nutui-shortpassword-error | error color | `$color-primary` |
| \--nutui-shortpassword-forget | forget color | `rgba(128, 128, 128, 1)` |
