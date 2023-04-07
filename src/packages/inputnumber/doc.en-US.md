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
  return (
    <>
      <InputNumber defaultValue={1} />
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
  return (
    <>
      <InputNumber defaultValue={0} step="5" />
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
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件触发')
  }
  return (
    <>
      <InputNumber defaultValue={10} min="10" max="20" onOverlimit={overlimit} />
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
  return (
    <>
      <InputNumber defaultValue={0} disabled />
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
  return (
    <>
      <InputNumber defaultValue={1} readonly />
    </>
  )
}
export default App;
```
:::

### Set the button style

The buttons can be styled using the `ConfigProvider` component.

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  const customTheme = {
    nutuiInputnumberButtonWidth: '30px',
    nutuiInputnumberButtonHeight: '30px',
    nutuiInputnumberButtonBorderRadius: '2px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputHeight: '30px',
    nutuiInputnumberInputMargin: '0 2px',
  }

  const customTheme2 = {
    nutuiInputnumberButtonWidth: '30px',
    nutuiInputnumberButtonHeight: '30px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputBackgroundColor: '#fff',
    nutuiInputnumberInputMargin: '0 2px',
  }

  return (
    <>
      <ConfigProvider theme={customTheme}>
        <InputNumber defaultValue={1} />
      </ConfigProvider>
      <ConfigProvider theme={customTheme2}>
        <InputNumber defaultValue={1} />
      </ConfigProvider>
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
  creturn (
    <>
      <InputNumber defaultValue={5.5} step="0.1" digits="1" readonly />
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
  const [inputValue, setInputValue] = useState(0)
  const onChange = (value: string | number) => {
    Toast.loading(translated['0137871a'])
    setTimeout(() => {
      setInputValue(Number(value))
      Toast.hide()
    }, 2000)
  }
  return (
    <>
      <InputNumber value={inputValue} defaultValue={1} onChange={onChange} async />
    </>
  )
}
export default App;
```
:::

### support formatter

:::demo
```tsx
import React from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <InputNumber
        style={{"--nutui-inputnumber-input-width": "60px"}}
        modelValue="1000"
        min={10}
        max={15020}
        formatter={(value) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
      />
      <InputNumber
        style={{"--nutui-inputnumber-input-width": "60px"}}
        modelValue="100"
        min={0}
        max={100}
        formatter={(value) => `${value}%`}
      />
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
| allowEmpty        | Whether to allow the content to be empty                     | boolean |   false          |
| defaultValue        | Defaults                     | string \| number |  0         |
| value        | current value, controlled value                   | string \| number | -          |
| min            | Minimum limit                 | string \| number | `1`        |
| max            | Maximum limit                 | string \| number | `9999` |
| step           | step                       | string \| number | `1`        |
| digits | Set reserved decimal places           | string \| number | `0`        |
| disabled       | Disable all features               | boolean        | `false`      |
| readonly       | Read only status disables input box operation behavior | boolean        | `false`      |
| async       | Support for asynchronous modification | boolean        | `false`      |
| formatter        | Specifies the format of the value displayed in the input box | function(value: number | string): string        | -     |

### Events

| Event    | Description                   | Arguments                       |
|-----------|------------------------|--------------------------------|
| onPlus        | Triggered when the Add button is clicked     | `event: Event`                   |
| onMinus     | Triggered when the decrease button is clicked     | `event: Event`                   |
| onOverlimit  | Triggered when an unavailable button is clicked | `event: Event`                   |
| onChange      | Triggered when the value changes           | `value: number, event: Event` |
| onBlur        | Triggered when the input box blur   | `event: Event`                   |
| onFocus      | Triggered when the input box focus   | `event: Event`                   |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-inputnumber-button-width`v1.4.8` | `20px` |
| --nutui-inputnumber-button-height`v1.4.8` | `20px` |
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
