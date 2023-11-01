# Calendar 日歴

## 介紹

日歴，可平鋪/彈窗展示

## 安裝

```tsx
import { Calendar } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

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
      <Cell title="選擇單個日期" description={ date ? `${date} ${dateWeek}` : '請選擇' } onClick={ openSwitch } />
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

### 區間選擇

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
      <Cell title="選擇日期區間" description={ date1 ? `${date1[0]}至${date1[1]}` : '請選擇' } onClick={ openSwitch1 } />
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

### 選擇多個日期

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
      <Cell title="選擇多個日期" description={ date3 && date3.length ? `已選擇${date3.length}` : '請選擇' } onClick={ openSwitch3 } />
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

### 選擇周

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
      <Cell title="選擇周" description={ date3 && date3.length ? `${date3[0]}$-${date3[1]}` : '請選擇' } onClick={ openSwitch3 } />
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

### 日期不可選

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
      <Cell title="選擇周" description={ date3 && date3.length ? `${date3[0]}$-${date3[1]}` : '請選擇' } onClick={ openSwitch3 } />
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

### 和Datepicker 聯動

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
          title="日期區間"
          description={
            <div className="desc-box">
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[0]} ${desc1}`
                  : '請選擇起始時間'}
              </div>
              <div className="desc1">-</div>
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[1]} ${desc2}`
                  : '請選擇截止時間'}
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
              開始時間：{desc1}
            </div>
            -
            <div
              className={`nut-calendar-date ${dpAbled[1] ? '' : 'disabled'}`}
              onClick={(e) => {
                showDatePicker(e, 2)
              }}
            >
              結束時間：{desc2}
            </div>
          </div>
          <DatePicker
            title="時間選擇"
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

### 快捷選擇

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
      <Cell title="選擇日期" description={ date3 ? `${date3}` : '請選擇' } onClick={ openSwitch3 } />
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

### 自定義日歴-自定義時間文案

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
      <Cell title="選擇日期" description={ date3 ? `${date3[0]}至${date3[1]}` : '請選擇' } onClick={ openSwitch3 } />
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

### 自定義日歴-自定義按鈕

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
          <span className="d_btn" onClick={ goDate } style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } }>去某個月</span>
        </div>
        <div className="d_div" style={ { margin: '0px 5px' } }>
          <span className="d_btn" style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } } onClick={ clickBtn }>最近七天</span>
        </div>
        <div className="d_div" style={ { margin: '0px 5px' } }>
          <span className="d_btn" style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } } onClick={ clickBtn1 }>當月</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Cell title="選擇日期" description={ date3 ? `${date3[0]}至${date3[1]}` : '請選擇' } onClick={ openSwitch3 } />
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

### 平鋪展示

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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否可見 | `boolean` | `false` |
| type | 類型，日期選擇'single'，區間選擇'range' | `string` | `single` |
| popup | 是否彈窗狀態展示 | `boolean` | `true` |
| autoBackfill | 自動回填 | `boolean` | `false` |
| title | 顯示標題 | `string` | `日期選擇` |
| defaultValue | 默認值，日期選擇 string 格式，區間選擇 Array 格式 | `string` \| `Array` | `-` |
| startDate | 開始日期， 如果不限制開始日期傳 null | `string` | `今天` |
| endDate | 結束日期，如果不限制結束日期傳 null | `string` | `距離今天 365 天` |
| showToday | 是否展示今天標記 | `boolean` | `true` |
| startText | 範圍選擇，開始信息文案 | `ReactNode` | `開始` |
| endText | 範圍選擇，結束信息文案 | `ReactNode` | `結束` |
| confirmText | 底部確認按鈕文案 | `ReactNode` | `確認` |
| showTitle | 是否在展示日歴標題 | `boolean` | `true` |
| showSubTitle | 是否展示日期標題 | `boolean` | `true` |
| scrollAnimation | 是否啟動滾動動畫 | `boolean` | `true` |
| firstDayOfWeek | 設置周起始日 | `0-6` | `0` |
| disableDate | 設置不可選日期 | `(date: Day) => boolean` | `-` |
| renderHeaderButtons | 自定義日歴標題下部，可用以添加自定義操作 | `() => string` \| `JSX.Element` | `-` |
| renderDay | 日期信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| renderDayTop | 日期頂部信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| renderDayBottom | 日期底部信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| onDayClick | 點擊/選擇後觸發 | `(data: string) => {}` | `-` |
| onPageChange | 年月子標題到達頂部時觸發 | `(param: string) => {}` | `-` |
| onConfirm | 選擇之後或是點擊確認按鈕觸發 | `(param: string) => {}` | `-` |
| onClose | 關閉時觸發 | `() => {}` | `-` |

### Day

| 屬性 | 類型 |
| --- | --- |
| day | `string` \| `number` |
| type | `string` |

### Ref

通過 ref 可以獲取到 Calendar 實例併調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| scrollToDate | 滾動到指定日期所在月,如：'2023-06-30' | `string` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 日歴選中狀態時的元素背景色 | `$primary-color` |
| \--nutui-calendar-choose-background-color | 日歴選中時區間內元素的背景色，區別區間兩頭元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | 日歴選中元素的字色 | `$primary-color` |
| \--nutui-calendar-choose-disable-background-color | 日歴不可選元素的選中時的背景色 | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-choose-disable-color | 日歴不可選元素的選中時的字色 | `$gray3` |
| \--nutui-calendar-disable-color | 日歴不可選元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日歴字號 | `$font-size-3` |
| \--nutui-calendar-title-font-size | 日歴標題字號 | `$font-size-4` |
| \--nutui-calendar-title-font-weight | 日歴標題字重 | `500` |
| \--nutui-calendar-sub-title-font-size | 日歴副標題字號 | `$font-size-2` |
| \--nutui-calendar-day67-color | 日歴周末字色 | `$primary-color` |
| \--nutui-calendar-header-height | 日歴自定義部分高度 | `24px` |
| \--nutui-calendar-day-width | 日歴元素寬度 | `14.28%` |
| \--nutui-calendar-day-height | 日歴元素高度 | `60px` |
| \--nutui-calendar-day-font-weight | 日歴元素字重 | `500` |
| \--nutui-calendar-day-active-border-radius | 日歴選中元素的圓角 | `4px` |