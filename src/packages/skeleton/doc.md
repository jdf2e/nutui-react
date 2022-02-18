#  Skeleton组件

### 介绍

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

### 安装
``` ts
import { Skeleton } from '@nutui/nutui-react';
```


## 代码演示

### 基础用法

:::demo
```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated></Skeleton>
    </>
  )
}
export default App;
```

### 传入多行

```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated></Skeleton>
    </>
  )
}
export default App;
```

### 显示头像

```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated avatar></Skeleton>
    </>
  )
}
export default App;
```

### 标题段落圆角风格

```tsx
import React from "react";
import { Skeleton } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated round></Skeleton>
    </>
  )
}
export default App;
```

### 显示子组件

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
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <>
      <div className="content">
        <Switch size="15px" change={(value, event) => changeStatus(value, event)} className={NutSwitchStyle}></Switch>
        <Skeleton width={250} height={15} title animated avatar row={3} loading={checked}>
          <div className="container" style={{ display: 'flex' }}>
            <Avatar
              size="50"
              icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
            />
            <div className="right-content" className={RightContentStyle}>
              <span className="title" className={TitleStyle}>NutUI-React</span>
              <div className="desc" className={DescStyle}>
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




## API

### Prop  

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|-------------------------------------------------|---------|----------|
| loading    | 是否显示骨架屏                                    | Boolean | `false`    | 
| width       | 每行宽度                                        | Number  | 100 |
| height      | 每行高度                                        | Number  | 100   |
| animated    | 是否开启骨架屏动画                                | Boolean  | `false`  |
| avatar      | 是否显示头像                                     | Boolean | `false`   |
| avatarShape      | 头像形状：正方形/圆形                        | String | `round`   |
| avatarSize       | 头像大小                                   | String | `50px`    |
| round  | 标题/段落是否采用圆角风格                                | Boolean | `false`  |
| row    | 设置段落行数                                           | Number | 1       |
| title  | 是否显示段落标题                                        | Boolean | `false`   |
