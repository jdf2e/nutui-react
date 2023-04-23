#  Tabbar

## Intro

Bottom Navigation Common Scenarios

## Install

```ts
// react
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
```

## Demo

### Basic usage

:::demo
```tsx
import React, { useState } from "react";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  return <Tabbar
    defaultValue={0}
    value={activeIndex}
    onSwitch={(value) => {
      setActiveIndex(value)
    }}
  >
    <TabbarItem title="first" icon={<Home width={18} height={18} />} />
    <TabbarItem title="Classification" icon={<Category width={18} height={18} />} />
    <TabbarItem title="Find" icon={<Find width={18} height={18} />} />
    <TabbarItem title="cart" icon={<Cart width={18} height={18} />} />
    <TabbarItem title="mine" icon={<My width={18} height={18} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar defaultValue={2}>
    <TabbarItem title="first" icon={<Home width={20} height={20} />} />
    <TabbarItem title="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem title="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem title="cart" icon={<Cart width={20} height={20} />} />
    <TabbarItem title="mine" icon={<My width={20} height={20} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem title="first" icon={<Home width={12} height={12} />} num="11" />
    <TabbarItem title="Classification" icon={<Category width={12} height={12} />} />
    <TabbarItem title="Find" icon={<Find width={12} height={12} />} />
    <TabbarItem title="cart" icon={<Cart width={12} height={12} />} num="110" />
    <TabbarItem title="mine" icon={<My width={12} height={12} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar>
    <TabbarItem title="first" icon={<Home width={20} height={20} />} dot />
    <TabbarItem title="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem title="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem title="cart" icon={<Cart width={20} height={20} />} dot />
    <TabbarItem title="mine" icon={<My width={20} height={20} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem title="first" icon={<Home width={20} height={20} />} />
    <TabbarItem title="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem title="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem title="cart" icon={<Cart width={20} height={20} />} />
    <TabbarItem title="mine" icon={<My width={20} height={20} />} />
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
import { Category, Find, Home } from '@nutui/icons-react';

const App = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <TabbarItem title="first" icon={<Home width={20} height={20} />} />
    <TabbarItem title="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem title="Find" icon={<Find width={20} height={20} />} />
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
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const App = () => (
  <Tabbar fixed>
    <TabbarItem title="first" href="" icon={<Home width={20} height={20} />} />
    <TabbarItem title="Classification" icon={<Category width={20} height={20} />} />
    <TabbarItem title="Find" icon={<Find width={20} height={20} />} />
    <TabbarItem title="cart" href="https://m.jd.com" icon={<Cart width={20} height={20} />} />
    <TabbarItem title="mine" to="/" icon={<My width={20} height={20} />} />
  </Tabbar>
);

export default App;
```
:::        

## Tabbar

### Props

| Property            | Description                                                                          | Type   | Default |
|-----------------|--------------------------------------------------------------------------------------|--------|---------|
| defaultValue | The default index value of the selected label                                        | `number` | `0`       |
| value | The index value of the selected label                                                | `number` | -       |
| fixed          | Whether it is fixed at the bottom of the page                                        | `boolean` | `false`   |
| activeColor    | icon active color                                                                    | `string` | `#1989fa` |
| inactiveColor  | Icon inactive color                                                                  | `string` | `#7d7e80` |
| safeArea    | Whether to enable the full screen bottom safety zone adaptation of the iphone series | `boolean` | `false`   |
| onSwitch    | Trigger an event when switching tabs | `(value) => void` | - |

## TabbarItem

### Props

| Property | Description | Type   | Default |
|-----------|--------------|--------|--------|
| title | the title of the tab | `ReactNode` | -     |
| icon | Custom icon | `ReactNode` | -     |
| href | Jump link of tab page;   | `string` | -     |
| num | The numerical corner mark in the upper right corner of the tab, if it exceeds 99, it will be 99+     | `number` | -     |
| dot | Whether to display the little red dot in the upper right corner of the icon   | `boolean` | `false`     |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| --nutui-tabbar-height | `50px`|
| --nutui-tabbar-active-color | `$primary-color` |
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
