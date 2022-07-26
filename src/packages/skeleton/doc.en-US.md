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

const NutSwitchStyle = {
  display: 'flex',
  margin: '0 16px 8px 0'
}

const RightContentStyle = {
  marginLeft: '19px',
  fontFamily: 'PingFangSC',
  display: 'flex',
  flexDirection: 'column'
}

const TitleStyle = {
  fontSize: '14px',
  color: 'rgba(51, 51, 51, 1)'
}

const DescStyle = {
  marginTop: '10px',
  fontSize: '13px',
  color: 'rgba(154, 155, 157, 1)'
}

const App = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (value: boolean, event: React.MouseEvent<Element, MouseEvent>) => {
    setChecked(value)
  }
  return (
    <>
      <div className="content">
        <Switch size="15px" change={(value, event) => changeStatus(value, event)} className={NutSwitchStyle} />
        <Skeleton width={250} height={15} title animated avatar row={3} loading={checked}>
          <div className="container" style={{ display: 'flex' }}>
            <Avatar
              size="50"
              icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
            />
            <div className="right-content" className={RightContentStyle}>
              <span className="title" className={TitleStyle}>NutUI-React</span>
              <div className="desc" className={DescStyle}>
                A set of JD style lightweight mobile terminal Vue group library provides rich basic components and business components to help developers quickly build mobile applications.
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
