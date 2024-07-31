---
sidebar_class_name: hasIcon
---

# CalendarCard 日历

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

日历

## 引入

```tsx
import { CalendarCard } from '@dongdesign/ui'
```

## 示例代码

### 选择单个日期

```tsx
import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

// const date = null;
const date = new Date('2023-01-01')

const Demo1 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return <CalendarCard defaultValue={date} onChange={onChange} />
}
export default Demo1
```

### 选择多个日期

```tsx
import React, { useState } from 'react'
import {
  Space,
  Tag,
  CalendarCard,
  type CalendarCardValue,
} from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [val, setVal] = useState(() => {
    // return [];
    return [new Date('2023-01-01'), new Date('2023-01-03')]
  })
  const onChange = (val: CalendarCardValue) => {
    setVal(val as Date[])
    console.log(val)
  }
  return (
    <>
      <Space wrap>
        {val.map((d) => {
          return (
            <Tag key={d.getTime()} type="info">
              {`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`}
            </Tag>
          )
        })}
      </Space>
      <CalendarCard type="multiple" value={val} onChange={onChange} />
    </>
  )
}
export default Demo2
```

### 选择范围

```tsx
import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return <CalendarCard type="range" onChange={onChange} />
}
export default Demo3
```

### 选择周

```tsx
import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return <CalendarCard type="week" onChange={onChange} />
}
export default Demo4
```

### 受控模式

```tsx
import React, { useState } from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [date, setDate] = useState(() => new Date('2023-01-01'))
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
    setDate(val as Date)
  }
  return <CalendarCard value={date} onChange={onChange} />
}
export default Demo5
```

### 自定义日期信息

```tsx
import React from 'react'
import { CalendarCard, type CalendarCardDay } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const renderDayTop = (day: CalendarCardDay) => {
    return day.date === 8 ? '☺' : ''
  }
  const renderDay = (day: CalendarCardDay) => {
    return day.date <= 9 ? `0${day.date}` : day.date
  }
  const renderDayBottom = (day: CalendarCardDay) => {
    return day.date === 8 ? '节日' : ''
  }
  return (
    <CalendarCard
      renderDayTop={renderDayTop}
      renderDay={renderDay}
      renderDayBottom={renderDayBottom}
    />
  )
}
export default Demo6
```

### 自定义周起始日

```tsx
import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return <CalendarCard firstDayOfWeek={1} onChange={onChange} />
}
export default Demo7
```

### 自定义选择范围

```tsx
import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return (
    <CalendarCard
      startDate={new Date('2023-08-01')}
      endDate={new Date('2025-11-11')}
      onChange={onChange}
    />
  )
}
export default Demo8
```

### 自定义禁止选择日期

```tsx
import React from 'react'
import { CalendarCard, type CalendarCardValue } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const onChange = (val: CalendarCardValue) => {
    console.log(val)
  }
  return (
    <CalendarCard
      disableDay={(day) => {
        const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
        return d === 1 || d === 3
      }}
      onChange={onChange}
    />
  )
}
export default Demo9
```

### 与 Popup 组合使用

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import {
  Cell,
  Popup,
  Button,
  CalendarCard,
  CalendarCardValue,
} from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState<Date | null>(null)
  return (
    <>
      <Cell
        title="点击选择日期"
        description={String(date)}
        onClick={() => setVisible(true)}
      />
      <Popup
        title="选择日期"
        visible={visible}
        position="bottom"
        closeable
        onClose={() => setVisible(false)}
      >
        <CalendarCard
          value={date}
          onChange={(d: CalendarCardValue) => setDate(d as Date)}
        />
        <View style={{ padding: '10px' }}>
          <Button block type="danger" onClick={() => setVisible(false)}>
            确定
          </Button>
        </View>
      </Popup>
    </>
  )
}
export default Demo10
```

### 使用 Ref 上的方法

```tsx
import React, { useRef } from 'react'
import {
  Space,
  Button,
  CalendarCard,
  type CalendarCardRef,
} from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const CalendarCardRef = useRef<CalendarCardRef>(null)
  return (
    <>
      <Space>
        <Button onClick={() => CalendarCardRef.current?.jump(1)}>+ 1</Button>
        <Button onClick={() => CalendarCardRef.current?.jump(12)}>+ 12</Button>
        <Button onClick={() => CalendarCardRef.current?.jump(-12)}>- 12</Button>
        <Button onClick={() => CalendarCardRef.current?.jumpTo(2023, 1)}>
          2023 01
        </Button>
      </Space>
      <CalendarCard ref={CalendarCardRef} />
    </>
  )
}
export default Demo11
```

## CalendarCard

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 类型，单个日期 `single`，多个日期 `multiple`，日期范围 `range`，周选择 `week` | `string` | `single` |
| defaultValue | 默认值，单个日期 Date 格式，多个日期/范围选择 Date[] 格式 | `Date \| Date[]` | `-` |
| startDate | 限制范围开始日期 | `Date` | `-` |
| endDate | 限制范围结束日期 | `Date` | `-` |
| firstDayOfWeek | 设置周起始日，0 为周日，1 为周一 | `0-6` | `1` |
| disableDay | 设置不可选日期 | `(day: CalendarCardDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayTop | 日期顶部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayBottom | 日期底部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| value | 受控模式下的值，与 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onDayClick | 点击后触发 | `(day: CalendarCardDay) => void` | `-` |
| onPageChange | 切换月份时触发 | `(val: { year, month }) => void` | `-` |
| onChange | 选择值发生变化时触发 | `(val: Date \| Date[]) => void` | `-` |

### CalendarCardDay

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| year | `number` | 年 |
| month | `number` | 月 |
| date | `number` | 日 |
| type | `prev \| current \| next` | 可选项。表示上一个月、当月、下一个月 |

### Ref

通过 ref 可以获取到 CalendarCard 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| jump | 在当前基础上前进或后退月数，正数向前，负数向后 | `step: number` |
| jumpTo | 跳转至特定的年月 | `year: number, month: number` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-calendar-active-background-color | 选中状态时的元素背景色 | `$color-primary` |
| \--nutui-calendar-choose-background-color | 选中时区间内元素的背景色，区别区间两头元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-disable-color | 不可选元素的字色 | `#bfbfbf` |
| \--nutui-calendar-base-font-size | 字号 | `$font-size-large` |
| \--nutui-calendar-day-width | 日历元素宽度 | `14.28%` |
| \--nutui-calendar-choose-color | 日历选中元素的字色 | `$color-primary` |
| \--nutui-calendar-day-active-border-radius | 日历选中元素的圆角 | `4px` |
