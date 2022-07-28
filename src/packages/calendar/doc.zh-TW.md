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
            <Cell title="選擇單個日期" desc={ date ? `${date} ${dateWeek}` : '請選擇' } onClick={ openSwitch }></Cell>
            <Calendar 
                visible={ isVisible }
                defaultValue={ date }
                startDate="2019-10-11"
                endDate="2029-11-11"
                onClose={ closeSwitch }
                onChoose={ setChooseValue }
            ></Calendar>
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
            <Cell title="選擇日期區間" desc={ date1 ? `${date1[0]}至${date1[1]}` : '請選擇' } onClick={ openSwitch1 }></Cell>
            <Calendar 
                visible={ isVisible1 }
                defaultValue={ date1 }
                type="range"
                startDate="2019-12-22"
                endDate="2021-01-08"
                onClose={ closeSwitch1 }
                onChoose={ setChooseValue1 }
            ></Calendar>
        </>
    );
};
export default App;

```
:::

### 自定義日曆-自動回填

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
            <Cell title="選擇日期" desc={ date3 ? `${date3}` : '請選擇' } onClick={ openSwitch3 }></Cell>
            <Calendar
                visible={ isVisible3 }
                defaultValue={ date3 }
                startDate=""
                endDate=""
                isAutoBackFill={ true }
                onClose={ closeSwitch3 }
                onChoose={ setChooseValue3 }
            ></Calendar>
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

### Events

| 事件名 | 说明                         | 回调参数                     |
|--------|------------------------------|------------------------------|
| onChoose | 選擇之後或是點擊確認按鈕觸發 | 日期數組（包含年月日和星期） |
| onClose  | 關閉時觸發                   | -                            |
