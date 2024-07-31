---
sidebar_class_name: hasIcon
---

# Calendar 日历

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

日历，可平铺/弹窗展示

## 引入

```tsx
import { Calendar } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const d = new Date()
  const currDay = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  const [date, setDate] = useState(currDay)
  const [isVisible, setIsVisible] = useState(false)
  const [dateWeek, setDateWeek] = useState('')

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate(param[3])
    setDateWeek(param[4])
  }

  const select = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <Cell
        title="选择单个日期"
        description={date ? `${date} ${dateWeek}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        showTitle={false}
        defaultValue={date}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </>
  )
}
export default Demo1
```

### 区间选择

```tsx
import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [date, setDate] = useState(['2023-01-23', '2023-11-26'])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const select = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <Cell
        title="选择日期区间"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />

      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2022-12-22"
        endDate="2024-01-08"
        onClose={closeSwitch}
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </>
  )
}
export default Demo2
```

### 选择多个日期

```tsx
import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (chooseData: any) => {
    const dateArr = chooseData.map((item: any) => {
      return item[3]
    })
    setDate([...dateArr])
  }

  return (
    <>
      <Cell
        title="选择多个日期"
        description={date && date.length ? `已选择${date.length}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="multiple"
        startDate="2023-01-01"
        endDate="2024-09-10"
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo3
```

### 选择周

```tsx
import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate([...dateArr])
  }
  return (
    <>
      <Cell
        title="选择周"
        description={date && date.length ? `${date[0]}-${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="week"
        startDate="2023-01-01"
        endDate="2024-09-10"
        firstDayOfWeek={1}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo4
```

### 日期不可选

```tsx
import React, { useState } from 'react'
import { Cell, Calendar, CalendarDay } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate([...dateArr])
  }

  const disableDate = (date: CalendarDay) => {
    return date.day === 25 || date.day === 20 || date.day === 22
  }

  return (
    <>
      <Cell
        title="日期不可选"
        description={date && date.length ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />

      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="week"
        startDate="2023-01-01"
        endDate="2024-09-10"
        disableDate={disableDate}
        firstDayOfWeek={1}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo5
```

### 和Datepicker 联动

```tsx
import React, { useRef, useState } from 'react'
import {
  Cell,
  Calendar,
  DatePicker,
  CalendarDay,
} from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const padZero = (num: number | string, targetLength = 2) => {
  let str = `${num}`
  while (str.length < targetLength) {
    str = `0${str}`
  }
  return str
}

const Demo6 = () => {
  const [date, setDate] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const disableDate = (date: CalendarDay) => {
    return date.day === 25 || date.day === 20 || date.day === 22
  }

  const [show, setShow] = useState(false)
  const [dpAbled, setDatePickerAbled] = useState([false, false])
  const [desc1, setDesc1] = useState('10:00:00')
  const [desc2, setDesc2] = useState('20:00:00')
  const desc = useRef(0)

  const setChooseValue = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate([...dateArr])
  }
  const confirm = (values: (string | number)[], options: any[]) => {
    if (desc.current === 1) {
      setDesc1(
        options.map((option) => padZero(parseInt(option.text))).join(':')
      )
    } else {
      setDesc2(
        options.map((option) => padZero(parseInt(option.text))).join(':')
      )
    }
  }

  const showDatePicker = (e: any, index: number) => {
    if (dpAbled[index - 1]) {
      e.stopPropagation()
      setShow(true)
      desc.current = index
    }
  }

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  return (
    <>
      <Cell
        title="日期区间"
        description={
          <View className="desc-box">
            <View className="desc" onClick={openSwitch}>
              {date && date.length ? `${date[0]} ${desc1}` : '请选择起始时间'}
            </View>
            <View className="desc1">-</View>
            <View className="desc" onClick={openSwitch}>
              {date && date.length ? `${date[1]} ${desc2}` : '请选择截止时间'}
            </View>
          </View>
        }
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2023-01-01"
        endDate="2024-09-10"
        disableDate={disableDate}
        firstDayOfWeek={1}
        onDayClick={(date) => {
          let d = [false, false]
          if (date.length > 1) {
            d = [true, true]
          } else if (date.length > 0) {
            d = [true, false]
          }
          setDatePickerAbled(d)
        }}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      >
        <View className="nut-calendar-btns">
          <View
            className={`nut-calendar-date ${dpAbled[0] ? '' : 'disabled'}`}
            onClick={(e) => {
              showDatePicker(e, 1)
            }}
          >
            开始时间：{desc1}
          </View>
          -
          <View
            className={`nut-calendar-date ${dpAbled[1] ? '' : 'disabled'}`}
            onClick={(e) => {
              showDatePicker(e, 2)
            }}
          >
            结束时间：{desc2}
          </View>
        </View>
        <DatePicker
          title="时间选择"
          type="time"
          visible={show}
          showChinese
          onClose={() => setShow(false)}
          onConfirm={(options, values) => confirm(values, options)}
        />
      </Calendar>
    </>
  )
}
export default Demo6
```

### 快捷选择

```tsx
import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [date, setDate] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate(param[3])
  }

  return (
    <>
      <Cell
        title="选择日期"
        description={date ? `${date}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        startDate=""
        endDate=""
        autoBackfill
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo7
```

### 快捷选择-日期区间

```tsx
import React, { useState } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [date, setDate] = useState<string[]>(['2023-03-23', '2023-11-26'])
  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const select = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <Cell
        title="选择日期区间"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="range"
        autoBackfill
        startDate="2022-12-22"
        endDate="2024-01-08"
        onClose={closeSwitch}
        onConfirm={setChooseValue}
        onDayClick={select}
      />
    </>
  )
}
export default Demo8
```

### 自定义日历-自定义时间文案

```tsx
import React, { useState } from 'react'
import { Cell, Calendar, CalendarDay } from '@nutui/nutui-react-taro'

const padZero = (num: number | string, targetLength = 2) => {
  let str = `${num}`
  while (str.length < targetLength) {
    str = `0${str}`
  }
  return str
}

const Demo9 = () => {
  const [date, setDate] = useState<string[]>(['2023-06-12', '2023-06-16'])

  const [isVisible, setIsVisible] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const renderDay = (date: CalendarDay) => {
    return <>{padZero(date.day)}</>
  }

  const renderDayTop = (date: CalendarDay) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '☺'
    }
    return <span className="info">{currDate}</span>
  }

  const renderDayBottom = (date: CalendarDay) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '纪念日'
    }
    return <span className="info">{currDate}</span>
  }

  return (
    <>
      <Cell
        title="自定义时间文案"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2023-2-22"
        endDate="2024-01-08"
        confirmText="submit"
        startText="enter"
        endText="leave"
        renderDay={renderDay}
        renderDayTop={renderDayTop}
        renderDayBottom={renderDayBottom}
        showToday
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo9
```

### 自定义日历-自定义按钮

```tsx
import React, { useState, useRef } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react-taro'

function isLeapYear(y: number): boolean {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}

function getMonthDays(year: string, month: string): number {
  if (/^0/.test(month)) {
    month = month.split('')[1]
  }
  return (
    [
      0,
      31,
      isLeapYear(Number(month)) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ] as number[]
  )[month as any]
}

const padZero = (num: number | string, targetLength = 2) => {
  let str = `${num}`
  while (str.length < targetLength) {
    str = `0${str}`
  }
  return str
}

function date2Str(date: Date, split?: string): string {
  split = split || '-'
  const y = date.getFullYear()
  const m = padZero(date.getMonth() + 1)
  const d = padZero(date.getDate())
  return [y, m, d].join(split)
}

function getDay(i: number): string {
  i = i || 0
  let date = new Date()
  const diff = i * (1000 * 60 * 60 * 24)
  date = new Date(date.getTime() + diff)
  return date2Str(date)
}

const Demo10 = () => {
  const [date, setDate] = useState<string[]>(['2023-07-10', '2023-07-19'])

  const [isVisible, setIsVisible] = useState(false)

  const calendarRef = useRef<any>(null)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const goDate = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollToDate('2023-04-01')
    }
  }

  const clickBtn = () => {
    const date = [date2Str(new Date()), getDay(6)]
    setDate(date)
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(date[0])
    }
  }

  const clickBtn1 = () => {
    const date = new Date()
    const year = date.getFullYear()
    let month: any = date.getMonth() + 1
    month = month < 10 ? `0${month}` : `${month}`
    const yearMonth = `${year}-${month}`
    const currMonthDays = getMonthDays(`${year}`, `${month}`)
    setDate([`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`])
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(`${yearMonth}-01`)
    }
  }

  const renderHeaderButtons = () => {
    return (
      <div className="wrapper">
        <div className="d_div">
          <span className="d_btn" onClick={goDate}>
            去某个月
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn}>
            最近七天
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn1}>
            当月
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Cell
        title="自定义按钮"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        ref={calendarRef}
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2022-12-22"
        endDate="2024-12-31"
        renderHeaderButtons={renderHeaderButtons}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo10
```

### 平铺展示

```tsx
import React, { useState } from 'react'
import { Calendar } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [date, setDate] = useState<string[]>(['2023-06-03', '2023-06-16'])

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const yearMonthChange = (param: string) => {
    console.log(param)
  }

  return (
    <>
      <div
        className="test-calendar-wrapper"
        style={{
          display: 'flex',
          width: '100%',
          height: '613px',
          overflow: 'hidden',
        }}
      >
        <Calendar
          popup={false}
          defaultValue={date}
          type="range"
          startDate="2023-5-23"
          endDate="2023-08-01"
          startText={<div>test</div>}
          endText="leave"
          autoBackfill
          onConfirm={setChooseValue}
          onPageChange={yearMonthChange}
        />
      </div>
    </>
  )
}
export default Demo11
```

## Calendar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| visible | 是否可见 | `boolean` | `false` |
| type | 类型，日期选择'single'，区间选择'range' | `string` | `single` |
| popup | 是否弹窗状态展示 | `boolean` | `true` |
| autoBackfill | 自动回填 | `boolean` | `false` |
| title | 显示标题 | `string` | `日期选择` |
| defaultValue | 默认值，日期选择 string 格式，区间选择 Array 格式 | `string` \| `Array` | `-` |
| startDate | 开始日期， 如果不限制开始日期传 null | `string` | `今天` |
| endDate | 结束日期，如果不限制结束日期传 null | `string` | `距离今天 365 天` |
| showToday | 是否展示今天标记 | `boolean` | `true` |
| startText | 范围选择，开始信息文案 | `ReactNode` | `开始` |
| endText | 范围选择，结束信息文案 | `ReactNode` | `结束` |
| confirmText | 底部确认按钮文案 | `ReactNode` | `确认` |
| showTitle | 是否在展示日历标题 | `boolean` | `true` |
| showSubTitle | 是否展示日期标题 | `boolean` | `true` |
| scrollAnimation | 是否启动滚动动画 | `boolean` | `true` |
| firstDayOfWeek | 设置周起始日 | `0-6` | `0` |
| disableDate | 设置不可选日期 | `(date: CalendarDay) => boolean` | `-` |
| renderHeaderButtons | 自定义日历标题下部，可用以添加自定义操作 | `() => string` \| `JSX.Element` | `-` |
| renderDay | 日期信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayTop | 日期顶部信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayBottom | 日期底部信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| onDayClick | 点击/选择后触发 | `(data: string) => {}` | `-` |
| onPageChange | 年月子标题到达顶部时触发 | `(param: string) => {}` | `-` |
| onConfirm | 选择之后或是点击确认按钮触发 | `(param: string) => {}` | `-` |
| onClose | 关闭时触发 | `() => {}` | `-` |

### CalendarDay

| 属性 | 类型 |
| :--- | :--- |
| day | `string` \| `number` |
| type | `string` |

### Ref

通过 ref 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| scrollToDate | 滚动到指定日期所在月,如：'2023-06-30' | `string` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-calendar-active-background-color | 日历选中状态时的元素背景色 | `$color-primary` |
| \--nutui-calendar-choose-background-color | 日历选中时区间内元素的背景色，区别区间两头元素的背景色 | `rgba(#FF0F23, 0.09)` |
| \--nutui-calendar-choose-color | 日历选中元素的字色 | `$color-primary` |
| \--nutui-calendar-choose-disable-background-color | 日历不可选元素的选中时的背景色 | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-disable-color | 日历不可选元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日历字号 | `$font-size-large` |
| \--nutui-calendar-title-font-size | 日历标题字号 | `$font-size-xl` |
| \--nutui-calendar-title-font-weight | 日历标题字重 | `500` |
| \--nutui-calendar-sub-title-font-size | 日历副标题字号 | `$font-size-base` |
| \--nutui-calendar-day67-color | 日历周末字色 | `$color-primary` |
| \--nutui-calendar-header-height | 日历自定义部分高度 | `24px` |
| \--nutui-calendar-day-width | 日历元素宽度 | `14.28%` |
| \--nutui-calendar-day-height | 日历元素高度 | `60px` |
| \--nutui-calendar-day-font-weight | 日历元素字重 | `500` |
| \--nutui-calendar-day-active-border-radius | 日历选中元素的圆角 | `4px` |
