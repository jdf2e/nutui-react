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

### Custom Calendar - Auto Backfill

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

### Events

| Events | Description                         | callback parameter                     |
|--------|------------------------------|------------------------------|
| onChoose | Triggered after selection or by clicking the confirm button | Array of dates (including year, month, day and week) |
| onClose  | Triggered when closed                   | -                            |
