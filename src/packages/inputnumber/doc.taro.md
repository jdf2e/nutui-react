# InputNumber 数字输入框

## 介绍

通过点击按钮控制数字增减。

## 安装

``` ts
import { InputNumber } from '@nutui/nutui-react-taro';
```

## 代码演示
### 基础用法

初始化一个默认值

:::demo
```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-taro';

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
import { InputNumber } from '@nutui/nutui-react-taro';

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
import { InputNumber, Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件触发')
  }
  return (
    <>
      <InputNumber
        defaultValue={10}
        min="10"
        max="20"
        onOverlimit={overlimit}
      />
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
import { InputNumber } from '@nutui/nutui-react-taro';

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
import { InputNumber } from '@nutui/nutui-react-taro';

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
import { InputNumber, ConfigProvider } from '@nutui/nutui-react-taro';

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
import { InputNumber } from '@nutui/nutui-react-taro';

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
import { InputNumber, Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const [inputValue, setInputValue] = useState(0)
  const onChange = (value: string | number) => {
    Toast.loading('异步演示 2 秒后更改')
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


### 支持formatter

:::demo
```tsx
import React from "react";
import { InputNumber } from '@nutui/nutui-react-taro';

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
| min            | 最小值限制                 | String、Number | `1`        |
| max            | 最大值限制                 | String、Number | `9999` |
| step           | 步长                       | String、Number | `1`        |
| digits | 设置保留的小数位           | String、Number | `0`        |
| disabled       | 禁用所有功能               | Boolean        | false      |
| readonly       | 只读状态禁用输入框操作行为 | Boolean        | false      |
| async       | 支持异步修改 | Boolean        | false      |
| formatter       | 指定输入框展示值的格式 | function(value: number \| string): string        | -     |
| onPlus       | 点击增加按钮时触发     | (e: MouseEvent) => void                   | - |
| onMinus    | 点击减少按钮时触发     | (e: MouseEvent) => void                   | - |
| onOverlimit  | 点击不可用的按钮时触发 | (e: MouseEvent) => void                   | - |
| onChange      | 值改变时触发           | (param: string \| number, e: MouseEvent \| ChangeEvent<HTMLInputElement>) => void | - |
| onFocus      | 输入框获得焦点时触发   | (e: FocusEvent<HTMLInputElement>) => void                   | - |
| onBlur      | 输入框失去焦点时触发   | (e: ChangeEvent<HTMLInputElement>) => void                   | - |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| --nutui-inputnumber-button-width  | 数字输入框左右按钮的宽度 | `20px` |
| --nutui-inputnumber-button-height | 数字输入框左右按钮的高度 | `20px` |
| --nutui-inputnumber-button-border-radius | 数字输入框左右按钮的圆角 | `30px` |
| --nutui-inputnumber-button-background-color | 数字输入框左右按钮的背景色 | ` $gray6` |
| --nutui-inputnumber-icon-color | 数字输入框中icon的颜色 | `  $title-color` |
| --nutui-inputnumber-icon-size | 数字输入框中icon的大小 | ` 20px` |
| --nutui-inputnumber-icon-void-color | 数字输入框中禁用input的字号颜色 |`  $disable-color` |
| --nutui-inputnumber-icon-disabled-color | 数字输入框中禁用icon的颜色 |`  $gray2` |
| --nutui-inputnumber-input-font-size | 数字输入框中input的字号大小 | `  12px` |
| --nutui-inputnumber-input-font-color | 数字输入框中input的字号颜色 | `  $gray1` |
| --nutui-inputnumber-input-background-color | 数字输入框中input的背景颜色 |`  $gray4` |
| --nutui-inputnumber-input-border-radius | 数字输入框中input的圆角 | `  4px` |
| --nutui-inputnumber-input-width | 数字输入框中input的宽度 | ` 40px` |
| --nutui-inputnumber-input-height | 数字输入框中input的高度 | ` 24px`|
| --nutui-inputnumber-input-margin | 数字输入框中input的margin值 | `  0 6px` |
| --nutui-inputnumber-input-border | 数字输入框中input的border值 | ` 0` |
| --nutui-inputnumber-display |  数字输入框整体的display布局 |` flex` |
