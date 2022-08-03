# Navbar

### introduce 


Provides navigation capabilities.

### Install

```ts
import { NavBar } from '@nutui/nutui-react';
```

### code example

### Basic usage

:::demo
```tsx
import React from "react";
import { NavBar, Icon } from '@nutui/nutui-react';

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
          <Icon name="share" slot="right" />
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
          desc="clear"
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
import { NavBar, Icon } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="cart"
          desc="edit"
          titIcon="locationg3"
          onClickTitle={(e) => alert("back")}
          onClickBack={(e) => alert("title")}
          onClickRight={(e) => alert('edit')}
          onClickIcon={(e) => alert('icon')}
        >
          <Icon name="more-x" slot="right" />
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
import { NavBar, Icon } from '@nutui/nutui-react';

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
          <Icon name="share" slot="right" />
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
import { NavBar, Icon, Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [tab1value, setTab1value] = useState('Tab 1')
  return ( 
    <>   
      <NavBar
          desc="edit"
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
          <Icon name="more-x" slot="right" />
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
| title           | title name                                                                                       | String  | -       |
| desc            | Description on the right                                                                                       | String  | -       |
| leftShow        | Whether to show the left arrow                                                                              | Boolean | true   |
| titIcon         | title with icon                                                         | String  | -       |   
| leftText         | copy on the left                                                         | String  | -       |   
| fixed         | Is it fixed                                                         | Boolean  | false       |   
| safeAreaInsetTop         | Whether it is suitable for the safe area                                                         | Boolean  | false       |   
| border         | whether to show the bottom border                                      | Boolean  | false    | 
| placeholder         | When fixed to the top, whether to generate a placeholder element of equal height at the label position           | Boolean  | false    |
| zIndex         | Navigation Bar Hierarchy           | Number、String  | 10    |
| style         | container style           | React.CSSProperties  | {}    |
| className         | container class name           | String  | ""    |                                          

### Event

| Event  | Description     | callback parameter    |
|-------|----------|-------------|
| onClickTitle | click title event | event:Event |
| onClickRight | Click on the event on the right | event:Event |
| onClickBack | click back event | event:Event |
| onClickIcon | Click the icon event on the right side of the title | event:Event |