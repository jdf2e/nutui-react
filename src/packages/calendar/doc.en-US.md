# Calendar

### introduce

Calendar, tileable/pop-up display

### Install

```javascript
import { Calendar } from '@nutui/nutui-react';
```

## code demo

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
            <Cell title="select a single date" desc={ date ? `${date} ${dateWeek}` : 'please choose' } onClick={ openSwitch } />
            <Calendar 
                visible={ isVisible }
                defaultValue={ date }
                startDate="2022-01-11"
                endDate="2029-11-30"
                onClose={ closeSwitch }
                onChoose={ setChooseValue }
             />
        </>
    );
};
export default App;

```
:::

### interval selection

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
            <Cell title="Select date range" desc={ date1 ? `${date1[0]}to${date1[1]}` : 'please choose' } onClick={ openSwitch1 } />
            <Calendar 
                visible={ isVisible1 }
                defaultValue={ date1 }
                type="range"
                startDate="2019-12-22"
                endDate="2021-01-08"
                onClose={ closeSwitch1 }
                onChoose={ setChooseValue1 }
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
            <Cell title="select multiple dates" desc={ date3 && date3.length ? `chosen${date3.length}` : 'please choose' } onClick={ openSwitch3 } />
            <Calendar
                visible={isVisible3}
                defaultValue={date3}
                type="multiple"
                startDate="2022-01-01"
                endDate="2022-09-10"
                onClose={closeSwitch3}
                onChoose={setChooseValue3}
            />
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
            <Cell title="select date" desc={ date3 ? `${date3}` : 'please choose' } onClick={ openSwitch3 } />
            <Calendar
                visible={isVisible3}
                defaultValue={date3}
                isAutoBackFill
                startDate=""
                endDate=""
                onClose={closeSwitch3}
                onChoose={setChooseValue3}
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

    const onDay = (date: Day) => {
        return (
            <span>{ date.day <= 9 ? `0${  date.day}` : date.day }</span>
        )
    }

    const onBottomInfo = (date: Day) => {
        return (
            <span className="info" style={{ fontSize: '12px', lineHeight: '14px' }}>{
                date ? (date.day <= 10 ? '' : date.day <= 20 ? 'mid' : '') : ''
            }</span>
        )
    }

    return (
        <>
            <Cell title="select date" desc={ date3 ? `${date3[0]}to${date3[1]}` : 'please choose' } onClick={ openSwitch3 } />
            
            <Calendar
                visible={isVisible3}
                defaultValue={date3}
                type="range"
                startDate="2019-12-22"
                endDate="2021-01-08"
                confirmText="submit"
                startText="enter"
                endText="leave"
                onDay={ onDay }
                onBottomInfo={ onBottomInfo }
                onClose={closeSwitch3}
                onChoose={setChooseValue3}
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
        return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0
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
            calendarRef.current.scrollToDate('2022-04-01');
        }
    };

    const clickBtn = () => {
        const date = [Utils.date2Str(new Date()), Utils.getDay(6)];
        setDate3(date);
    }

    const clickBtn1 = () => {
        const date = new Date();
        const year = date.getFullYear();
        let month: any = date.getMonth() + 1;
        month = month < 10 ? `0${  month}` : `${month  }`;
        const yearMonth = `${year}-${month}`;
        const currMonthDays = Utils.getMonthDays(`${year  }`, `${month  }`);
        setDate3([`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`]);
    }

    const onBtn = () => {
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
            <Cell title="select date" desc={ date3 ? `${date3[0]}to${date3[1]}` : 'please choose' } onClick={ openSwitch3 } />
            <Calendar
                ref={ calendarRef }
                visible={isVisible3}
                defaultValue={date3}
                type="range"
                startDate="2021-12-22"
                endDate="2022-12-31"
                onBtn={ onBtn }
                onClose={closeSwitch3}
                onChoose={setChooseValue3}
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
                    poppable={ false }
                    defaultValue={ date2 }
                    isAutoBackFill
                    onChoose={ setChooseValue2 }
                />
            </div>
        </>
    );
};
export default App;

```
:::

## API

### Props

| Params              | Description                                              | Type            | Default          |
|-------------------|---------------------------------------------------|-----------------|-----------------|
| visible   | Is it visible                                          | Boolean         | false           |
| type              | Type, select 'one' for date and 'range' for interval              | String          | 'one'           |
| poppable          | Whether to display the pop-up window status                                  | Boolean         | true            |
| isAutoBackFill | Automatic backfill                                          | Boolean         | false           |
| title             | show title                                          | String          | ‘Date Pick’      |
| defaultValue     | Default value, select String format for date, select Array format for interval | String 、 Array | null            |
| startDate        | The start date, or null if the start date is not limited              | String          | Today            |
| endDate          | The end date, or null if the end date is not limited               | String          | 365 days from today |
| showToday          | Whether to show today's mark               | Boolean          | true |
| startText         | Scope selection, start message copying               | String          | ’开始‘ |
| endText         | Scope selection, closing message copy               | String          | ‘结束’ |
| confirmText          | Bottom confirm button copy               | String          | ’确认‘ |
| showTitle          | Whether to show the calendar title               | Boolean          | true |
| showSubTitle          | Whether to display the date title              | Boolean          | true |
| toDateAnimation          | Whether to start scroll animation              | Boolean          | true |
| onBtn | Below the custom calendar header, you can add custom actions              |  (() => string \| JSX.Element) 、 undefined      | - |
| onDay  | date information              |  ((date: Day) => string \| JSX.Element) 、 undefined                          | - |
| onTopInfo  | Date Top Information             |  ((date: Day) => string \| JSX.Element) 、 undefined                          | - |
| onBottomInfo  | date bottom information             |  ((date: Day) => string \| JSX.Element) 、 undefined                         | - |

### Events

| Events | Description                         | callback parameter                     |
|--------|------------------------------|------------------------------|
| onChoose | Triggered after selection or by clicking the confirm button | Array of dates (including year, month, day and week) |
| onClose  | Triggered when closed                   | -                            |
| onSelected  | Triggered after click/select              |  Day: Day                          |

### Day
| Params              | Description            |
|-------------------|-----------------|
| day   | string、number           |
| type   | string          |
