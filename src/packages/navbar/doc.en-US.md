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
import  React from "react";
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <NavBar
      title="order details"
      icon="share"
      leftShow
      onClickTitle={(e) => alert('title')}
      onClickBack={(e) => alert('back')}
      onClickIcon={(e) => alert('icon')}
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

const App = () => {
  return ( 
    <>   
    <NavBar
      title="Browsing history"
      desc="clear"
      leftShow
      onClickTitle={(e) => alert('title')}
      onClickBack={(e) => alert('back')}
      onClickClear={(e) => alert('clear')}
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

const App = () => {
  return ( 
    <>   
    <NavBar
      title="cart"
      icon="more"
      desc="edit"
      titIcon="locationg3"
      onClickTitle={(e) => alert('title')}
      onClickBack={(e) => alert('back')}
      onClickClear={(e) => alert('edit')}
      onClickIcon={(e) => alert('icon')}
     />
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
| leftShow        | Whether to show the left arrow                                                                              | Boolean | false   |
| icon            | Left [icon name](#/icon) or image link                                                             | String  | -       |
| titIcon         | title with icon                                                         | String  | -       |                                          

### Event
| Event  | Description     | callback parameter    |
|-------|----------|-------------|
| onClickTitle | Click page title event | event:Event |
| onClickClear | Click on the copy event on the right | event:Event |
| onClickBack | Click to return to previous page of events | event:Event |
| onClickIcon | Click the right icon event | event:Event |