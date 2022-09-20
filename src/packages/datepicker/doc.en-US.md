#  DatePicker

### Intro
    
Used to select time, support date and time dimensions, usually used with the Popup component.
    
### Install
    
```javascript
import { DatePicker } from '@nutui/nutui';
```
    
### Choose Date

:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState('2012-01-01')
  const confirm1 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc1(options.map((option) => option.text).join(' '))
  }
  return ( 
    <>   
      <Cell title="Show Chinese" desc={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title="Choose Date"
        visible={show1}
        isShowChinese
        onCloseDatePicker={() => setShow1(false)}
        onConfirmDatePicker={(values,options) => confirm1(values,options)}
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
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const [show2, setShow2] = useState(false)
  const [desc2, setDesc2] = useState('05-10')
  const confirm2 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc2(options.map((option) => option.text).join('-'))
  }
  return ( 
    <>   
      <Cell title="Limit the start and end time" desc={desc2} onClick={() => setShow2(true)} />
      <DatePicker
          title="Choose Time"
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2022, 7, 1)}
          type="month-day"
          visible={show2}
          onCloseDatePicker={() => setShow2(false)}
          onConfirmDatePicker={(values,options) => confirm2(values,options)}
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
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show3, setShow3] = useState(false)
  const [desc3, setDesc3] = useState('2022-05-10 10:10')
  const confirm3 = (values:(string|number)[],options:PickerOption[])=>{
    const date = values.slice(0, 3).join('-');
    const time = values.slice(3).join(':');
    setDesc3(`${date  } ${  time}`)
  }
  return ( 
    <>   
      <Cell title="Choose Time" desc={desc3} onClick={() => setShow3(true)} />
      <DatePicker
          title="Choose Time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show3}
          type="datetime"
          onCloseDatePicker={() => setShow3(false)}
          onConfirmDatePicker={(values,options) => confirm3(values,options)}
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
import { DatePicker,Cell,Popup,Picker  } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show4, setShow4] = useState(false)
  const [desc4, setDesc4] = useState('10:10:00')
  const confirm4 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc4(options.map((option) => option.text).join(':'))
  }

  return ( 
    <>   
      <Cell title="Choose Time" desc={desc4} onClick={() => setShow4(true)} />
      <DatePicker
          title="Choose Time"
          type="time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show4}
          onCloseDatePicker={() => setShow4(false)}
          onConfirmDatePicker={(values,options) => confirm4(values,options)}
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
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
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
      <Cell title="Choose Time" desc={desc5} onClick={() => setShow5(true)} />
      <DatePicker
          title="Choose Time"
          type="datetime"
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2022, 10, 1)}
          visible={show5}
          formatter={formatter}
          onCloseDatePicker={() => setShow5(false)}
          onConfirmDatePicker={(values,options) => confirm5(values,options)}
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
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show6, setShow6] = useState(false)
  const [desc6, setDesc6] = useState('10:10:00')

  const confirm6 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc6(options.map((option) => option.text).join(':'))
  }
  return ( 
    <>   
      <Cell title="Choose Time" desc={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="Choose Time"
          type="time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show6}
          minuteStep={5}
          onCloseDatePicker={() => setShow6(false)}
          onConfirmDatePicker={(values,options) => confirm6(values,options)}
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
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show7, setShow7] = useState(false)
  const [desc7, setDesc7] = useState('2022-05-10 00')

  const confirm7 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc7(options.map((option) => option.text).join(' '))
  }
  const filter = (type: string, options:PickerOption[]) => {
    if (type == 'hour') {
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
      <Cell title="Choose Time" desc={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="Choose Time"
          type="datehour"
          minDate={minDate}
          maxDate={maxDate}
          visible={show7}
          formatter={formatter1}
          minuteStep={5}
          filter={filter}
          onCloseDatePicker={() => setShow7(false)}
          onConfirmDatePicker={(values,options) => confirm7(values,options)}
        />
    </>
  );
};  
export default App;

```
:::


## API
    
### Props
    
| Attribute         | Description                             | Type   | Default           |
|---------------------------|---------------------------------------------------|---------|----------|
| modelValue                | Default Date                                                | Date    | `null`   |
| visible                   | Is Show                                          | Boolean | `false`  |
| type                      | Can be set to date time year-month month-day datehour | String  | `'date'` |
| minuteStep                | Option minute step                                        | Number  | `1`      |
| isShowChinese             | Show Chinese                                  | Boolean | `false`  |
| title                     | Title                                          | String  | `null`   |
| minDate                   | Start date                                          | Date    | `Ten years ago on January 1` |
| maxDate                   | End date                                         | Date    | `Ten years later on December 31` |
| formatter`v1.2.2`         | Option text formatter                                           | (type: string, option: PickerOption) => PickerOption    |  |
| filter`v1.2.2`            | Option filter                                          | (type: string, option: PickerOption) => PickerOption[]    |  |
| three-dimensional`v1.2.2` | Turn on 3D effects               | Boolean  | true   |


### Events
    
| Event | Description           | Arguments     |
|-----------------------------|--------------------|--------------|
| onConfirmDatePicker`v1.2.2` | Emitted when click confirm button.  | values, options |
| onCloseDatePicker           | Emitted when click close button.          | -- |
| onChange`v1.2.2`            | Emitted when current option changed.         |  columnIndex, values, options  |