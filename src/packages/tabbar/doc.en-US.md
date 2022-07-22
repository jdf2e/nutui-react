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
    <TabbarItem tabTitle="front page" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="shopping cart" icon="cart" />
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
    <TabbarItem tabTitle="front page" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="shopping cart" icon="cart" />
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
    <TabbarItem tabTitle="front page" icon="home" num="11" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="shopping cart" icon="cart" num="110" />
    <TabbarItem tabTitle="mine" icon="my" />
  </Tabbar>
);

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
    <TabbarItem tabTitle="front page" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="shopping cart" icon="cart" />
    <TabbarItem tabTitle="mine" icon="my" />
  </Tabbar>
);

export default App;
```
:::
### Tabbar with three icons

:::demo
```tsx
import  React from "react";
import {  Tabbar, TabbarItem } from '@nutui/nutui-react';

const App = () => (
  <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem tabTitle="front page" icon="home" />
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
    <TabbarItem tabTitle="front page" href="" icon="home" />
    <TabbarItem tabTitle="Classification" icon="category" />
    <TabbarItem tabTitle="Find" icon="find" />
    <TabbarItem tabTitle="shopping cart" href="https://m.jd.com" icon="cart" />
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
| visible | The index value of the selected label   | number | 0       |
| bottom          | Whether it is fixed at the bottom of the page | Booble | false   |
| unactiveColor  | Icon inactive color   | string | #7d7e80 |
| activeColor    | icon active color     | string | #1989fa |

### tabbar-item

| Prop      | Description                                      | Type   | Default |
|-----------|-------------------------------------------|--------|--------|
| tabTitle | the title of the tab                              | String | --     |
| icon      | [icon name](#/icon) or image link displayed on the tab page | String | --     |
| href      | Jump link of tab page; if `to` exists at the same time, it takes precedence over to   | String | --     |
| to       | 	The route object of the tab, equal to React Router's [to Prop](https://v5.reactrouter.com/web/api/Link/to-string) Prop | string｜object | --     |
| num       | The numerical corner mark in the upper right corner of the tab, if it exceeds 99, it will be 99+     | Number | --     |


### Event

| Event   | Description               | callback parameter           |
|------------|--------------------|--------------------|
| tabSwitch | Trigger an event when switching tabs | Clicked data and index value |
