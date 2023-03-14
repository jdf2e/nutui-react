#  Tabbar 标签栏

### 介绍

底部导航常用场景

### 安装

```ts
// react
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
<Tabbar onSwitch={(child, idx) => {console.log(idx)}}>
    <TabbarItem tabTitle="首页" icon={<Home width={18} height={18} />} />
    <TabbarItem tabTitle="分类" icon={<Category width={18} height={18} />} />
    <TabbarItem tabTitle="发现" icon={<Find width={18} height={18} />} />
    <TabbarItem tabTitle="购物车" icon={<Cart width={18} height={18} />} />
    <TabbarItem tabTitle="我的" icon={<My width={18} height={18} />} />
  </Tabbar>
)

export default App;
```
:::
### 自定义选中

:::demo
```tsx
import React, { useState } from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2)
  
  return <Tabbar
    visible={0}
    activeVisible={activeIndex}
    onSwitch={(child, id) => {
      setActiveIndex(id)
    }}
  >
    <TabbarItem tabTitle="首页" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分类" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="发现" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="购物车" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="我的" icon={<My width={20} height={20} />} />
  </Tabbar>
}

export default App;
```
:::
### 徽标提示

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首页" icon={<Home width={12} height={12} />} num="11" />
    <TabbarItem tabTitle="分类" icon={<Category width={12} height={12} />} />
    <TabbarItem tabTitle="发现" icon={<Find width={12} height={12} />} />
    <TabbarItem tabTitle="购物车" icon={<Cart width={12} height={12} />} num="110" />
    <TabbarItem tabTitle="我的" icon={<My width={12} height={12} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="首页" icon={<Home width={20} height={20} />} dot />
    <TabbarItem tabTitle="分类" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="发现" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="购物车" icon={<Cart width={20} height={20} />} dot />
    <TabbarItem tabTitle="我的" icon={<My width={20} height={20} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';


const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首页" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分类" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="发现" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="购物车" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="我的" icon={<My width={20} height={20} />} />
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
import { Category, Find, Home } from '@nutui/icons-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="首页" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分类" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="发现" icon={<Find width={20} height={20} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar bottom>
    <TabbarItem tabTitle="首页" href="" icon={<Home width={20} height={20} />} />
    <TabbarItem tabTitle="分类" icon={<Category width={20} height={20} />} />
    <TabbarItem tabTitle="发现" icon={<Find width={20} height={20} />} />
    <TabbarItem tabTitle="购物车" href="https://m.jd.com" icon={<Cart width={20} height={20} />} />
    <TabbarItem tabTitle="我的" href="/" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default App;
```
:::        

## API

### Prop

### nut-tabbar

| 字段                          | 说明                     | 类型   | 默认值     |
|-----------------------------|------------------------|--------|---------|
| visible                     | 默认选中的标签的索引值            | number | `0`       |
| activeVisible`1.4.8`         | 选中的标签的索引值            | number | -       |
| bottom                      | 是否固定在页面底部              | boolean | `false`   |
| unactiveColor               | icon未激活的颜色             | string | `#7d7e80` |
| activeColor                 | icon激活的颜色              | string | `#1989fa` |
size`v1.5.0废弃`              | icon的统一尺寸              | string \| boolean | `20`      |
| safeAreaInsetBottom`v1.2.2` | 是否开启iphone系列全面屏底部安全区适配 | boolean | `false`   |
| style`v1.2.2`               | 组件样式                   | CSSProperties | `{}`      |
| clsssName`v1.2.2`           | 组件类名                   | string | -       |

### tabbar-item

| 字段                        | 说明                                                                                                                      | 类型   | 默认值 |
|---------------|------------|--------|--------|
| tabTitle | 标签页的标题 | string | -     |
| icon | 自定义图标 | ReactNode | - |
| href | 标签页的跳转链接； | string | -     |
| to`v1.4.0 废弃` | 标签页的路由对象，等于 React Router 的 [to 属性](https://v5.reactrouter.com/web/api/Link/to-string) 属性, taro 版本中采用 Taro.navigateTo 实现 | any | -     |
| num | 页签右上角的数字角标，超出99之后为99+ | number | - |
| iconClassPrefix`v1.5.0废弃`   | 自定义 icon 类名前缀，用于使用自定义图标 | string | `nut-icon` |
| iconFontClassName`v1.5.0废弃` | 自定义 icon 字体基础类名 | string | `nutui-iconfont` |
| dot`v1.2.2`| 是否显示图标右上角小红点 | boolean | `false`     |
| iconSize`v1.5.0废弃`    | icon的单个尺寸     | string \| boolean | `20` |

### Event

| 事件名称            | 说明               | 回调参数           |
|-----------------|--------------------|--------------------|
| tabSwitch`废弃`   | 切换页签时触发事件 | 点击的数据和索引值 |
| onSwitch`v1.3.8` | 切换页签时触发事件 | 点击的数据和索引值 |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-tabbar-height | `50px`|
| --nutui-tabbar-active-color | `$primary-color` |
| --nutui-tabbar-unactive-color | `$primary-color` |
| --nutui-tabbar-border-top | `1px solid #eee` |
| --nutui-tabbar-border-bottom | `1px solid #eee` |
| --nutui-tabbar-box-shadow | `none` |
| --nutui-tabbar-item-text-font-size | `$font-size-0` |
| --nutui-tabbar-item-text-line-height | `initial` |
| --nutui-tabbar-height | `50px` |
| --nutui-tabbar-word-margin-top | `auto` |
| --nutui-tabbar-dot-right | `12px`|
| --nutui-tabbar-dot-top | `0` |
| --nutui-tabbar-word-margin-top | `3px` |
