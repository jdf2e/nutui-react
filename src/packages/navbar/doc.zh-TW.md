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
import { NavBar, Icon } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="訂單詳情"
          leftShow
          leftText="返回"
          onClickTitle={(e) => alert("返回")}
          onClickBack={(e) => alert("標題")}
          onClickRight={(e) => alert('icon')}
        >
          <Icon name="share" slot="right"></Icon>
        </NavBar>
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
          onClickTitle={(e) => alert("返回")}
          onClickBack={(e) => alert("標題")}
          onClickRight={(e) => alert('清空')}
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
import { NavBar, Icon } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="購物車"
          desc="編輯"
          titIcon="locationg3"
          onClickTitle={(e) => alert("返回")}
          onClickBack={(e) => alert("標題")}
          onClickRight={(e) => alert('編輯')}
          onClickIcon={(e) => alert('icon')}
        >
          <Icon name="more-x" slot="right"></Icon>
      </NavBar>
    </>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React from "react";
import { NavBar, Icon } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>
      <NavBar
          title="訂單詳情"
          leftShow
          border
          leftText="返回"
          onClickTitle={(e) => alert("返回")}
          onClickBack={(e) => alert("標題")}
          onClickRight={(e) => alert('icon')}
        >
          <Icon name="share" slot="right"></Icon>
      </NavBar>
    </>
  );
};  
export default App;

```
:::


### 自定義導航欄中間內容

:::demo
```tsx
import  React, { useState } from "react";
import { NavBar, Icon, Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('Tab 1')
  return ( 
    <>   
      <NavBar
          desc="編輯"
          onClickTitle={(e) => alert("標題")}
          onClickRight={(e) => alert("編輯")}
          onClickBack={(e) => alert("返回")}
          onClickIcon={(e) => alert('icon')}
        >
          <div slot="content">
            <Tabs value={tab1value} onChange={({ paneKey }) => { setTab1value(paneKey) }}>
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
          </div>
          <Icon name="more-x" slot="right"></Icon>
      </NavBar>
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
| leftShow        | 是否展示左側箭頭                                                                              | Boolean | true   |
| titIcon         | 標題帶icon                                                         | String  | -       |   
| leftText         | 左側文案                                                         | String  | -       |  
| fixed         | 是否固定                                                         | Boolean  | false       |   
| safeAreaInsetTop         | 是否適配安全區                                                         | Boolean  | false       |   
| border         | 是否顯示底部邊框                                      | Boolean  | false    | 
| placeholder         | 固定在頂部時，是否在標籤位置生成一個等高的佔位元素           | Boolean  | false    |
| zIndex         | 導航欄層級           | Number、String  | 10    |
| style         | 容器樣式           | React.CSSProperties  | {}    |
| className         | 容器類名           | String  | ""    |                                         

### Event
| 名稱  | 說明     | 回調參數    |
|-------|----------|-------------|
| onClickTitle | 點擊標題事件 | event:Event |
| onClickRight | 點擊右側事件 | event:Event |
| onClickBack | 點擊返回事件 | event:Event |
| onClickIcon | 點擊標題右側icon事件 | event:Event |