# Navbar 头部导航

## 介绍

提供导航功能。

## 安装

```tsx
import { NavBar } from '@nutui/nutui-react';
```

## 代码演示

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
        订单详情
      </NavBar>
      <NavBar
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        订单详情
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
          <span onClick={(e) => Toast.show("标题")}>
            浏览记录
          </span>
          <span className="desc">浏览记录</span>
        </div>
      </NavBar>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("编辑")}>
              编辑
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        <span onClick={(e) => Toast.show("标题")}>
          购物车
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
            <span onClick={(e) => Toast.show("编辑")}>
              编辑
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
        订单详情
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
        订单详情
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
          <span onClick={(e) => Toast.show("标题")}>
            浏览记录
          </span>
          <span className="desc">浏览记录</span>
        </div>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("编辑")}>
              编辑
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("返回")}
      >
        <span onClick={(e) => Toast.show("标题")}>
          购物车
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
            <span onClick={(e) => Toast.show("编辑")}>
              编辑
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| right | 右侧内容 | `ReactNode` | `-` |
| left | 左侧内容，渲染在返回区域的右侧 | `ReactNode` | `-` |
| back | 返回区域的文字 | `ReactNode` | `-` |
| titleAlign | 标题位置,可选值center left | `string` | `center` |
| fixed | 是否固定 | `boolean` | `false` |
| safeAreaInsetTop | 是否适配安全区 | `boolean` | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | `boolean` | `false` |
| zIndex | 导航栏层级 | `number` \| `string` | `10` |
| onBackClick | 点击返回区域后的回调 | `onBackClick:(event: Event)=>void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-navbar-width | 头部导航的宽度 | `100%` |
| \--nutui-navbar-height | 头部导航的高度 | `44px` |
| \--nutui-navbar-margin-bottom | 头部导航的下边距 | `20px` |
| \--nutui-navbar-background | 头部导航的背景颜色 | `$white` |
| \--nutui-navbar-box-shadow | 头部导航的阴影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | 头部导航的字体颜色 | `$color-text` |
| \--nutui-navbar-font-size | 头部导航的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-size | 头部导航标题的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-weight | 头部导航标题的字体粗细 | `0` |
| \--nutui-navbar-title-font-color | 头部导航标题的字体颜色 | `$color-title` |
