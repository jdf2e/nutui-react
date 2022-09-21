#  DatePicker 日期选择器

### 介绍
    
时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。
    
### 安装
    
```javascript
import { DatePicker } from '@nutui/nutui';
```
    
## 代码演示
    
### 选择日期
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
      <Cell title="显示中文" desc={desc1} onClick={() => setShow1(true)} />
      <DatePicker
        title="日期选择"
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
### 选择月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型。将 type 设置为 year-month 即可选择年份和月份，设置为 month-day 即可选择月份和日期。

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
      <Cell title="日期选择" desc={desc2} onClick={() => setShow2(true)} />
      <DatePicker
          title="日期选择"
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
### 选择年月日时分

将 type 设置为 datetime 即可选择完整的时间。

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
      <Cell title="日期时间选择" desc={desc3} onClick={() => setShow3(true)} />
      <DatePicker
          title="日期时间选择"
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
### 选择时分秒
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
      <Cell title="时间选择" desc={desc4} onClick={() => setShow4(true)} />
      <DatePicker
          title="时间选择"
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
### 格式化选项

通过传入 formatter 函数，可以对选项文字进行格式化处理。 isShowChinese 属性同样是也为选项后面添加文案，但 formatter 函数的优先级高于 isShowChinese 属性。

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
        option.text += '时';
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
      <Cell title="时间选择" desc={desc5} onClick={() => setShow5(true)} />
      <DatePicker
          title="时间选择"
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

### 分钟数递增步长设置
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
      <Cell title="时间选择" desc={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="时间选择"
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

### 过滤选项

通过 filter 函数可以对选项数组进行过滤，实现自定义时间间隔。

:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell,Popup,Picker } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show7, setShow7] = useState(false)
  const [desc7, setDesc7] = useState('2022年05月10日 00时')

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
        option.text += `时`;
        break;
      default:
        option.text += '';
    }
    return option;
  };
  return ( 
    <>   
      <Cell title="时间选择" desc={desc6} onClick={() => setShow6(true)} />
      <DatePicker
          title="时间选择"
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
    
| 参数                        | 说明                                              | 类型    | 默认值   |
|---------------------------|---------------------------------------------------|---------|----------|
| modelValue                | 初始值                                            | Date    | `null`   |
| visible                   | 是否可见                                          | Boolean | `false`  |
| type                      | 类时间类型，可选值 date time year-month month-day datehour datetime | String  | `'date'` |
| minuteStep                | 分钟步进值                                        | Number  | `1`      |
| isShowChinese             | 每列是否展示中文                                  | Boolean | `false`  |
| title                     | 设置标题                                          | String  | `null`   |
| minDate                   | 开始日期                                          | Date    | `十年前` |
| maxDate                   | 结束日期                                          | Date    | `十年后` |
| formatter`v1.2.2`         | 选项格式化函数                                          | (type: string, option: PickerOption) => PickerOption    |  |
| filter`v1.2.2`            | 选项过滤函数                                          | (type: string, option: PickerOption) => PickerOption[]    |  |
| three-dimensional`v1.2.2` | 是否开启3D效果               | Boolean  | true   |


### Events
    
| 事件名                         | 说明               | 回调参数     |
|-----------------------------|--------------------|--------------|
| confirm`v1.2.2(废弃)`         | 点击确定按钮时触发 | event: Event |
| onConfirmDatePicker`v1.2.2` | 点击确定按钮时触发 | values, options |
| onCloseDatePicker           | 关闭时触发         | -- |
| onChange`v1.2.2`                  | 选项改变时触发         |  columnIndex, values, options  |