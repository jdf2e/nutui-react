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
  return (
    <>
      <InputNumber defaultValue={1} />
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
  return (
    <>
      <InputNumber defaultValue={0} step="5" />
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

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

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

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

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

### 设置按钮样式

可使用`ConfigProvider`组件来设置按钮样式。

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

### 支持小数点

设置步长 `step` 0.1  `decimal-places` 小数保留1位

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <InputNumber defaultValue={5.5} step="0.1" digits="1" readonly />
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


### 支持formatter

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

| 参数           | 说明                       | 类型           | 默认值     |
|----------------|----------------------------|----------------|------------|
| allowEmpty        | 是否允许内容为空                     | boolean |   false          |
| defaultValue        | 默认值                     | string \| number |  0         |
| value        | 当前值，受控值                   | string \| number | -          |
| min            | 最小值限制                 | string \| number | `1`        |
| max            | 最大值限制                 | string \| number | `9999` |
| step           | 步长                       | string \| number | `1`        |
| digits | 设置保留的小数位           | string \| number | `0`        |
| disabled       | 禁用所有功能               | boolean        | `false`      |
| readonly       | 只读状态禁用输入框操作行为 | boolean        | `false`      |
| async       | 支持异步修改 | boolean        | `false`      |
| formatter       | 指定输入框展示值的格式 | function(value: number | string): string        | -     |

### Events

| 事件名    | 说明                   | 回调参数                       |
|-----------|------------------------|--------------------------------|
| onPlus       | 点击增加按钮时触发     | event: Event                   |
| onMinus    | 点击减少按钮时触发     | event: Event                   |
| onOverlimit  | 点击不可用的按钮时触发 | event: Event                   |
| onChange      | 值改变时触发           | value:  number , event : Event |
| onFocus      | 输入框获得焦点时触发   | event: Event                   |
| onBlur      | 输入框失去焦点时触发   | event: Event                   |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-inputnumber-button-width`v1.4.8` | `20px` |
| --nutui-inputnumber-button-height`v1.4.8` | `20px` |
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
