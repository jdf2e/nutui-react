#  Loading

### Intro

A loading icon, Used to show the loading state

### Install

```tsx
import { Loading } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading type='circular'/>
      <Loading type='spinner'/>
    </Cell>
  );
};
export default App;
```

:::

### Custom color

:::demo

```jsx
import  React from "react";
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#fa2c19' }}>
        <Loading type='circular' />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#396aca' }}>
        <Loading type="spinner" />
      </ConfigProvider>      
    </Cell>
  );
};
export default App;
```

:::

### Custom size

:::demo

```jsx
import  React from "react";
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '20px' }}>
        <Loading type="circular" />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '40px' }}>
        <Loading type="spinner" />
      </ConfigProvider>
    </Cell>
  );
};
export default App;
```

:::

### With text

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading>loading</Loading>
    </Cell>
  );
};
export default App;
```

:::

### With text(direction="vertical")

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading direction="vertical">loading</Loading>
    </Cell>
  );
};
export default App;
```

:::

### Custom text color and size

:::demo

```jsx
import  React from "react";
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingTextColor: '#396aca' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingTextSize: '20px' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
    </Cell>
  );
};
export default App;
```

:::

### Custom icon

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';
import { Category } from '@nutui/icons-react'

const App = () => {
  return (
    <Cell>
      <Loading direction="vertical" icon={<Category width='30' height='30' color='red'/>}/>
    </Cell>
  );
};
export default App;
```

:::

### With overlay

:::demo

```jsx
import React, { useState } from 'react'
import { Loading, Cell, Button, Overlay } from '@nutui/nutui-react';

const App = () => {

  const [visible, setVisible] = useState(false)

  const WrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

  function showOverlay() {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000)
  }  

  return (
    <>
      <Cell>
        <Button type="success" onClick={() => showOverlay()}>with overlay(closed in 2 seconds)</Button>
      </Cell>
      <Overlay visible={visible}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading direction="vertical">loading</Loading>
        </div>
      </Overlay>   
    </> 
  );
};
export default App;
```

:::

## Loading

### Props

| Property         | Description                          | type   | default           |
|--------------|----------------------------------|--------|------------------|
| type         | loading icon type                    | circular \| spinner | `circular`          |
| direction    | direction of icon and text           | horizontal \| vertical | `horizontal`     | 
| icon         | custom loading icon                  | JSX.Element         |  `-` |
