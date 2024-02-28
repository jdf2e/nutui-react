# Rate

## Intro

Use for quick rating actions, or to showcase reviews.

## Install

```tsx
import { Rate } from '@nutui/nutui-react';
```

## Code

### Basic Usage

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

### Custom Icon

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill } from '@nutui/icons-react';

const App = () => {
  return (
    <Rate
      checkedIcon={<HeartFill />}
      defaultValue={3}
    />
  );
};  
export default App;

```

:::

### Custom Quantity

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

### Set Minimum Quantity (Support Half Star)

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

### Custom Color

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill } from '@nutui/icons-react';

const App = () => {
  return (
    <Rate
      defaultValue={3}
      checkedIcon={<HeartFill color="rgb(255, 200, 0)" />}
    />
  );
};  
export default App;

```

:::

### Disabled State

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

### ReadOnly State

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

### OnChange Event

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val: any) => {
    console.log(val)
  }
  return (
    <Rate defaultValue={3} onChange={onChange} />
  );
};  
export default App;

```

### Touch to Select

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
      <Rate defaultValue={3} allowHalf touchable />
    </>
  );
};  
export default App;

```

### Touch Event

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const handleTouchEnd = (event, val) => {
    console.log(event, val)
  }
  return ( 
    <>   
      <Rate defaultValue={3} touchable onTouchEnd={handleTouchEnd}/>
    </>
  );
};  
export default App;

```

## Rate

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | Uncontrolled star value | `number` | `0` |
| value | Controlled star value | `number` | `0` |
| count | total number of stars | `number` | `5` |
| min | At least the number of STAR | `number` | `0` |
| uncheckedIcon | Use icon (unchecked) | `ReactNode` | `star-n` |
| checkedIcon | Use icon (checked) | `ReactNode` | `star-n` |
| allowHalf | Half star or not | `boolean` | `false` |
| readOnly | Read only | `boolean` | `false` |
| disabled | Disable or not | `boolean` | `false` |
| touchable | Enable touch to select ｜ `boolean` | `false` |
| onChange | Event triggered when the current score is modified | `(value: number) => void` | `-` |
| onTouchEnd | Event triggered when touch end | `(event: TouchEvent, value: number) => void` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-rate-item-margin | rate item margin | `14px` |
| \--nutui-rate-icon-color | checked icon color | `$color-primary` |
| \--nutui-rate-icon-inactive-color | unchecked icon color | `$color-text-disabled` |
