#  Tabbar 標籤欄

### 介紹

導航最常用場景

### 安裝

```ts
// react
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎語言

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar
    onSwitch={(child, idx) => {
      console.log(idx)
    }}
  >
    <TabbarItem tabTitle="首頁" icon="首頁" />
    <TabbarItem tabTitle="分類" icon="category" />
    <TabbarItem tabTitle="發現" icon="find" />
    <TabbarItem tabTitle="購物車" icon="cart" />
    <TabbarItem tabTitle="我的" icon="我的" />
  </Tabbar>
);

export default App;
```
:::
### 自定義選中

:::demo
```tsx
import React, { useState } from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  return <Tabbar
    visible={0}
    activeVisible={activeIndex}
    onSwitch={(child, id) => {
      setActiveIndex(id)
    }}
  >
    <TabbarItem tabTitle="首頁" icon="首頁" />
    <TabbarItem tabTitle="分類" icon="category" />
    <TabbarItem tabTitle="發現" icon="find" />
    <TabbarItem tabTitle="購物車" icon="cart" />
    <TabbarItem tabTitle="我的" icon="我的" />
  </Tabbar>
}

export default App;
```
:::
### 徽標提示

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首頁" icon="home" num="11" />
    <TabbarItem tabTitle="分類" icon="category" />
    <TabbarItem tabTitle="發現" icon="find" />
    <TabbarItem tabTitle="購物車" icon="cart" num="110" />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
);

export default App;
```
:::

### 紅點

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首頁" icon="home" dot />
    <TabbarItem tabTitle="分類" icon="category" />
    <TabbarItem tabTitle="發現" icon="find" />
    <TabbarItem tabTitle="購物車" icon="cart" dot />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
)

export default App;
```
:::
### 自定義顏色

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首頁" icon="home" />
    <TabbarItem tabTitle="分類" icon="category" />
    <TabbarItem tabTitle="發現" icon="find" />
    <TabbarItem tabTitle="購物車" icon="cart" />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
);

export default App;
```
:::
### 可自定義icon個數的tabbar

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首頁" icon="home" />
    <TabbarItem tabTitle="分類" icon="category" />
    <TabbarItem tabTitle="發現" icon="find" />
  </Tabbar>
);  

export default App;
```
:::
### 固定底部，可自由跳轉

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar bottom>
    <TabbarItem tabTitle="首頁" href="" icon="home" />
    <TabbarItem tabTitle="分類" icon="category" />
    <TabbarItem tabTitle="發現" icon="find" />
    <TabbarItem tabTitle="購物車" href="https://m.jd.com" icon="cart" />
    <TabbarItem tabTitle="我的" to="/" icon="my" />
  </Tabbar>
);

export default App;
```
:::        

## API

### Prop

### nut-tabbar

| 字段            | 說明                     | 類型   | 默認值  |
|-----------------|------------------------|--------|---------|
| visible | 默认選中的標籤的索引值            | number | 0       |
| activeVisible`1.4.8` | 選中的標籤的索引值              | number | -       |
| bottom          | 是否固定在頁面底部              | Boolean | false   |
| unactiveColor  | icon未激活的顏色             | String | #7d7e80 |
| activeColor    | icon激活的顏色              | String | #1989fa |
| size`v1.2.2`    | icon的统一尺寸              | String 、Boolean | 20 |
| safeAreaInsetBottom    | 是否開啟iphone系列全面屏底部安全區適配 | Boolean | false |
| style    | 組件樣式                   | React.CSSProperties | {} |
| clsssName    | 組件類名                   | String | - |

### tabbar-item

| 字段 | 說明 | 類型   | 默認值 |
|-----------|-------------------|--------|--------|
| tabTitle | 標籤頁的標題 | String | --     |
| icon | 標籤頁顯示的[圖標名稱](#/icon) 或圖片鏈接 | String | --     |
| href | 標籤頁的跳轉鏈接   | String | --     |
| to`v1.4.0 废弃` | 	標籤頁的路由對象，等於 React Router 的 [to 屬性](https://v5.reactrouter.com/web/api/Link/to-string) 屬性 | any | --     |
| num | 頁簽右上角的數字角標，超出99之後為99+     | Number | --     |
| iconClassPrefix`v1.2.1`  | 自定義 icon 類名前綴，用於使用自定義圖標 | String | `nut-icon` |
| iconFontClassName`v1.2.1` | 自定義 icon 字體基礎類名 | String | 
| dot | 是否顯示圖標右上角小紅點   | Boolean | false     |
| iconSize`v1.4.7`   | icon的单个尺寸     | String 、Boolean | 20 |


### Event

| 事件名稱   | 說明               | 回調參數           |
|------------|--------------------|--------------------|
| tabSwitch | 切換頁籤時觸發事件 | 點擊的數據和索引值 |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-tabbar-height | ` 50px`|
| --nutui-tabbar-active-color | ` $primary-color` |
| --nutui-tabbar-unactive-color | `  $primary-color` |
| --nutui-tabbar-border-top | ` 1px solid #eee` |
| --nutui-tabbar-border-bottom | `  1px solid #eee` |
| --nutui-tabbar-box-shadow | ` none` |
| --nutui-tabbar-item-text-font-size | `  $font-size-0` |
| --nutui-tabbar-item-text-line-height | `  initial` |
| --nutui-tabbar-height | ` 50px` |
| --nutui-tabbar-word-margin-top | ` auto` |
| --nutui-tabbar-dot-right | ` 12px`|
| --nutui-tabbar-dot-top | ` 0` |
| --nutui-tabbar-word-margin-top | ` 3px` |
