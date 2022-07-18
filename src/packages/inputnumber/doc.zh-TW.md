# InputNumber 數字輸入框

### 介紹

通過點擊按鈕控制數字增減。

### 安裝

``` ts
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

### 步長設置

設置步長 `step` 5 

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

### 限制輸入範圍

`min` 和 `max` 屬性分別表示最小值和最大值

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
    Toast.warn('超出限制事件觸發')
  }
  return (
    <>
      <InputNumber modelValue={inputState.val3} min="10" max="20" overlimit={overlimit} />
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

### 只讀禁用輸入框

`readonly` 設置只讀禁用輸入框輸入行為

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

### 支持小數點

設置步長 `step` 0.1  `decimal-places` 小數保留1位

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
### 支持異步修改

通過 `change` 事件和 `model-value` 進行異步修改

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
    Toast.loading('異步演示 2 秒後更改')
    setTimeout(() => {
      inputState.val7 = Number(value)
      setInputState({ ...inputState })
      Toast.hide()
    }, 2000)
  }
  return (
    <>
      <InputNumber modelValue={inputState.val7} change={onChange} isAsync />
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
| add       | 點擊增加按鈕時觸發     | event: Event                   |
| reduce    | 點擊減少按鈕時觸發     | event: Event                   |
| overlimit | 點擊不可用的按鈕時觸發 | event: Event                   |
| change    | 值改變時觸發           | value:  number , event : Event |
| blur      | 輸入框失去焦點時觸發   | event: Event                   |
| focus     | 輸入框獲得焦點時觸發   | event: Event                   |