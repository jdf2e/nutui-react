# Calendar

## Intro

Calendar

## Install

```tsx
import { Calendar } from '@nutui/nutui-react';
```

## Demo

### Select a single date

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

### Select multiple dates

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

### Select a range

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

### Select a week

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

### Controlled mode

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

### Custom week start day

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

### Custom selection range

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

### Custom prohibition date selection

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

### Use with Popup

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Popup, Button, Calendar } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(null)
  return <>
    <Cell
      title="Click to select"
      description={String(date)}
      onClick={() => setVisible(true)}
    />
    <Popup
      title="Select"
      visible={visible}
      position="bottom"
      closeable
      onClose={() => setVisible(false)}
    >
      <Calendar value={date} onChange={(d) => setDate(d)} />
      <div style={{ padding: '10px' }}>
        <Button block type="danger" onClick={() => setVisible(false)}>
          Confirm
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, single date `single`, multiple dates `multiple`, date range `range`, week selection `week` | `string` | `single` |
| defaultValue | Default value, choose string format for date, choose Array format for interval | `Date \| Date[]` | `-` |
| startDate | Limit range start date | `Date` | `-` |
| endDate | Limit range end date | `Date` | `-` |
| firstDayOfWeek | Set the starting day of the week, 0 is Sunday, 1 is Monday | `0-6` | `0` |
| disableDay | Set disable date | `(day: CalendarDay) => boolean` | `-` |
| renderDay | Date information | `(date: Day) => string` \| `JSX.Element` | `-` |
| value | Value in controlled mode, used with onChange | `Date \| Date[]` | `-` |
| onDayClick | Triggered after click | `(day: CalendarDay) => void` | `-` |
| onPageChange | Triggered when switching months | `(val: { year, month }) => void` | `-` |
| onChange | Triggered when value update | `(val: Date | Date[]) => void` | `-` |

### CalendarDay

| Property | Type | Description |
| --- | --- | --- |
| year | `number` | year |
| month | `number` | month |
| date | `number` | date |
| type | `prev \| current \| next | - |

### Ref

Through ref, you can get the Calendar instance and call the instance method.

| Name | Description | Arguments |
| --- | --- | --- |
| stepDate | change month | `` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | calendar active background color | `$primary-color` |
| \--nutui-calendar-choose-background-color | calendar choose background color | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-disable-color | calendar disable color | `#d1d0d0` |
| \--nutui-calendar-base-font-size | calendar base font size | `$font-size-3` |