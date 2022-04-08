# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装
``` ts
import { Avatar } from '@nutui/nutui-react';
```

## 代码示例

### 基本用法

内置 smal / normal / large 三种尺寸规格

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar size="large" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar size="normal" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar size="small" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />  
    </>
  )
}
export default App;
```
:::

### 修改形状类型

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar icon="my" shape="square" />
      <Avatar icon="my" shape="round" />
    </>
  )
}
export default App;
```
:::

### 修改背景色

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const styles = {
  color: "#fff"
}
const App = () => {
  return (
    <>
      <Avatar className="demo-avatar" bgColor="#FA2C19" icon="my" style={styles} />
    </>
  )
}
export default App;
```
:::

### 修改背景icon

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar icon="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </>
  )
}
export default App;
```
:::

### 设置头像的文本内容

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar icon="">N</Avatar>
    </>
  )
}
export default App;
```
:::

### 点击头像触发事件

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  const handleClick = () => {
    console.log('触发点击头像')
  }
  return (
    <>
      <Avatar icon="my" onClick={handleClick} />
    </>
  )
}
export default App;
```
:::

### Prop

| 字段     | 说明                                                                     | 类型   | 默认值 |
|----------|--------------------------------------------------------------------------|--------|--------|
| bgColor | 设置头像背景色                                                           | String | #eee   |
| size     | 设置头像的大小，提供三种：large/normal/small，支持直接输入数字           | String | normal |
| shape    | 设置头像的形状，默认是圆形，可以设置为square方形                         | String | round  |
| src      | 设置头像的背景图片                                                       | String | ''     |
| icon     | 设置头像的icon图标, 优先级低于src,类似Icon组件的name属性，支持名称和链接 | String | ''     |

### Events

| 字段     | 说明                 | 类型     | 回调参数 |
|----------|----------------------|----------|----------|
| onClick | 点击图片触发事件 | Function | event    |