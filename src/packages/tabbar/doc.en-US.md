#  Tabbar

### introduce

Bottom Navigation Common Scenarios

### Install

```ts
// react
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

```

## code demo

### Basic usage

:::demo
```tsx
import React, { useState } from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  return <Tabbar
    visible={0}
    activeVisible={activeIndex}
    onSwitch={(child, id) => {
      setActiveIndex(id)
    }}
  >
    <TabbarItem tabTitle="first" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="cart" icon="cart" />
    <TabbarItem tabTitle="mine" icon="my" />
  </Tabbar>
}

export default App;
```
:::
### custom check

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar visible={2}>
    <TabbarItem tabTitle="first" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="cart" icon="cart" />
    <TabbarItem tabTitle="mine" icon="my" />
  </Tabbar>
);

export default App;
```
:::
### Logo Tips

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="first" icon="home" num="11" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="cart" icon="cart" num="110" />
    <TabbarItem tabTitle="mine" icon="my" />
  </Tabbar>
);

export default App;
```
:::

### Red dot

:::demo
```tsx
import  React from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar>
    <TabbarItem tabTitle="first" icon="home" dot />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="cart" icon="cart" dot />
    <TabbarItem tabTitle="mine" icon="my" />
  </Tabbar>
)

export default App;
```
:::
### custom color

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="first" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="cart" icon="cart" />
    <TabbarItem tabTitle="mine" icon="my" />
  </Tabbar>
);

export default App;
```
:::
### Tabbar with customizable number of icons

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="first" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
  </Tabbar>
);

export default App;
```
:::
### Fixed bottom, free to jump

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar bottom>
    <TabbarItem tabTitle="first" href="" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="cart" href="https://m.jd.com" icon="cart" />
    <TabbarItem tabTitle="mine" to="/" icon="my" />
  </Tabbar>
);

export default App;
```
:::        

## API

### Prop

### nut-tabbar

| Prop            | Description                                                                          | Type   | Default |
|-----------------|--------------------------------------------------------------------------------------|--------|---------|
| visible | The default index value of the selected label                                        | Number | 0       |
| activeVisible`1.4.8` | The index value of the selected label                                                | Number | -       |
| bottom          | Whether it is fixed at the bottom of the page                                        | Boolean | false   |
| unactiveColor  | Icon inactive color                                                                  | String | #7d7e80 |
| activeColor    | icon active color                                                                    | String | #1989fa |
| size    | icon size for all icons                                                              | String 、Boolean | 20      |
| safeAreaInsetBottom    | Whether to enable the full screen bottom safety zone adaptation of the iphone series | Boolean | false   |
| style    | component style                                                                      | React.CSSProperties | {}      |
| clsssName    | component class name                                                                 | String | -       |

### tabbar-item

| Prop | Description | Type   | Default |
|-----------|--------------|--------|--------|
| tabTitle | the title of the tab | String | --     |
| icon | [icon name](#/icon) or image link displayed on the tab page | String | --     |
| href | Jump link of tab page;   | String | --     |
| to`v1.4.0 Abandon`              | 	The route object of the tab, equal to React Router's [to Prop](https://v5.reactrouter.com/web/api/Link/to-string) Prop | any | --     |
| num | The numerical corner mark in the upper right corner of the tab, if it exceeds 99, it will be 99+     | Number | --     |
| iconClassPrefix`v1.2.1`   | Custom icon class name prefix, used to use custom icons | String | `nut-icon` |
| iconFontClassName`v1.2.1` | Basic class name of custom icon font        | String | `nutui-iconfont` |
| dot | Whether to display the little red dot in the upper right corner of the icon   | Boolean | false     |
| iconSize`v1.4.7`    | icon size for some icon    | String 、Boolean | 20 |


### Event

| Event               | Description               | callback parameter           |
|---------------------|--------------------|--------------------|
| onSwitch`v1.3.8`    | Trigger an event when switching tabs | Clicked data and index value |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-tabbar-height | ` 50px`|
| --nutui-tabbar-active-color | ` $primary-color` |
| --nutui-tabbar-unactive-color | `  $primary-color` |
| --nutui-tabbar-border-top | ` 1px solid #eee` |
| --nutui-tabbar-border-bottom | `  1px solid #eee` |
| --nutui-tabbar-box-shadow | ` none` |
| --nutui-tabbar-item-text-font-size | `  $font-size-0` |
| --nutui-tabbar-item-text-line-height | `  initial` |
| --nutui-tabbar-height | ` 50px` |
| --nutui-tabbar-word-margin-top | ` auto` |
| --nutui-tabbar-dot-right | ` 12px`|
| --nutui-tabbar-dot-top | ` 0` |
| --nutui-tabbar-word-margin-top | ` 3px` |
