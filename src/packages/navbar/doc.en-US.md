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
import  React, { useState } from "react";
import { NavBar, Toast, Tabs, TabPane } from '@nutui/nutui-react';
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react'

const App = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')
  const style = `
    .flex-center {
      display: inline-flex;
      align-items: center;
    }
    .title {
      display: flex;
      flex-direction: column;
      .desc {
        font-weight: 400;
        font-size: 12px;
        color: var(--nutui-gray-8);
      }
      .title-left {
        text-align: left;
      }
    }
    .navbar-tabs .nut-tabs-titles {
      padding: 0;
      .nut-tabs-titles-item {
        margin: 0;
        font-size: 16px;
      }
      .nut-tabs-titles-item-active {
        font-size: 20px;
      }
    }
  `
  return ( 
    <>
      <style>{style}</style>
      <NavBar
        back={
          <>
            <ArrowLeft />return
          </>
        }
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        order details
      </NavBar>
      <NavBar
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        order details
      </NavBar>
      <NavBar
        right={
          <span onClick={(e) => Toast.show("empty")}>
            empty
          </span>
        }
        left={<Close />}
        back={<ArrowLeft />}
        onBackClick={(e) => Toast.show("return")}
      >
        <div className="title">
          <span onClick={(e) => Toast.show("title ")}>
            Browsing history
          </span>
          <span className="desc">Browsing history</span>
        </div>
      </NavBar>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("edit")}>
              edit
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        <span onClick={(e) => Toast.show("title ")}>
          shopping cart
        </span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Toast.show('icon')}
        >
          <Cart />
        </i>
      </NavBar>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("edit")}>
              edit
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        <div style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-padding': 0,
              '--nutui-tabs-titles-gap': 0,
            }}
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
            <TabPane title="Tab 4"> Tab 4 </TabPane>
          </Tabs>
        </div>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={
          <>
            <ArrowLeft />return
          </>
        }
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        order details
      </NavBar>
      <NavBar
        titleAlign="left"
        right={
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        order details
      </NavBar>

      <NavBar
        titleAlign="left"
        right={
          <span onClick={(e) => Toast.show("empty")}>
            empty
          </span>
        }
        left={<Close />}
        back={<ArrowLeft />}
        onBackClick={(e) => Toast.show("return")}
      >
        <div className="title title-left">
          <span onClick={(e) => Toast.show("title ")}>
            Browsing history
          </span>
          <span className="desc">Browsing history</span>
        </div>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("edit")}>
              edit
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        <span onClick={(e) => Toast.show("title ")}>
          shopping cart
        </span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Toast.show('icon')}
        >
          <Cart />
        </i>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show("edit")}>
              edit
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show("return")}
      >
        <div>
          <Tabs
            className="navbar-tabs"
            align="left"
            activeType="simple"
            value={tab2value}
            onChange={(paneKey) => {
              setTab2value(paneKey)
            }}
          >
            <TabPane title="Tab1"> Tab1 </TabPane>
            <TabPane title="Tab2"> Tab2 </TabPane>
            <TabPane title="Tab3"> Tab3 </TabPane>
          </Tabs>
        </div>
      </NavBar>
    </>
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
| titleAlign | Title align, optional value center、left | `string` | `center` |
| fixed | Is it fixed | `boolean` | `false` |
| safeAreaInsetTop | Whether it is suitable for the safe area | `boolean` | `false` |
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
| \--nutui-navbar-background | The navbar's background color | `$white` |
| \--nutui-navbar-box-shadow | Shadow of navbar | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | navbar font color | `$color-text` |
| \--nutui-navbar-font-size | navbar font size | `$font-size-base` |
| \--nutui-navbar-title-font-size | The font size of the navbar's title | `$font-size-base` |
| \--nutui-navbar-title-font-weight | The font weight of the navbar's title | `0` |
| \--nutui-navbar-title-font-color | The font color of the navbar's title | `$color-title` |
