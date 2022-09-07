# Drag 

### Intro

Implement draggable arbitrary elements.

### Install

```javascript
import { Drag } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <Drag>
        <div className="touch-dom" style={btnStyle}>Button</div>
    </Drag>
 );
};
export default App;
```

:::

##  Limit Direction

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <>
    <Drag direction="x" style={{ top: '200px', left: '8px' }}>
        <span style={btnStyle}>X axis</span>
      </Drag>
      <Drag direction="y" style={{ top: '200px', right: '50px' }}>
        <span style={btnStyle}>Y axis</span>
      </Drag>
    </>
 );
};
export default App;
```

:::

## Attract

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <Drag direction="x" attract>
      <div className="touch-dom" style={btnStyle}>Button</div>
    </Drag>
 );
};
export default App;
```

:::

## Limit Boundaries
:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  
    const right = () => {
    return document.documentElement.clientWidth - 300 - 9
    }
    const bottom = () => {
        return document.documentElement.clientHeight - 202
    }
    return (
    <>
    <div
        className="drag-boundary"
        style={{
          position: 'absolute',
          top: '0px',
          left: '8px',
          width: '300px',
          height: '200px',
          border: '1px solid red',
        }}
       />
      <Drag
        boundary={{ top: 1, left: 9, bottom: bottom(), right: right() }}
        style={{ top: '40px', left: '50px' }}
      >
        <span style={btnStyle}>Limit Boundaries</span>
      </Drag>
    </>
   );
};
export default App;
```

:::

## API

### Props


| Attribute            | Description               | Type   | Default  |
| :-------- | :------------------------------------------------ | :------------- | :---------------------------------- |
| attract   | Whether to enable automatic edge suction  | Boolean        | false                                |
| direction | The drag direction limit of the dragged element **x**/**y**/**all**| String   | 'all'         |
| boundary  | The drag boundary of the dragged element   | Object         | {top: 0,left: 0,right: 0,bottom: 0} |
