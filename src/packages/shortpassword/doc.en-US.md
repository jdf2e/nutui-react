#  ShortPassword

### Intro

Short password input box, which can be used to enter passwords, SMS verification codes, etc.

### Install
```js
import { ShortPassword } from '@nutui/nutui-react';
```


## Demo

###  Basic Usage
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="Basic Usage"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onClose={() => close()}
        onChange={(value) => setValue(value)}
       />
     </>
  )
}
export default App;

```
:::


### Show Button Group
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="Show Button Group"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onClose={() => close()}
        noButton={false}
        onChange={(value) => setValue(value)}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
       />
     </>
  )
}
export default App;

```
:::


### Custom Password Length
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="Custom Password Length"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onChange={(value) => setValue(value)}
        onClose={() => close()}
        length={4}
       />
     </>
  )
}
export default App;

```
:::

### Forget password callback
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
   const onTips = () => {
    Toast.text('Execute forgotten password logic')
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="Forget password"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onChange={(value) => setValue(value)}
        onClose={() => close()}
        onTips={() => onTips()}
       />
     </>
  )
}
export default App;

```
:::



## API

### Props

| Attribute      | Description                                      | Type   | Default |
|--------------|----------------------------------|--------|------------------|
| modelValue         | Current value                | String｜Number | -                |
| visible        | Whether to show shortpassword                         | Boolean | false              |
| title                  | title                | String         | Please input a password                   |
| desc                   | desc          | String         | Verify |
| tips                   | tips              | String         | Forget password                     |
| closeOnClickOverlay | Click to close the mask      | Boolean        | true                         |
| noButton              | whether to hide the bottom button    | Boolean        | true                         |
| length                 | ShortPassword lenght The value is 4~6 | String｜Number | 6                            |
| errorMsg              | Error message         | String         | ''                           |

### Events

| Event | Description                  | Arguments    |
|--------|----------------|--------------|
| onChange   | Trigger event when password is entered      |  value    |
| onOk       | Trigger event when true is clicked       | value    |
| onCancel   | Trigger an event when the popup layer is clicked or canceled      | -    |
| onClose    | Trigger an event when the close icon is clicked | -    |
| onTips    | Trigger an event when the forget password  is clicked | -    |
| onComplete | Input complete callback          | value    |
