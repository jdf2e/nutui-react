# NumberKeyboard

## Intro

Virtual numeric keypad, used for scenarios where payment passwords are entered.

## Install

```ts
// react
import { NumberKeyboard } from '@nutui/nutui-react';
```

## Demo

### Default Keyboard

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.text('delete')
  }
  return (
    <>
      <Cell
        title="Default Keyboard"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default App;

```

:::

### Keyboard With Sidebar

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.text('delete')
  }
  return (
    <>
      <Cell
        title="Keyboard With Sidebar"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        type="rightColumn"
        custom={['.', 'x']}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default App;

```

:::

### Random Key Order

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.text('delete')
  }
  return (
    <>
      <Cell
        title=" Random Key Order"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        random
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default App;

```

:::

### Show Keyboard With Title

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.text('delete')
  }
  return (
    <>
      <Cell
        title="Show Keyboard With Title"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        title="title"
        custom={['.']}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default App;

```

:::

### Show IdNumber Keyboard

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.text('delete')
  }
  return (
    <>
      <Cell
        title="Show IdNumber Keyboard"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        custom={['X']}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default App;

```

:::

### Use Popup Props

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.text('delete')
  }
  return (
    <>
      <Cell
        title="Show IdNumber Keyboard"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
        duration={1}
        overlayClassName="number-keyboard-overlay"
        onOpen={() => {
          Toast.text('onOpen')
        }}
      />
    </>
  )
}
export default App;

```

:::

## NumberKeyboard

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show keyboard | `boolean` | `false` |
| title | Keyboard title | `ReactNode` | - |
| type | Keyboard type | `string` | `default, rightColumn` |
| random | Whether to shuffle the order of keys | `boolean` | `false` |
| custom | Content of bottom left key | `string[]` | `Array form supports adding up to two` |
| confirmText | Custom done button text,Such as "pay", "next", "submit" | `string` | `done` |
| onChange | Emitted when a key is pressed | `(value: string) => void` | - |
| onDelete | Emitted when the delete key is pressed | - | - |
| onClose | Emitted when the close button or non-keyboard area is clicked is clicked | - | - |
| onConfirm | Emitted when confirm key is pressed | - | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| --nutui-numberkeyboard-padding | padding | `0 0 22px 0` |
| --nutui-numberkeyboard-background-color | backgroundColor | `#f2f3f5` |
| --nutui-numberkeyboard-header-height | header height | `34px` |
| --nutui-numberkeyboard-header-padding | header padding | `6px 0 0 0` |
| --nutui-numberkeyboard-header-color | header color | `#646566` |
| --nutui-numberkeyboard-header-font-size | header fontSize | `16px` |
| --nutui-numberkeyboard-header-close-padding | header close padding | `0 16px` |
| --nutui-numberkeyboard-header-close-color | header close color | `#576b95` |
| --nutui-numberkeyboard-header-close-font-size | header close fontSize | `14px` |
| --nutui-numberkeyboard-header-close-background-color | header close backgroundColor | `transparent` |
| --nutui-numberkeyboard-key-background-color | key backgroundColor | `#fff` |
| --nutui-numberkeyboard-key-active-background-color | key active backgroundColor | `#ebedf0` |
| --nutui-numberkeyboard-key-height | key height | `48px` |
| --nutui-numberkeyboard-key-line-height | key lineHeight | `1.5` |
| --nutui-numberkeyboard-key-border-radius | key borderRadius | `8px` |
| --nutui-numberkeyboard-key-font-size | key fontSize | `28px` |
| --nutui-numberkeyboard-key-font-color | key fontColor | `#333` |
| --nutui-numberkeyboard-key-confirm-font-size | key confirm fontSize | `16px` |
| --nutui-numberkeyboard-key-confirm-font-color | key confirm fontColor | `#fff` |
| --nutui-numberkeyboard-key-confirm-background-color | key confirm backgroundColor | `#1989fa` |
