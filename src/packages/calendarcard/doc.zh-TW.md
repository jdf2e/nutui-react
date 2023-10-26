# Calendar 日歷

## 介紹

日歷

## 安裝

```tsx
import { Calendar } from '@nutui/nutui-react';
```

## 代碼演示

### 選擇單個日期

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

### 選擇多個日期

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

### 選擇範圍

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

### 選擇周

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

### 自定義周起始日

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

### 自定義選擇範圍

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

### 自定義禁止選擇日期

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

## Calendar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 類型，單個日期 `single`，多個日期 `multiple`，日期範圍 `range`，周選擇 `week` | `string` | `single` |
| defaultValue | 默認值，日期選擇 string 格式，區間選擇 Array 格式 | `Date \| Date[]` | `-` |
| startDate | 限製範圍開始日期 | `Date` | `-` |
| endDate | 限製範圍結束日期 | `Date` | `-` |
| firstDayOfWeek | 設置周起始日，0 為周日，1 為周一 | `0-6` | `0` |
| disableDay | 設置不可選日期 | `(day: CalendarDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: Day) => string` \| `JSX.Element` | `-` |
| onDayClick | 點擊後觸發 | `(day: CalendarDay) => void` | `-` |
| onPageChange | 切換月份時觸發 | `(val: { year, month }) => void` | `-` |
| value | 受控模式下的值，與 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onChange | 選擇之後或是點擊確認按鈕觸發 | `(val: Date | Date[]) => void` | `-` |

### CalendarDay

| 屬性 | 類型 | 說明 |
| --- | --- | --- |
| year | `number` | 年 |
| month | `number` | 月 |
| date | `number` | 日 |
| type | `prev \| current \| next | 可選項。表示上一個月、當月、下一個月 |

### Ref

通過 ref 可以獲取到 Calendar 實例並調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| stepDate | 切換月份 | `` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 日歷選中狀態時的元素背景色 | `$primary-color` |
| \--nutui-calendar-choose-background-color | 日歷選中時區間內元素的背景色，區別區間兩頭元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | 日歷選中元素的字色 | `$primary-color` |
| \--nutui-calendar-choose-disable-background-color | 日歷不可選元素的選中時的背景色 | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-choose-disable-color | 日歷不可選元素的選中時的字色 | `$gray3` |
| \--nutui-calendar-disable-color | 日歷不可選元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日歷字號 | `$font-size-3` |
| \--nutui-calendar-title-font-size | 日歷標題字號 | `$font-size-4` |
| \--nutui-calendar-title-font-weight | 日歷標題字重 | `500` |
| \--nutui-calendar-sub-title-font-size | 日歷副標題字號 | `$font-size-2` |
| \--nutui-calendar-day67-color | 日歷周末字色 | `$primary-color` |
| \--nutui-calendar-header-height | 日歷自定義部分高度 | `24px` |
| \--nutui-calendar-day-width | 日歷元素寬度 | `14.28%` |
| \--nutui-calendar-day-height | 日歷元素高度 | `60px` |
| \--nutui-calendar-day-font-weight | 日歷元素字重 | `500` |