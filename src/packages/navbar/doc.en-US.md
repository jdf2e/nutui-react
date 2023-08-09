# Navbar

## Intro

Provides navigation capabilities.

## Install

```tsx
import { NavBar } from '@nutui/nutui-react';
```

## code example

### Basic usage

:::demo

```tsx
import  React from "react";
import { NavBar, Toast } from '@nutui/nutui-react';
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
        <span onClick={(e) =>  Toast.show('icon')}>
            <Share />
        </span>
        }
        onBackClick={(e) => Toast.show("back")}
    >
        <span onClick={(e) => Toast.show("title")}>
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
import { NavBar, Toast } from '@nutui/nutui-react';
import { Left } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        right={
        <span onClick={(e) => Toast.show('清空')}>
            clear
        </span>
        }
        back={<Left name="left" color="#979797" />}
        onBackClick={(e) => Toast.show("back")}
    >
        <span onClick={(e) => Toast.show("title")}>
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
import { NavBar, Toast } from '@nutui/nutui-react';
import { Cart2, Left, MoreX} from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={<Left name="left" color="#979797" />}
        right={
        <>
            <span style={{ marginRight: '5px' }} onClick={(e) => Toast.show('edit')}>
            edit
            </span>
            <MoreX onClick={(e) => Toast.show('icon')} />
        </>
        }
        onBackClick={(e) => Toast.show("back")}
    >
        <span onClick={(e) => Toast.show("title")}>
        cart
        </span>
        <i style={{ marginLeft: '5px' }} onClick={(e) => Toast.show('icon')}>
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
import { NavBar, Tabs, TabPane, Toast } from '@nutui/nutui-react';
import { Left,MoreX } from '@nutui/icons-react'

const App = () => {
  const [tab1value, setTab1value] = useState('0')
  return ( 
    <NavBar
         back={<Left name="left" color="#979797" />}
          right={
            <>
              <span style={{ marginRight: '5px' }} onClick={(e) => Toast.show("edit")}>
                edit
              </span>
              <MoreX onClick={(e) => Toast.show('icon')} />
            </>
          }
          onBackClick={(e) => Toast.show("back")}
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

## Navbar

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| right | Right side content | `ReactNode` | `-` |
| left | The left content, rendered to the right of the return area | `ReactNode` | `-` |
| back | Returns the text of the area | `ReactNode` | `-` |
| fixed | Is it fixed | `boolean` | `false` |
| safeArea | Whether it is suitable for the safe area | `boolean` | `false` |
| placeholder | When fixed to the top, whether to generate a placeholder element of equal height at the label position | `boolean` | `false` |
| zIndex | Navigation Bar Hierarchy | `number` \| `string` | `10` |
| onBackClick | Click the callback after the return area | `onBackClick:(event: Event)=>void` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-navbar-width | The width of the navbar | `100%` |
| \--nutui-navbar-height | The height of the navbar | `44px` |
| \--nutui-navbar-margin-bottom | Bottom margin of the navbar | `20px` |
| \--nutui-navbar-padding | The padding of the navbar | `13px 16px` |
| \--nutui-navbar-background | The navbar's background color | `$white` |
| \--nutui-navbar-box-shadow | Shadow of navbar | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | navbar font color | `$color-text` |
| \--nutui-navbar-font-size | navbar font size | `$font-size` |
| \--nutui-navbar-title-font-size | The font size of the navbar's title | `$font-size` |
| \--nutui-navbar-title-font-weight | The font weight of the navbar's title | `0` |
| \--nutui-navbar-title-font-color | The font color of the navbar's title | `$color-title` |