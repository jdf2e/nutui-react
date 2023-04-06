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
import { Left, Share, Close } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={
        <>
            <Left name="left" color="#979797" />
            返回
        </>
        }
        left={<Close width={12} />}
        right={
        <span onClick={(e) => alert('icon')}>
            <Share />
        </span>
        }
        onClickBack={(e) => alert("返回")}
    >
        <span onClick={(e) => alert("標題")}>
        訂單詳情
        </span>
    </NavBar>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';
import { Left } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        right={
        <span onClick={(e) => alert('清空')}>
            清空
        </span>
        }
        back={<Left name="left" color="#979797" />}
        onClickBack={(e) => alert("返回")}
    >
        <span onClick={(e) => alert("標題")}>
        瀏覽記錄
        </span>
    </NavBar>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';
import { Cart2, Left, MoreX} from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={<Left name="left" color="#979797" />}
        right={
        <>
            <span onClick={(e) => alert('編輯')}>
            編輯
            </span>
            <MoreX onClick={(e) => alert('icon')} />
        </>
        }
        onClickBack={(e) => alert("返回")}
    >
        <span onClick={(e) => alert("標題")}>
        購物車
        </span>
        <i style={{ marginLeft: '5px' }} onClick={(e) => alert('icon')}>
            <Cart2 />
        </i>
    </NavBar>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React, { useState } from "react";
import { NavBar, Tabs, TabPane } from '@nutui/nutui-react';
import { Left,MoreX } from '@nutui/icons-react'

const App = () => {
  const [tab1value, setTab1value] = useState('0')
  return (   
      <NavBar
         back={<Left name="left" color="#979797" />}
          right={
            <>
              <span onClick={(e) => alert("編輯")}>
                編輯
              </span>
              <MoreX onClick={(e) => alert('icon')} />
            </>
          }
          onClickBack={(e) => alert("返回")}
        >
            <Tabs value={tab1value} onChange={({ paneKey }) => { setTab1value(paneKey) }}>
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
      </NavBar>
  );
};  
export default App;

```
:::

### Prop  

| 字段 | 說明 | 類型    | 默認值  |
|------------|--------------------|---------|---------|
| right | 右側內容 | ReactNode  | -       |
| left        | 左側內容，渲染在返回區域的右側 | ReactNode  | -       |   
| back        | 返回區域的文字 | ReactNode  | -       |   
| fixed            | 是否固定 | boolean  | `false`       |   
| safeArea | 是否適配安全區 | boolean  | `false`       |   
| placeholder      | 固定在頂部時，是否在標簽位置生成一個等高的占位元素 | boolean  | `false`    |
| zIndex           | 導航欄層級           | number \| string  | `10`    |

### Event
| 名稱                      | 說明     | 回調參數    |
|-------------------------|----------|-------------|
| onClickBack             | 點擊返回區域後的回調 | `event: Event` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-navbar-height | `44px` |
| --nutui-navbar-margin-bottom | `20px` |
| --nutui-navbar-padding | `13px 16px` |
| --nutui-navbar-background | `$white` |
| --nutui-navbar-box-shadow | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| --nutui-navbar-color | `$gray1` |
| --nutui-navbar-title-base-font | `$font-size-2` |
| --nutui-navbar-title-font | `$font-size-2` |
| --nutui-navbar-title-font-weight | `0` |
| --nutui-navbar-title-font-color | `$navbar-color` |
| --nutui-navbar-title-width | `100px` |
| --nutui-navbar-title-icon-margin | `0 0 0 13px` |
