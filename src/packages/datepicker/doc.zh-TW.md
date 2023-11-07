# DatePicker 日期選擇器

## 介紹

時間選擇器，支持日期、年月、時分等維度，通常與彈出層組件配合使用。

## 安裝

```tsx
import { DatePicker } from '@nutui/nutui';
```

## 代碼演示

### 選擇日期

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState('2012年 01月 01日')
  const confirm1 = (values:(string|number)[],options:PickerOption[])=>{
    setDesc1(options.map((option) => option.text).join(' '))
  }
  return ( 
    <>   
      <Cell title="顯示中文" description={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title="日期選擇"
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

### 選擇月日

DatetimePicker 通過 type 屬性來定義需要選擇的時間類型。將 type 設置為 year-month 即可選擇年份和月份，設置為 month-day 即可選擇月份和日期。

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
      <Cell title="日期選擇" description={desc2} onClick={() => setShow2(true)} />
      <DatePicker
          title="日期選擇"
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

### 選擇年月日時分

將 type 設置為 datetime 即可選擇完整的時間。

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
      <Cell title="日期時間選擇" description={desc3} onClick={() => setShow3(true)} />
      <DatePicker
          title="日期時間選擇"
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

### 選擇時分秒

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
      <Cell title="時間選擇" description={desc4} onClick={() => setShow4(true)} />
      <DatePicker
          title="時間選擇"
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

### 選擇時分

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
      <Cell title="時間選擇" description={desc8} onClick={() => setShow8(true)} />
      <DatePicker
          title="時間選擇"
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

### 格式化選項

通過傳入 formatter 函數，可以對選項文字進行格式化處理。 showChinese 屬性同樣是也為選項後面添加文案，但 formatter 函數的優先級高於 showChinese 屬性。

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
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
      <Cell title="時間選擇" description={desc5} onClick={() => setShow5(true)} />
      <DatePicker
          title="時間選擇"
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

### 分鐘數遞增步長設置

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
      <Cell title="時間選擇" description={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="時間選擇"
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

### 過濾選項

通過 filter 函數可以對選項數組進行過濾，實現自定義時間間隔。

:::demo

```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const [show7, setShow7] = useState(false)
  const [desc7, setDesc7] = useState('2022年05月10日 00時')

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
      <Cell title="時間選擇" description={desc7} onClick={() => setShow6(true)} />
      <DatePicker
          title="時間選擇"
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 初始值 | `Date` | `null` |
| value | 受控 | `Date` | `null` |
| visible | 是否可見 | `boolean` | `false` |
| type | 類時間類型，可選值 date time year-month month-day datehour datetime hour-minutes | `string` | `date` |
| minuteStep | 分鐘步進值 | `number` | `1` |
| showChinese | 每列是否展示中文 | `boolean` | `false` |
| title | 設置標題 | `string` | `null` |
| startDate | 開始日期 | `Date` | `十年前` |
| endDate | 結束日期 | `Date` | `十年後` |
| formatter | 選項格式化函數 | `(type: string, option: PickerOption) => PickerOption` | `-` |
| pickerProps | 透传 picker 屬性 | `object` | `-` |
| filter | 選項過濾函數 | `(type: string, option: PickerOption) => PickerOption[]` | `-` |
| threeDimensional | 是否開啟3D效果 | `boolean` | `true` |
| onConfirm | 點擊確定按鈕時觸發 | `(options, value) => void` | `-` |
| onClose | 關閉時觸發 | `(options, value) => void` | `-` |
| onChange | 選項改變時觸發 | `(options, value, index) => void` | `-` |