# Navbar

### introduce 


Provides navigation capabilities.

### Install

```ts
// react
import { NavBar } from '@nutui/nutui-react';
```

### code example

### Basic usage

:::demo
```tsx
import React from "react";
import { NavBar } from '@nutui/nutui-react';
import { Share } from '@nutui/icons-react'

const App = () => {
  return ( 
    <>   
      <NavBar
          title="order details"
          leftShow
          leftText="back"
          onClickTitle={(e) => alert("back")}
          onClickBack={(e) => alert("title")}
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
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="Browsing history"
          description="clear"
          leftShow
          onClickTitle={(e) => alert("back")}
          onClickBack={(e) => alert("title")}
          onClickRight={(e) => alert('clear')}
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
import { NavBar } from '@nutui/nutui-react';
import { Cart2, More } from '@nutui/icons-react'

const App = () => {
  return ( 
    <>   
      <NavBar
          title="cart"
          description="edit"
          onClickTitle={(e) => alert("back")}
          onClickBack={(e) => alert("title")}
          onClickRight={(e) => alert('edit')}
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
import { NavBar } from '@nutui/nutui-react';
import { Share } from '@nutui/icons-react'

const App = () => {
  return ( 
    <>
      <NavBar
          title="order details"
          leftShow
          border
          leftText="back"
          onClickTitle={(e) => alert("back")}
          onClickBack={(e) => alert("title")}
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


### Customize the middle content of the navigation bar

:::demo
```tsx
import  React, { useState } from "react";
import { NavBar, Tabs, TabPane } from '@nutui/nutui-react';
import { More } from '@nutui/icons-react'

const App = () => {
  const [tab1value, setTab1value] = useState('Tab 1')
  return ( 
    <>   
      <NavBar
          description="edit"
          onClickTitle={(e) => alert("title")}
          onClickRight={(e) => alert("edit")}
          onClickBack={(e) => alert("back")}
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

| Prop            | Description                                                                                           | Type    | Default  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| title           | title name                                                                                       | string  | -       |
| description            | Description on the right                                                                                       | string  | -       |
| leftShow        | Whether to show the left arrow                                                                              | boolean | `true`   |
| titIcon`v2.0.0 废弃`         | title with icon                                                         | string  | -       |   
| leftText         | copy on the left                                                         | string  | -       |   
| fixed         | Is it fixed                                                         | boolean  | `false`       |   
| safeAreaInsetTop         | Whether it is suitable for the safe area                                                         | boolean  | `false`       |   
| border         | whether to show the bottom border                                      | boolean  | `false`    | 
| placeholder         | When fixed to the top, whether to generate a placeholder element of equal height at the label position           | boolean  | `false`    |
| zIndex         | Navigation Bar Hierarchy           | number \| string  | `10`    |
| style         | container style           | CSSProperties  | `{}`    |
| className         | container class name           | string  | -    |                                          

### Event

| Event  | Description     | callback parameter    |
|-------|----------|-------------|
| onClickTitle | click title event | `event: Event` |
| onClickRight | Click on the event on the right | `event: Event` |
| onClickBack | click back event | `event: Event` |
| onClickIcon | Click the icon event on the right side of the title | `event: Event` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
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
