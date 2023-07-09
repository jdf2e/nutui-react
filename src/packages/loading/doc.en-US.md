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
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading type='circular' color='#fa2c19'/>
      <Loading type='spinner' color='#396aca'/>
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
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading type='circular' size='20'/>
      <Loading type='spinner' size={40}/>
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

### With text(vertical)

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading vertical>loading</Loading>
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
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading textColor='#396aca'>loading</Loading>
      <Loading textSize='20'>loading</Loading>
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
      <Loading vertical icon={<Category width='30' height='30' color='red'/>}/>
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
    setTimeout(()=>{
      setVisible(false);
    }, 2000)
  }  

  return (
    <>
      <Cell>
        <Button type="success" onClick={showOverlay}>with overlay(closed in 2 seconds)</Button>
      </Cell>
      <Overlay visible={visible}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading vertical>loading</Loading>
        </div>
      </Overlay>   
    </> 
  );
};
export default App;
```

:::

## API

### Props

| Name         | Description                          | type   | default           |
|--------------|----------------------------------|--------|------------------|
| type         | loading icon type                    | circular \| spinner | `circular`          |
| color        | loading icon color                   | String              | `#9EA9AF`           |
| size         | loading icon size                    | String \| Number    | `32`                |
| textColor    | text color                           | String              | `#9EA9AF`           |
| textSize     | text size                            | String \| Number    | `14`                |
| vertical     | whether icon and text are layout vertical     |  Boolean            | `false`
| icon         | custom loading icon                  | JSX.Element         |  `-`
