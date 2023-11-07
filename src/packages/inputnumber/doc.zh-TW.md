# InputNumber 數字輸入框

## 介紹

通過點擊按鈕控制數字增減。

## 安裝

```tsx
import { InputNumber } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

初始化一個默認值

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

### 步長設置

設置步長 `step` 5

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

### 限制輸入範圍

`min` 和 `max` 屬性分別錶示最小值和最大值

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react';

const App = () => {
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件觸發')
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

### 禁用狀態

`disabled` 禁用狀態下無法點擊按鈕或修改輸入框。

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

### 只讀禁用輸入框

`readOnly` 設置只讀禁用輸入框輸入行為

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <InputNumber defaultValue={1} readOnly />
    </>
  )
}
export default App;
```

:::

### 設置按鈕樣式

可使用`ConfigProvider`組件來設置按鈕樣式。

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

### 支持小數點

設置步長 `step` 0.1 `decimal-places` 小數保留1位

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <InputNumber defaultValue={5.5} step="0.1" digits="1" readOnly />
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

## InputNumber

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| allowEmpty | 是否允許內容為空 | `boolean` | `false` |
| defaultValue | 默認值 | `string`  \|  `number` | `0` |
| value | 當前值，受控值 | `string`  \|  `number` | `-` |
| min | 最小值限制 | `string`  \|  `number` | `1` |
| max | 最大值限制 | `string`  \|  `number` | `9999` |
| step | 步長 | `string`  \|  `number` | `1` |
| digits | 設置保留的小數位 | `string`  \|  `number` | `0` |
| disabled | 禁用所有功能 | `boolean` | `false` |
| readOnly | 只讀狀態禁用輸入框操作行為 | `boolean` | `false` |
| async | 支持異步修改 | `boolean` | `false` |
| formatter | 指定輸入框展示值的格式 | `function(value: number \| string): string` | `-` |
| onPlus | 點擊增加按鈕時觸發 | `(e: MouseEvent) => void` | `-` |
| onMinus | 點擊減少按鈕時觸發 | `(e: MouseEvent) => void` | `-` |
| onOverlimit | 點擊不可用的按鈕時觸發 | `(e: MouseEvent) => void` | `-` |
| onChange | 值改變時觸發 | `(param: string \| number, e: MouseEvent \| ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | 輸入框獲得焦點時觸發 | `(e: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | 輸入框失去焦點時觸發 | `(e: ChangeEvent<HTMLInputElement>) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-inputnumber-button-width | 數字輸入框左右按鈕的寬度 | `20px` |
| \--nutui-inputnumber-button-height | 數字輸入框左右按鈕的高度 | `20px` |
| \--nutui-inputnumber-button-border-radius | 數字輸入框左右按鈕的圓角 | `30px` |
| \--nutui-inputnumber-button-background-color | 數字輸入框左右按鈕的背景色 | `$gray6` |
| \--nutui-inputnumber-icon-color | 數字輸入框中icon的顏色 | `$title-color` |
| \--nutui-inputnumber-icon-void-color | 數字輸入框中禁用input的字號顏色 | `$disable-color` |
| \--nutui-inputnumber-icon-disabled-color | 數字輸入框中禁用icon的顏色 | `$gray2` |
| \--nutui-inputnumber-input-font-size | 數字輸入框中input的字號大小 | `12px` |
| \--nutui-inputnumber-input-font-color | 數字輸入框中input的字號顏色 | `$gray1` |
| \--nutui-inputnumber-input-background-color | 數字輸入框中input的背景顏色 | `$gray4` |
| \--nutui-inputnumber-input-border-radius | 數字輸入框中input的圓角 | `4px` |
| \--nutui-inputnumber-input-width | 數字輸入框中input的寬度 | `40px` |
| \--nutui-inputnumber-input-height | 數字輸入框中input的高度 | `24px` |
| \--nutui-inputnumber-input-margin | 數字輸入框中input的margin值 | `0 6px` |
| \--nutui-inputnumber-input-border | 數字輸入框中input的border值 | `0` |
| \--nutui-inputnumber-display | 數字輸入框整體的display佈局 | `flex` |