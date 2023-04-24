#  Dialog 

### Intro

Modular dialog box, displayed in the floating layer, guides users to perform related operations, often used in message prompts, message confirmation, or complete specific interaction operations on the current page。

The pop -up box components support the function call and component call.

### Install

```ts
// react
import { Dialog } from '@nutui/nutui-react'
```


## Code demonstration

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
            title: 'Basic bullet',
            content: 'Support function calls and module call.'
        });
        }} />
      <Cell title="Non -title bullet box" onClick={() => {
            Dialog.alert({
            content: 'Non -title bullet box'
        });
        }} />
      <Cell title="Prompt bomb frame" onClick={() => {
        Dialog.alert({
            title: 'Kind tips',
            content: 'Support function calls and module call.',
            hideCancelButton: true
        });
        }} />
      <Cell title="The bottom button is called vertically" onClick={() => {
        Dialog.alert({
            title: 'Kind tips',
            content: 'Support function calls and module call.',
            footerDirection: 'vertical'
        });
        }} />
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
        lockScroll
        footerDirection='vertical'
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
    >
        If you need to embed the component or other custom content in the pop -up window, you can use the Module Call method.
    </Dialog>
    </>
  )
}
export default App;
```

:::

## API

### Props

| parameter         | illustrate                             | type   | Defaults           |
|--------------|----------------------------------|--------|------------------|
| visible         | Whether the dialog box is visible               | boolean | -                |
| title        | title                         | ReactNode | -                |
| content         | The content of the dialog box is suitable for function calls | ReactNode | -                |
| footer | Customize the notes, but it will not be displayed in NULL     | ReactNode | - |
| confirmText `v2.0.0`         | Confirm the button copywriting                        | ReactNode | `Sure`              |
| cancelText          | Cancellation of buttons | ReactNode | `Cancel`              |
| overlay          | Whether to show a overlay | boolean | `true`              |
| hideConfirmButton          | Whether to hide the OK button | boolean | `false`              |
| hideCancelButton          | Whether to hide the cancel button | boolean | `false`              |
| disableConfirmButton          | Disable the OK button | boolean | `false`              |
| closeOnOverlayClick          | Click on whether to close the dialog box                        | boolean | `true`              |
| cancelAutoClose          | Cancel the button to close the pop -up window by default                        | boolean | `true`              |
| footerDirection          |Use horizontal and vertical direction value selection horizontal、vertical  | string | `horizontal`             |
| lockScroll          | Whether the background is locked                        | boolean | `false`              |

### Events

| Incident name | illustrate           | Callback parameter     |
|--------|----------------|--------------|
| onConfirm  | Determine the button back | (e?: MouseEvent) => Promise | void |
| onCancel  | Cancel button callback | () => void |
| onClose  | Turn off the callback, and the pop -up window will be triggered in any case | () => void |
| onClick  | Click yourself to call back | () => void |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-dialog-width | `296px` |
| --nutui-dialog-header-font-weight | `normal` |
| --nutui-dialog-header-color | `rgba(38, 38, 38, 1)` |
| --nutui-dialog-footer-justify-content | `space-around` |
| --nutui-dialog-min-height | `156px` |
| --nutui-dialog-padding | `28px 24px 16px 24px` |
| --nutui-dialog-header-height | `20px` |
| --nutui-dialog-content-margin | `20px 0` |
| --nutui-dialog-content-max-height | `268px` |
| --nutui-dialog-content-line-height | `16px` |
| --nutui-dialog-overlay-z-index | `$mask-z-index` |
| --nutui-dialog-overlay-background-color | `$mask-color` |
| --nutui-dialog-outer-z-index | `$mask-content-z-index` |
| --nutui-dialog-outer-bordder-radius | `20px` |
| --nutui-dialog-vertical-footer-ok-margin-top | `10px` |
| --nutui-dialog-footer-button-min-width | `100px` |
| --nutui-dialog-footer-cancel-margin-right | `20px` |
| --nutui-dialog-footer-ok-max-width | `128px` |
