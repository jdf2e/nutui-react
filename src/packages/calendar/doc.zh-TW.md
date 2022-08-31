# Calendar 日曆

### 介紹

日曆，可平鋪/彈窗展示

### 安裝

```javascript
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
            <Cell title="選擇單個日期" desc={ date ? `${date} ${dateWeek}` : '請選擇' } onClick={ openSwitch } />
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
            <Cell title="選擇日期區間" desc={ date1 ? `${date1[0]}至${date1[1]}` : '請選擇' } onClick={ openSwitch1 } />
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
            <Cell title="選擇多個日期" desc={ date3 && date3.length ? `已選擇${date3.length}` : '請選擇' } onClick={ openSwitch3 } />
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
            <Cell title="選擇日期" desc={ date3 ? `${date3}` : '請選擇' } onClick={ openSwitch3 } />
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

### 自定義日曆-自定義時間文案

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
            <Cell title="選擇日期" desc={ date3 ? `${date3[0]}至${date3[1]}` : '請選擇' } onClick={ openSwitch3 } />
            
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

### 自定義日曆-自定義按鈕

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
            <Cell title="選擇日期" desc={ date3 ? `${date3[0]}至${date3[1]}` : '請選擇' } onClick={ openSwitch3 } />
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

| 字段              | 說明                                              | 類型            | 默認值          |
|-------------------|---------------------------------------------------|-----------------|-----------------|
| visible   | 是否可見                                          | Boolean         | false           |
| type              | 類型，日期選擇'one'，區間選擇'range'              | String          | 'one'           |
| poppable          | 是否彈窗狀態展示                                  | Boolean         | true            |
| isAutoBackFill | 自動回填                                          | Boolean         | false           |
| title             | 顯示標題                                          | String          | ‘日期選擇’      |
| defaultValue     | 默認值，日期選擇 String 格式，區間選擇 Array 格式 | String 、 Array | null            |
| startDate        | 開始日期， 如果不限制開始日期傳 null              | String          | 今天            |
| endDate          | 結束日期，如果不限制結束日期傳 null               | String          | 距離今天 365 天 |
| showToday          | 是否展示今天標記               | Boolean          | true |
| startText         | 範圍選擇，開始信息文案               | String          | ’开始‘ |
| endText         | 範圍選擇，結束信息文案               | String          | ‘结束’ |
| confirmText          | 底部確認按鈕文案               | String          | ’确认‘ |
| showTitle          | 是否在展示日曆標題               | Boolean          | true |
| showSubTitle          | 是否展示日期標題              | Boolean          | true |
| toDateAnimation          | 是否啟動滾動動畫              | Boolean          | true |
| onBtn | 自定義日曆標題下部，可用以添加自定義操作              |  (() => string \| JSX.Element) 、 undefined      | - |
| onDay  | 日期信息              |  ((date: Day) => string \| JSX.Element) 、 undefined                          | - |
| onTopInfo  | 日期頂部信息             |  ((date: Day) => string \| JSX.Element) 、 undefined                          | - |
| onBottomInfo  | 日期底部信息             |  ((date: Day) => string \| JSX.Element) 、 undefined                         | - |

### Events

| 事件名 | 说明                         | 回调参数                     |
|--------|------------------------------|------------------------------|
| onChoose | 選擇之後或是點擊確認按鈕觸發 | 日期數組（包含年月日和星期） |
| onClose  | 關閉時觸發                   | -                            |
| onSelected  | 點擊/選擇後觸發              |  Day: Day                          |

### Day
| 字段              | 類型            |
|-------------------|-----------------|
| day   | string、number           |
| type   | string          |
