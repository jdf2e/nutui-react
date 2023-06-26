# SideNavBar組件

## 介紹

用於內容選擇和切換

## 安裝

```tsx
import { SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React,{useState} from "react";
import {Cell, SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';

const App = () => {
    const [navBarState, setNavBarState] = useState({
    visible: false,
    position: 'left',
  })
  const changeNarBar = (visible, position= navBarState.position) => {
    setNavBarState({
      visible,
      position,
    })
  }
 
  return ( 
    <>   
    <Cell
          title="左側彈出"
          onClick={() => {
            changeNarBar(true, 'left')
          }}
        />
        <Cell
          title="右側彈出"
          onClick={() => {
            changeNarBar(true, 'right')
          }}
        />
        <SideNavBar
          title="首頁"
          visible={navBarState.visible}
          position={navBarState.position}
          handleClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title="一級標題" value="1-0" >
            <SideNavBarItem title="一級內容1" value="1-01" />
            <SideNavBarItem title="一級內容2" value="1-02" />
            <SubSideNavBar title="二級標題" value="2-0">
              <SideNavBarItem title="二級内容1" value="2-01" />
              <SideNavBarItem title="二級内容2" value="2-02" />
            </SubSideNavBar>
          </SubSideNavBar>
        </SideNavBar>
    </>
  );
};  
export default App;

```

:::

### 嵌套及回調

:::demo

```tsx
import  React,{useState} from "react";
import {Cell,SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const changeNarBar = (visible) => {
   setVisible(visible)
  }
  const clickItem = ({ title, value }) => {
    Toast.show(`title=${title},value=${value}`)
  }
  const clickTitle = ({ title, value, isShow }) => {
    Toast.show(`title=${title},value=${value},isShow=${isShow}`)
  }
  return ( 
    <>  
      <Cell
          title="顯示"
          onClick={() => {
            changeNarBar(true)
          }}
        /> 
    <SideNavBar
          title="首頁"
          visible={visible}
          position='left'
          handleClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title="一級標題" value="1-0" onClick={clickTitle}>
            <SideNavBarItem title="一級內容1" value="1-01" onClick={clickItem} />
            <SideNavBarItem title="一級內容2" value="1-02" />
            <SubSideNavBar title="二級標題" value="2-0">
              <SideNavBarItem title="二級内容1" value="2-01" />
              <SideNavBarItem title="二級内容2" value="2-02" />
                <SubSideNavBar title="三級標題" value="3-0">
                  <SideNavBarItem title="三級内容1" value="3-01" />
                  <SideNavBarItem title="三級内容2" value="3-02" />
                </SubSideNavBar>
            </SubSideNavBar>
          </SubSideNavBar>
        </SideNavBar>
    </>
  );
};  
export default App;

```

:::

## SideNavBar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 組件是否顯示 | `boolean` | `false` |
| title | 整體標題 | `string` | `-` |
| width | 遮罩寬度百分比 | `string` | `80%` |
| position | 彈出位置 | `left` \| `right` | `left` |
| offset | 縮進寬度 | `number` | `20` |
| onClose | 關閉遮罩時觸發 | `-` | `-` |

## SubSideNavBar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 導航唯一標識 | `string`  \|  `number` | `-` |
| title | 整體標題 | `string` | `-` |
| open | 導航是否默認展開 | `boolean` | `true` |
| onClick | 導航點擊 | `data: {title: string, value: string \| number, isShow: boolean}` | `-` |

## SideNavBarItem

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 導航唯一標識 | `string`  \|  `number` | `-` |
| title | 整體標題 | `string` | `-` |
| onClick | 導航點擊 | `data: {title: string, value: string \| number}` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-sidenavbar-content-bg-color | 側邊欄導航背景色 | `$white` |
| \--nutui-sidenavbar-item-height | 側邊欄每項的高度 | `40px` |
| \--nutui-sidenavbar-title-padding | 標題的內邊距 | `10px 8px 10px 20px` |
| \--nutui-sidenavbar-title-background | 標題的背景色 | `$gray4` |
| \--nutui-sidenavbar-title-color | 標題的字體顏色 | `$gray1` |
| \--nutui-sidenavbar-sub-title-padding | 子標題的內邊距 | `10px 8px 10px 35px` |
| \--nutui-sidenavbar-sub-title-background | 子標題背景色 | `$gray5` |
| \--nutui-sidenavbar-sub-title-color | 子標題字體顏色 | `$gray1` |
| \--nutui-sidenavbar-sub-list-background | 選項列表背景色 | `$gray5` |
| \--nutui-sidenavbar-sub-list-color | 選項列表字體顏色 | `$gray1` |