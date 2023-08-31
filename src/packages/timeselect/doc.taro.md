# TimeSelect 配送时间

## 介绍

用于配送时间选择

## 安装

```tsx
import { TimeSelect } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react-taro'

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
    console.log(`您选择了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="请选择配送时间" onClick={handleClick} />
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

### 自定义数据 key

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react-taro'

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
    console.log(`您选择了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="请选择配送时间" onClick={handleClick} />
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

### 支持多选

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react-taro'

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
    console.log(`您选择了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="请选择配送时间" onClick={handleClick} />
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

### 自定义使用场景

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react-taro'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: 'zhejiang',
      text: '浙江',
      children: [
        { value: 'hangzhou', text: '杭州' },
        { value: 'ningbo', text: '宁波' },
      ],
    },
    {
      value: 'jiangsu',
      text: '江苏',
      children: [
        { value: 'nanjing', text: '南京' },
        { value: 'suzhou', text: '苏州' },
        { value: 'yangzhou', text: '扬州' },
      ],
    },
  ]
  const handleClick = () => {
    setVisible(true)
  }
  const handleSelect = (value) => {
    setVisible(false)
    console.log(`您选择了: ${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="请选择所在城市" onClick={handleClick} />
      <TimeSelect
        visible={visible}
        options={options}
        style={{
          height: '30%',
        }}
        title="请选择所在城市"
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹层 | `boolean` | `false` |
| title | 弹层标题 | `ReactNode` | `取件时间` |
| multiple | 是否支持多选 | `boolean` | `false` |
| defaultValue | 默认选中的值，非受控 | `DateType[]` | `-` |
| options | 数据 | `DateType[]` | `-` |
| optionKey | 配置数据中的关键字, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` | `-` |
| onSelect | 关闭遮罩之后的回调 | `(value: DateType[]) => void` | `-` |
| onDateChange | 点击左栏时的回调 | `(date: DateType, value: DateType[]) => void` | `-` |
| onTimeChange | 点击右侧选项时的回调 | `(time: TimeType, value: DateType[]) => void` | `-` |

### DateType

以下字段为默认值，会被 optionKey 的配置替换。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 唯一标识符， 必填 | `string` | `-` |
| text | 左侧显示的文本， 必填 | `string` | `-` |
| children | 对应右侧的选项列表， 必填 | `TimeType[]` | `-` |

### TimeType

以下字段为默认值，会被 optionKey 的配置替换。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 唯一标识符， 必填 | `string` | `-` |
| text | 右侧显示的选项内容， 必填 | `string` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-timeselect-title-height | title 高度 | `50px` |
| \--nutui-timeselect-title-line-height | title 行高 | `50px` |
| \--nutui-timeselect-title-color | title 字体颜色 | `$title-color` |
| \--nutui-timeselect-title-font-size | title 字体大小 | `$font-size-2` |
| \--nutui-timeselect-title-background | title 背景 | `$background-color3` |
| \--nutui-timeselect-date-width | date 宽度 | `140px` |
| \--nutui-timeselect-date-height | date 高度 | `40px` |
| \--nutui-timeselect-date-line-height | date 行高 | `40px` |
| \--nutui-timeselect-date-color | date 字体颜色 | `$title-color2` |
| \--nutui-timeselect-date-active-color | date 激活字体颜色 | `$title-color` |
| \--nutui-timeselect-date-font-size | date 字体大小 | `$font-size-2` |
| \--nutui-timeselect-time-width | time 宽度 | `100px` |
| \--nutui-timeselect-time-height | time 高度 | `50px` |
| \--nutui-timeselect-time-line-height | time 行高 | `50px` |
| \--nutui-timeselect-time-font-size | time 字体大小 | `14px` |
| \--nutui-timeselect-time-margin | time 外边距 | `0 10px 10px 0` |
| \--nutui-timeselect-time-color | time 字体颜色 | `$title-color` |
| \--nutui-timeselect-time-active-color | time 激活字体颜色 | `$primary-color` |
| \--nutui-timeselect-time-background | time 背景 | `$background-color` |
| \--nutui-timeselect-time-active-background | time 激活背景 | `$background-color2` |