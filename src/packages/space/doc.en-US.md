# Space

## Intro

Maintain the same width in the arrangement of elements.

##  Install

```tsx
import { Space } from '@nutui/nutui-react';
```

## Code

### Basic Usage

:::demo

```tsx

import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

 const App = () => {
  return (
    <Space>
      <Button>button1</Button>
      <Button>button2</Button>
      <Button>button3</Button>
    </Space>
  );
};
export default App;

```
:::
### Wrap

:::demo

```tsx
import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Space wrap>
      <Button>button1</Button>
      <Button>button2</Button>
      <Button>button3</Button>
      <Button>button4</Button>
      <Button>button5</Button>
      <Button>button6</Button>
    </Space>
  );
};
export default App;

```
:::
### Direction

:::demo

```tsx
import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Space direction="vertical">
      <Button>button1</Button>
      <Button>button2</Button>
      <Button>button3</Button>
    </Space>
  );
};
export default App;

```
:::
### Gap

:::demo

```tsx
import React from 'react';
import { Space, Button,ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        nutuiSpaceGap: '20px',
      }}
    >
      <Space direction="vertical">
        <Button>button1</Button>
        <Button>button2</Button>
        <Button>button3</Button>
      </Space>
    </ConfigProvider>
  );
};
export default App;

```
:::
## Space

### Props

| Property | Description                  | Type                                                               | Default                                                          |
| --- |------------------------------|--------------------------------------------------------------------|------------------------------------------------------------------|
| direction | space direction              | `vertical \| horizontal`                                           | `horizontal`                                                   |
| align | space align                  | `start \| end \|center \| baseline`                                | `-`                                                              |
| justify | space justify                | `start \| end \| center \| between \| around \| evenly \| stretch` | `-` |
| wrap | space wrap，Only valid when horizontal | `boolean / false`                                                  | `-`                                                              |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer
to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default           |
| --- | --- |--------------|
| \--nutui-space-gap | `8px` | spacing size |