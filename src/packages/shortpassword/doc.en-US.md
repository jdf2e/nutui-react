#  ShortPassword

### Intro

Short password input box, which can be used to enter passwords, SMS verification codes, etc.

### Install
```ts
// react
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
import { HeartFill1 } from '@nutui/icons-react';

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
        
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
          visible={visible}
          modelValue={value}
          tipsIcon={<HeartFill1 />}
          iconSize={16}
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
    Toast.show('Execute forgotten password logic')
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="Forget password"
        
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

| Property | Description                                      | Type   | Default |
|--------------|----------------------------------|--------|------------------|
| modelValue         | Current value                | string \| number | -                |
| visible        | Whether to show shortpassword                         | boolean | `false`              |
| title                  | title                | string         | `Please input a password`                   |
| description                   | description          | string         | `Verify` |
| tips                   | tips              | string         | `Forget password`                     |
| closeOnClickOverlay | Click to close the mask      | boolean        | `true`                         |
| noButton              | whether to hide the bottom button    | boolean        | `true`                         |
| length                 | ShortPassword lenght The value is 4~6 | string \| number | `6`                            |
| errorMsg              | Error message         | string         | -                           |
| autoFocus              | Be focused when ShortPassword is displayed | boolean         | `false`                           |
| tipsIcon `v2.0.0` | icon of forget tips | `ReactNode`  | - |
| iconSize `v2.0.0` | size of icon | string \| number  | `11` |

### Events

| Event | Description                  | Arguments    |
|--------|----------------|--------------|
| onChange   | Trigger event when password is entered      |  value    |
| onOk       | Trigger event when true is clicked       | value    |
| onCancel   | Trigger an event when the popup layer is clicked or canceled      | -    |
| onClose    | Trigger an event when the close icon is clicked | -    |
| onTips    | Trigger an event when the forget password  is clicked | -    |
| onComplete | Input complete callback          | value    |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-shortpassword-background-color | `rgba(245, 245, 245, 1)` |
| --nutui-shortpassword-border-color | `#ddd` |
| --nutui-shortpassword-error | `$primary-color` |
| --nutui-shortpassword-forget | `rgba(128, 128, 128, 1)` |
