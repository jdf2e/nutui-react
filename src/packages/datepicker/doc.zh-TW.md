#  DatePicker 日期选择器

### 介绍
    
时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。
    
### 安装
    
```javascript
import { DatePicker } from '@nutui/nutui';
```
    
## 代码演示
    
### 日期选择-每列不显示中文
:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [show1, setShow1] = useState(false)
   const desc1 = '2020-1-1'
  return ( 
    <>   
    <Cell title="日期选择" desc={desc1} onClick={() => setShow1(true)} />
    <DatePicker
      title="日期选择"
      visible={show1}
      onCloseDatePicker={() => setShow1(false)}
      onConfirmDatePicker={(list) => setDesc1(list.join('-'))}
      isShowChinese={false}
     />
    </>
  );
};  
export default App;

```
:::
### 日期选择-限制开始结束时间
:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker, Cell } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show2, setShow2] = useState(false)
  const desc2 = '2020-1-1'
  return ( 
    <>   
    <Cell title="日期选择" desc={desc2} onClick={() => setShow2(true)} />
     <DatePicker
        title="日期选择"
        minDate={minDate}
        maxDate={maxDate}
        visible={show2}
        onCloseDatePicker={() => setShow2(false)}
        onConfirmDatePicker={(list) => setDesc2(list.join('-'))}
       />
    </>
  );
};  
export default App;

```
:::
### 日期时间-限制开始结束时间（有默认值）

:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show3, setShow3] = useState(false)
  const desc3 = '2020年-1月-1日-0时-0分'
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
      onConfirmDatePicker={(list) => setDesc3(list.join('-'))}
     />
    </>
  );
};  
export default App;

```
:::
### 时间选择-12小时制
:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show4, setShow4] = useState(false)
  const desc4 = '0时-0分-0秒'
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
      onConfirmDatePicker={(list) => setDesc4(list.join('-'))}
     />
    </>
  );
};  
export default App;

```
:::
### 时间选择-分钟数递增步长设置
:::demo
```tsx
import  React, { useState  } from "react";
import { DatePicker,Cell } from '@nutui/nutui-react';

const App = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [show5, setShow5] = useState(false)
  const desc5 = '0时-0分-0秒'
  return ( 
    <>   
    <Cell title="时间选择" desc={desc5} onClick={() => setShow5(true)} />
    <DatePicker
      title="时间选择"
      type="time"
      minDate={minDate}
      maxDate={maxDate}
      visible={show5}
      minuteStep={5}
      onCloseDatePicker={() => setShow5(false)}
      onConfirmDatePicker={(list) => setDesc5(list.join('-'))}
     />
    </>
  );
};  
export default App;

```
:::

## API
    
### Props
    
| 参数            | 说明                                              | 类型    | 默认值   |
|-----------------|---------------------------------------------------|---------|----------|
| modelValue         | 初始值                                            | Date    | `null`   |
| visible | 是否可见                                          | Boolean | `false`  |
| type            | 类型，日期'date'， 日期时间'datetime'，时间'time' | String  | `'date'` |
| minuteStep     | 分钟步进值                                        | Number  | `1`      |
| isShowChinese | 每列是否展示中文                                  | Boolean | `false`  |
| title           | 设置标题                                          | String  | `null`   |
| minDate        | 开始日期                                          | Date    | `十年前` |
| maxDate        | 结束日期                                          | Date    | `十年后` |



### Events
    
| 事件名  | 说明               | 回调参数     |
|---------|--------------------|--------------|
| confirm | 点击确定按钮时触发 | event: Event |
| onCloseDatePicker  | 关闭时触发         | event: Event |