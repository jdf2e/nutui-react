# Skeleton 骨架屏组件

## 介绍

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

## 安装

```tsx
import { Skeleton } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Skeleton  animated />
  )
}
export default App;
```

:::

### 传入多行

:::demo

```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Skeleton  rows={3} title animated />
  )
}
export default App;
```

:::

### 显示头像

:::demo

```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Skeleton  rows={3} title animated avatar avatarSize="100px" />
  )
}
export default App;
```

:::

### 标题段落圆角风格

:::demo

```tsx
import React from "react";
import { Skeleton, ConfigProvider } from '@nutui/nutui-react-taro';

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

### 显示子组件

:::demo

```tsx
import React, { useState } from 'react'
import { Skeleton, Switch, Avatar } from '@nutui/nutui-react-taro';


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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示骨架屏(true不显示骨架屏，false显示骨架屏) | `boolean` | `true` |
| animated | 是否开启骨架屏动画 | `boolean` | `false` |
| avatar | 是否显示头像 | `boolean` | `false` |
| avatarShape | 头像形状：正方形/圆形 | `string` | `round` |
| avatarSize | 头像大小 | `string` | `50px` |
| rows | 设置段落行数 | `string` | `1` |
| title | 是否显示段落标题 | `boolean` | `true` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-skeleton-background | 背景 | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | 线条宽度 | `100%` |
| \--nutui-skeleton-line-height | 线条高度 | `15px` |
| \--nutui-skeleton-line-border-radius | 线条边框圆角 | `0` |