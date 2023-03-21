# InputNumber

### Intro

Control the number increase or decrease by clicking the button.

### Install

``` ts
// react
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
    val: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val} />
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
    val: 0,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val} step="5" />
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
import { InputNumber, Toast } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val: 10,
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('Exceeded limit event triggered')
  }
  return (
    <>
      <InputNumber modelValue={inputState.val} min="10" max="20" onOverlimit={overlimit} />
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
    val: 0,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val} disabled />
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
    val: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val} readonly />
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
    val: 5.5,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val} step="0.1" decimalPlaces="1" readonly />
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
    val: 1,
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
      <InputNumber modelValue={inputState.val} onChange ={onChange} isAsync />
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
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val: 1,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val} buttonSize="30" inputWidth="50" />
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
| modelValue        | Initial value                     | string \| number | -          |
| inputWidth    | Input box width                 | string         | `40px`     |
| buttonSize    | Operators +, - Dimensions             | string         | `20px`     |
| min            | Minimum limit                 | string \| number | `1`        |
| max            | Maximum limit                 | string \| number | `9999` |
| step           | step                       | string \| number | `1`        |
| decimalPlaces | Set reserved decimal places           | string \| number | `0`        |
| disabled       | Disable all features               | boolean        | `false`      |
| readonly       | Read only status disables input box operation behavior | boolean        | `false`      |
| isAsync       | Support for asynchronous modification | boolean        | `false`      |

### Events

| Event    | Description                   | Arguments                       |
|-----------|------------------------|--------------------------------|
| add       | Triggered when the Add button is clicked     | `event: Event`                   |
| reduce    | Triggered when the decrease button is clicked     | `event: Event`                   |
| overlimit  | Triggered when an unavailable button is clicked | `event: Event`                   |
| change     | Triggered when the value changes           | `value: number, event: Event` |
| blur       | Triggered when the input box blur   | `event: Event`                   |
| focus      | Triggered when the input box focus   | `event: Event`                   |
| onAdd        | Triggered when the Add button is clicked     | `event: Event`                   |
| onReduce     | Triggered when the decrease button is clicked     | `event: Event`                   |
| onOverlimit  | Triggered when an unavailable button is clicked | `event: Event`                   |
| onChange `v2.0.0`     | Triggered when the value changes           | `value: number, event: Event` |
| onBlur `v2.0.0`       | Triggered when the input box blur   | `event: Event`                   |
| onFocus      | Triggered when the input box focus   | `event: Event`                   |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-inputnumber-button-width`v1.4.8` | `12px` |
| --nutui-inputnumber-button-height`v1.4.8` | `12px` |
| --nutui-inputnumber-button-border-radius`v1.4.8` | `30px` |
| --nutui-inputnumber-button-background-color`v1.4.8` | `$gray6` |
| --nutui-inputnumber-icon-color | `$title-color` |
| --nutui-inputnumber-icon-void-color | `$disable-color` |
| --nutui-inputnumber-icon-disabled-color | `$gray2` |
| --nutui-inputnumber-icon-size | `20px` |
| --nutui-inputnumber-input-font-size | `12px` |
| --nutui-inputnumber-input-font-color | `$gray1` |
| --nutui-inputnumber-input-background-color | `$gray4` |
| --nutui-inputnumber-input-border-radius | `4px` |
| --nutui-inputnumber-input-width | `40px` |
| --nutui-inputnumber-input-height | `24px`|
| --nutui-inputnumber-input-margin | `0 6px` |
| --nutui-inputnumber-input-border | `0` |
| --nutui-inputnumber-border | `0` |
| --nutui-inputnumber-border-radius | `0` |
| --nutui-inputnumber-height | `auto` |
| --nutui-inputnumber-line-height | `normal` |
| --nutui-inputnumber-border-box | `content-box` |
| --nutui-inputnumber-display | `flex` |
