#  NumberKeyboard 

### Introduce

Virtual numeric keypad, used for scenarios where payment passwords are entered.

### Install
```js
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
| visible | Whether to show keyboard  | Boolean | false | 
| title | Keyboard title | String | - |
| type | Keyboard type  | String | `default`, `rightColumn` |
| randomKeys | Whether to shuffle the order of keys  | Boolean | false |
| customKey | Content of bottom left key   | String [] |  Array form supports adding up to two |
| confirmText  | Custom done button text,Such as "pay", "next", "submit" | String | done |
| pop-class    | Custom bullet box classname     | String         | -             |


### Event

| Event | Description | Arguments
|----- | ----- | -----
| onChange  | Emitted when a key is pressed                   | value: string |
| onDelete | 	Emitted when the delete key is pressed                | -             |
| onClose  | Emitted when the close button or non-keyboard area is clicked is clicked   | -             |
