# InputNumber

### Intro

Control the number increase or decrease by clicking the button.

### Install

``` ts
import { InputNumber } from '@nutui/nutui-react';
```

### Basic Usage

Initialize a default value

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val1} />
    </>
  )
}
export default App;
```
:::

### Step size setting

Set step  `step` 5 

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val2} step="5" />
    </>
  )
}
export default App;
```
:::

### Limit input range

`min` and `max` attributes represent the minimum and maximum values respectively

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('Exceeded limit event triggered')
  }
  return (
    <>
      <InputNumber modelValue={inputState.val3} min="10" max="20" onOverlimit={overlimit} />
    </>
  )
}
export default App;
```
:::

### Disabled state

`disabled` When disabled, you cannot click the button or modify the input box.

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val4} disabled />
    </>
  )
}
export default App;
```
:::

### Read only disable input box

`readonly` Set read-only disable input box input behavior

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val5} readonly />
    </>
  )
}
export default App;
```
:::

### Support decimal point

Set step size `step` 0.1  `decimal-places` keep 1 decimal place

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val6} step="0.1" decimalPlaces="1" readonly />
    </>
  )
}
export default App;
```
:::
### Support asynchronous modification

Asynchronous modification through `change` event and `model-value`

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  const onChange = (value: string | number) => {
    Toast.loading('Asynchronous demo changes after 2 seconds')
    setTimeout(() => {
      inputState.val7 = Number(value)
      setInputState({ ...inputState })
      Toast.hide()
    }, 2000)
  }
  return (
    <>
      <InputNumber modelValue={inputState.val7} onChangeFuc={onChange} isAsync />
    </>
  )
}
export default App;
```
:::

### Custom button size

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1,
    val2: 0,
    val3: 10,
    val4: 0,
    val5: 1,
    val6: 5.5,
    val7: 1,
    val8: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val8} buttonSize="30" inputWidth="50" />
    </>
  )
}
export default App;
```
:::

## API

### Props

| Attribute           | Description                       | Type           | Default     |
|----------------|----------------------------|----------------|------------|
| modelValue        | Initial value                     | String、Number | -          |
| inputWidth    | Input box width                 | String         | `40px`     |
| buttonSize    | Operators +, - Dimensions             | String         | `20px`     |
| min            | Minimum limit                 | String、Number | `1`        |
| max            | Maximum limit                 | String、Number | `9999` |
| step           | step                       | String、Number | `1`        |
| decimalPlaces | Set reserved decimal places           | String、Number | `0`        |
| disabled       | Disable all features               | Boolean        | false      |
| readonly       | Read only status disables input box operation behavior | Boolean        | false      |
| isAsync       | Support for asynchronous modification | Boolean        | false      |

### Events

| Event    | Description                   | Arguments                       |
|-----------|------------------------|--------------------------------|
| add    `v1.3.8(Abandon)`   | Triggered when the Add button is clicked     | event: Event                   |
| reduce   `v1.3.8(Abandon)` | Triggered when the decrease button is clicked     | event: Event                   |
| overlimit `v1.3.8(Abandon)` | Triggered when an unavailable button is clicked | event: Event                   |
| change `v1.3.8(Abandon)`    | Triggered when the value changes           | value:  number , event : Event |
| blur `v1.3.8(Abandon)`      | Triggered when the input box blur   | event: Event                   |
| focus `v1.3.8(Abandon)`     | Triggered when the input box focus   | event: Event                   |
| onAdd `v1.3.8`       | Triggered when the Add button is clicked     | event: Event                   |
| onReduce `v1.3.8`    | Triggered when the decrease button is clicked     | event: Event                   |
| onOverlimit `v1.3.8` | Triggered when an unavailable button is clicked | event: Event                   |
| onChangeFuc `v1.3.8`    | Triggered when the value changes           | value:  number , event : Event |
| onBlurFuc `v1.3.8`      | Triggered when the input box blur   | event: Event                   |
| onFocus `v1.3.8`     | Triggered when the input box focus   | event: Event                   |