---
sidebar_class_name: hasIcon
---

# DatePicker 日期选择器

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。

## 引入

```tsx
import { DatePicker } from '@nutui/nutui-taro'
```

## 示例代码

### 选择日期

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@dongdesign/ui'

const Demo1 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState(defaultDescription)

  const [value, setValue] = useState('2023/01/01')
  const [show2, setShow2] = useState(false)
  const [desc2, setDesc2] = useState('')
  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(' '))
  }
  const change = (options: PickerOption[], values: (string | number)[]) => {
    const v = values.join('/')
    setValue(v)
    setDesc2(options.map((option) => option.text).join(' '))
  }
  return (
    <>
      <Cell
        title="显示中文-非受控"
        description={desc1}
        onClick={() => setShow1(true)}
      />
      <DatePicker
        title="日期选择"
        visible={show1}
        pickerProps={{
          popupProps: { zIndex: 1220 },
        }}
        defaultValue={new Date(`${defaultDescription}`)}
        showChinese
        onCancel={() => setShow1(false)}
        onConfirm={(options, values) => {
          setShow1(false)
          confirm(values, options)
          console.log('onconfirm')
        }}
      />
      <Cell
        title="显示中文-受控"
        description={desc2}
        onClick={() => setShow2(true)}
      />
      <DatePicker
        title="日期选择"
        visible={show2}
        value={new Date(value)}
        showChinese
        onClose={() => setShow2(false)}
        threeDimensional={false}
        onChange={(options, values) => change(options, values)}
      />
    </>
  )
}
export default Demo1
```

### 选择月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型。将 type 设置为 year-month 即可选择年份和月份，设置为 month-day 即可选择月份和日期。

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const defaultValue = new Date()
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(
    `${defaultValue.getMonth() + 1}-${defaultValue.getDate()}`
  )
  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    setDesc(options.map((option) => option.text).join('-'))
  }
  return (
    <>
      <Cell
        title="限制开始结束时间"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="选择日期"
        startDate={new Date(2023, 6, 4)}
        endDate={new Date(2025, 7, 1)}
        defaultValue={new Date()}
        type="month-day"
        visible={show}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo2
```

### 选择年月日时分

将 type 设置为 datetime 即可选择完整的时间。

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`

  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(`${defaultDescription} 11:08`)
  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    const date = values.slice(0, 3).join('-')
    const time = values.slice(3).join(':')
    setDesc(`${date} ${time}`)
  }
  return (
    <>
      <Cell
        title="日期时间选择"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="日期时间选择"
        startDate={startDate}
        endDate={endDate}
        defaultValue={new Date(desc)}
        visible={show}
        type="datetime"
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo3
```

### 选择时分秒

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState('10:10:00')
  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    setDesc(options.map((option) => option.text).join(':'))
  }

  return (
    <>
      <Cell
        title="选择时分秒"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="时间选择"
        type="time"
        defaultValue={new Date(`${defaultDescription} ${desc}`)}
        startDate={startDate}
        endDate={endDate}
        visible={show}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo4
```

### 选择时分

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState('10:10')
  const confirm = (options: PickerOption[], values: (string | number)[]) => {
    setDesc(options.map((option) => option.text).join(':'))
  }

  return (
    <>
      <Cell title="选择时分" description={desc} onClick={() => setShow(true)} />
      <DatePicker
        title="时间选择"
        type="hour-minutes"
        defaultValue={new Date(`${defaultDescription} ${desc}`)}
        startDate={startDate}
        endDate={endDate}
        visible={show}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(options, values)}
      />
    </>
  )
}
export default Demo5
```

### 格式化选项

通过传入 formatter 函数，可以对选项文字进行格式化处理。 showChinese 属性同样是也为选项后面添加文案，但 formatter 函数的优先级高于 showChinese 属性。

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(`${defaultDescription} 10:10`)

  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    const date = options
      .slice(1, 3)
      .map((op) => op.text)
      .join('')
    const time = options
      .slice(3)
      .map((op) => op.value)
      .join(':')
    setDesc(`${options[0].text}年${date} ${time}`)
  }
  const formatter = (type: string, option: PickerOption) => {
    switch (type) {
      case 'year':
        option.text += ''
        break
      case 'month':
        option.text += '月'
        break
      case 'day':
        option.text += '日'
        break
      case 'hour':
        option.text += '时'
        break
      case 'minute':
        option.text += '分'
        break
      default:
        option.text += ''
    }
    return option
  }

  return (
    <>
      <Cell
        title="选择时分秒"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="时间选择"
        type="datetime"
        startDate={new Date(2023, 0, 1)}
        endDate={new Date(2026, 10, 1)}
        visible={show}
        defaultValue={new Date(desc)}
        formatter={formatter}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo6
```

### 分钟数递增步长设置

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState('10:10:00')

  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    setDesc(options.map((option) => option.text).join(':'))
  }
  return (
    <>
      <Cell title="时间选择" description={desc} onClick={() => setShow(true)} />
      <DatePicker
        title="时间选择"
        type="time"
        defaultValue={new Date(`${defaultDescription} ${desc}`)}
        startDate={startDate}
        endDate={endDate}
        visible={show}
        minuteStep={5}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo7
```

### 过滤选项

通过 filter 函数可以对选项数组进行过滤，实现自定义时间间隔。

```tsx
import React, { useState } from 'react'
import { DatePicker, Cell, type PickerOption } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [show, setShow] = useState(false)
  const [desc, setDesc] = useState(`${defaultDescription} 00`)

  const confirm = (values: (string | number)[], options: PickerOption[]) => {
    setDesc(options.map((option) => option.text).join(' '))
  }
  const filter = (type: string, options: PickerOption[]) => {
    if (type === 'hour') {
      return options.filter((option) => Number(option.value) % 6 === 0)
    }
    return options
  }
  const formatter = (type: string, option: PickerOption) => {
    switch (type) {
      case 'year':
        option.text += `年`
        break
      case 'month':
        option.text += `月`
        break
      case 'day':
        option.text += `日`
        break
      case 'hour':
        option.text += `时`
        break
      default:
        option.text += ''
    }
    return option
  }
  return (
    <>
      <Cell
        title="选择时分秒"
        description={desc}
        onClick={() => setShow(true)}
      />
      <DatePicker
        title="时间选择"
        type="datehour"
        startDate={startDate}
        endDate={endDate}
        visible={show}
        defaultValue={new Date(`${defaultDescription}`)}
        formatter={formatter}
        minuteStep={5}
        filter={filter}
        onClose={() => setShow(false)}
        onConfirm={(options, values) => confirm(values, options)}
      />
    </>
  )
}
export default Demo8
```

## DatePicker

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| defaultValue | 初始值 | `Date` | `null` |
| value | 受控 | `Date` | `null` |
| visible | 是否可见 | `boolean` | `false` |
| type | 类时间类型，可选值 date time year-month month-day datehour datetime hour-minutes | `string` | `date` |
| minuteStep | 分钟步进值 | `number` | `1` |
| showChinese | 每列是否展示中文 | `boolean` | `false` |
| title | 设置标题 | `string` | `null` |
| startDate | 开始日期 | `Date` | `十年前` |
| endDate | 结束日期 | `Date` | `十年后` |
| formatter | 选项格式化函数 | `(type: string, option: PickerOption) => PickerOption` | `-` |
| pickerProps | 透传picker属性 | `object` | `-` |
| filter | 选项过滤函数 | `(type: string, option: PickerOption) => PickerOption[]` | `-` |
| threeDimensional | 是否开启3D效果 | `boolean` | `true` |
| onConfirm | 点击确定按钮时触发 | `(options, value) => void` | `-` |
| onCancel | 点击取消按钮时触发 | `() => void` | `-` |
| onClose | 确定和取消时，都触发 | `(options, value) => void` | `-` |
| onChange | 选项改变时触发 | `(options, value, index) => void` | `-` |
