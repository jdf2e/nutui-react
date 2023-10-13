# Calendar

## Intro

Calendar, tileable/pop-up display

## Install

```tsx
import { Calendar } from '@nutui/nutui-react';
```

## Demo

### Basic usage

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
            <Cell title="select a single date" description={ date ? `${date} ${dateWeek}` : 'please choose' } onClick={ openSwitch } />
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

### Interval selection

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
            <Cell title="Select date range" description={ date1 ? `${date1[0]}to${date1[1]}` : 'please choose' } onClick={ openSwitch1 } />
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

### select multiple dates

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
            <Cell title="select multiple dates" description={ date3 && date3.length ? `chosen${date3.length}` : 'please choose' } onClick={ openSwitch3 } />
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

### Select Week

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
      <Cell title="Select Week" description={ date3 && date3.length ? `${date3[0]}to${date3[1]}` : 'Select week' } onClick={ openSwitch3 } />
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

### Disable Date

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
      <Cell title="disable date" description={ date3 && date3.length ? `${date3[0]}-${date3[1]}` : 'Select' } onClick={ openSwitch3 } />
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

### Calendar & Datepicker

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
          title="Date Range"
          description={
            <div className="desc-box">
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[0]} ${desc1}`
                  : 'Select start Time'}
              </div>
              <div className="desc1">-</div>
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[1]} ${desc2}`
                  : 'Select end time'}
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
              Start Time: {desc1}
            </div>
            -
            <div
              className={`nut-calendar-date ${dpAbled[1] ? '' : 'disabled'}`}
              onClick={(e) => {
                showDatePicker(e, 2)
              }}
            >
              End Time: {desc2}
            </div>
          </div>
          <DatePicker
            title="Select Time"
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

### quick selection

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
            <Cell title="select date" description={ date3 ? `${date3}` : 'please choose' } onClick={ openSwitch3 } />
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

### Custom Calendar - Custom Time Copy

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
            <Cell title="select date" description={ date3 ? `${date3[0]}to${date3[1]}` : 'please choose' } onClick={ openSwitch3 } />
            
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

### Custom Calendar - Custom Button

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
                    <span className="d_btn" onClick={ goDate } style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } }>to a certain month</span>
                </div>
                <div className="d_div" style={ { margin: '0px 5px' } }>
                    <span className="d_btn" style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } } onClick={ clickBtn }>last seven days</span>
                </div>
                <div className="d_div" style={ { margin: '0px 5px' } }>
                    <span className="d_btn" style={ { background: '#fa3f19', color: '#fff', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', height: '20px' } } onClick={ clickBtn1 }>current month</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <Cell title="select date" description={ date3 ? `${date3[0]}to${date3[1]}` : 'please choose' } onClick={ openSwitch3 } />
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

### Tiled display

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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Is it visible | `boolean` | `false` |
| type | type, 'single' and 'range' | `string` | `single` |
| popup | Whether to display the pop-up status | `boolean` | `true` |
| autoBackfill | Automatic backfill | `boolean` | `false` |
| title | show title | `string` | `日期选择` |
| defaultValue | defaultValue, string for date, and Array for range | `string` \| `Array` | `-` |
| startDate | the start date | `string` | `今天` |
| endDate | the end date | `string` | `距离今天 365 天` |
| showToday | whether to show today mark | `boolean` | `true` |
| startText | start text for range | `ReactNode` | `开始` |
| endText | end text for range | `ReactNode` | `结束` |
| confirmText | confirm text at footer | `ReactNode` | `确认` |
| showTitle | whether to show title for calendar | `boolean` | `true` |
| showSubTitle | whether to show sub title for calendar | `boolean` | `true` |
| scrollAnimation | whether to start scroll animation | `boolean` | `true` |
| firstDayOfWeek | first day of week | `0-6` | `0` |
| disableDate | set disable date | `(date: Day) => boolean` | `-` |
| renderHeaderButtons | custom buttons, under the title but above the subtitle | `() => string` \| `JSX.Element` | `-` |
| renderDay | day info | `(date: Day) => string` \| `JSX.Element` | `-` |
| renderDayTop | something above day | `(date: Day) => string` \| `JSX.Element` | `-` |
| renderDayBottom | something under day | `(date: Day) => string` \| `JSX.Element` | `-` |
| onDayClick | trigger when click the day element | `(data: string) => {}` | `-` |
| onPageChange | page change ,one month makes as a page | `(param: string) => {}` | `-` |
| onConfirm | trigger when click the confirm button, or after the click when it is not popup | `(param: string) => {}` | `-` |
| onClose | trigger close | `() => {}` | `-` |

### Day

| Property | Description |
| --- | --- |
| day | `string` \| `number` |
| type | `string` |

### Ref

Through ref, you can get the Calendar instance and call the instance method.

| Name | Description | Arguments |
| --- | --- | --- |
| scrollToDate | Scroll to the month of the specified date:'2023-06-30' | `string` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | calendar active background color | `$primary-color` |
| \--nutui-calendar-choose-background-color | calendar choose background color | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | calendar choose color | `$primary-color` |
| \--nutui-calendar-choose-disable-background-color | calendar choose but disable background color | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-choose-disable-color | calendar choose but disable color | `$gray3` |
| \--nutui-calendar-disable-color | calendar disable color | `#d1d0d0` |
| \--nutui-calendar-base-font-size | calendar base font size | `$font-size-3` |
| \--nutui-calendar-title-font-size | calendar title font size | `$font-size-4` |
| \--nutui-calendar-title-font-weight | calendar title font weight | `500` |
| \--nutui-calendar-sub-title-font-size | calendar sub title font size | `$font-size-2` |
| \--nutui-calendar-day67-color | calendar day67 color | `$primary-color` |
| \--nutui-calendar-header-height | calendar header height | `24px` |
| \--nutui-calendar-day-width | calendar day width | `14.28%` |
| \--nutui-calendar-day-height | calendar day height | `60px` |
| \--nutui-calendar-day-font-weight | calendar day font weight | `500` |
| \--nutui-calendar-day-active-border-radius | calendar day active border radius | `4px` |