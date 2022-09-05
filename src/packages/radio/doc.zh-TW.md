# Radio 單選按鈕

### 介紹

用於在一組備選項中進行單選

### 安裝

``` ts
import { Radio,RadioGroup } from '@nutui/nutui-react';
```

## 基本用法

通過 **value** 綁定值當前選項的 **label** 。 並且必須 **RadioGroup** 和 **Radio** 相結合進行使用

:::demo

```tsx
import React, { useState } from 'react'
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal}>
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal} textPosition="left">
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal}>
      <Radio shape="button" value="1">選項1</Radio>
      <Radio disabled shape="button" value="2">選項2</Radio>
      <Radio shape="button" value="3">選項3</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 水準使用

:::demo

```tsx
import React, { useState } from 'react'
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal} direction="horizontal">
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal} textPosition="left" direction="horizontal">
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </RadioGroup>
    <RadioGroup value={radioVal} direction="horizontal">
      <Radio shape="button" value="1">選項1</Radio>
      <Radio disabled shape="button" value="2">選項2</Radio>
      <Radio shape="button" value="3">選項3</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 自訂尺寸

:::demo

```tsx
import React, { useState } from 'react'
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal}>
      <Radio value="1" iconSize="12">自訂尺寸12</Radio>
      <Radio value="2" iconSize="12">自訂尺寸12</Radio>
    </RadioGroup>
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
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <RadioGroup value={radioVal}>
      <Radio value="1" iconName="checklist"
             iconActiveName="checklist">自訂圖示</Radio>
      <Radio value="2" iconName="checklist"
             iconActiveName="checklist">自訂圖示</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
```

:::

## 觸發 change 事件

:::demo

```tsx
import React, { useState } from 'react'
import { Radio, RadioGroup } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  const handleChange = (v) => {
    console.log(v)
  }
  return <>
    <RadioGroup value={radioVal} onChange={handleChange}>
      <Radio value="1">觸發事件</Radio>
      <Radio value="2">觸發事件</Radio>
    </RadioGroup>
  </>
}
export default RadioGroupLast;
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

### RadioGroup

| 屬性 | 說明 | 類型 | 預設值 |
|---------------|-----------------------------------------------|-------------------------|------------|
| value       | 當前選取的標識碼，與label值一致時呈選中狀態 | String、Number、Boolean | -          |
| textPosition | 文本所在的位置，可選值：'left'，'right' | String                  | `right`    |
| direction     | 使用橫縱方向 可選值 horizontal、vertical | String                  | `vertical` |

## RadioGroup Event

| 事件名稱     | 說明 | 回調參數 |
|----------|--------------|----------------------------------------------------|
| onChange | 值變化時觸發 | 當前選取的選項（label）【設置label後有值、預設為空】 |