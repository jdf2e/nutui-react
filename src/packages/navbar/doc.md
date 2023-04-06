# Navbar 头部导航

### 介绍 


提供导航功能。

### 安装

```ts
import { NavBar } from '@nutui/nutui-react';
```

### 代码示例

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
        <span onClick={(e) => alert("标题")}>
        订单详情
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
        <span onClick={(e) => alert("标题")}>
        浏览记录
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
            <span onClick={(e) => alert('编辑')}>
            编辑
            </span>
            <MoreX onClick={(e) => alert('icon')} />
        </>
        }
        onClickBack={(e) => alert("返回")}
    >
        <span onClick={(e) => alert("标题")}>
        购物车
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
              <span onClick={(e) => alert("编辑")}>
                编辑
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

| 字段 | 说明 | 类型    | 默认值  |
|------------|--------------------|---------|---------|
| right | 右侧内容 | ReactNode  | -       |
| left        | 左侧内容，渲染在返回区域的右侧 | ReactNode  | -       |   
| back        | 返回区域的文字 | ReactNode  | -       |   
| fixed            | 是否固定 | boolean  | `false`       |   
| safeArea | 是否适配安全区 | boolean  | `false`       |   
| placeholder      | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | boolean  | `false`    |
| zIndex           | 导航栏层级           | number \| string  | `10`    |

### Event
| 名称                      | 说明     | 回调参数    |
|-------------------------|----------|-------------|
| onClickBack             | 点击返回区域后的回调 | `event: Event` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
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
