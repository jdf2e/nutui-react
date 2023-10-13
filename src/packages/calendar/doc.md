# Calendar 日历

## 介绍

日历，可平铺/弹窗展示

## 安装

```tsx
import { Calendar } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, { useState } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [date, setDate] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [dateWeek, setDateWeek] = useState('');

  const openSwitch = () => {
    setIsVisible(true);
  }

  const closeSwitch = () => {
    setIsVisible(false);
  }

  const setChooseValue = (param: string) => {
    setDate(param[3]);
    setDateWeek(param[4]);
  }
  return (
    <>
      <Cell title="选择单个日期" description={ date ? `${date} ${dateWeek}` : '请选择' } onClick={ openSwitch } />
      <Calendar 
        visible={ isVisible }
        defaultValue={ date }
        startDate="2022-01-11"
        endDate="2029-11-30"
        onClose={ closeSwitch }
        onConfirm={ setChooseValue }
      />
    </>
  );
};
export default App;

```

:::

### 区间选择

:::demo

```tsx
import  React, { useState } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [date1, setDate1] = useState(['2019-12-23', '2019-12-26'])
  const [isVisible1, setIsVisible1] = useState(false)

  const openSwitch1 = () => {
    setIsVisible1(true)
  }

  const closeSwitch1 = () => {
    setIsVisible1(false)
  }

  const setChooseValue1 = (param: string) => {
    setDate1([...[param[0][3], param[1][3]]])
  }

  return (
    <>
      <Cell title="选择日期区间" description={ date1 ? `${date1[0]}至${date1[1]}` : '请选择' } onClick={ openSwitch1 } />
      <Calendar 
        visible={ isVisible1 }
        defaultValue={ date1 }
        type="range"
        startDate="2019-12-22"
        endDate="2021-01-08"
        onClose={ closeSwitch1 }
        onConfirm={ setChooseValue1 }
      />
    </>
  );
};
export default App;

```

:::

### 选择多个日期

:::demo

```tsx
import  React, { useState } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [date3, setDate3] = useState('')
  const [isVisible3, setIsVisible3] = useState(false)

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue3 = (param: string) => {
    setDate3(param[3])
  }

  return (
    <>
      <Cell title="选择多个日期" description={ date3 && date3.length ? `已选择${date3.length}` : '请选择' } onClick={ openSwitch3 } />
      <Calendar
        visible={isVisible3}
        defaultValue={date3}
        type="multiple"
        startDate="2022-01-01"
        endDate="2022-09-10"
        onClose={closeSwitch3}
        onConfirm={setChooseValue3}
      />
    </>
  );
};
export default App;

```

:::

### 选择周

:::demo

```tsx
import  React, { useState } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [date3, setDate3] = useState('')
  const [isVisible3, setIsVisible3] = useState(false)

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue3 = (param: string) => {
    const dateArr = [...[param[0][3], param[1][3]]]
    setDate3([...dateArr])
  }

  return (
    <>
      <Cell title="选择周" description={ date3 && date3.length ? `${date3[0]}$-${date3[1]}` : '请选择' } onClick={ openSwitch3 } />
      <Calendar
        visible={isVisible3}
        defaultValue={date3}
        type="week"
        startDate="2022-01-01"
        endDate="2022-09-10"
        onClose={closeSwitch3}
        onConfirm={setChooseValue3}
      />
    </>
  );
};
export default App;

```

:::

### 日期不可选

:::demo

```tsx
import  React, { useState } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [date3, setDate3] = useState('')
  const [isVisible3, setIsVisible3] = useState(false)

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue3 = (param: string) => {
    const dateArr = [...[param[0][3], param[1][3]]]
    setDate3([...dateArr])
  }

  const disableDate = (date: Day) => {
    return date.day === 25
  }

  return (
    <>
      <Cell title="选择周" description={ date3 && date3.length ? `${date3[0]}$-${date3[1]}` : '请选择' } onClick={ openSwitch3 } />
      <Calendar
        visible={isVisible3}
        defaultValue={date3}
        type="week"
        startDate="2023-01-01"
        endDate="2024-09-10"
        disableDate={disableDate}
        onClose={closeSwitch3}
        onConfirm={setChooseValue3}
      />
    </>
  );
};
export default App;

```

:::

### 和Datepicker 联动

:::demo

```tsx
import  React, {useRef, useState } from "react";
import { Cell, Calendar, DatePicker } from '@nutui/nutui-react';

const App = () => {
  const openSwitch42 = () => {
    setIsVisible42(true)
  }
  const [date42, setDate42] = useState<string[]>([])
  const [isVisible42, setIsVisible42] = useState(false)
  const disableDate = (date: Day) => {
    return date.day === 25 || date.day === 20 || date.day === 22
  }
  const [show1, setShow1] = useState(false)
  const [dpAbled, setDatePickerAbled] = useState([false, false])
  const [desc1, setDesc1] = useState('10:00:00')
  const [desc2, setDesc2] = useState('20:00:00')
  const desc = useRef(0)
  const padZero = (d: number | string) => {
    return d <= 9 ? `0${d}` : d
  }
  const setChooseValue42 = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate42([...dateArr])
  } 
  const confirm1 = (values: (string | number)[], options: any[]) => {
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
      setShow1(true)
      desc.current = index
    }
  }

  return (
    <>
      <Cell
          title="日期区间"
          description={
            <div className="desc-box">
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[0]} ${desc1}`
                  : '请选择起始时间'}
              </div>
              <div className="desc1">-</div>
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[1]} ${desc2}`
                  : '请选择截止时间'}
              </div>
            </div>
          }
        />
        <Calendar
          visible={isVisible42}
          defaultValue={date42}
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
          onClose={closeSwitch42}
          onConfirm={setChooseValue42}
        >
          <div className="nut-calendar-btns">
            <div
              className={`nut-calendar-date ${dpAbled[0] ? '' : 'disabled'}`}
              onClick={(e) => {
                showDatePicker(e, 1)
              }}
            >
              开始时间：{desc1}
            </div>
            -
            <div
              className={`nut-calendar-date ${dpAbled[1] ? '' : 'disabled'}`}
              onClick={(e) => {
                showDatePicker(e, 2)
              }}
            >
              结束时间：{desc2}
            </div>
          </div>
          <DatePicker
            title="时间选择"
            type="time"
            visible={show1}
            showChinese
            onClose={() => setShow1(false)}
            onConfirm={(options, values) => confirm1(values, options)}
          />
        </Calendar>
    </>
  );
};
export default App;

```

:::

### 快捷选择

:::demo

```tsx
import  React, { useState } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [date3, setDate3] = useState('')
  const [isVisible3, setIsVisible3] = useState(false)

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue3 = (param: string) => {
    setDate3(param[3])
  }

  return (
    <>
      <Cell title="选择日期" description={ date3 ? `${date3}` : '请选择' } onClick={ openSwitch3 } />
      <Calendar
        visible={isVisible3}
        defaultValue={date3}
        autoBackfill
        startDate=""
        endDate=""
        onClose={closeSwitch3}
        onConfirm={setChooseValue3}
      />
    </>
  );
};
export default App;

```

:::

### 自定义日历-自定义时间文案

:::demo

```tsx
import  React, { useState } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

interface Day {
  day: string | number;
  type: string;
}

const App = () => {
  const [date3, setDate3] = useState('')
  const [isVisible3, setIsVisible3] = useState(false)

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue3 = (param: string) => {
    setDate3([...[param[0][3], param[1][3]]])
  }

  const renderDay = (date: Day) => {
    return (
      <span>{ date.day <= 9 ? `0${  date.day}` : date.day }</span>
    )
  }

  const renderDayBottom = (date: Day) => {
    return (
      <span className="info" style={{ fontSize: '12px', lineHeight: '14px' }}>{
          date ? (date.day <= 10 ? '' : date.day <= 20 ? 'mid' : '') : ''
      }</span>
    )
  }

  return (
    <>
      <Cell title="选择日期" description={ date3 ? `${date3[0]}至${date3[1]}` : '请选择' } onClick={ openSwitch3 } />
      <Calendar
        visible={isVisible3}
        defaultValue={date3}
        type="range"
        startDate="2019-12-22"
        endDate="2021-01-08"
        confirmText="submit"
        startText="enter"
        endText="leave"
        renderDay={ renderDay }
        renderDayBottom={ renderDayBottom }
        onClose={closeSwitch3}
        onConfirm={setChooseValue3}
      />
    </>
  );
};
export default App;

```

:::

### 自定义日历-自定义按钮

:::demo

```tsx
import  React, { useState, useRef } from "react";
import { Cell, Calendar } from '@nutui/nutui-react';

const Utils = {
  date2Str(date: Date, split?: string): string {
    split = split || '-'
    const y = date.getFullYear()
    const m = this.getNumTwoBit(date.getMonth() + 1)
    const d = this.getNumTwoBit(date.getDate())
    return [y, m, d].join(split)
  },
  getDay(i: number): string {
    i = i || 0
    let date = new Date()
    const diff = i * (1000 * 60 * 60 * 24)
    date = new Date(date.getTime() + diff)
    return this.date2Str(date)
  },
  getNumTwoBit(n: number): string {
    n = Number(n)
    return (n > 9 ? '' : '0') + n
  },
  date2Str(date: Date, split?: string): string {
    split = split || '-'
    const y = date.getFullYear()
    const m = this.getNumTwoBit(date.getMonth() + 1)
    const d = this.getNumTwoBit(date.getDate())
    return [y, m, d].join(split)
  },
  getMonthDays(year: string, month: string): number {
    if (/^0/.test(month)) {
      month = month.split('')[1]
    }
    return (
      [
          0,
          31,
          this.isLeapYear(Number(year)) ? 29 : 28,
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
  },
  isLeapYear(y: number): boolean {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
  },
};

const App = () => {
  const [date3, setDate3] = useState('')
  const [isVisible3, setIsVisible3] = useState(false)
  const calendarRef = useRef<any>(null);

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue3 = (param: string) => {
    setDate3([...[param[0][3], param[1][3]]])
  }

  const goDate = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollToDate('2023-04-01');
    }
  };

  const clickBtn = () => {
    const date = [Utils.date2Str(new Date()), Utils.getDay(6)];
    setDate3(date);
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(date[0])
    }
  }

  const clickBtn1 = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    month = month < 10 ? `0${  month}` : `${month  }`;
    const yearMonth = `${year}-${month}`;
    const currMonthDays = Utils.getMonthDays(`${year  }`, `${month  }`);
    setDate3([`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`]);
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(`${yearMonth}-01`)
    }
  }

  const renderHeaderButtons = () => {
    return (
      <div className="wrapper" style={ { display: 'flex', padding: '0 40px' } }>
        <div className="d_div" style={ { margin: '0px 5px' } }>
          <span className="d_btn" onClick={ goDate } style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } }>去某个月</span>
        </div>
        <div className="d_div" style={ { margin: '0px 5px' } }>
          <span className="d_btn" style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } } onClick={ clickBtn }>最近七天</span>
        </div>
        <div className="d_div" style={ { margin: '0px 5px' } }>
          <span className="d_btn" style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } } onClick={ clickBtn1 }>当月</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Cell title="选择日期" description={ date3 ? `${date3[0]}至${date3[1]}` : '请选择' } onClick={ openSwitch3 } />
      <Calendar
        ref={ calendarRef }
        visible={isVisible3}
        defaultValue={date3}
        type="range"
        startDate="2021-12-22"
        endDate="2022-12-31"
        renderHeaderButtons={ renderHeaderButtons }
        onClose={closeSwitch3}
        onConfirm={setChooseValue3}
      />
    </>
  );
};
export default App;

```

:::

### 平铺展示

:::demo

```tsx
import  React, { useState } from "react";
import { Calendar } from '@nutui/nutui-react';

const App = () => {
  const [date2, setDate2] = useState('2020-07-08')
  const setChooseValue2 = (param: string) => {
    setDate2(param[3])
  }

  return (
    <>
      <div className="test-calendar-wrapper" style={ { display: 'flex', width: '100%', height: '613px', overflow: 'hidden' } }>
        <Calendar
          popup={ false }
          defaultValue={ date2 }
          autoBackfill
          onConfirm={ setChooseValue2 }
        />
      </div>
    </>
  );
};
export default App;

```

:::

## Calendar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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
| disableDate | 设置不可选日期 | `(date: Day) => boolean` | `-` |
| renderHeaderButtons | 自定义日历标题下部，可用以添加自定义操作 | `() => string` \| `JSX.Element` | `-` |
| renderDay | 日期信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| renderDayTop | 日期顶部信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| renderDayBottom | 日期底部信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| onDayClick | 点击/选择后触发 | `(data: string) => {}` | `-` |
| onPageChange | 年月子标题到达顶部时触发 | `(param: string) => {}` | `-` |
| onConfirm | 选择之后或是点击确认按钮触发 | `(param: string) => {}` | `-` |
| onClose | 关闭时触发 | `() => {}` | `-` |

### Day

| 属性 | 类型 |
| --- | --- |
| day | `string` \| `number` |
| type | `string` |

### Ref

通过 ref 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollToDate | 滚动到指定日期所在月,如：'2023-06-30' | `string` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 日历选中状态时的元素背景色 | `$primary-color` |
| \--nutui-calendar-choose-background-color | 日历选中时区间内元素的背景色，区别区间两头元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | 日历选中元素的字色 | `$primary-color` |
| \--nutui-calendar-choose-disable-background-color | 日历不可选元素的选中时的背景色 | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-choose-disable-color | 日历不可选元素的选中时的字色 | `$gray3` |
| \--nutui-calendar-disable-color | 日历不可选元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日历字号 | `$font-size-3` |
| \--nutui-calendar-title-font-size | 日历标题字号 | `$font-size-4` |
| \--nutui-calendar-title-font-weight | 日历标题字重 | `500` |
| \--nutui-calendar-sub-title-font-size | 日历副标题字号 | `$font-size-2` |
| \--nutui-calendar-day67-color | 日历周末字色 | `$primary-color` |
| \--nutui-calendar-header-height | 日历自定义部分高度 | `24px` |
| \--nutui-calendar-day-width | 日历元素宽度 | `14.28%` |
| \--nutui-calendar-day-height | 日历元素高度 | `60px` |
| \--nutui-calendar-day-font-weight | 日历元素字重 | `500` |
| \--nutui-calendar-day-active-border-radius | 日历选中元素的圆角 | `4px` |