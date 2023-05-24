# TrendArrow

## Intro

A percentage number with an arrow indicating the trend of the indicator

## Install

```javascript
// React
import { TrendArrow } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow syncColor={false} value={1} />
        <TrendArrow syncColor={false} value={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### Change text color

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow value={10.2365} />
        <TrendArrow value={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### Specify decimal places

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
     <Cell>
        <TrendArrow digits={1} value={10.2365} />
        <TrendArrow digits={3} value={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### Arrow ahead

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow arrowLeft value={0.2535} />
        <TrendArrow arrowLeft value={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### Show sign

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow symbol value={1} />
        <TrendArrow symbol value={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### Show zero or not

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow symbol value={0} />
        <TrendArrow symbol zero value={0} />
    </Cell>
  );
};
export default App;
```

:::

### Custom color

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow value={10.2365} riseColor="rgb(73,143,242)" />
        <TrendArrow value={-0.2535} symbol dropColor="rgb(255, 190, 13)" />
        <TrendArrow
        syncColor={false}
        value={-0.2535}
        symbol
        color="rgb(39,197,48)"
        dropColor="rgb(255, 190, 13)"
        />
    </Cell>
  );
};
export default App;
```

:::

### Custom icon

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell, Icon } from '@nutui/nutui-react'
import { Success, Failure } from '@nutui/icons-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow value={10.2365} riseIcon={<Success color="blue" />} />
        <TrendArrow value={-10.2365} downIcon={<Failure color="red" />} />
    </Cell>
  );
};
export default App;
```

:::

## TrendArrow

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Value, arrow up if greater than zero, arrow down if less than zero | `number` | `-` |
| digits | Decimal precision | `number` | `2` |
| symbol | Whether to display plus and minus signs | `boolean` | `false` |
| zero | Show zero or not | `boolean` | `false` |
| arrowLeft | Whether to show an arrow to the left of the number | `boolean` | `false` |
| syncColor | Whether the text color is in sync with the arrow | `boolean` | `true` |
| color | Text color | `string` | `#333333` |
| riseColor | Rise arrow color | `string` | `#fa2c19` |
| dropColor | Down arrow color | `string` | `#64b578` |
| riseIcon | Custom Rise arrow icon | `string` | `<TriangleUp/>` |
| downIcon | Custom down arrow icon | `string` | `<TriangleDown/>` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | Trend arrow text size | `14px` |
| \--nutui-trendarrow-icon-margin | Trend arrow Specifies the spacing between text and icon | `4px` |