# TimeSelect

## Intro

For delivery time selection

## Install

```tsx
import { TimeSelect } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: '20230520',
      text: 'May 20 (Today)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
        { value: '11', text: '11:00-12:00' },
      ],
    },
    {
      value: '20230521',
      text: 'May 21 (Wednesday)',
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
    console.log(`${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="Pickup Time" onClick={handleClick} />
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

### Custom optionKey

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
      text1: 'May 20 (Today)',
      children1: [
        { value1: '09', text1: '09:00-10:00' },
        { value1: '10', text1: '10:00-11:00' },
        { value1: '11', text1: '11:00-12:00' },
      ],
    },
    {
      value1: '20230521',
      text1: 'May 21 (Wednesday)',
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
    console.log(`${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="Pickup Time" onClick={handleClick} />
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

### Multiple Mode

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: '20230520',
      text: 'May 20 (Today)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
        { value: '11', text: '11:00-12:00' },
      ],
    },
    {
      value: '20230521',
      text: 'May 21 (Wednesday)',
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
    console.log(`${JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="Pickup Time" onClick={handleClick} />
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

### Custom Usage

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    {
      value: 'zhejiang',
      text: 'ZheJiang',
      children: [
        { value: 'hangzhou', text: 'HangZhou' },
        { value: 'ningbo', text: 'NingBo' },
      ],
    },
    {
      value: 'jiangsu',
      text: 'JiangSu',
      children: [
        { value: 'nanjing', text: 'NanJing' },
        { value: 'suzhou', text: 'SuZhou' },
        { value: 'yangzhou', text: 'YangZhou' },
      ],
    },
  ]
  const handleClick = () => {
    setVisible(true)
  }
  const handleSelect = (value) => {
    setVisible(false)
    console.log(`{JSON.stringify(value)}`)
  }
  const handleDateChange = (date, value) => {
    console.log(date, value)
  }
  const handleTimeChange = (time, value) => {
    console.log(time, value)
  }
  return (
    <>
      <Cell title="Select your city" onClick={handleClick} />
      <TimeSelect
        visible={visible}
        options={options}
        style={{
          height: '30%',
        }}
        title="Select your city"
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | whether to display popup | `boolean` | `false` |
| title | title | `ReactNode` | `Pickup Time` |
| multiple | multiple | `boolean` | `false` |
| defaultValue | default value, uncontrolled | `DateType[]` | `-` |
| options | data | `DateType[]` | `-` |
| optionKey | key of options, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` | `-` |
| onSelect | trigger when close popup | `(value: DateType[]) => void` | `-` |
| onDateChange | trigger when click date | `(date: DateType, value: DateType[]) => void` | `-` |
| onTimeChange | trigger when click time | `(time: TimeType, value: DateType[]) => void` | `-` |

### DateType

Default keys as follows. They will be replaced by optionKey.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier, required | `string` | `-` |
| text | display text, required | `string` | `-` |
| children | chidren list, required | `TimeType[]` | `-` |

### TimeType

Default keys as follows. They will be replaced by optionKey.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier, required | `string` | `-` |
| text | display text, required | `string` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-timeselect-title-height | title height | `50px` |
| \--nutui-timeselect-title-line-height | title lineHeight | `50px` |
| \--nutui-timeselect-title-color | title color | `$title-color` |
| \--nutui-timeselect-title-font-size | title fontSize | `$font-size-2` |
| \--nutui-timeselect-title-background | title background | `$background-color3` |
| \--nutui-timeselect-date-width | date width | `140px` |
| \--nutui-timeselect-date-height | date height | `40px` |
| \--nutui-timeselect-date-line-height | date lineHeight | `40px` |
| \--nutui-timeselect-date-color | date color | `$title-color2` |
| \--nutui-timeselect-date-active-color | date active color | `$title-color` |
| \--nutui-timeselect-date-font-size | date fontSize | `$font-size-2` |
| \--nutui-timeselect-time-width | time width | `100px` |
| \--nutui-timeselect-time-height | time height | `50px` |
| \--nutui-timeselect-time-line-height | time lineHeight | `50px` |
| \--nutui-timeselect-time-font-size | time fontSize | `14px` |
| \--nutui-timeselect-time-margin | time margin | `0 10px 10px 0` |
| \--nutui-timeselect-time-color | time color | `$title-color` |
| \--nutui-timeselect-time-active-color | time active color | `$primary-color` |
| \--nutui-timeselect-time-background | time background | `$background-color` |
| \--nutui-timeselect-time-active-background | time active background | `$background-color2` |