#  NumberKeyboard 

### Introduce

Virtual numeric keypad, used for scenarios where payment passwords are entered.

### Install
```ts
// react
import { NumberKeyboard } from '@nutui/nutui-react';
```


## Demo

### Default Keyboard
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
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
        isLink
        onClick={() => {
          setVisible(true)
        }}
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
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
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
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        type="rightColumn"
        customKey={['.', 'x']}
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

###  Random Key Order
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
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
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        randomKeys
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
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
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
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        title="title"
        customKey={['.']}
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
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
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
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        customKey={['X']}
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



## API

### Props

| Attribute | Description | Type | Default |
|----- | ----- | ----- | ----- |
| visible | Whether to show keyboard  | boolean | `false` | 
| title | Keyboard title | string | - |
| type | Keyboard type  | string | `default`, `rightColumn` |
| randomKeys | Whether to shuffle the order of keys  | boolean | `false` |
| customKey | Content of bottom left key   | string[] |  Array form supports adding up to two |
| confirmText  | Custom done button text,Such as "pay", "next", "submit" | string | `done` |
| pop-class    | Custom bullet box classname     | string         | -             |


### Event

| Event | Description | Arguments
|----- | ----- | -----
| onChange  | Emitted when a key is pressed                   | `value: string` |
| onDelete | 	Emitted when the delete key is pressed                | -             |
| onClose  | Emitted when the close button or non-keyboard area is clicked is clicked   | -             |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-numberkeyboard-padding | `0 0 22px 0` |
| --nutui-numberkeyboard-background-color | `#f2f3f5` |
| --nutui-numberkeyboard-header-height | `34px` |
| --nutui-numberkeyboard-header-padding | `6px 0 0 0` |
| --nutui-numberkeyboard-header-color | `#646566` |
| --nutui-numberkeyboard-header-font-size | `16px` |
| --nutui-numberkeyboard-header-close-padding | `0 16px` |
| --nutui-numberkeyboard-header-close-color | `#576b95` |
| --nutui-numberkeyboard-header-close-font-size | `14px` |
| --nutui-numberkeyboard-header-close-background-color | `transparent` |
| --nutui-numberkeyboard-key-background-color | `#fff` |
| --nutui-numberkeyboard-key-active-background-color | `#ebedf0` |
| --nutui-numberkeyboard-key-height | `48px` |
| --nutui-numberkeyboard-key-line-height | `1.5` |
| --nutui-numberkeyboard-key-border-radius | `8px` |
| --nutui-numberkeyboard-key-font-size | `28px` |
| --nutui-numberkeyboard-key-font-color | `#333` |
| --nutui-numberkeyboard-key-finish-font-size | `16px` |
| --nutui-numberkeyboard-key-finish-font-color | `#fff` |
| --nutui-numberkeyboard-key-finish-background-color | `#1989fa` |
