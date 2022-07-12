#  Skeleton組件

### 介紹

在頁面上待加載區域填充灰色的佔位圖，本質上是界面加載過程中的過渡效果。

### 安裝
``` ts
import { Skeleton } from '@nutui/nutui-react';
```


## 代碼演示

### 基礎用法

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

### 傳入多行

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

### 顯示頭像

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

### 標題段落圓角風格

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

### 顯示子組件

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
                一套京東風格的輕量級移動端React組件庫，提供豐富的基礎組件和業務組件，幫助開發者快速搭建移動應用。
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

| 字段       | 說明                                             | 類型    | 默認值    |
|------------|-------------------------------------------------|---------|----------|
| loading    | 是否顯示骨架屏                                    | Boolean | `false`    | 
| width       | 每行寬度                                        | Number  | 100 |
| height      | 每行高度                                        | Number  | 100   |
| animated    | 是否開啟骨架屏動畫                                | Boolean  | `false`  |
| avatar      | 是否顯示頭像                                    | Boolean | `false`   |
| avatarShape      | 頭像形狀：正方形/圓形                        | String | `round`   |
| avatarSize       | 頭像大小                                  | String | `50px`    |
| round  | 標題/段落是否採用圓角風格                                | Boolean | `false`  |
| row    | 設置段落行數                                           | Number | 1       |
| title  | 是否顯示段落標題                                        | Boolean | `false`   |
