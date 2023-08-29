# Radio 單選按鈕

## 介紹

用於在一組備選項中進行單選

## 安裝

```tsx
import { Radio } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio defaultChecked>選項1</Radio>
    <Radio defaultChecked disabled>
      選項1
    </Radio>
    <Radio.Group defaultValue="1">
      <Radio value="1" disabled>
        選項1
      </Radio>
      <Radio value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </Radio.Group>
    <Radio.Group disabled defaultValue="1">
      <Radio value="1">選項1</Radio>
      <Radio value="2">選項2</Radio>
      <Radio value="3">選項3</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1">
      <Radio shape="button" disabled value="1">
        選項1
      </Radio>
      <Radio shape="button" value="2">
        選項2
      </Radio>
      <Radio shape="button" value="3">
        選項3
      </Radio>
    </Radio.Group>
    <Radio.Group disabled defaultValue="1">
      <Radio shape="button" value="1">
        選項1
      </Radio>
      <Radio shape="button" value="2">
        選項2
      </Radio>
      <Radio shape="button" value="3">
        選項3
      </Radio>
    </Radio.Group>
  </>
}
export default RadioGroupLast;
```

:::

## 水平使用

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">
        選項2
      </Radio>
      <Radio value="3">選項3</Radio>
    </Radio.Group>
    <Radio.Group
      defaultValue="1"
      labelPosition="left"
      direction="horizontal"
    >
      <Radio value="1">選項1</Radio>
      <Radio disabled value="2">
        選項2
      </Radio>
      <Radio value="3">選項3</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio shape="button" value="1">
        選項1
      </Radio>
      <Radio shape="button" disabled value="2">
        選項2
      </Radio>
      <Radio shape="button" value="3">
        選項3
      </Radio>
    </Radio.Group>
  </>
}
export default RadioGroupLast;
```

:::

## 自定義尺寸

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio
      style={{
        '--nut-icon-width': '12px',
        '--nutui-icon-height': '12px',
      }}
    >
      自定義尺寸
    </Radio>
  </>
}
export default RadioGroupLast;
```

:::

## 自定義圖標

建議 `icon` `activeIcon` 一起修改

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';
import { Checklist } from '@nutui/icons-react'

const RadioGroupLast = () => {
  const [radioVal] = useState('1')
  return <>
    <Radio
      icon={<Checklist />}
      activeIcon={<Checklist style={{ color: 'red' }} />}
    >
      自定義圖標
    </Radio>
  </>
}
export default RadioGroupLast;
```

:::

## 觸發 change 事件

:::demo

```tsx
import React, { useState } from 'react';
import { Radio } from '@nutui/nutui-react';

const RadioGroupLast = () => {
  const [checkedValue] = useState(1)
  return <>
    <Radio.Group
      defaultValue={checkedValue}
      onChange={(value) => Toast.show(value)}
    >
      <Radio value={1}>觸發事件</Radio>
      <Radio value={2}>觸發事件</Radio>
    </Radio.Group>
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
      label: '選項3',
      value: '3',
    },
  ])
  const handleChange = (v) => {
    console.log(v)
    setRadioVal(v)
  }
  return <Radio.Group options={optionsDemo1} value={radioVal}
                           onChange={handleChange} />
}
export default RadioGroupOptions;
```

:::

## Radio

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| checked | 指定當前是否選中 | `boolean` | `-` |
| defaultChecked | 初始是否選中 | `boolean` | `-` |
| disabled | 是否禁用選擇 | `boolean` | `false` |
| value | 攜帶的標識值，用於 Group 模式 | `string`  \|  `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| icon | <a href="#/icon">圖標名稱</a>，選中前(建議和`activeIcon`一起修改) | `ReactNode` | `'CheckNormal'` |
| activeIcon | <a href="#/icon">圖標名稱</a>，選中後(建議和`icon`一起修改) | `ReactNode` | `'CheckChecked'` |
| shape | 形狀 | `button` \| `round` \| `round` |`round` |
| onChange | 選中態變化時觸發 | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前選中項的標識符 | `string`  \|  `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| disabled | 是否禁用 | `boolean` | `false` |
| direction | 使用橫縱方嚮 | `horizontal` \| `vertical` | `vertical` |
| options | 配置 options 渲染單選按鈕 | `Array<{ label: string value: string disabled?: boolean }>`  | `-` |
| onChange | 值變化時觸發 | `(value: string \| number) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。


| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-radio-icon-font-size | icon字號 | `18px` |
| \--nutui-radio-label-font-size | 字號 | `14px` |
| \--nutui-radio-label-color | 字體顏色 | `$color-title` |
| \--nutui-radio-label-margin-left | label 的左外邊距 | `6px` |
| \--nutui-radio-button-font-size | shape為button的字號 | `12px` |
| \--nutui-radio-button-color | 字體顏色 | `$color-text` |
| \--nutui-radio-button-background | shape為button的背景色 | `$color-background` |
| \--nutui-radio-label-button-border-color | shape為button的邊框顏色 | `$color-primary` |
| \--nutui-radio-button-padding | shape為button的內邊距 | `5px 18px` |
| \--nutui-radio-button-border-radius | shape為button的圓角 | `15px` |
| \--nutui-radiogroup-radio-margin | Group模式下每個 radio 的外邊距 | `0 20px 5px 0` |
| \--nutui-radiogroup-radio-label-margin | Group模式下每個 radio 中的 label 外邊距 | `0 5px 0 5px` |
