# Skeleton 骨架屏組件

## 介紹

在頁面上待加載區域填充灰色的佔位圖，本質上是界面加載過程中的過渡效果。

## 安裝

```tsx
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
    <Skeleton  animated />
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
    <Skeleton  rows={3} title animated />
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
    <Skeleton  rows={3} title animated avatar avatarSize="100px" />
  )
}
export default App;
```

:::

### 標題段落圓角風格

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

### 顯示子組件

:::demo

```tsx
import React, { useState } from 'react'
import { Skeleton, Switch, Avatar } from '@nutui/nutui-react';


const App = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (value: boolean, event: React.MouseEvent<Element, MouseEvent>) => {
    console.log(`觸發了change事件，開關狀態：${value}`)
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
              一套京東風格的輕量級移動端React組件庫，提供豐富的基礎組件和業務組件，幫助開發者快速搭建移動應用。
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示骨架屏(true不顯示骨架屏，false顯示骨架屏) | `boolean` | `true` |
| animated | 是否開啟骨架屏動畫 | `boolean` | `false` |
| avatar | 是否顯示頭像 | `boolean` | `false` |
| avatarShape | 頭像形狀：正方形/圓形 | `string` | `round` |
| avatarSize | 頭像大小 | `string` | `50px` |
| rows | 設置段落行數 | `string` | `1` |
| title | 是否顯示段落標題 | `boolean` | `true` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-skeleton-background | 背景 | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | 線條寬度 | `100%` |
| \--nutui-skeleton-line-height | 線條高度 | `15px` |
| \--nutui-skeleton-line-border-radius | 線條邊框圓角 | `0` |