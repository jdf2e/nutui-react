#  Skeleton組件

### 介紹

在頁面上待加載區域填充灰色的佔位圖，本質上是界面加載過程中的過渡效果。

### 安裝
``` ts
// react
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


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-skeleton-content-line-title-background-color | `  #efefef` |
