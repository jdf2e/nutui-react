# Divider 

### Introduce

Separate content into multiple areas.

### Install

```js
import { Divider } from '@nutui/nutui-react';
```
### code demo
### Basic Usage

Default render one horizontal divider line.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Divider />
    </>
  );
};
export default App;
```
:::


### With Text

Insert text into divider with default slot.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider>Text</Divider>
    </>
  );
};
export default App;
```
:::


### Content Position

Set Content Position with `contentPosition` attribute.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider contentPosition="left">Text</Divider>
        <Divider contentPosition="right">Text</Divider>
    </>
  );
};
export default App;
```
:::


### Dashed

Render dashed divider line with `dashed` attribute.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider dashed>Text</Divider>
    </>
  );
};
export default App;
```
:::


### Custom Style

User can custom divider style with `styles` attribute.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider styles={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>Text</Divider>
    </>
  );
};
export default App;
```
:::

### Vertical Divider

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <div>
        文本
        <Divider direction="vertical" />
        <a href="#" style={{ color: '#1989fa' }}>Link</a>
        <Divider direction="vertical" />
        <a href="#" style={{ color: '#1989fa' }}>Link</a>
    </div>
    </>
  );
};
export default App;
```
:::


## API

### Props

| Attribute            | Description                       | Type    | Default |
| --------------- | ----------------------------- | ------- | ------ |
| dashed          | Whether to use dashed border                  | Boolean | false  |
| hairline        | Whether to use hairline             | Boolean | true   |
| contentPosition | Content position, can be set to left or right   | String  | center |
| styles          | Modify custom styles                | CSS     | -      |
| direction           | The direction of divider, can be set to horizontal or vertical            | String     | 'horizontal'      |

### Slots

| Name    | Description |
| ------- | ---- |
| default | Default slot |
