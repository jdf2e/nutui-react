# Dialog

Modular dialog box, displayed in the floating layer, guides users to perform related operations, often used in message prompts, message confirmation, or complete specific interaction operations on the current page。

The pop -up box components support the function call and component call.

## Import

```tsx
import { Dialog } from '@nutui/nutui-react'
```

## Demo

### Function use

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## Labeled use

### Basic use

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Customize footer area

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Intercept when cancel is clicked

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Confirm button loading effect

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### With close button

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom content area

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Top with picture

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Dialog

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether the dialog box is visible | `boolean` | `-` |
| header | Customize the header, but it will not be displayed in NULL | `ReactNode` | `-` |
| title | title | `ReactNode` | `-` |
| content | The content of the dialog box is suitable for function calls | `ReactNode` | `-` |
| footer | Customize the notes, but it will not be displayed in NULL | `ReactNode` | `-` |
| confirmText | Confirm the button copywriting | `ReactNode` | `Sure` |
| cancelText | Cancellation of buttons | `ReactNode` | `Cancel` |
| overlay | Whether to show a overlay | `boolean` | `true` |
| hideConfirmButton | Whether to hide the OK button | `boolean` | `false` |
| hideCancelButton | Whether to hide the cancel button | `boolean` | `false` |
| disableConfirmButton | Disable the OK button | `boolean` | `false` |
| closeIcon | Close button | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | Close button position | `top-left` \| `top-right` \| `bottom` | `top-right` |
| closeOnOverlayClick | Click on whether to close the dialog box | `boolean` | `true` |
| footerDirection | Use horizontal and vertical direction value selection horizontal、vertical | `string` | `horizontal` |
| lockScroll | Whether the background is locked | `boolean` | `true` |
| beforeCancel | When click cancel, call it first | `() => boolean` | `-` |
| beforeClose | Call it first when close | `() => boolean` | `-` |
| onConfirm | Determine the button back | `(e?: MouseEvent) => Promise \| void` | `-` |
| onCancel | Cancel button callback | `() => void` | `-` |
| onClose | Turn off the callback, and the pop -up window will be triggered in any case | `() => void` | `-` |
| onClick | Click yourself to call back | `() => void` | `-` |
| onOverlayClick | Click Overlay | `() => void` | `-` |

It should be noted that for the Dialog created by instructive, ** will not perceive the re-rendering of the parent component and the update of the state in it**, so the following writing is completely wrong:

```tsx
import React from 'react'
import { Dialog, Input, Button } from '@nutui/nutui-react'

export default function App() {
  const [captcha, setCaptcha] = useState<string>('')
  const showCaptcha = () => {
    return Dialog.confirm({
      content: (
        <Input
          placeholder="Please enter the verification code"
          value={captcha} // Updates to captcha in the App are not passed to the Dialog
          onChange={(v) => {
            setCaptcha(v)
          }}
        />
      ),
    })
  }
  return (
    <div>
      <Button onClick={showCaptcha}>Show</Button>
    </div>
  )
}
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-dialog-z-index | dialog z index | `$mask-content-z-index` |
| \--nutui-dialog-width | dialog width | `295px` |
| \--nutui-dialog-padding | dialog padding | `24px` |
| \--nutui-dialog-min-height | dialog min height | `156px` |
| \--nutui-dialog-border-radius | dialog border radius | `16px` |
| \--nutui-dialog-content-margin | dialog content margin | `5px 0 24px 0` |
| \--nutui-dialog-content-max-height | dialog content max height | `268px` |
| \--nutui-dialog-content-line-height | dialog content line height | `20px` |
| \--nutui-dialog-content-text-align | dialog content text align | `left` |
| \--nutui-dialog-header-font-size | dialog header font size | `$font-size-large` |
| \--nutui-dialog-header-font-weight | dialog header font weight | `normal` |
| \--nutui-dialog-footer-justify-content | dialog footer justify content | `space-around` |
| \--nutui-dialog-footer-button-min-width | dialog footer button min width | `117px` |
| \--nutui-dialog-footer-cancel-margin-right | dialog footer cancel button's margin right | `12px` |
| \--nutui-dialog-footer-ok-max-width | dialog footer confirm button's max width | `128px` |
| \--nutui-dialog-vertical-footer-ok-margin-top | dialog vertical footer confirm button margin top | `5px` |
| \--nutui-dialog-close-width | dialog close the width of the button | `18px` |
| \--nutui-dialog-close-height | dialog close the coloe of the button | `18px` |
| \--nutui-dialog-close-color | dialog close button color | `#8c8c8c` |
| \--nutui-dialog-close-top | dialog Closes the top value of the button | `16px` |
| \--nutui-dialog-close-left | dialog Closes the left value of the button | `16px` |
| \--nutui-dialog-close-right | dialog Closes the right value of the button | `16px` |
