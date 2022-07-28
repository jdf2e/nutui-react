# Navbar 頭部導航

### 介紹 


提供導航功能。

### 安裝

```ts
import { NavBar } from '@nutui/nutui-react';
```

### 代碼示例

### 基本用法

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <NavBar
      title="訂單詳情"
      icon="share"
      leftShow
      onClickTitle={(e) => alert('標題')}
      onClickBack={(e) => alert('返回')}
      onClickIcon={(e) => alert('icon')}
     />
    </>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <NavBar
      title="瀏覽記錄"
      desc="清空"
      leftShow
      onClickTitle={(e) => alert('標題')}
      onClickBack={(e) => alert('返回')}
      onClickClear={(e) => alert('清空')}
     />
    </>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <NavBar
      title="購物車"
      icon="more"
      desc="編輯"
      titIcon="locationg3"
      onClickTitle={(e) => alert('標題')}
      onClickBack={(e) => alert('返回')}
      onClickClear={(e) => alert('編輯')}
      onClickIcon={(e) => alert('icon')}
     />
    </>
  );
};  
export default App;

```
:::

### Prop  

| 字段            | 說明                                                                                           | 類型    | 默認值  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| title           | 標題名稱                                                                                       | String  | -       |
| desc            | 右側描述                                                                                       | String  | -       |
| leftShow        | 是否展示左側箭頭                                                                              | Boolean | false   |
| icon            | 左側 [圖標名稱](#/icon) 或圖片鏈接                                                             | String  | -       |
| titIcon         | 標題帶icon                                                         | String  | -       |                                          

### Event
| 名稱  | 說明     | 回調參數    |
|-------|----------|-------------|
| onClickTitle | 點擊頁面標題事件 | event:Event |
| onClickClear | 點擊右側文案事件 | event:Event |
| onClickBack | 點擊返回上一頁事件 | event:Event |
| onClickIcon | 點擊右側icon事件 | event:Event |