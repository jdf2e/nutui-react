#  Dialog 

### Intro

Modular dialog box, displayed in the floating layer, guides users to perform related operations, often used in message prompts, message confirmation, or complete specific interaction operations on the current page。

The pop -up box components support the function call and component call.

### Install

```js
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
            noCancelBtn: true
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
        onOk={() => setVisible1(false)}
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
        onOk={() => setVisible2(false)}
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
| okText          | Confirm the button copywriting                        | ReactNode | 'Sure'              |
| cancelText          | Cancellation of buttons                        | ReactNode | 'Cancel'              |
| mask          | Whether to show a mask                        | boolean | true              |
| noOkBtn          | Whether to hide the OK button                        | boolean | false              |
| noCancelBtn          | Whether to hide the cancel button                        | boolean | false              |
| okBtnDisabled          | Disable the OK button                        | boolean | false              |
| noFooter          | Whether to hide the bottom button bar                        | boolean | false              |
| closeOnClickOverlay          | Click on whether to close the dialog box                        | boolean | true              |
| cancelAutoClose          | Cancel the button to close the pop -up window by default                        | boolean | true              |
| textAlign          | Text alignment direction, optional value is the same as CSS Text-Align           | string | 'center'              |
| footerDirection          |Use horizontal and vertical direction value selection horizontal、vertical  | string | 'horizontal'             |
| lockScroll          | Whether the background is locked                        | boolean | false              |

### Events

| Incident name | illustrate           | Callback parameter     |
|--------|----------------|--------------|
| onOk  | Determine the button back | (e?: MouseEvent) => Promise | void |
| onCancel  | Cancel button callback | () => void |
| onClosed  | Turn off the callback, and the pop -up window will be triggered in any case | () => void |
| onClickSelf  | Click yourself to call back | () => void |
