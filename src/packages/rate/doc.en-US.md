#  Rate 

### introduce

Use for quick rating actions, or to showcase reviews.

### Install

```ts
// react
import { Rate } from '@nutui/nutui-react';
```

## Code demonstration

### Basic usage

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate defaultValue={3} />
  );
};  
export default App;

```
:::

### Controlled Mode

:::demo

```tsx
import React, { useState } from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const [state, setState] = useState(2);
  return (
    <Rate value={score} onChange={(value) => setScore(value)} />
  );
};  
export default App;
```

:::

### Half Star

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate allowHalf defaultValue={3.5} />
  );
};  
export default App;

```
:::
### customize icon   

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill1 } from '@nutui/icons-react';

const App = () => {
  return (
    <Rate checkedIcon={<HeartFill1 />} defaultValue={3} />
  );
};  
export default App;

```
:::
### custom quantity  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate count="6" defaultValue={3} />
  );
};  
export default App;

```
:::
### Select the minimum quantity (support half star)  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate count={5} defaultValue={2} min={3}/>
  );
};  
export default App;

```
:::
### custom color 

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill1 } from '@nutui/icons-react';

const App = () => {
  return (
    <Rate
      defaultValue={3}
      checkedIcon={<HeartFill1 color="red" />}
      uncheckedIcon={<HeartFill1 color="yellow" />}
    />
  );
};  
export default App;

```
:::
### disabled state  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate disabled defaultValue={3} />
  );
};  
export default App;

```
:::
### readOnly state  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate defaultValue={3} readOnly />
  );
};  
export default App;

```
:::
### bind event  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val: any) => {
    alert(val)
  }
  return (
    <Rate defaultValue={3} onChange={onChange} />
  );
};  
export default App;

```

## API

## Prop

| field           | explain                                 | type    | default    |
|----------------|-------------------------------------------|---------|-------------|
| defaultValue             | Uncontrolled star value | number | `0`           |
| value             | Controlled star value | number | `0`           |
| count          | total number of stars                    | number | `5`           |
| min  | At least the number of STAR              | number | `0`           |
| uncheckedIcon | Use icon (unchecked) | ReactNode  | `star-n`      |
| checkedIcon   | Use icon (checked) | ReactNode  | `star-n` |
| allowHalf     | Half star or not                         | boolean | `false`       |
| readOnly       |Read only                              | boolean | `false`       |
| disabled       | Disable or not                          | boolean | `false`       |
| onChange | Event triggered when the current score is modified | (value: number) => void | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| --nutui-rate-item-margin | rate item margin | `14px` |
| --nutui-rate-icon-color | checked icon color | `$primary-color` |
| --nutui-rate-icon-void-color | unchecked icon color  | `$disable-color` |
