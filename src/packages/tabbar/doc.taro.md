#  Tabbar 標簽欄

### 介紹

底部導航常用場景

### 安裝

```ts
// react
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
<Tabbar onSwitch={(child, idx) => {console.log(idx)}}>
    <TabbarItem tabTitle="首頁" icon={<Home width={18} height={18} />} />
    <TabbarItem tabTitle="分類" icon={<Category width={18} height={18} />} />
    <TabbarItem tabTitle="發現" icon={<Find width={18} height={18} />} />
    <TabbarItem tabTitle="購物車" icon={<Cart width={18} height={18} />} />
    <TabbarItem tabTitle="我的" icon={<My width={18} height={18} />} />
  </Tabbar>
)

export default App;
```
:::
### 自定義選中

:::demo
```tsx
import React, { useState } from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2)
  
  return <Tabbar
    visible={0}
    activeVisible={activeIndex}
    onSwitch={(child, id) => {
      setActiveIndex(id)
    }}
  >
    <TabbarItem tabTitle="首頁" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分類" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="發現" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="購物車" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="我的" icon={<My width={20} height={20} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首頁" icon={<Home width={12} height={12} />} num="11" />
    <TabbarItem tabTitle="分類" icon={<Category width={12} height={12} />} />
    <TabbarItem tabTitle="發現" icon={<Find width={12} height={12} />} />
    <TabbarItem tabTitle="購物車" icon={<Cart width={12} height={12} />} num="110" />
    <TabbarItem tabTitle="我的" icon={<My width={12} height={12} />} />
  </Tabbar>
)

export default App;
```
:::

### 紅點

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首頁" icon={<Home width={20} height={20} />} dot />
    <TabbarItem tabTitle="分類" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="發現" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="購物車" icon={<Cart width={20} height={20} />} dot />
    <TabbarItem tabTitle="我的" icon={<My width={20} height={20} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';


const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首頁" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分類" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="發現" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="購物車" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="我的" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default App;
```
:::
### 可自定義icon個數的tabbar

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Category, Find, Home } from '@nutui/icons-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首頁" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分類" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="發現" icon={<Find width={20} height={20} />} />
  </Tabbar>
)

export default App;
```
:::
### 固定底部，可自由跳轉

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar bottom>
    <TabbarItem tabTitle="首頁" href="" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分類" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="發現" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="購物車" href="https://m.jd.com" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="我的" href="/" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default App;
```
:::        

## API

### Prop

### nut-tabbar

| 字段                          | 說明                     | 類型   | 默認值     |
|-----------------------------|------------------------|--------|---------|
| visible                     | 默認選中的標簽的索引值            | number | `0`       |
| activeVisible`1.4.8`         | 選中的標簽的索引值            | number | -       |
| bottom                      | 是否固定在頁面底部              | boolean | `false`   |
| unactiveColor               | icon未激活的顏色             | string | `#7d7e80` |
| activeColor                 | icon激活的顏色              | string | `#1989fa` |
size`v2.0.0廢棄`                | icon的統一尺寸              | string \| boolean | `20`      |
| safeAreaInsetBottom | 是否開啟iphone系列全面屏底部安全區適配 | boolean | `false`   |
| style               | 組件樣式                   | CSSProperties | `{}`      |
| className           | 組件類名                   | string | -       |

### tabbar-item

| 字段                        | 說明                                                                                                                      | 類型   | 默認值 |
|---------------|------------|--------|--------|
| tabTitle | 標簽頁的標題 | string | -     |
| icon | 自定義圖標 | ReactNode | - |
| href | 標簽頁的跳轉鏈接； | string | -     |
| to`v1.4.0 廢棄` | 標簽頁的路由對象，等於 React Router 的 [to 屬性](https://v5.reactrouter.com/web/api/Link/to-string) 屬性, taro 版本中采用 Taro.navigateTo 實現 | any | -     |
| num | 頁簽右上角的數字角標，超出99之後為99+ | number | - |
| iconClassPrefix`v2.0.0廢棄`   | 自定義 icon 類名前綴，用於使用自定義圖標 | string | `nut-icon` |
| iconFontClassName`v2.0.0廢棄` | 自定義 icon 字體基礎類名 | string | `nutui-iconfont` |
| dot| 是否顯示圖標右上角小紅點 | boolean | `false`     |
| iconSize`v2.0.0廢棄`    | icon的單個尺寸     | string \| boolean | `20` |

### Event

| 事件名稱            | 說明               | 回調參數           |
|-----------------|--------------------|--------------------|
| tabSwitch`廢棄`   | 切換頁簽時觸發事件 | 點擊的數據和索引值 |
| onSwitch | 切換頁簽時觸發事件 | 點擊的數據和索引值 |


## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-tabbar-height | `50px`|
| --nutui-tabbar-active-color | `$primary-color` |
| --nutui-tabbar-unactive-color | `$primary-color` |
| --nutui-tabbar-border-top | `1px solid #eee` |
| --nutui-tabbar-border-bottom | `1px solid #eee` |
| --nutui-tabbar-box-shadow | `none` |
| --nutui-tabbar-item-text-font-size | `$font-size-0` |
| --nutui-tabbar-item-text-line-height | `initial` |
| --nutui-tabbar-height | `50px` |
| --nutui-tabbar-word-margin-top | `auto` |
| --nutui-tabbar-dot-right | `12px`|
| --nutui-tabbar-dot-top | `0` |
| --nutui-tabbar-word-margin-top | `3px` |
