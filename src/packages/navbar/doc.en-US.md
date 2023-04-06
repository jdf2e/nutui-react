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
import { Left, Share, Close } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={
        <>
            <Left name="left" color="#979797" />
            back
        </>
        }
        left={<Close width={12} />}
        right={
        <span onClick={(e) => alert('icon')}>
            <Share />
        </span>
        }
        onClickBack={(e) => alert("back")}
    >
        <span onClick={(e) => alert("title")}>
        order details
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
            clear
        </span>
        }
        back={<Left name="left" color="#979797" />}
        onClickBack={(e) => alert("back")}
    >
        <span onClick={(e) => alert("title")}>
        Browsing history
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
import { Cart2, Left, MoreX } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={<Left name="left" color="#979797" />}
        right={
        <>
            <span onClick={(e) => alert('edit')}>
            edit
            </span>
            <MoreX onClick={(e) => alert('icon')} />
        </>
        }
        onClickBack={(e) => alert("back")}
    >
        <span onClick={(e) => alert("title")}>
        cart
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
              <span onClick={(e) => alert("edit")}>
                edit
              </span>
              <MoreX onClick={(e) => alert('icon')} />
            </>
          }
          onClickBack={(e) => alert("back")}
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

| Prop            | Description                                                                                           | Type    | Default  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| right            | Right side content | ReactNode  | -       |  
| left        |The left content, rendered to the right of the return area | ReactNode  | -       |   
| back        | Returns the text of the area | ReactNode  | -       |   
| fixed         | Is it fixed                                                         | boolean  | `false`       |   
| safeArea         | Whether it is suitable for the safe area                                                         | boolean  | `false`       |   
| placeholder         | When fixed to the top, whether to generate a placeholder element of equal height at the label position           | boolean  | `false`    |
| zIndex         | Navigation Bar Hierarchy           | number \| string  | `10`    |

### Event

| Event  | Description     | callback parameter    |
|-------|----------|-------------|
| onClickBack | Click the callback after the return area | `event: Event` |

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
