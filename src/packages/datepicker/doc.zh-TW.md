#  DatePicker 日期選擇器

### 介紹
    
時間選擇器，支持日期、年月、時分等維度，通常與彈出層組件配合使用。
    
### 安裝
    
```javascript
import { DatePicker } from '@nutui/nutui';
```
    
## 代碼演示
    
### 選擇日期
:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState('2012年 01月 01日')
  const confirm1 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc1(options.map((option) => option.text).join(' '))
  }
  return ( 
    <>   
      <Cell title="顯示中文" desc={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title="日期選擇"
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
### 選擇月日

DatetimePicker 通過 type 屬性來定義需要選擇的時間類型。將 type 設置為 year-month 即可選擇年份和月份，設置為 month-day 即可選擇月份和日期。

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
      <Cell title="日期選擇" desc={desc2} onClick={() => setShow2(true)} />
      <DatePicker
          title="日期選擇"
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
### 選擇年月日時分

將 type 設置為 datetime 即可選擇完整的時間。

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
      <Cell title="日期時間選擇" desc={desc3} onClick={() => setShow3(true)} />
      <DatePicker
          title="日期時間選擇"
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
### 選擇時分秒
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
      <Cell title="時間選擇" desc={desc4} onClick={() => setShow4(true)} />
      <DatePicker
          title="時間選擇"
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
### 格式化選項

通過傳入 formatter 函數，可以對選項文字進行格式化處理。 isShowChinese 屬性同樣是也為選項後面添加文案，但 formatter 函數的優先級高於 isShowChinese 屬性。

:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show5, setShow5] = useState(false)
  const [desc5, setDesc5] = useState('2020年 05月 10日 10:10')

  const confirm5 = (values:(string|number)[],options:PickerOption[])=>{
    const date = options.slice(1, 3).map((op) => op.text).join('');
    const time = options
    .slice(3)
    .map((op) => op.value)
    .join(':');
    setDesc5(`${options[0].text}年${date} ${time}`)
  }
  const formatter = (type: string, option:PickerOption) => {
    switch (type) {
      case 'year':
        option.text += '';
        break;
      case 'month':
        option.text += '月';
        break;
      case 'day':
        option.text += '日';
        break;
      case 'hour':
        option.text += '時';
        break;
      case 'minute':
        option.text += '分';
        break;
      default:
        option.text += '';
    }
    return option;
  };

  return ( 
    <>   
      <Cell title="時間選擇" desc={desc5} onClick={() => setShow5(true)} />
      <DatePicker
          title="時間選擇"
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

### 分鐘數遞增步長設置
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
      <Cell title="時間選擇" desc={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="時間選擇"
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

### 過濾選項

通過 filter 函數可以對選項數組進行過濾，實現自定義時間間隔。

:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show7, setShow7] = useState(false)
  const [desc7, setDesc7] = useState('2022年05月10日 00時')

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
        option.text += `年`;
        break;
      case 'month':
        option.text += `月`;
        break;
      case 'day':
        option.text += `日`;
        break;
      case 'hour':
        option.text += `時`;
        break;
      default:
        option.text += '';
    }
    return option;
  };
  return ( 
    <>   
      <Cell title="時間選擇" desc={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="時間選擇"
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
    
| 參數                        | 說明                                              | 類型    | 默認值   |
|---------------------------|---------------------------------------------------|---------|----------|
| modelValue                | 初始值                                            | Date    | `null`   |
| visible                   | 是否可見                                          | Boolean | `false`  |
| type                      | 類時間類型，可選值 date time year-month month-day datehour datetime | String  | `'date'` |
| minuteStep                | 分鐘步進值                                        | Number  | `1`      |
| isShowChinese             | 每列是否展示中文                                  | Boolean | `false`  |
| title                     | 設置標題                                          | String  | `null`   |
| minDate                   | 開始日期                                          | Date    | `十年前` |
| maxDate                   | 結束日期                                          | Date    | `十年後` |
| formatter`v1.2.2`         | 選項格式化函數                                          | (type: string, option: PickerOption) => PickerOption    |  |
| filter`v1.2.2`            | 選項過濾函數                                          | (type: string, option: PickerOption) => PickerOption[]    |  |
| three-dimensional`v1.2.2` | 是否開啟3D效果               | Boolean  | true   |


### Events
    
| 事件名                         | 說明               | 回調參數     |
|-----------------------------|--------------------|--------------|
| onConfirmDatePicker`v1.2.2` | 點擊確定按鈕時觸發 | values, options |
| onCloseDatePicker           | 關閉時觸發         | -- |
| onChange`v1.2.2`                  | 選項改變時觸發         |  columnIndex, values, options  |