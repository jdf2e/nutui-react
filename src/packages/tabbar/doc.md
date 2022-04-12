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

const App = () => {
  return ( 
    <>   
    <Tabbar
      tabSwitch={(child, idx) => {
        alert(idx)
      }}
    >
      <TabbarItem tabTitle="首页" icon="home" />
      <TabbarItem tabTitle="分类" icon="category" />
      <TabbarItem tabTitle="发现" icon="find" />
      <TabbarItem tabTitle="购物车" icon="cart" />
      <TabbarItem tabTitle="我的" icon="my" />
    </Tabbar>
    </>
  );
};  
export default App;

```
:::
### 自定义选中

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Tabbar visible={2}>
      <TabbarItem tabTitle="首页" icon="home" />
      <TabbarItem tabTitle="分类" icon="category" />
      <TabbarItem tabTitle="发现" icon="find" />
      <TabbarItem tabTitle="购物车" icon="cart" />
      <TabbarItem tabTitle="我的" icon="my" />
    </Tabbar>
    </>
  );
};  
export default App;

```
:::
### 徽标提示

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Tabbar>
      <TabbarItem tabTitle="首页" icon="home" num="11" />
      <TabbarItem tabTitle="分类" icon="category" />
      <TabbarItem tabTitle="发现" icon="find" />
      <TabbarItem tabTitle="购物车" icon="cart" num="110" />
      <TabbarItem tabTitle="我的" icon="my" />
    </Tabbar>
    </>
  );
};  
export default App;

```
:::
### 自定义颜色

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
     <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
      <TabbarItem tabTitle="首页" icon="home" />
      <TabbarItem tabTitle="分类" icon="category" />
      <TabbarItem tabTitle="发现" icon="find" />
      <TabbarItem tabTitle="购物车" icon="cart" />
      <TabbarItem tabTitle="我的" icon="my" />
    </Tabbar>
    </>
  );
};  
export default App;

```
:::
### 三个icon的tabbar

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
      <TabbarItem tabTitle="首页" icon="home" />
      <TabbarItem tabTitle="分类" icon="category" />
      <TabbarItem tabTitle="发现" icon="find" />
    </Tabbar>
    </>
  );
};  
export default App;

```
:::
### 固定底部，可自由跳转

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Tabbar bottom>
      <TabbarItem tabTitle="首页" href="" icon="home" />
      <TabbarItem tabTitle="分类" icon="category" />
      <TabbarItem tabTitle="发现" icon="find" />
      <TabbarItem tabTitle="购物车" href="https://m.jd.com" icon="cart" />
      <TabbarItem tabTitle="我的" href="######" icon="my" />
    </Tabbar>
    </>
  );
};  
export default App;

```
:::        

## API

### Prop

### nut-tabbar

| 字段            | 说明               | 类型   | 默认值  |
|-----------------|--------------------|--------|---------|
| visible | 选中标签的索引值   | number | 0       |
| bottom          | 是否固定在页面底部 | Booble | false   |
| unactiveColor  | icon未激活的颜色   | string | #7d7e80 |
| activeColor    | icon激活的颜色     | string | #1989fa |

### tabbar-item

| 字段      | 说明                                      | 类型   | 默认值 |
|-----------|-------------------------------------------|--------|--------|
| tabTitle | 标签页的标题                              | String | --     |
| icon      | 标签页显示的[图标名称](#/icon) 或图片链接 | String | --     |
| href      | 标签页的跳转链接                          | String | --     |
| num       | 页签右上角的数字角标，超出99之后为99+     | Number | --     |


### Event

| 事件名称   | 说明               | 回调参数           |
|------------|--------------------|--------------------|
| tabSwitch | 切换页签时触发事件 | 点击的数据和索引值 |
