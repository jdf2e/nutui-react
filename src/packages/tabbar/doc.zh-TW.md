# Tabbar 標簽欄

## 介紹

底部導航常用場景

## 安裝

```tsx
import { Tabbar } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar onSwitch={(value) => {console.log(value)}}>
    <Tabbar.Item title="首頁" icon={<Home width={18} height={18} />} value={9} />
    <Tabbar.Item title="分類" icon={<Category width={18} height={18} dot />} />
    <Tabbar.Item title="發現" icon={<Find width={18} height={18} />} />
    <Tabbar.Item title="購物車" icon={<Cart width={18} height={18} />} />
    <Tabbar.Item title="我的" icon={<My width={18} height={18} />} />
  </Tabbar>
)

export default App;
```

:::

### 自定義選中

:::demo

```tsx
import React, { useState } from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2)
  
  return <Tabbar
    defaultValue={0}
    value={activeIndex}
    onSwitch={(value) => {
      setActiveIndex(value)
    }}
  >
    <Tabbar.Item title="首頁" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="分類" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="發現" icon={<Find width={20} height={20} />} />
    <Tabbar.Item title="購物車" icon={<Cart width={20} height={20} />} />
    <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
  </Tabbar>
}

export default App;
```

:::

### 只配圖標

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title="首頁" icon={<Home width={12} height={12} />} />
    <Tabbar.Item title="分類" icon={<Category width={12} height={12} />} />
    <Tabbar.Item icon={<Find width={24} height={24} />} />
    <Tabbar.Item title="購物車" icon={<Cart width={12} height={12} />} />
    <Tabbar.Item title="我的" icon={<My width={12} height={12} />} />
  </Tabbar>
)
```

:::

### 無圖標

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';

const App = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title="首頁" value={9} />
    <Tabbar.Item title="分類" dot />
    <Tabbar.Item title="發現" />
    <Tabbar.Item title="購物車" />
    <Tabbar.Item title="我的" />
  </Tabbar>
)
```

:::

### 徽標提示

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <Tabbar.Item title="首頁" icon={<Home width={12} height={12} />} value={11} />
    <Tabbar.Item title="分類" icon={<Category width={12} height={12} />} />
    <Tabbar.Item title="發現" icon={<Find width={12} height={12} />} />
    <Tabbar.Item title="購物車" icon={<Cart width={12} height={12} />} value={110} />
    <Tabbar.Item title="我的" icon={<My width={12} height={12} />} />
  </Tabbar>
)

export default App;
```

:::

### 紅點

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <Tabbar.Item title="首頁" icon={<Home width={20} height={20} />} dot />
    <Tabbar.Item title="分類" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="發現" icon={<Find width={20} height={20} />} />
    <Tabbar.Item title="購物車" icon={<Cart width={20} height={20} />} dot />
    <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default App;
```

:::

### 自定義顏色

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';


const App = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <Tabbar.Item title="首頁" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="分類" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="發現" icon={<Find width={20} height={20} />} />
    <Tabbar.Item title="購物車" icon={<Cart width={20} height={20} />} />
    <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default App;
```

:::

### 可自定義icon個數的tabbar

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Category, Find, Home } from '@nutui/icons-react';

const App = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <Tabbar.Item title="首頁" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="分類" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="發現" icon={<Find width={20} height={20} />} />
  </Tabbar>
)

export default App;
```

:::

### 固定底部

:::demo

```tsx
import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar fixed>
    <Tabbar.Item title="首頁" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="分類" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="發現" icon={<Find width={20} height={20} />} />
    <Tabbar.Item title="購物車" icon={<Cart width={20} height={20} />} />
    <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default App;
```

:::

## Tabbar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 默認選中的標簽的索引值 | `number` | `0` |
| value | 選中的標簽的索引值 | `number` | `-` |
| fixed | 是否固定在頁面底部，為 true 時默認開啟 safeArea | `boolean` | `false` |
| activeColor | icon激活的顏色 | `string` | `#1989fa` |
| inactiveColor | icon未激活的顏色 | `string` | `#7d7e80` |
| safeArea | 是否開啟iphone繫列全面屏底部安全區適配 | `boolean` | `false` |
| onSwitch | 切換頁簽時觸發事件 | `(value) => void` | `-` |

## Tabbar.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標簽頁的標題 | `ReactNode` | `-` |
| icon | 自定義圖標 | `ReactNode` | `-` |
| value | 徽標中顯示的內容，支持數字、字符和自定義內容 | `ReactNode` | `-` |
| max | value 為數值時，最大值 | `number` | `99` |
| dot | 徽標是否為小點 | `boolean` | `false` |
| top | 徽標的上下偏移量，支持單位設置，可設置為：5 等 | `number` | `0` |
| right | 徽標的左右偏移量，支持單位設置，可設置為：5 等 | `number` | `0` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tabbar-height | 高度 | `50px` |
| \--nutui-tabbar-active-color | 選中顏色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未選中顏色 | `$color-title` |
| \--nutui-tabbar-border-top | 上邊框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下邊框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 陰影 | `none` |
| \--nutui-tabbar-text-font-size | 標題字體大小 | `$font-size-xs` |
| \--nutui-tabbar-text-large-font-size | 無圖標時標題字體大小 | `$font-size-large` |
| \--nutui-tabbar-text-line-height | 字體行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 標題上外邊距 | `3px` |