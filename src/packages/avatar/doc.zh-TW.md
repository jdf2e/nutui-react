# Avatar 頭像

### 介紹

用來代表用戶或事物，支持圖片、圖標或字符展示。

### 安裝
``` ts
import { Avatar } from '@nutui/nutui-react';
```

### 基础用法

支持三種尺寸：small、normal、large

:::demo
```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar
            size="large"
            url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
          <Avatar
            size="normal"
            url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Avatar
            size="small"
            url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />  
    </>
  )
}
export default App;
```
:::

### 頭像形狀

支持兩種形狀：square、round

:::demo
```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar icon={<My />} shape="square" />
      <Avatar icon={<My />} shape="round" />
    </>
  )
}
export default App;
```
:::

### 頭像類型

支持三種類型：圖片、Icon 以及字符

:::demo
```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      <Avatar icon={<My />} />
      <Avatar>N</Avatar>
    </>
  )
}
export default App;
```
:::

### 自定義顏色及背景色

Icon 和字符型可以自定義圖標顏色及背景色

:::demo
```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar
        className="demo-avatar"
        color="#fff"
        bgColor="#FA2C19"
        icon={<My />}
      />
      <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">U</Avatar>
    </>
  )
}
export default App;
```
:::

### 帶徽標的頭像

:::demo
```tsx
import React from "react";
import { Avatar, Badge } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Badge value="8">
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </>
  )
}
export default App;
```
:::

### 頭像組合展現

:::demo
```tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <AvatarGroup span="-4">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          U
        </Avatar>
      </AvatarGroup>

      <AvatarGroup maxCount="3" maxColor="#fff" maxBgColor="#498ff2">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </AvatarGroup>
    </>
  )
}
export default App;
```
:::

### 組合頭像可控制層級方向

:::demo
```tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <AvatarGroup maxCount="3" zIndex="right" maxContent="...">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </AvatarGroup>
    </>
  )
}
export default App;
```
:::

### 點擊頭像觸發事件

:::demo
```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  const activeAvatar = () => {
    console.log('触发点击头像')
  }
  return (
    <>
      <Avatar icon={<My />} onActiveAvatar={activeAvatar} />
    </>
  )
}
export default App;
```
:::

### Props

| 属性 | 說明                                                           | 類型   | 默認值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| size     | 設置頭像的大小，可選值為：large、normal、small，支持直接輸入數字   | string | `normal` |
| shape    | 設置頭像的形狀，可選值為：square、round            | string | `round`  |
| bgColor | 設置 Icon、字符類型頭像的背景色                    | string | `#eee`   |
| color    | 設置 Icon、字符類型頭像的顏色                     | string | `#666`   |
| url      | 設置圖片類型頭像的地址                           | string | -   |
| alt      | 設置圖片類型頭像無法顯示時的替代文本                | string | -   |
| icon     | 設置 Icon 類型頭像圖標  | string | -     |
| iconSize`v2.0.0废弃`     | [圖標尺寸](#/icon) | string \| number | `16`|

### avatarGroup
| 属性 | 說明                                                             | 類型   | 默認值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| maxCount     | 顯示的最大頭像個數   | number \| string | - |
| maxContent  | 頭像數量超出時，會出現一個頭像折疊元素。該元素內容可為...、more、+N。默認為 +N | 
| size         | 設置頭像的大小，可選值為：large、normal、small，支持直接輸入數字   | string | +N |
| shape        | 設置頭像的形狀，可選值為：square、round           | string | `round`  |
| maxBgColor  | 設置 Icon、字符類型頭像的背景色                    | string | `#eee`   |
| maxColor    | 設置 Icon、字符類型頭像的顏色                   | string | `#666` |
| span         | 設置頭像之間的間距               | string | `-8`   |
| zIndex       | 頭像之間的層級關係，可選值為：left、right  | string | `left`     |
### Events

| 属性 | 說明         | 類型     | 回調參數 |
| ---------------- | ------------ | -------- | -------- |
| onActiveAvatar  | 點擊頭像觸發事件    | Function | `event`    |
| onError       | 圖片加載失敗的事件   | Function | `event`    |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-avatar-square | `5px` |
| --nutui-avatar-large-width | `60px` |
| --nutui-avatar-large-height | `60px` |
| --nutui-avatar-small-width | `32px` |
| --nutui-avatar-small-height | `32px` |
| --nutui-avatar-normal-width | `40px` |
| --nutui-avatar-normal-height | `40px` |
