# TimeSelect

## Intro

For delivery time selection

## Install

```javascript
// react
import { TimeSelect } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [visible, SetVisible] = useState(false)
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
  const [visible, SetVisible] = useState(false)
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
  const [visible, SetVisible] = useState(false)
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
  const [visible, SetVisible] = useState(false)
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
| title | title | `ReactNode` | `取件时间` |
| multiple | multiple | `boolean` | `false` |
| defaultValue | default value, uncontrolled | `DateType[]` | - |
| options | data | `DateType[]` | - |
| optionKey | key of options, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` |
| onSelect | trigger when close popup | `(value: DateType[]) => void` |
| onDateChange | trigger when click date | `(date: DateType, value: DateType[]) => void` | - |
| onTimeChange | trigger when click time | `(time: TimeType, value: DateType[]) => void` | - |

### DateType

Default keys as follows. They will be replaced by optionKey.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier, required | `string` | - |
| text | display text, required | `string` | - |
| children | chidren list, required | `TimeType[]` | - |

### TimeType

Default keys as follows. They will be replaced by optionKey.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier, required | `string` | - |
| text | display text, required | `string` | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| \--nutui-timeselect-title-font-size | `$font-size-2` |
| \--nutui-timeselect-title-color | `$title-color` |
| \--nutui-timeselect-title-height | `50px` |
| \--nutui-timeselect-title-line-height | `50px` |
| \--nutui-timeselect-pannel-bg-color | `#f6f7f9` |
| \--nutui-timeselect-timepannel-text-color | `$title-color2` |
| \--nutui-timeselect-timepannel-font-size | `$font-size-2` |
| \--nutui-timeselect-timepannel-cur-bg-color | `$white` |
| \--nutui-timeselect-timepannel-cur-text-color | `#333333` |
| \--nutui-timeselect-timepannel-width | `140px` |
| \--nutui-timeselect-timepannel-height | `40px` |
| \--nutui-timeselect-timepannel-padding | `15px` |
| \--nutui-timeselect-timedetail-padding | `0 5px 50px 13px` |
| \--nutui-timeselect-timedetail-item-width | `100px` |
| \--nutui-timeselect-timedetail-item-height | `50px` |
| \--nutui-timeselect-timedetail-item-line-height | `50px` |
| \--nutui-timeselect-timedetail-item-bg-color | `#f6f7f9` |
| \--nutui-timeselect-timedetail-item-border-radius | `5px` |
| \--nutui-timeselect-timedetail-item-text-color | `#333333` |
| \--nutui-timeselect-timedetail-item-text-font-size | `$font-size-2` |
| \--nutui-timeselect-timedetail-item-cur-bg-color | `rgba($primary-color, 0.15)` |
| \--nutui-timeselect-timedetail-item-cur-border | `$primary-color` |
| \--nutui-timeselect-timedetail-item-cur-text-color | `$primary-color` |
| \--nutui-timeselect-timedetail-time-text-color | `#999` |
| \--nutui-timeselect-timedetail-time-font-size | `$font-size-1` |