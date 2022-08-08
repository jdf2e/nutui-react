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
                startDate="2019-10-11"
                endDate="2029-11-11"
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

### 自定义日历-自动回填

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
                visible={ isVisible3 }
                defaultValue={ date3 }
                startDate=""
                endDate=""
                isAutoBackFill
                onClose={ closeSwitch3 }
                onChoose={ setChooseValue3 }
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

### Events

| 事件名 | 说明                         | 回调参数                     |
|--------|------------------------------|------------------------------|
| onChoose | 选择之后或是点击确认按钮触发 | 日期数组（包含年月日和星期） |
| onClose  | 关闭时触发                   | -                            |
