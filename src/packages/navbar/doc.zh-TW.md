# Navbar 頭部導航

## 介紹

提供導航功能。

## 安裝

```tsx
import { NavBar } from '@nutui/nutui-react';
```

## 代碼演示

### 基础用法

:::demo

```tsx
import  React, { useState } from "react";
import { NavBar, Toast, Tabs, TabPane } from '@nutui/nutui-react';
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react'

const App = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')
  const style = `
    .flex-center {
      display: inline-flex;
      align-items: center;
    }
    .title {
      display: flex;
      flex-direction: column;
      .desc {
        font-weight: 400;
        font-size: 12px;
        color: var(--nutui-gray-8);
      }
      .title-left {
        text-align: start;
      }
    }
    .navbar-tabs .nut-tabs-titles {
      padding: 0;
      .nut-tabs-titles-item {
        margin: 0;
        font-size: 16px;
      }
      .nut-tabs-titles-item-active {
        font-size: 20px;
      }
    }
  `
  return ( 
    <>
      <style>{style}</style>
      <NavBar
        back={
          <>
            <ArrowLeft />返回
          </>
        }
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        訂單詳情
      </NavBar>
      <NavBar
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        訂單詳情
      </NavBar>
      <NavBar
        right={
          <span onClick={(e) => Toast.show("清空")}>
            清空
          </span>
        }
        left={<Close />}
        back={<ArrowLeft />}
        onBackClick={(e) => Toast.show("返回")}
      >
        <div className="title">
          <span onClick={(e) => Toast.show("標題")}>
            瀏覽記錄
          </span>
          <span className="desc">瀏覽記錄</span>
        </div>
      </NavBar>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("編輯")}>
              編輯
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        <span onClick={(e) => Toast.show("標題")}>
          購物車
        </span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Toast.show('icon')}
        >
          <Cart />
        </i>
      </NavBar>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("編輯")}>
              編輯
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        <div style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-padding': 0,
              '--nutui-tabs-titles-gap': 0,
            }}
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
            <TabPane title="Tab 4"> Tab 4 </TabPane>
          </Tabs>
        </div>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={
          <>
            <ArrowLeft />返回
          </>
        }
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        訂單詳情
      </NavBar>
      <NavBar
        titleAlign="left"
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        訂單詳情
      </NavBar>

      <NavBar
        titleAlign="left"
        right={
          <span onClick={(e) => Toast.show("清空")}>
            清空
          </span>
        }
        left={<Close />}
        back={<ArrowLeft />}
        onBackClick={(e) => Toast.show("返回")}
      >
        <div className="title title-left">
          <span onClick={(e) => Toast.show("標題")}>
            瀏覽記錄
          </span>
          <span className="desc">瀏覽記錄</span>
        </div>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("編輯")}>
              編輯
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        <span onClick={(e) => Toast.show("標題")}>
          購物車
        </span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Toast.show('icon')}
        >
          <Cart />
        </i>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("編輯")}>
              編輯
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        <div>
          <Tabs
            className="navbar-tabs"
            align="left"
            activeType="simple"
            value={tab2value}
            onChange={(paneKey) => {
              setTab2value(paneKey)
            }}
          >
            <TabPane title="Tab1"> Tab1 </TabPane>
            <TabPane title="Tab2"> Tab2 </TabPane>
            <TabPane title="Tab3"> Tab3 </TabPane>
          </Tabs>
        </div>
      </NavBar>
    </>
  );
};  
export default App;

```

:::

## Navbar

### Props

| 属性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| right | 右側內容 | `ReactNode` | `-` |
| left | 左側內容，渲染在返回區域的右側 | `ReactNode` | `-` |
| back | 返回區域的文字 | `ReactNode` | `-` |
| titleAlign | 標題位置,可選值center left | `string` | `center` |
| fixed | 是否固定 | `boolean` | `false` |
| safeAreaInsetTop | 是否適配安全區 | `boolean` | `false` |
| placeholder | 固定在頂部時，是否在標簽位置生成一個等高的佔位元素 | `boolean` | `false` |
| zIndex | 導航欄層級 | `number` \| `string` | `10` |
| onBackClick | 點擊返回區域後的回調 | `onBackClick:(event: Event)=>void` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-navbar-width | 頭部導航的寬度 | `100%` |
| \--nutui-navbar-height | 頭部導航的高度 | `44px` |
| \--nutui-navbar-margin-bottom | 頭部導航的下邊距 | `20px` |
| \--nutui-navbar-background | 頭部導航的背景顏色 | `$white` |
| \--nutui-navbar-box-shadow | 頭部導航的陰影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | 頭部導航的字體顏色 | `$color-text` |
| \--nutui-navbar-font-size | 頭部導航的字體大小 | `$font-size-base` |
| \--nutui-navbar-title-font-size | 頭部導航標題的字體大小 | `$font-size-base` |
| \--nutui-navbar-title-font-weight | 頭部導航標題的字體粗細 | `0` |
| \--nutui-navbar-title-font-color | 頭部導航標題的字體顏色 | `$color-title` |
