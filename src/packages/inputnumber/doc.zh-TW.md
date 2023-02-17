# InputNumber 數字輸入框

### 介紹

通過點擊按鈕控制數字增減。

### 安裝
``` ts
// react
import { InputNumber } from '@nutui/nutui-react';

```
### 基礎用法

初始化一個默認值

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

### 步長設置

設置步長 `step` 5 

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

### 限制輸入範圍

`min` 和 `max` 屬性分別表示最小值和最大值

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber,Toast } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val: 10,
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件觸發')
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

### 禁用狀態

`disabled` 禁用狀態下無法點擊按鈕或修改輸入框。

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

### 只讀禁用輸入框

`readonly` 設置只讀禁用輸入框輸入行為

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

### 支持小數點

設置步長 `step` 0.1  `decimal-places` 小數保留1位

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
### 支持異步修改

通過 `change` 事件和 `model-value` 進行異步修改

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val: 1,
  })
  const onChange = (value: string | number) => {
    Toast.loading('異步演示 2 秒後更改')
    setTimeout(() => {
      inputState.val7 = Number(value)
      setInputState({ ...inputState })
      Toast.hide()
    }, 2000)
  }
  return (
    <>
      <InputNumber modelValue={inputState.val} onChangeFuc={onChange} isAsync />
    </>
  )
}
export default App;
```
:::

### 自定義按鈕大小

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

| 參數         | 說明                       | 類型           | 默認值     |
|----------------|----------------------------|----------------|------------|
| modelValue        | 初始值                     | String、Number | -          |
| inputWidth    | 輸入框寬度                 | String         | `40px`     |
| buttonSize    | 操作符+、-尺寸             | String         | `20px`     |
| min            | 最小值限制                 | String、Number | `1`        |
| max            | 最大值限制                 | String、Number | `9999` |
| step           | 步長                       | String、Number | `1`        |
| decimalPlaces | 設置保留的小數位           | String、Number | `0`        |
| disabled       | 禁用所有功能               | Boolean        | false      |
| readonly       | 只讀狀態禁用輸入框操作行為 | Boolean        | false      |
| isAsync       | 支持異步修改 | Boolean        | false      |

### Events

| 事件名    | 說明                   | 回調參數                       |
|-----------|------------------------|--------------------------------|
| add `v1.3.8廢棄`       | 點擊增加按鈕時觸發     | event: Event                   |
| reduce `v1.3.8廢棄`    | 點擊減少按鈕時觸發     | event: Event                   |
| overlimit `v1.3.8廢棄` | 點擊不可用的按鈕時觸發 | event: Event                   |
| change `v1.3.8廢棄`    | 值改變時觸發           | value:  number , event : Event |
| blur `v1.3.8廢棄`      | 輸入框失去焦點時觸發   | event: Event                   |
| focus `v1.3.8廢棄`     | 輸入框獲得焦點時觸發   | event: Event                   |
| onAdd `v1.3.8`       | 點擊增加按鈕時觸發     | event: Event                   |
| onReduce `v1.3.8`    | 點擊減少按鈕時觸發     | event: Event                   |
| onOverlimit `v1.3.8` | 點擊不可用的按鈕時觸發 | event: Event                   |
| onChangeFuc `v1.3.8`    | 值改變時觸發           | value:  number , event : Event |
| onBlurFuc `v1.3.8`      | 輸入框失去焦點時觸發   | event: Event                   |
| onFocus `v1.3.8`     | 輸入框獲得焦點時觸發   | event: Event                   |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-inputnumber-button-width`v1.4.8` | `12px` |
| --nutui-inputnumber-button-height`v1.4.8` | `12px` |
| --nutui-inputnumber-button-border-radius`v1.4.8` | `30px` |
| --nutui-inputnumber-button-background-color`v1.4.8` | ` $gray6` |
| --nutui-inputnumber-icon-color | `  $title-color` |
| --nutui-inputnumber-icon-void-color | `  $disable-color` |
| --nutui-inputnumber-icon-disabled-color | `  $gray2` |
| --nutui-inputnumber-icon-size | ` 20px` |
| --nutui-inputnumber-input-font-size | `  12px` |
| --nutui-inputnumber-input-font-color | `  $gray1` |
| --nutui-inputnumber-input-background-color | `  $gray4` |
| --nutui-inputnumber-input-border-radius | `  4px` |
| --nutui-inputnumber-input-width | ` 40px` |
| --nutui-inputnumber-input-height | ` 24px`|
| --nutui-inputnumber-input-margin | `  0 6px` |
| --nutui-inputnumber-input-border | ` 0` |
| --nutui-inputnumber-border | ` 0` |
| --nutui-inputnumber-border-radius | ` 0` |
| --nutui-inputnumber-height | ` auto` |
| --nutui-inputnumber-line-height | ` normal` |
| --nutui-inputnumber-border-box | `  content-box` |
| --nutui-inputnumber-display | ` flex` |
