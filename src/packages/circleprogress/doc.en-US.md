# CricleProgress

## Intro

Circular progress bar component

## Install

```tsx
import { CircleProgress } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress percent={20} />
      <CircleProgress percent={60}>60%</CircleProgress>
    </>
  )
}
export default App;
```

:::

### Ring progress bar custom style

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress percent={50} strokeWidth={2} />
      <CircleProgress percent={60} strokeWidth={10} background='#e5e9f2'/>
    </>
  )
}
export default App;
```

:::

### Customize the color of the circular progress bar (support deformation color)

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062'
};
const App = () => {
  return (
    <>
      <CircleProgress percent={50} color="var(--nutui-brand-link-color)">
        50%
      </CircleProgress>
      <CircleProgress percent={100} color={gradientColor}>
        100%
      </CircleProgress>
    </>
  )
}
export default App;
```

:::

### Ring progress bar custom size

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';


const App = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        50%
      </CircleProgress>
    </>
  )
}
export default App;
```

:::

### Ring progress bar custom content

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        <> 
          <div>3000</div>
          <div style={{ fontSize: '12px', color: 'var(--nutui-gray-2)' }}>步</div>
        </>
      </CircleProgress>
    </>
  )
}
export default App;
```

:::

### Dynamically change the progress of the circular progress bar

:::demo

```tsx
import React, { useState } from "react";
import { Button, CircleProgress } from '@nutui/nutui-react';

const progressOption = {
  radius: 50,
  strokeOutWidth: 10,
  backColor: '#d9d9d9',
  progressColor: 'red',
}
const App = () => {
  const [percent, setPercent] = useState(50)
  const [strokeInnerWidth, setStrokeInnerWidth] = useState(10)
  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setStrokeInnerWidth(0)
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    setStrokeInnerWidth(10)
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }
  return (
    <>
      <div className="demo__piece">
        <CircleProgress percent={percent}>{percent}%</CircleProgress>
      </div>
      <div className="demo__btn">
        <Button type="primary" onClick={setReduceVal} style={{ marginRight: '10px' }}>
          reduce
        </Button>
        <Button type="primary" onClick={setAddVal}>
          add
        </Button>
      </div>
    </>
  )
}
export default App;
```

:::

## CircleProgress

## Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| percent | Progress Rate | `number` \| `string` | `Required, no default value` |
| strokeWidth | Stroke width | `number` \| `string` | `5` |
| radius | radius | `number` \| `string` | `50` |
| color | Progress color, passing object to render gradient | `Record<string, string> \| string` | `#fa2c19` |
| background | Circle track color | `string` | `#d9d9d9` |
| strokeLinecap | Stroke linecap | `butt` \| `round` \| `square` \| `inherit` | `round` |
| clockwise | Whether to be clockwise | `boolean` | `true` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-circleprogress-primary-color | The color of the filled part of the circular progress bar | `$primary-color` |
| \--nutui-circleprogress-path-color | The color of the circular progress bar track | `#e5e9f2` |
| \--nutui-circleprogress-text-color | The color of the track content area of ​​the circular progress bar | `$title-color` |
| \--nutui-circleprogress-text-size | The size of the track content area of ​​the circular progress bar | `$font-size-3` |