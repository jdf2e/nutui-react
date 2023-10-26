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

### 與 Popup 組合使用

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Popup, Button, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(null)
  return <>
    <Cell
      title="點擊選擇日期"
      description={String(date)}
      onClick={() => setVisible(true)}
    />
    <Popup
      title="選擇日期"
      visible={visible}
      position="bottom"
      closeable
      onClose={() => setVisible(false)}
    >
      <Calendar value={date} onChange={(d) => setDate(d)} />
      <div style={{ padding: '10px' }}>
        <Button block type="danger" onClick={() => setVisible(false)}>
          確定
        </Button>
      </div>
    </Popup>
  </>;
};
export default App;
```

:::

## Calendar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 類型，單個日期 `single`，多個日期 `multiple`，日期範圍 `range`，周選擇 `week` | `string` | `single` |
| defaultValue | 默認值，單個日期 Date 格式，多個日期/範圍選擇 Date[] 格式 | `Date \| Date[]` | `-` |
| startDate | 限製範圍開始日期 | `Date` | `-` |
| endDate | 限製範圍結束日期 | `Date` | `-` |
| firstDayOfWeek | 設置周起始日，0 為周日，1 為周一 | `0-6` | `0` |
| disableDay | 設置不可選日期 | `(day: CalendarDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| value | 受控模式下的值，與 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onDayClick | 點擊後觸發 | `(day: CalendarDay) => void` | `-` |
| onPageChange | 切換月份時觸發 | `(val: { year, month }) => void` | `-` |
| onChange | 選擇值發生變化時觸發 | `(val: Date \| Date[]) => void` | `-` |

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
| \--nutui-calendar-disable-color | 日歷不可選元素的字色 | `#d1d0d0` |
| \--nutui-calendar-base-font-size | 日歷字號 | `$font-size-3` |