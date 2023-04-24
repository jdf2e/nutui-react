# InputNumber

## Intro

Control the number increase or decrease by clicking the button.

## Install

``` ts
// react
import { InputNumber } from '@nutui/nutui-react';
```

## Demo
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
      <InputNumber defaultValue={0} min={0} step="5" />
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
    Toast.warn('Exceeded limit event triggered')
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
      <InputNumber value={inputValue} min="-6" onChange={onChange} async />
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

| Property           | Description                       | Type           | Default     |
|----------------|----------------------------|----------------|------------|
| allowEmpty        | Whether to allow the content to be empty                     | `boolean` |   `false`          |
| defaultValue        | Defaults                     | `string \| number` |  `0`        |
| value        | current value, controlled value                   | `string \| number` | `-`          |
| min            | Minimum limit                 | `string \| number` | `1`        |
| max            | Maximum limit                 | `string \| number` | `9999` |
| step           | step                       | `string \| number` | `1`        |
| digits | Set reserved decimal places           | `string \| number` | `0`        |
| disabled       | Disable all features               | `boolean`        | `false`      |
| readonly       | Read only status disables input box operation behavior | `boolean`        | `false`      |
| async       | Support for asynchronous modification | boolean        | `false`      |
| formatter        | Specifies the format of the value displayed in the input box | `function(value: number \| string): string`        | `-`     |
| onPlus        | Triggered when the Add button is clicked     | `(e: MouseEvent) => void`                   | `-` |
| onMinus     | Triggered when the decrease button is clicked     | `(e: MouseEvent) => void`                   | `-` |
| onOverlimit  | Triggered when an unavailable button is clicked | `(e: MouseEvent) => void`                   | `-` |
| onChange      | Triggered when the value changes           | `(param: string \| number, e: MouseEvent \| ChangeEvent<HTMLInputElement>) => void` | `-` |
| onBlur        | Triggered when the input box blur   | `(e: ChangeEvent<HTMLInputElement>) => void`                   | `-` |
| onFocus      | Triggered when the input box focus   | `(e: FocusEvent<HTMLInputElement>) => void`                   | `-` |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| --nutui-inputnumber-button-width  | The width of the left and right buttons of the number input box | `20px` |
| --nutui-inputnumber-button-height | The height of the left and right buttons of the number input box | `20px` |
| --nutui-inputnumber-button-border-radius | The rounded corners of the left and right buttons of the number input box | `30px` |
| --nutui-inputnumber-button-background-color | The background color of the left and right buttons of the number input box | ` $gray6` |
| --nutui-inputnumber-icon-color | The color of the icon in the number input box | `  $title-color` |
| --nutui-inputnumber-icon-void-color | Disable the font size color of the input in the number input box |`  $disable-color` |
| --nutui-inputnumber-icon-disabled-color | The color of the disabled icon in the number input box |`  $gray2` |
| --nutui-inputnumber-input-font-size | The font size of the input in the number input box | `  12px` |
| --nutui-inputnumber-input-font-color | 
The font size color of the input in the number input box | `  $gray1` |
| --nutui-inputnumber-input-background-color | The background color of the input in the number input box |`  $gray4` |
| --nutui-inputnumber-input-border-radius | The rounded corners of the input in the number input box | `  4px` |
| --nutui-inputnumber-input-width | The width of the input in the number input box | ` 40px` |
| --nutui-inputnumber-input-height | The height of the input in the number input box | ` 24px`|
| --nutui-inputnumber-input-margin | The margin value of the input in the number input box | `  0 6px` |
| --nutui-inputnumber-input-border | The border value of the input in the number input box | ` 0` |
| --nutui-inputnumber-display |  The overall display layout of the digital input box |` flex` |
