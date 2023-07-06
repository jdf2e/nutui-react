# BackTop

## Intro

Provides a quick return to the top function for long pages.

## Install

```tsx
import { BackTop } from '@nutui/nutui-react';
```

## Code

### Basic Usage

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>text data{index}</Cell>
      })}
      <BackTop target="target" />
    </div>
  )
}
export default App;
```

:::

### Threshold

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>text data{index}</Cell>
      })}
      <BackTop target="target" threshold={200} bottom={50} />
    </div>
  )
}
export default App;
```

:::

### Custom Style

:::demo

```tsx
import React from "react";
import { Top } from '@nutui/icons-react';
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>text data{index}</Cell>
      })}
      <BackTop threshold={100} bottom={110}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top width={12} height={12} />
          <div style={{ fontSize: '12px' }}>Top</div>
        </div>
      </BackTop>
    </div>
  )
}
export default App;
```

:::

### Scroll Inside Parent Element

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{ height: '800px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>text{index}</Cell>
      })}
      <BackTop target="target" threshold={100} bottom={50} />
    </div>
  );
};
export default App;
```

:::

### Click

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  const handleClick = () => {
    console.log('click backtop')
  }
  return (
    <div id="target" style={{ height: '1000px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>text data{index}</Cell>
      })}
      <BackTop threshold={100} bottom={50} onClick={handleClick} />
    </div>
  );
};
export default App;
```

:::

## BackTop

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | The listening element | `string` | `-` |
| threshold | How high to scroll the page vertically | `number` | `200` |
| zIndex | Set the component z-index | `number` | `10` |
| duration | Set animation duration | `number` | `1000` |
| onClick | Emitted when component is clicked | `(event: MouseEvent) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-backtop-border-color | border color | `#e0e0e0` |