# Calendar 日历

## 介绍

日历

## 安装

```tsx
import { Calendar } from '@nutui/nutui-react';
```

## 代码演示

### 选择单个日期

:::demo

```tsx
import React from "react";
import { Calendar } from '@nutui/nutui-react';

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
import { Calendar } from '@nutui/nutui-react';

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
import { Calendar } from '@nutui/nutui-react';

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
import { Calendar } from '@nutui/nutui-react';

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
import { Calendar } from '@nutui/nutui-react';

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
import { Calendar } from '@nutui/nutui-react';

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
import { Calendar } from '@nutui/nutui-react';

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
import { Calendar } from '@nutui/nutui-react';

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

### 与 Popup 组合使用

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Popup, Button, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(null)
  return <>
    <Cell
      title="点击选择日期"
      description={String(date)}
      onClick={() => setVisible(true)}
    />
    <Popup
      title="选择日期"
      visible={visible}
      position="bottom"
      closeable
      onClose={() => setVisible(false)}
    >
      <Calendar value={date} onChange={(d) => setDate(d)} />
      <div style={{ padding: '10px' }}>
        <Button block type="danger" onClick={() => setVisible(false)}>
          确定
        </Button>
      </div>
    </Popup>
  </>;
};
export default App;
```

:::

### 使用 Ref 上的方法

:::demo

```tsx
import React, { useState } from "react";
import { Space, Button, Calendar } from '@nutui/nutui-react';

const App = () => {
  const CalendarCardRef = useRef(null)
  return <>
    <Space>
      <Button onClick={() => CalendarCardRef.current?.jump(1)}>+ 1</Button>
      <Button onClick={() => CalendarCardRef.current?.jump(12)}>
        + 12
      </Button>
      <Button onClick={() => CalendarCardRef.current?.jump(-12)}>
        - 12
      </Button>
      <Button onClick={() => CalendarCardRef.current?.jumpTo(2023, 1)}>
        2023 01
      </Button>
    </Space>
    <Calendar ref={CalendarCardRef} />
  </>;
};
export default App;
```

:::

## Calendar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，单个日期 `single`，多个日期 `multiple`，日期范围 `range`，周选择 `week` | `string` | `single` |
| defaultValue | 默认值，单个日期 Date 格式，多个日期/范围选择 Date[] 格式 | `Date \| Date[]` | `-` |
| startDate | 限制范围开始日期 | `Date` | `-` |
| endDate | 限制范围结束日期 | `Date` | `-` |
| firstDayOfWeek | 设置周起始日，0 为周日，1 为周一 | `0-6` | `0` |
| disableDay | 设置不可选日期 | `(day: CalendarDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| value | 受控模式下的值，与 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onDayClick | 点击后触发 | `(day: CalendarDay) => void` | `-` |
| onPageChange | 切换月份时触发 | `(val: { year, month }) => void` | `-` |
| onChange | 选择值发生变化时触发 | `(val: Date \| Date[]) => void` | `-` |

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
| jump | 在当前基础上前进或后退月数，正数向前，负数向后 | `step: number` |
| jumpTo | 跳转至特定的年月 | `year: number, month: number`|

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 选中状态时的元素背景色 | `$primary-color` |
| \--nutui-calendar-choose-background-color | 选中时区间内元素的背景色，区别区间两头元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-disable-color | 不可选元素的字色 | `#bfbfbf` |
| \--nutui-calendar-base-font-size | 字号 | `$font-size-3` |