# CalendarCard 日歷

## 介紹

日歷

## 安裝

```tsx
import { CalendarCard } from '@nutui/nutui-react';
```

## 代碼演示

### 選擇單個日期

:::demo

```tsx
import React from "react";
import { CalendarCard } from '@nutui/nutui-react';

// const date = null;
const date = new Date('2023-01-01');

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <CalendarCard defaultValue={date} onChange={onChange} />;
};
export default App;
```

:::

### 選擇多個日期

:::demo

```tsx
import React from "react";
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const [val, setVal] = useState(() => {
    // return [];
    return [new Date('2023-01-01'), new Date('2023-01-03')];
  })
  const onChange = (val) => {
    setVal(val);
    console.log(val);
  };
  return <CalendarCard type="multiple" value={val} onChange={onChange} />;
};
export default App;
```

:::

### 選擇範圍

:::demo

```tsx
import React from "react";
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <CalendarCard type="range" onChange={onChange} />;
};
export default App;
```

:::

### 選擇周

:::demo

```tsx
import React from "react";
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <CalendarCard type="week" onChange={onChange} />;
};
export default App;
```

:::

### 受控模式

:::demo

```tsx
import React, { useState } from "react";
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const [date, setDate] = useState(() => new Date('2023-01-01'));
  const onChange = (val) => {
    console.log(val);
    setDate(val);
  };
  return <CalendarCard value={date} onChange={onChange} />;
};
export default App;
```

:::

### 自定義日期信息

:::demo

```tsx
import React, { useState } from "react";
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const renderDayTop = (day) => {
    return day.date === 8 ? '☺' : ''
  }
  const renderDay = (day) => {
    return day.date <= 9 ? `0${day.date}` : day.date
  }
  const renderDayBottom = (day) => {
    return day.date === 8 ? '節日' : ''
  }
  return <CalendarCard
    renderDayTop={renderDayTop}
    renderDay={renderDay}
    renderDayBottom={renderDayBottom}
  />;
};
export default App;
```

:::

### 自定義周起始日

:::demo

```tsx
import React from "react";
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <CalendarCard firstDayOfWeek={1} onChange={change} />;
};
export default App;
```

:::

### 自定義選擇範圍

:::demo

```tsx
import React from "react";
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <CalendarCard
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
import { CalendarCard } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return <CalendarCard
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
import { Cell, Popup, Button, CalendarCard } from '@nutui/nutui-react';

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
      <CalendarCard value={date} onChange={(d) => setDate(d)} />
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

### 使用 Ref 上的方法

:::demo

```tsx
import React, { useState } from "react";
import { Space, Button, CalendarCard } from '@nutui/nutui-react';

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
    <CalendarCard ref={CalendarCardRef} />
  </>;
};
export default App;
```

:::

## CalendarCard

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 類型，單個日期 `single`，多個日期 `multiple`，日期範圍 `range`，周選擇 `week` | `string` | `single` |
| defaultValue | 默認值，單個日期 Date 格式，多個日期/範圍選擇 Date[] 格式 | `Date \| Date[]` | `-` |
| startDate | 限製範圍開始日期 | `Date` | `-` |
| endDate | 限製範圍結束日期 | `Date` | `-` |
| firstDayOfWeek | 設置周起始日，0 為周日，1 為周一 | `0-6` | `1` |
| disableDay | 設置不可選日期 | `(day: CalendarCardDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayTop | 日期頂部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayBottom | 日期底部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| value | 受控模式下的值，與 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onDayClick | 點擊後觸發 | `(day: CalendarCardDay) => void` | `-` |
| onPageChange | 切換月份時觸發 | `(val: { year, month }) => void` | `-` |
| onChange | 選擇值發生變化時觸發 | `(val: Date \| Date[]) => void` | `-` |

### CalendarCardDay

| 屬性 | 類型 | 說明 |
| --- | --- | --- |
| year | `number` | 年 |
| month | `number` | 月 |
| date | `number` | 日 |
| type | `prev \| current \| next` | 可選項。表示上一個月、當月、下一個月 |

### Ref

通過 ref 可以獲取到 CalendarCard 實例並調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| jump | 在當前基礎上前進或後退月數，正數向前，負數向後 | `step: number` |
| jumpTo | 跳轉至特定的年月 | `year: number, month: number`|

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 選中狀態時的元素背景色 | `$primary-color` |
| \--nutui-calendar-choose-background-color | 選中時區間內元素的背景色，區別區間兩頭元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-disable-color | 不可選元素的字色 | `#bfbfbf` |
| \--nutui-calendar-base-font-size | 字號 | `$font-size-3` |
| \--nutui-calendar-day-width | 日歷元素寬度 | `14.28%` |
| \--nutui-calendar-choose-color | 日歷選中元素的字色 | `$primary-color` |
| \--nutui-calendar-day-active-border-radius | 日歷選中元素的圓角 | `4px` |