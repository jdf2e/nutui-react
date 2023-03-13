# Navbar 头部导航

### 介绍 


提供导航功能。

### 安装

```ts
import { NavBar } from '@nutui/nutui-react-taro';
```

### 代码示例

### 基本用法

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react-taro';
import { Share } from '@nutui/icons-react-taro'

const App = () => {
  return ( 
    <>   
      <NavBar
          title="订单详情"
          leftShow
          leftText="返回"
          onClickTitle={(e) => alert("标题")}
          onClickBack={(e) => alert("返回")}
          onClickRight={(e) => alert('icon')}
        >
           <i slot="right">
            <Share />
          </i>
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
import { NavBar } from '@nutui/nutui-react-taro';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="浏览记录"
          desc="清空"
          leftShow
          onClickTitle={(e) => alert("标题")}
          onClickBack={(e) => alert("返回")}
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
import { NavBar } from '@nutui/nutui-react-taro';
import { Cart2, More } from '@nutui/icons-react-taro'

const App = () => {
  return ( 
    <>   
      <NavBar
          title="购物车"
          desc="编辑"
          onClickTitle={(e) => alert("标题")}
          onClickBack={(e) => alert("返回")}
          onClickRight={(e) => alert('编辑')}
          onClickIcon={(e) => alert('icon')}
        >
          <i slot="titleIcon">
            <Cart2 />
          </i>
          <i slot="right">
            <More />
          </i>
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
import { NavBar } from '@nutui/nutui-react-taro';
import { Share } from '@nutui/icons-react-taro'

const App = () => {
  return ( 
    <>
      <NavBar
          title="订单详情"
          leftShow
          border
          leftText="返回"
          onClickTitle={(e) => alert("返回")}
          onClickBack={(e) => alert("标题")}
          onClickRight={(e) => alert('icon')}
        >
           <i slot="right">
            <Share />
          </i>
      </NavBar>
    </>
  );
};  
export default App;

```
:::


### 自定义导航栏中间内容

:::demo
```tsx
import  React, { useState } from "react";
import { NavBar, Tabs, TabPane } from '@nutui/nutui-react-taro';
import { More } from '@nutui/icons-react-taro'

const App = () => {
  const [tab1value, setTab1value] = useState('Tab 1')
  return ( 
    <>   
      <NavBar
          desc="编辑"
          onClickTitle={(e) => alert("标题")}
          onClickRight={(e) => alert("编辑")}
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
          <i slot="right">
            <More />
          </i>
      </NavBar>
    </>
  );
};  
export default App;

```
:::

### Prop  

| 字段                       | 说明                                                                                           | 类型    | 默认值  |
|--------------------------|------------------------------------------------------------------------------------------------|---------|---------|
| title                    | 标题名称                                                                                       | string  | -       |
| desc                     | 右侧描述                                                                                       | string  | -       |
| leftShow                 | 是否展示左侧箭头                                                                              | boolean | `true`   |
| icon`v1.2.1 废弃`         | 左侧 [图标名称](#/icon) 或图片链接                                                             | string  | -       |
| titIcon`v1.5.0 废弃`                    | 标题带icon                                                         | string  | -       |   
| leftText`v1.2.1`         | 左侧文案                                                         | string  | -       |   
| fixed`v1.2.1`            | 是否固定                                                         | boolean  | `false`       |   
| safeAreaInsetTop`v1.2.1` | 是否适配安全区                                                         | boolean  | `false`       |   
| border`v1.2.1`           | 是否显示底部边框                                      | boolean  | `false`    | 
| placeholder`v1.2.1`      | 固定在顶部时，是否在标签位置生成一个等高的占位元素           | boolean  | `false`    |
| zIndex`v1.2.1`           | 导航栏层级           | number \| string  | `10`    |
| style`v1.2.1`            | 容器样式           | CSSProperties  | `{}`    |
| className`v1.2.1`        | 容器类名           | string  | -    |                                          

### Event
| 名称                      | 说明     | 回调参数    |
|-------------------------|----------|-------------|
| onClickTitle            | 点击标题事件 | `event: Event` |
| onClickClear`v1.2.1 废弃` | 点击右侧文案事件 | `event: Event` |
| onClickRight`v1.2.1`    | 点击右侧事件 | `event: Event` |
| onClickBack`v1.2.1`             | 点击返回事件 | `event: Event` |
| onClickIcon`v1.2.1`             | 点击标题右侧icon事件 | `event: Event` |

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
