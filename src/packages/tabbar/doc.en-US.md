#  Tabbar

### introduce

Bottom Navigation Common Scenarios

### Install

```ts
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
```

## code demo

### Basic usage

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () =>(
  <Tabbar
    tabSwitch={(child, idx) => {
      console.log(idx)
    }}
  >
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

| Prop            | Description                | Type   | Default  |
|-----------------|--------------------|--------|---------|
| visible | The index value of the selected label   | Number | 0       |
| bottom          | Whether it is fixed at the bottom of the page | Boolean | false   |
| unactiveColor  | Icon inactive color   | String | #7d7e80 |
| activeColor    | icon active color     | String | #1989fa |
| size    | icon size     | String 、Boolean | 20 |
| safeAreaInsetBottom    | Whether to enable the full screen bottom safety zone adaptation of the iphone series     | Boolean | false |
| style    | component style     | React.CSSProperties | {} |
| clsssName    | component class name     | String | - |

### tabbar-item

| Prop      | Description                                      | Type   | Default |
|-----------|-------------------------------------------|--------|--------|
| tabTitle | the title of the tab                              | String | --     |
| icon      | [icon name](#/icon) or image link displayed on the tab page | String | --     |
| href      | Jump link of tab page; if `to` exists at the same time, it takes precedence over to   | String | --     |
| to       | 	The route object of the tab, equal to React Router's [to Prop](https://v5.reactrouter.com/web/api/Link/to-string) Prop | any | --     |
| num       | The numerical corner mark in the upper right corner of the tab, if it exceeds 99, it will be 99+     | Number | --     |
| classPrefix      | 自Custom icon class name prefix for using custom icons   | String | 'nut-icon'     |
| dot      | Whether to display the little red dot in the upper right corner of the icon   | Boolean | false     |


### Event

| Event               | Description               | callback parameter           |
|---------------------|--------------------|--------------------|
| onSwitch`v1.3.8`    | Trigger an event when switching tabs | Clicked data and index value |
