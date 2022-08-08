# CricleProgress

### Intro

Circular progress bar component

### Install

``` ts
import { CirecleProgress } from '@nutui/nutui-react';
```

### Basic Usage

:::demo
```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress progress={10} />
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

const progressOption = {
  radius: 50,
  strokeOutWidth: 10,
  backColor: '#d9d9d9',
  progressColor: 'red',
}
const App = () => {
  return (
    <>
      <CircleProgress progress={50} progressOption={progressOption} />
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

const progressOption = {
  radius: 50,
  strokeOutWidth: 10,
  backColor: '#d9d9d9',
  progressColor: 'red',
}
const App = () => {
  return (
    <>
      <CircleProgress progress={50} isAuto>
        <div>custom</div>
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
        <CircleProgress
          progress={percent}
          progressOption={progressOption}
          strokeInnerWidth={strokeInnerWidth}
         />
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


## Prop

| Attribute | Description | Type | Default
|----- | ----- | ----- | -----
| progress | Progress Rate | Number,String | Required, no default value
| strokeWidth | Stroke width | Number,String | 5
| radius | radius | Number,String | 50
| circleColor | Progress color, passing object to render gradient | Number,String | '#fa2c19'
| pathColor | Track Color | String | '#d9d9d9'
| strokeLinecap | Stroke linecap, can be set to square butt | String | 'round'
| clockwise| Whether to be clockwise | Boolean | true