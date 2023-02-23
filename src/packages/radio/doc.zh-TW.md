# Radio 單選按鈕

### 介紹

用於在一組備選項中進行單選

### 安裝

``` ts
// react
import { Radio } from '@nutui/nutui-react';

```

## 基本用法

通過 **value** 綁定值當前選項的 **label** 。 並且必須 **Radio.RadioGroup** 和 **Radio** 相結合進行使用

:::demo

```tsx
import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} textPosition="left">
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal}>
      <Radio shape="button" value="1">選項1</Radio>
      <Radio disabled shape="button" value="2">選項2</Radio>
      <Radio shape="button" value="3">選項3</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 水準使用

:::demo

```tsx
import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal} direction="horizontal">
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} textPosition="left" direction="horizontal">
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </Radio.RadioGroup>
    <Radio.RadioGroup value={radioVal} direction="horizontal">
      <Radio shape="button" value="1">選項1</Radio>
      <Radio disabled shape="button" value="2">選項2</Radio>
      <Radio shape="button" value="3">選項3</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 自訂尺寸

:::demo

```tsx
import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1" iconSize="12">自訂尺寸12</Radio>
      <Radio value="2" iconSize="12">自訂尺寸12</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 自訂圖示

建議 『iconName』 'iconActiveName' 一起修改

:::demo

```tsx
import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.RadioGroup value={radioVal}>
      <Radio value="1" iconName="checklist"
             iconActiveName="checklist">自訂圖示</Radio>
      <Radio value="2" iconName="checklist"
             iconActiveName="checklist">自訂圖示</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 觸發 change 事件

:::demo

```tsx
import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  const handleChange = (v) => {
    console.log(v)
  }
  return <>
    <Radio.RadioGroup value={radioVal} onChange={handleChange}>
      <Radio value="1">觸發事件</Radio>
      <Radio value="2">觸發事件</Radio>
    </Radio.RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 配置 options 渲染單選按鈕

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupOptions = () => {
  const [radioVal, setRadioVal] = useState('1')
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      label: '選項1',
      value: '1',
    },
    {
      label: '選項2',
      value: '2',
      disabled: true,
    },
    {
      label: '選項1',
      value: '3',
    },
  ])
  const handleChange = (v) => {
    console.log(v)
    setRadioVal(v)
  }
  return <Radio.RadioGroup options={optionsDemo1} value={radioVal} onChange={handleChange} />
}
export default RadioGroupOptions;
```

:::

## Prop

### Radio

| 屬性         | 說明                             | 類型             | 預設值           |
|------------------|--------------------------------------------------------------|-------------------------|-------------------|
| disabled         | 是否禁用選擇                                                 | Boolean                 | `false`           |
| iconSize        | [圖示尺寸](#/icon)                                           | String、Number          | `18`              |
| iconName        | [圖示名稱](#/icon)，選中前（建議和'iconActiveName'一起修改） | String                  | `'check-normal'`  |
| iconActiveName | [圖示名稱](#/icon)，選取後（建議和'iconName'一起修改）        | String                  | `'check-checked'` |
| value            | 攜帶的標識值，用於 Group 模式                                                   | String、Number、Boolean | -                 |
| shape            | 形狀，可選值為 button、round                                 | String                  | round             |

### Radio.RadioGroup

| 屬性 | 說明 | 類型 | 預設值 |
|---------------|-----------------------------------------------|-------------------------|------------|
| value       | 當前選取的標識碼，與label值一致時呈選中狀態 | String、Number、Boolean | -          |
| textPosition | 文本所在的位置，可選值：'left'，'right' | String                  | `right`    |
| direction     | 使用橫縱方向 可選值 horizontal、vertical | String                  | `vertical` |
| options `v1.3.10`     | 配置 options 渲染單選按鈕      | Array                  | `Array<{ label: string value: string disabled?: boolean }` |

## Radio.RadioGroup Event

| 事件名稱     | 說明 | 回調參數 |
|----------|--------------|----------------------------------------------------|
| onChange | 值變化時觸發 | 當前選取的選項（label）【設置label後有值、預設為空】 |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-radio-label-font-color | ` $gray1` |
| --nutui-radio-label-font-active-color | `  $primary-color` |
| --nutui-radio-label-disable-color | `  $gray3` |
| --nutui-radio-icon-disable-color | `  $gray2` |
| --nutui-radio-label-button-border-color | `  $primary-color` |
| --nutui-radio-label-button-background | `  rgba(250, 44, 25, 0.05)` |
| --nutui-radio-label-margin-left | ` 15px` |
| --nutui-radio-button-border-radius | `  15px` |
| --nutui-radio-label-font-size | ` 14px` |
| --nutui-radio-button-font-size | ` 12px` |
| --nutui-radio-button-padding | ` 5px 18px` |
| --nutui-radio-icon-font-size | ` 18px` |
| --nutui-radio-icon-disable-color2 | `  $gray3` |
