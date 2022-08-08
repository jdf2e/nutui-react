#  Tabbar 標籤欄

### 介紹

導航最常用場景

### 安裝

```ts
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
    tabSwitch={(child, idx) => {
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
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar visible={2}>
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

| 字段            | 說明               | 類型   | 默認值  |
|-----------------|--------------------|--------|---------|
| visible | 選中標籤的索引值   | number | 0       |
| bottom          | 是否固定在頁面底部 | Boolean | false   |
| unactiveColor  | icon未激活的顏色   | String | #7d7e80 |
| activeColor    | icon激活的顏色     | String | #1989fa |
| size    | icon的尺寸     | String 、Boolean | 20 |
| safeAreaInsetBottom    | 是否開啟iphone系列全面屏底部安全區適配     | Boolean | false |
| style    | 組件樣式     | React.CSSProperties | {} |
| clsssName    | 組件類名     | String | - |

### tabbar-item

| 字段      | 說明                                      | 類型   | 默認值 |
|-----------|-------------------------------------------|--------|--------|
| tabTitle | 標籤頁的標題                              | String | --     |
| icon      | 標籤頁顯示的[圖標名稱](#/icon) 或圖片鏈接 | String | --     |
| href      | 標籤頁的跳轉鏈接；如果同時存在 `to`，優先級高於 to   | String | --     |
| to        | 	標籤頁的路由對象，等於 React Router 的 [to 屬性](https://v5.reactrouter.com/web/api/Link/to-string) 屬性 | any | --     |
| num       | 頁簽右上角的數字角標，超出99之後為99+     | Number | --     |
| classPrefix      | 自定義icon 類名前綴，用於使用自定義圖標   | String | 'nutui-iconfont'     |
| dot      | 是否顯示圖標右上角小紅點   | Boolean | false     |


### Event

| 事件名稱   | 說明               | 回調參數           |
|------------|--------------------|--------------------|
| tabSwitch | 切換頁籤時觸發事件 | 點擊的數據和索引值 |
