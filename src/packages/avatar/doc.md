# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装
``` ts
import { Avatar } from '@nutui/nutui-react';
```

## 代码示例

### 基本用法

支持三种尺寸：small、normal、large

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar size="large" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar size="normal" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar size="small" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />  
    </>
  )
}
export default App;
```
:::

### 头像形状

支持两种形状：square、round

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

### 头像类型

支持三种类型：图片、Icon 以及字符

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      <Avatar icon="my" />
      <Avatar>N</Avatar>
    </>
  )
}
export default App;
```
:::

### 自定义颜色及背景色

Icon 和字符型可以自定义图标颜色及背景色

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar className="demo-avatar" icon="my" color="#fff" bgColor="#FA2C19" />
      <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">U</Avatar>
    </>
  )
}
export default App;
```
:::

### 带徽标的头像

:::demo
``` tsx
import React from "react";
import { Avatar, Badge } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Badge value="8">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```
:::

### 头像组合展现

:::demo
``` tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <AvatarGroup span="-4">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon="my" />
        <Avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          U
        </Avatar>
      </AvatarGroup>

      <AvatarGroup maxCount="3" maxColor="#fff" maxBgColor="#498ff2">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon="my" />
        <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon="my" />
      </AvatarGroup>
    </>
  )
}
export default App;
```
:::

### 组合头像可控制层级方向

:::demo
``` tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <AvatarGroup maxCount="3" zIndex="right" maxContent="...">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon="my" />
        <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon="my" />
      </AvatarGroup>
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
  const activeAvatar = () => {
    console.log('触发点击头像')
  }
  return (
    <>
      <Avatar icon="my" onActiveAvatar={activeAvatar} />
    </>
  )
}
export default App;
```
:::

### Prop

| 字段     | 说明                                                             | 类型   | 默认值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| size     | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字   | String | normal |
| shape    | 设置头像的形状，可选值为：square、round            | String | round  |
| bgColor | 设置 Icon、字符类型头像的背景色                    | String | #eee   |
| color    | 设置 Icon、字符类型头像的颜色                     | String | #666   |
| url      | 设置图片类型头像的地址                           | String | -   |
| alt      | 设置图片类型头像无法显示时的替代文本                | String | -   |
| icon     | 设置 Icon 类型头像图标, 类似 Icon 组件的 name 属性  | String | -     |

### avatarGroup
| 字段     | 说明                                                             | 类型   | 默认值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| maxCount     | 显示的最大头像个数   | Number、String | - |
| maxContent  | 头像数量超出时，会出现一个头像折叠元素。该元素内容可为...、more、+N。默认为 +N | 
| size         | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字   | String | +N |
| shape        | 设置头像的形状，可选值为：square、round            | String | round  |
| maxBgColor  | 设置 Icon、字符类型头像的背景色                    | String | #eee   |
| maxColor    | 设置 Icon、字符类型头像的颜色                   | String | #666 |
| span         | 设置头像之间的间距               | String | -8   |
| zIndex       | 头像之间的层级关系，可选值为：left、right  | String | left     |
### Events

| 字段             | 说明         | 类型     | 回调参数 |
| ---------------- | ------------ | -------- | -------- |
| activeAvatar `v1.3.8废弃` | 点击头像触发事件    | Function | event    |
| onActiveAvatar `v1.3.8` | 点击头像触发事件    | Function | event    |
| onError       | 图片加载失败的事件   | Function | event    |