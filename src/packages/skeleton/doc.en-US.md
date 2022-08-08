#  Skeleton

### Intro

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

### Install
``` ts
import { Skeleton } from '@nutui/nutui-react';
```


## Code demonstration

### Basic usage

:::demo
```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated />
    </>
  )
}
export default App;
```
:::

### Incoming multiline

:::demo
```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated />
    </>
  )
}
export default App;
```
:::

### Show Faces

:::demo
```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated avatar />
    </>
  )
}
export default App;
```
:::

### Title paragraph fillet style

:::demo
```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated round />
    </>
  )
}
export default App;
```
:::

### Display subcomponents

:::demo
```tsx
import React, { useState } from 'react'
import { Skeleton, Switch, Avatar } from '@nutui/nutui-react';


const App = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (value: boolean, event: React.MouseEvent<Element, MouseEvent>) => {
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <>
      <div className="content">
        <Switch size="15px" change={(value, event) => changeStatus(value, event)} />
        <Skeleton width="250px" height="15px" title animated avatar row={3} loading={checked}>
          <div className="container">
            <Avatar
              size="50"
              icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
            />
            <div className="right-content">
              <span className="title">NutUI-React</span>
              <div className="desc">
                一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    </>
  )
}
export default App;
```
:::




## API

### Prop  

| Attribute       | Description                                             | Type    | Default    |
|------------|-------------------------------------------------|---------|----------|
| loading    | Whether to display skeleton screen                                    | Boolean | `false`    | 
| width       | Width per row                                        | Number  | 100 |
| height      | Height of each row                                        | Number  | 100   |
| animated    | Whether to turn on skeleton screen animation                                | Boolean  | `false`  |
| avatar      | Show avatar                                     | Boolean | `false`   |
| avatarShape      | Avatar shape: square / round                        | String | `round`   |
| avatarSize       | Avatar size                                   | String | `50px`    |
| round  | Is the title / paragraph rounded                                | Boolean | `false`  |
| row    | Set the number of paragraph lines                                           | Number | 1       |
| title  | Show paragraph titles                                        | Boolean | `false`   |
