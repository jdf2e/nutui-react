# Calendar 日历

### 介绍

日历，可平铺/弹窗展示

### 安装

```javascript
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
            <Cell title="选择单个日期" desc={ date ? `${date} ${dateWeek}` : '请选择' } onClick={ openSwitch } />
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
            <Cell title="选择日期区间" desc={ date1 ? `${date1[0]}至${date1[1]}` : '请选择' } onClick={ openSwitch1 } />
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
            <Cell title="选择多个日期" desc={ date3 && date3.length ? `已选择${date3.length}` : '请选择' } onClick={ openSwitch3 } />
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
            <Cell title="选择日期" desc={ date3 ? `${date3}` : '请选择' } onClick={ openSwitch3 } />
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
            <Cell title="选择日期" desc={ date3 ? `${date3[0]}至${date3[1]}` : '请选择' } onClick={ openSwitch3 } />
            
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
            <Cell title="选择日期" desc={ date3 ? `${date3[0]}至${date3[1]}` : '请选择' } onClick={ openSwitch3 } />
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

| 字段              | 说明                                              | 类型            | 默认值          |
|-------------------|---------------------------------------------------|-----------------|-----------------|
| visible   | 是否可见                                          | Boolean         | false           |
| type              | 类型，日期选择'one'，区间选择'range'              | String          | 'one'           |
| poppable          | 是否弹窗状态展示                                  | Boolean         | true            |
| isAutoBackFill | 自动回填                                          | Boolean         | false           |
| title             | 显示标题                                          | String          | ‘日期选择’      |
| defaultValue     | 默认值，日期选择 String 格式，区间选择 Array 格式 | String 、 Array | null            |
| startDate        | 开始日期， 如果不限制开始日期传 null              | String          | 今天            |
| endDate          | 结束日期，如果不限制结束日期传 null               | String          | 距离今天 365 天 |
| showToday          | 是否展示今天标记               | Boolean          | true |
| startText         | 范围选择，开始信息文案               | String          | ’开始‘ |
| endText         | 范围选择，结束信息文案               | String          | ‘结束’ |
| confirmText          | 底部确认按钮文案               | String          | ’确认‘ |
| showTitle          | 是否在展示日历标题               | Boolean          | true |
| showSubTitle          | 是否展示日期标题              | Boolean          | true |
| toDateAnimation          | 是否启动滚动动画              | Boolean          | true |
| onBtn | 自定义日历标题下部，可用以添加自定义操作              |  (() => string \| JSX.Element) 、 undefined      | - |
| onDay  | 日期信息              |  ((date: Day) => string \| JSX.Element) 、 undefined                          | - |
| onTopInfo  | 日期顶部信息             |  ((date: Day) => string \| JSX.Element) 、 undefined                          | - |
| onBottomInfo  | 日期底部信息             |  ((date: Day) => string \| JSX.Element) 、 undefined                         | - |

### Events

| 事件名 | 说明                         | 回调参数                     |
|--------|------------------------------|------------------------------|
| onChoose | 选择之后或是点击确认按钮触发 | 日期数组（包含年月日和星期） |
| onClose  | 关闭时触发                   | -                            |
| onSelected  | 点击/选择后触发              |  Day: Day                          |

### Day
| 字段              | 类型            |
|-------------------|-----------------|
| day   | string、number           |
| type   | string          |
