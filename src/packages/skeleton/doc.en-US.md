# Skeleton

## Intro

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

## Install

```tsx
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
    <Skeleton  animated />
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
    <Skeleton rows={3} title animated />
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
    <Skeleton  rows={3} title animated avatar />
  )
}
export default App;
```

:::

### Title paragraph fillet style

:::demo

```tsx
import React from "react";
import { Skeleton, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        nutuiSkeletonLineBorderRadius: '10px',
      }}
    >
      <Skeleton rows={3} animated />
    </ConfigProvider>
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
    <div className="content">
      <Switch size="15px" change={(value, event) => changeStatus(value, event)} />
      <Skeleton  title animated avatar rows={3} visible={checked}>
        <div className="container">
          <Avatar
            size="50"
            icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          />
          <div className="right-content">
            <span className="title">NutUI-React</span>
            <div className="description">
              一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </div>
          </div>
        </div>
      </Skeleton>
    </div>
  )
}
export default App;
```

:::

## Skeleton

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to display skeleton screen | `boolean` | `false` |
| animated | Whether to turn on skeleton screen animation | `boolean` | `false` |
| avatar | Show avatar | `boolean` | `false` |
| avatarShape | Avatar shape: square / round | `string` | `round` |
| avatarSize | Avatar size | `string` | `50px` |
| rows | Set the number of paragraph lines | `number` | `1` |
| title | Show paragraph titles | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-skeleton-background | background | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | line width | `100%` |
| \--nutui-skeleton-line-height | line height | `15px` |
| \--nutui-skeleton-line-border-radius | line borderRadius | `0` |