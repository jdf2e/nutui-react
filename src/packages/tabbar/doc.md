#  Tabbar 标签栏

### 介绍

底部导航常用场景

### 安装

```ts
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
<Tabbar tabSwitch={(child, idx) => {console.log(idx)}}>
    <TabbarItem tabTitle="首页" icon="home" />
    <TabbarItem tabTitle="分类" icon="category" />
    <TabbarItem tabTitle="发现" icon="find" />
    <TabbarItem tabTitle="购物车" icon="cart" />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
)

export default App;
```
:::
### 自定义选中

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar visible={2}>
    <TabbarItem tabTitle="首页" icon="home" />
    <TabbarItem tabTitle="分类" icon="category" />
    <TabbarItem tabTitle="发现" icon="find" />
    <TabbarItem tabTitle="购物车" icon="cart" />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
)

export default App;
```
:::
### 徽标提示

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首页" icon="home" num="11" />
    <TabbarItem tabTitle="分类" icon="category" />
    <TabbarItem tabTitle="发现" icon="find" />
    <TabbarItem tabTitle="购物车" icon="cart" num="110" />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
)

export default App;
```
:::

### 红点

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首页" icon="home" dot />
    <TabbarItem tabTitle="分类" icon="category" />
    <TabbarItem tabTitle="发现" icon="find" />
    <TabbarItem tabTitle="购物车" icon="cart" dot />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
)

export default App;
```
:::

### 自定义颜色

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首页" icon="home" />
    <TabbarItem tabTitle="分类" icon="category" />
    <TabbarItem tabTitle="发现" icon="find" />
    <TabbarItem tabTitle="购物车" icon="cart" />
    <TabbarItem tabTitle="我的" icon="my" />
  </Tabbar>
)

export default App;
```
:::
### 可自定义icon个数的tabbar

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首页" icon="home" />
    <TabbarItem tabTitle="分类" icon="category" />
    <TabbarItem tabTitle="发现" icon="find" />
  </Tabbar>
)

export default App;
```
:::
### 固定底部，可自由跳转

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar bottom>
    <TabbarItem tabTitle="首页" href="" icon="home" />
    <TabbarItem tabTitle="分类" icon="category" />
    <TabbarItem tabTitle="发现" icon="find" />
    <TabbarItem tabTitle="购物车" href="https://m.jd.com" icon="cart" />
    <TabbarItem tabTitle="我的" to="/" icon="my" />
  </Tabbar>
)

export default App;
```
:::        

## API

### Prop

### nut-tabbar

| 字段            | 说明               | 类型   | 默认值  |
|-----------------|--------------------|--------|---------|
| visible | 选中标签的索引值   | number | 0       |
| bottom          | 是否固定在页面底部 | Boolean | false   |
| unactiveColor  | icon未激活的颜色   | String | #7d7e80 |
| activeColor    | icon激活的颜色     | String | #1989fa |
| size`v1.2.2`    | icon的尺寸     | String 、Boolean | 20 |
| safeAreaInsetBottom`v1.2.2`    | 是否开启iphone系列全面屏底部安全区适配     | Boolean | false |
| style`v1.2.2`    | 组件样式     | React.CSSProperties | {} |
| clsssName`v1.2.2`    | 组件类名     | String | - |

### tabbar-item

| 字段      | 说明                                      | 类型   | 默认值 |
|-----------|-------------------------------------------|--------|--------|
| tabTitle | 标签页的标题                              | String | --     |
| icon      | 标签页显示的[图标名称](#/icon) 或图片链接 | String | --     |
| href      | 标签页的跳转链接；如果同时存在 `to`，优先级高于 to   | String | --     |
| to        | 标签页的路由对象，等于 React Router 的 [to 属性](https://v5.reactrouter.com/web/api/Link/to-string) 属性 | any | --     |
| num       | 页签右上角的数字角标，超出99之后为99+     | Number | --     |
| classPrefix`v1.2.2`      | 自定义icon 类名前缀，用于使用自定义图标   | String | 'nut-icon'     |
| dot`v1.2.2`      | 是否显示图标右上角小红点   | Boolean | false     |


### Event

| 事件名称            | 说明               | 回调参数           |
|-----------------|--------------------|--------------------|
| tabSwitch`废弃`   | 切换页签时触发事件 | 点击的数据和索引值 |
| onSwitch`v1.3.8` | 切换页签时触发事件 | 点击的数据和索引值 |
