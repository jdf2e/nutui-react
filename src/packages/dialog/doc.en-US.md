# Dialog

## Intro

Modular dialog box, displayed in the floating layer, guides users to perform related operations, often used in message prompts, message confirmation, or complete specific interaction operations on the current page。

The pop -up box components support the function call and component call.

## Install

```tsx
import { Dialog } from '@nutui/nutui-react'
```

## Demo

### Functional call

:::demo

```tsx
import React from "react";
import { Cell,Dialog } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Cell title="Basic bullet" onClick={() => {
        Dialog.alert({
            className: 'dialog-func',
            title: 'Basic bullet',
            content: 'Support function calls and module call.',
        });
        }} />
      <Cell title="Non-title bullet box, and lock scroll" onClick={() => {
            Dialog.alert({
            content: 'Non-title bullet box, and lock scroll',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
            lockScroll: false
        });
        }} />
      <Cell title="Prompt bomb frame" onClick={() => {
        Dialog.alert({
            title: 'Kind tips',
            content: 'Support function calls and module call.',
            hideCancelButton: true,
            confirmText: 'Confirm'
        });
        }} />
      <Cell title="The bottom button is called vertically" onClick={() => {
        Dialog.alert({
            title: 'Kind tips',
            content: 'Support function calls and module call.',
            footerDirection: 'vertical',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
        });
        }} />
        <Cell title="after opened the dialog for 3 seconds, call close method" onClick={() => {
          const dialog = Dialog.confirm({
            content: 'Support function calls and module call.',
            confirmText: 'Confirm',
            cancelText: 'Cancel',
          });
          setTimeout(() => {
            dialog.close()
          }, 3000);
        }} 
      />
      <Cell title="after opened the dialog for 3 seconds, update the content of the dialog" onClick={() => {
          const dialog = Dialog.confirm({
            content: 'Support function calls and module call.',
          });
          setTimeout(() => {
            dialog.update({
              content: 'Support function calls and module call. update',
            })
          }, 3000);
        }} 
      />
    </>
  )
}
export default App;
```

:::

### Module call

:::demo

```tsx
import React, {useState} from "react";
import { Cell,Dialog } from '@nutui/nutui-react';

const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <>
    <Cell title="Basic bullet" onClick={() => setVisible1(true)} />
    <Dialog 
        title="Module call"
        visible={visible1}
        onConfirm={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
    >
        If you need to embed the component or other custom content in the pop -up window, you can use the Module Call method.
    </Dialog>
    <Cell title="The bottom button is called vertically" onClick={() => setVisible2(true)} />
    <Dialog 
        title="Module call"
        visible={visible2}
        footerDirection='vertical'
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
    >
        If you need to embed the component or other custom content in the pop -up window, you can use the Module Call method.
    </Dialog>
    <Cell title="Stop it when click cancel button" onClick={() => setVisible3(true)} />
    <Dialog 
      title="Stop it when click cancel button"
      visible={visible3}
      closeOnOverlayClick={false}
      beforeCancel={() => {
        console.log('stop close')
        return false
      }}
      onClose={() => {
        setVisible3(false)
      }}
    >
      If you need to embed the component or other custom content in the pop -up window, you can use the Module Call method.
    </Dialog>
    </>
  )
}
export default App;
```

:::

## Dialog

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether the dialog box is visible | `boolean` | `-` |
| title | title | `ReactNode` | `-` |
| content | The content of the dialog box is suitable for function calls | `ReactNode` | `-` |
| footer | Customize the notes, but it will not be displayed in NULL | `ReactNode` | `-` |
| confirmText | Confirm the button copywriting | `ReactNode` | `Sure` |
| cancelText | Cancellation of buttons | `ReactNode` | `Cancel` |
| overlay | Whether to show a overlay | `boolean` | `true` |
| hideConfirmButton | Whether to hide the OK button | `boolean` | `false` |
| hideCancelButton | Whether to hide the cancel button | `boolean` | `false` |
| disableConfirmButton | Disable the OK button | `boolean` | `false` |
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
  const [captcha, setCaptcha] = useState<string>("");
  const showCaptcha = () => {
    return Dialog.confirm({
      content: (
          <Input
            placeholder="请输入验证码"
            value={captcha} // App 中 captcha 的更新是不会传递到 Dialog 中的
            onChange={(v) => {
              setCaptcha(v)
            }}
          />
      )
    });
  };
  return (
    <div>
      <Button onClick={showCaptcha}>Show</Button>
    </div>
  );
}
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-dialog-width | dialog width | `296px` |
| \--nutui-dialog-header-font-weight | dialog header font weight | `normal` |
| \--nutui-dialog-header-color | dialog header color | `rgba(38, 38, 38, 1)` |
| \--nutui-dialog-footer-justify-content | dialog footer justify content | `space-around` |
| \--nutui-dialog-min-height | dialog min height | `156px` |
| \--nutui-dialog-padding | dialog padding | `28px 24px 16px 24px` |
| \--nutui-dialog-header-height | dialog header height | `20px` |
| \--nutui-dialog-content-margin | dialog content margin | `20px 0` |
| \--nutui-dialog-content-max-height | dialog content max height | `268px` |
| \--nutui-dialog-content-line-height | dialog content line height | `16px` |
| \--nutui-dialog-overlay-background-color | dialog overlay background color | `$mask-color` |
| \--nutui-dialog-outer-z-index | dialog outer z index | `$mask-content-z-index` |
| \--nutui-dialog-outer-border-radius | dialog outer border radius | `20px` |
| \--nutui-dialog-vertical-footer-ok-margin-top | dialog vertical footer confirm button margin top | `10px` |
| \--nutui-dialog-footer-button-min-width | dialog footer button min width | `100px` |
| \--nutui-dialog-footer-cancel-margin-right | dialog footer cancel button's margin right | `20px` |
| \--nutui-dialog-footer-ok-max-width | dialog footer confirm button's max width | `128px` |