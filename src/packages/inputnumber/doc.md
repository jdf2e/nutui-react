# InputNumber 数字输入框

### 介绍

通过点击按钮控制数字增减。

### 安装

``` ts
// react
import { InputNumber } from '@nutui/nutui-react';

```
### 基础用法

初始化一个默认值

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

### 步长设置

设置步长 `step` 5 

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

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber, Toast} from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val: 10,
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件触发')
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

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

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

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

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
      <InputNumber modelValue={inputState.val5} readonly />
    </>
  )
}
export default App;
```
:::

### 设置按钮样式

可使用`ConfigProvider`组件来设置按钮样式。

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val: 1,
  })

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
        <InputNumber modelValue={inputState.val5} />
      </ConfigProvider>
      <ConfigProvider theme={customTheme2}>
        <InputNumber modelValue={inputState.val5} />
      </ConfigProvider>
    </>
  )
}
export default App;
```
:::

### 支持小数点

设置步长 `step` 0.1  `decimal-places` 小数保留1位

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
### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react';

const App = () => {
  const [inputState, setInputState] = useState({
    val: 1,
  })
  const onChange = (value: string | number) => {
    Toast.loading('异步演示 2 秒后更改')
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

### 自定义按钮大小

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

| 参数           | 说明                       | 类型           | 默认值     |
|----------------|----------------------------|----------------|------------|
| modelValue        | 初始值                     | String、Number | -          |
| inputWidth    | 输入框宽度                 | String         | `40px`     |
| buttonSize    | 操作符+、-尺寸             | String         | `20px`     |
| min            | 最小值限制                 | String、Number | `1`        |
| max            | 最大值限制                 | String、Number | `9999` |
| step           | 步长                       | String、Number | `1`        |
| decimalPlaces | 设置保留的小数位           | String、Number | `0`        |
| disabled       | 禁用所有功能               | Boolean        | false      |
| readonly       | 只读状态禁用输入框操作行为 | Boolean        | false      |
| isAsync       | 支持异步修改 | Boolean        | false      |

### Events

| 事件名    | 说明                   | 回调参数                       |
|-----------|------------------------|--------------------------------|
| add  `v1.3.8 废弃`     | 点击增加按钮时触发     | event: Event                   |
| onAdd  `v1.3.8`     | 点击增加按钮时触发     | event: Event                   |
| reduce   `v1.3.8 废弃` | 点击减少按钮时触发     | event: Event                   |
| onReduce   `v1.3.8` | 点击减少按钮时触发     | event: Event                   |
| overlimit `v1.3.8 废弃` | 点击不可用的按钮时触发 | event: Event                   |
| onOverlimit `v1.3.8` | 点击不可用的按钮时触发 | event: Event                   |
| change `v1.3.8 废弃`    | 值改变时触发           | value:  number , event : Event |
| onChangeFuc `v1.3.8`    | 值改变时触发           | value:  number , event : Event |
| blur `v1.3.8 废弃`      | 输入框失去焦点时触发   | event: Event                   |
| onBlurFuc `v1.3.8`      | 输入框失去焦点时触发   | event: Event                   |
| focus `v1.3.8 废弃`     | 输入框获得焦点时触发   | event: Event                   |
| onFocus `v1.3.8`     | 输入框获得焦点时触发   | event: Event                   |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
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
