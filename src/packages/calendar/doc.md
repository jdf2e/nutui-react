# Calendar 日历

### 介绍

日历，可平铺/弹窗展示

### 安装

```javascript
import { Calendar } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

```jsx
<Cell title="选择单个日期" desc={ date ? `${date} ${dateWeek}` : '请选择' } onClick={ openSwitch }></Cell>
<Calendar 
    visible={ isVisible }
    defaultValue={ date }
    startDate="2019-10-11"
    endDate="2029-11-11"
    onClose={ closeSwitch }
    onChoose={ setChooseValue }
></Calendar>
```

### 区间选择

```jsx
<Cell title="选择日期区间" desc={ date1 ? `${date1[0]}至${date1[1]}` : '请选择' } onClick={ openSwitch1 }></Cell>
<Calendar 
    visible={ isVisible1 }
    defaultValue={ date1 }
    type="range"
    startDate="2019-12-22"
    endDate="2021-01-08"
    onClose={ closeSwitch1 }
    onChoose={ setChooseValue1 }
></Calendar>
```

### 自定义日历-自动回填

```jsx
<Cell title="选择日期" desc={ date3 ? `${date3}` : '请选择' } onClick={ openSwitch3 }></Cell>
<Calendar
    visible={ isVisible3 }
    defaultValue={ date3 }
    startDate=""
    endDate=""
    isAutoBackFill={ true }
    onClose={ closeSwitch3 }
    onChoose={ setChooseValue3 }
></Calendar>
```

### 平铺展示

```jsx
<div className="test-calendar-wrapper" style={ { display: 'flex', width: '100%', height: '613px', overflow: 'hidden' } }>
<Calendar
    poppable={ false }
    defaultValue={ date2 }
    isAutoBackFill={ true }
    onChoose={ setChooseValue2 }
></Calendar>
</div>
```

```js
const [date, setDate] = useState('');
const [date1, setDate1] = useState(['2019-12-23', '2019-12-26']);
const [date2, setDate2] = useState('2020-07-08');
const [date3, setDate3] = useState('');
const [dateWeek, setDateWeek] = useState('');
const [isVisible, setIsVisible] = useState(false);
const [isVisible1, setIsVisible1] = useState(false);
const [isVisible3, setIsVisible3] = useState(false);

const openSwitch = () => {
    setIsVisible(true);
}

const openSwitch1 = () => {
    setIsVisible1(true);
}

const openSwitch3 = () => {
    setIsVisible3(true);
}

const closeSwitch = () => {
    setIsVisible(false);
}

const closeSwitch1 = () => {
    setIsVisible1(false);
}

const closeSwitch3 = () => {
    setIsVisible3(false);
}

const setChooseValue = (param: string) => {
    setDate(param[3]);
    setDateWeek(param[4]);
};

const setChooseValue1 = (param: string) => {
    setDate1([...[param[0][3], param[1][3]]]);
};

const setChooseValue2 = (param: string) => {
    setDate2(param[3]);
    console.log(param[3]);
};

const setChooseValue3 = (param: string) => {
    setDate3(param[3]);
};
```

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
| choose | 选择之后或是点击确认按钮触发 | 日期数组（包含年月日和星期） |
| close  | 关闭时触发                   | -                            |
