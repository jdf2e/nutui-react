# DatePicker

## Intro

Used to select time, support date and time dimensions, usually used with the Popup component.

## Install

```tsx
import { DatePicker } from '@nutui/nutui';
```

### Choose Date

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState('2012-01-01')
  const confirm1 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc1(options.map((option) => option.text).join(' '))
  }
  return ( 
    <>   
      <Cell title="Show Chinese" description={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title="Choose Date"
        visible={show1}
        showChinese
        onClose={() => setShow1(false)}
        onConfirm={(options, values) => confirm1(values,options)}
      />
    </>
  );
};  
export default App;

```

:::

### Choose Month-Day

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [show2, setShow2] = useState(false)
  const [desc2, setDesc2] = useState('')
  const confirm2 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc2(options.map((option) => option.text).join('-'))
  }
  return ( 
    <>   
      <Cell title="Limit the start and end time" description={desc2} onClick={() => setShow2(true)} />
      <DatePicker
          title="Choose Time"
          startDate={new Date(2023, 6, 4)}
          endDate={new Date(2025, 7, 1)}
          type="month-day"
          visible={show2}
          onClose={() => setShow2(false)}
          onConfirm={(options, values) => confirm2(values,options)}
        />
    </>
  );
};  
export default App;

```

:::

### Choose DateTime

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show3, setShow3] = useState(false)
  const [desc3, setDesc3] = useState('2022-05-10 10:10')
  const confirm3 = (values:(string|number)[],options:PickerOption[])=>{
    const date = values.slice(0, 3).join('-');
    const time = values.slice(3).join(':');
    setDesc3(`${date  } ${  time}`)
  }
  return ( 
    <>   
      <Cell title="Choose Time" description={desc3} onClick={() => setShow3(true)} />
      <DatePicker
          title="Choose Time"
          startDate={startDate}
          endDate={endDate}
          visible={show3}
          type="datetime"
          onClose={() => setShow3(false)}
          onConfirm={(options, values) => confirm3(values,options)}
        />
    </>
  );
};  
export default App;

```

:::

### Choose Time

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell  } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show4, setShow4] = useState(false)
  const [desc4, setDesc4] = useState('10:10:00')
  const confirm4 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc4(options.map((option) => option.text).join(':'))
  }

  return ( 
    <>   
      <Cell title="Choose Time" description={desc4} onClick={() => setShow4(true)} />
      <DatePicker
          title="Choose Time"
          type="time"
          startDate={startDate}
          endDate={endDate}
          visible={show4}
          onClose={() => setShow4(false)}
          onConfirm={(options, values) => confirm4(values,options)}
        />
    </>
  );
};  
export default App;

```

:::

### Selective time

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell  } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show8, setShow8] = useState(false)
  const [desc8, setDesc8] = useState('10:10')
  const confirm4 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc4(options.map((option) => option.text).join(':'))
  }

  return ( 
    <>   
      <Cell title="Choose Time" description={desc8} onClick={() => setShow8(true)} />
      <DatePicker
          title="Choose Time"
          type="hour-minutes"
          startDate={startDate}
          endDate={endDate}
          visible={show8}
          onClose={() => setShow8(false)}
          onConfirm={(options, values) => confirm8(values,options)}
        />
    </>
  );
};  
export default App;

```

:::

### Option Formatter

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show5, setShow5] = useState(false)
  const [desc5, setDesc5] = useState('2020-05-10 10:10')

  const confirm5 = (values:(string|number)[],options:PickerOption[])=>{
    const date = options.slice(1, 3).map((op) => op.text).join('');
    const time = options
    .slice(3)
    .map((op) => op.value)
    .join(':');
    setDesc5(`${options[0].text}Year${date} ${time}`)
  }
  const formatter = (type: string, option:PickerOption) => {
    switch (type) {
      case 'year':
        option.text += '';
        break;
      case 'month':
        option.text += 'Month';
        break;
      case 'day':
        option.text += 'Day';
        break;
      case 'hour':
        option.text += 'Hour';
        break;
      case 'minute':
        option.text += 'Minute';
        break;
      default:
        option.text += '';
    }
    return option;
  };

  return ( 
    <>   
      <Cell title="Choose Time" description={desc5} onClick={() => setShow5(true)} />
      <DatePicker
          title="Choose Time"
          type="datetime"
          startDate={new Date(2022, 0, 1)}
          endDate={new Date(2022, 10, 1)}
          visible={show5}
          formatter={formatter}
          onClose={() => setShow5(false)}
          onConfirm={(options, values) => confirm5(values,options)}
        />
    </>
  );
};  
export default App;

```

:::

### Option Steps

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show6, setShow6] = useState(false)
  const [desc6, setDesc6] = useState('10:10:00')

  const confirm6 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc6(options.map((option) => option.text).join(':'))
  }
  return ( 
    <>   
      <Cell title="Choose Time" description={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="Choose Time"
          type="time"
          startDate={startDate}
          endDate={endDate}
          visible={show6}
          minuteStep={5}
          onClose={() => setShow6(false)}
          onConfirm={(options, values) => confirm6(values,options)}
        />
    </>
  );
};  
export default App;

```

:::

### Option Filter

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show7, setShow7] = useState(false)
  const [desc7, setDesc7] = useState('2022-05-10 00')

  const confirm7 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc7(options.map((option) => option.text).join(' '))
  }
  const filter = (type: string, options:PickerOption[]) => {
    if (type === 'hour') {
      return options.filter((option) => Number(option.value) % 6 === 0);
    }
    return options;
  };
  const formatter1 = (type: string, option:PickerOption) => {
    switch (type) {
      case 'year':
        option.text += `Year`;
        break;
      case 'month':
        option.text += `Month`;
        break;
      case 'day':
        option.text += `Day`;
        break;
      case 'hour':
        option.text += `Hour`;
        break;
      default:
        option.text += '';
    }
    return option;
  };
  return ( 
    <>   
      <Cell title="Choose Time" description={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="Choose Time"
          type="datehour"
          startDate={startDate}
          endDate={endDate}
          visible={show7}
          formatter={formatter1}
          minuteStep={5}
          filter={filter}
          onClose={() => setShow7(false)}
          onConfirm={(options, values) => confirm7(values,options)}
        />
    </>
  );
};  
export default App;

```

:::

## DatePicker

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | Default date | `Date` | `null` |
| value | controlled date | `Date` | `null` |
| visible | Is Show | `boolean` | `false` |
| type | Can be set to date time year-month month-day datehour hour-minutes | `string` | `date` |
| minuteStep | Option minute step | `number` | `1` |
| showChinese | Show Chinese | `boolean` | `false` |
| title | Title | `string` | `null` |
| startDate | Start date | `Date` | `Ten years ago on January 1` |
| endDate | End date | `Date` | `Ten years later on December 31` |
| pickerProps | picker props | `object` | `-` |
| formatter | Option text formatter | `(type: string, option: PickerOption) => PickerOption` | `-` |
| filter | Option filter | `(type: string, option: PickerOption) => PickerOption[]` | `-` |
| threeDimensional | Turn on 3D effects | `boolean` | `true` |
| onConfirm | Emitted when click confirm button. | `(options, value) => void` | `-` |
| onClose | Emitted when click close button. | `(options, value) => void` | `-` |
| onChange | Emitted when current option changed. | `(options, value, index) => void` | `-` |