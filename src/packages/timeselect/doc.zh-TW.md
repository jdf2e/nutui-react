# TimeSelect 配送時間

## 介紹

用於配送時間選擇

## 安裝

```tsx
import { TimeSelect } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: '20230520',
      text: '5月20日(今天)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
        { value: '11', text: '11:00-12:00' },
      ],
    },
    {
      value: '20230521',
      text: '5月21日(星期三)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
      ],
    },
  ]
  const handleClick = () => {
    setVisible(true)
  }
  const handleSelect = (value) => {
    setVisible(false)
    console.log(`您選擇了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="請選擇配送時間" onClick={handleClick} />
      <TimeSelect
        visible={visible}
        options={options}
        style={{
          height: '30%',
        }}
        onSelect={handleSelect}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    </>
  )
}

export default Demo
```

:::

### 自定義數據 key

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const optionKey = {
    valueKey: 'value1',
    textKey: 'text1',
    childrenKey: 'children1',
  }
  const options = [
    {
      value1: '20230520',
      text1: '5月20日(今天)',
      children1: [
        { value1: '09', text1: '09:00-10:00' },
        { value1: '10', text1: '10:00-11:00' },
        { value1: '11', text1: '11:00-12:00' },
      ],
    },
    {
      value1: '20230521',
      text1: '5月21日(星期三)',
      children1: [
        { value1: '09', text1: '09:00-10:00' },
        { value1: '10', text1: '10:00-11:00' },
      ],
    },
  ]
  const defaultValue = [
    {
      value1: '20230521',
      children1: [{ value1: '10' }],
    },
  ]
  const handleClick = () => {
    setVisible(true)
  }
  const handleSelect = (value) => {
    setVisible(false)
    console.log(`您選擇了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="請選擇配送時間" onClick={handleClick} />
      <TimeSelect
        options={options}
        optionKey={optionKey}
        defaultValue={defaultValue}
        visible={visible}
        style={{
          height: '30%',
        }}
        onSelect={handleSelect}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    </>
  )
}

export default Demo
```

:::

### 支持多選

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: '20230520',
      text: '5月20日(今天)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
        { value: '11', text: '11:00-12:00' },
      ],
    },
    {
      value: '20230521',
      text: '5月21日(星期三)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
      ],
    },
  ]
  const handleClick = () => {
    setVisible(true)
  }
  const handleSelect = (value) => {
    setVisible(false)
    console.log(`您選擇了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="請選擇配送時間" onClick={handleClick} />
      <TimeSelect
        visible={visible}
        options={options}
        style={{
          height: '30%',
        }}
        multiple
        onSelect={handleSelect}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    </>
  )
}

export default Demo
```

:::

### 自定義使用場景

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: 'zhejiang',
      text: '浙江',
      children: [
        { value: 'hangzhou', text: '杭州' },
        { value: 'ningbo', text: '寧波' },
      ],
    },
    {
      value: 'jiangsu',
      text: '江蘇',
      children: [
        { value: 'nanjing', text: '南京' },
        { value: 'suzhou', text: '蘇州' },
        { value: 'yangzhou', text: '揚州' },
      ],
    },
  ]
  const handleClick = () => {
    setVisible(true)
  }
  const handleSelect = (value) => {
    setVisible(false)
    console.log(`您選擇了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="請選擇所在城市" onClick={handleClick} />
      <TimeSelect
        visible={visible}
        options={options}
        style={{
          height: '30%',
        }}
        title="請選擇所在城市"
        onSelect={handleSelect}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
      />
    </>
  )
}

export default Demo
```

:::

## TimeSelect

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示彈層 | `boolean` | `false` |
| title | 彈層標題 | `ReactNode` | `取件時間` |
| multiple | 是否支持多選 | `boolean` | `false` |
| defaultValue | 默認選中的值，非受控 | `DateType[]` | `-` |
| options | 數據 | `DateType[]` | `-` |
| optionKey | 配置數據中的關鍵字, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` | `-` |
| onSelect | 關閉遮罩之後的回調 | `(value: DateType[]) => void` | `-` |
| onDateChange | 點擊左欄時的回調 | `(date: DateType, value: DateType[]) => void` | `-` |
| onTimeChange | 點擊右側選項時的回調 | `(time: TimeType, value: DateType[]) => void` | `-` |

### DateType

以下字段為默認值，會被 optionKey 的配置替換。

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 唯一標識符， 必填 | `string` | `-` |
| text | 左側顯示的文本， 必填 | `string` | `-` |
| children | 對應右側的選項列錶， 必填 | `TimeType[]` | `-` |

### TimeType

以下字段為默認值，會被 optionKey 的配置替換。

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 唯一標識符， 必填 | `string` | `-` |
| text | 右側顯示的選項內容， 必填 | `string` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-timeselect-title-height | title 高度 | `50px` |
| \--nutui-timeselect-title-line-height | title 行高 | `50px` |
| \--nutui-timeselect-title-color | title 字體顏色 | `$title-color` |
| \--nutui-timeselect-title-font-size | title 字體大小 | `$font-size-2` |
| \--nutui-timeselect-title-background | title 背景 | `$background-color3` |
| \--nutui-timeselect-date-width | date 寬度 | `140px` |
| \--nutui-timeselect-date-height | date 高度 | `40px` |
| \--nutui-timeselect-date-line-height | date 行高 | `40px` |
| \--nutui-timeselect-date-color | date 字體顏色 | `$title-color2` |
| \--nutui-timeselect-date-active-color | date 激活字體顏色 | `$title-color` |
| \--nutui-timeselect-date-font-size | date 字體大小 | `$font-size-2` |
| \--nutui-timeselect-time-width | time 寬度 | `100px` |
| \--nutui-timeselect-time-height | time 高度 | `50px` |
| \--nutui-timeselect-time-line-height | time 行高 | `50px` |
| \--nutui-timeselect-time-font-size | time 字體大小 | `14px` |
| \--nutui-timeselect-time-margin | time 外邊距 | `0 10px 10px 0` |
| \--nutui-timeselect-time-color | time 字體顏色 | `$title-color` |
| \--nutui-timeselect-time-active-color | time 激活字體顏色 | `$primary-color` |
| \--nutui-timeselect-time-background | time 背景 | `$background-color` |
| \--nutui-timeselect-time-active-background | time 激活背景 | `$background-color2` |