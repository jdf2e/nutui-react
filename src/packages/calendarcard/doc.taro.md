# Calendar 日历

## 介绍

日历

## 安装

```tsx
import { Calendar } from '@nutui/nutui-react-taro';
```

## 代码演示

### 选择单个日期

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react-taro';

// const date = null;
const date = new Date('2023-01-01');

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <Calendar defaultValue={date} onChange={onChange} />;
};
export default App;
```

:::

### 选择多个日期

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react-taro';

// const date = [];
const date = [new Date('2023-01-01'), new Date('2023-01-03')];

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <Calendar type="multiple" defaultValue={date} onChange={onChange} />;
};
export default App;
```

:::

### 选择范围

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react-taro';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <Calendar type="range" onChange={onChange} />;
};
export default App;
```

:::

### 选择周

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react-taro';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <Calendar type="week" onChange={onChange} />;
};
export default App;
```

:::

### 受控模式

:::demo

```tsx
import React, { useState } from "react";
import { Calendar } from '@nutui/nutui-react-taro';

const App = () => {
  const [date, setDate] = useState(() => new Date('2023-01-01'));
  const onChange = (val) => {
    console.log(val);
    setDate(val);
  };
  return <Calendar value={date} onChange={onChange} />;
};
export default App;
```

:::

### 自定义周起始日

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react-taro';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <Calendar firstDayOfWeek={0} onChange={change} />;
};
export default App;
```

:::

### 自定义选择范围

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react-taro';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <Calendar
    startDate={new Date('2023-08-01')}
    endDate={new Date('2025-11-11')}
    onChange={change}
  />;
};
export default App;
```

:::

### 自定义禁止选择日期

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react-taro';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <Calendar
    disableDay={(day) => {
      const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
      return d === 1 || d === 3
    }}
    onChange={change}
  />;
};
export default App;
```

:::

## Calendar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，单个日期 `single`，多个日期 `multiple`，日期范围 `range`，周选择 `week` | `string` | `single` |
| defaultValue | 默认值，日期选择 string 格式，区间选择 Array 格式 | `Date \| Date[]` | `-` |
| startDate | 限制范围开始日期 | `Date` | `-` |
| endDate | 限制范围结束日期 | `Date` | `-` |
| firstDayOfWeek | 设置周起始日，0 为周日，1 为周一 | `0-6` | `0` |
| disableDay | 设置不可选日期 | `(day: CalendarDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| onDayClick | 点击后触发 | `(day: CalendarDay) => void` | `-` |
| onPageChange | 切换月份时触发 | `(val: { year, month }) => void` | `-` |
| value | 受控模式下的值，与 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onChange | 选择之后或是点击确认按钮触发 | `(val: Date | Date[]) => void` | `-` |

### CalendarDay

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| year | `number` | 年 |
| month | `number` | 月 |
| date | `number` | 日 |
| type | `prev \| current \| next | 可选项。表示上一个月、当月、下一个月 |

### Ref

通过 ref 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| stepDate | 切换月份 | `` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 日历选中状态时的元素背景色 | `$primary-color` |
| \--nutui-calendar-choose-background-color | 日历选中时区间内元素的背景色，区别区间两头元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | 日历选中元素的字色 | `$primary-color` |
| \--nutui-calendar-choose-disable-background-color | 日历不可选元素的选中时的背景色 | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-choose-disable-color | 日历不可选元素的选中时的字色 | `$gray3` |
| \--nutui-calendar-disable-color | 日历不可选元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日历字号 | `$font-size-3` |
| \--nutui-calendar-title-font-size | 日历标题字号 | `$font-size-4` |
| \--nutui-calendar-title-font-weight | 日历标题字重 | `500` |
| \--nutui-calendar-sub-title-font-size | 日历副标题字号 | `$font-size-2` |
| \--nutui-calendar-day67-color | 日历周末字色 | `$primary-color` |
| \--nutui-calendar-header-height | 日历自定义部分高度 | `24px` |
| \--nutui-calendar-day-width | 日历元素宽度 | `14.28%` |
| \--nutui-calendar-day-height | 日历元素高度 | `60px` |
| \--nutui-calendar-day-font-weight | 日历元素字重 | `500` |