# Drag

## Intro

Implement draggable arbitrary elements.

## Install

```tsx
import { Drag } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  return (
    <Drag>
        <div className="touch-dom">Button</div>
    </Drag>
 );
};
export default App;
```

:::

### Limit Direction

:::demo

```tsx
import  React from "react";
import { Drag, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Drag direction="x" style={{ top: '200px', left: '8px' }}>
        <Button type="primary">X axis</Button>
      </Drag>
      <Drag direction="y" style={{ top: '200px', right: '50px' }}>
        <Button type="primary">Y axis</Button>
      </Drag>
    </>
 );
};
export default App;
```

:::

### Attract

:::demo

```tsx
import  React from "react";
import { Drag, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Drag direction="x" attract>
      <Button>Button</Button>
    </Drag>
 );
};
export default App;
```

:::

### Limit Boundaries

:::demo

```tsx
import  React from "react";
import { Drag, Button } from '@nutui/nutui-react';

const App = () => {
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
        <Button type="primary">Limit Boundaries</Button>
      </Drag>
    </>
   );
};
export default App;
```

:::

## Drag

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| attract | Whether to enable automatic edge suction | `boolean` | `false` |
| direction | The drag direction limit of the dragged element | `x` \| `y` \| `all` | `all` |
| boundary | The drag boundary of the dragged element | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |