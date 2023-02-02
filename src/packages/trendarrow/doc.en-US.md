# TrendArrow 

### Intro

A percentage number with an arrow indicating the trend of the indicator

### Install

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
        <TrendArrow syncTextColor={false} rate={1} />
        <TrendArrow syncTextColor={false} rate={-0.2535} />
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
        <TrendArrow rate={10.2365} />
        <TrendArrow rate={-0.2535} />
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
        <TrendArrow digits={1} rate={10.2365} />
        <TrendArrow digits={3} rate={-0.2535} />
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
        <TrendArrow arrowLeft rate={0.2535} />
        <TrendArrow arrowLeft rate={-0.2535} />
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
        <TrendArrow showSign rate={1} />
        <TrendArrow showSign rate={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### Whether to show 0

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow showSign rate={0} />
        <TrendArrow showSign showZero rate={0} />
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
        <TrendArrow rate={10.2365} riseColor="rgb(73,143,242)" />
        <TrendArrow rate={-0.2535} showSign dropColor="rgb(255, 190, 13)" />
        <TrendArrow
        syncTextColor={false}
        rate={-0.2535}
        showSign
        textColor="rgb(39,197,48)"
        dropColor="rgb(39,197,48)"
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

const App = () => {
  return (
    <Cell>
        <TrendArrow rate={10.2365} upIconName="success" />
        <TrendArrow rate={-10.2365} downIconName="failure" />
        <TrendArrow rate={10.2365}>
        <Icon name="heart-fill" color="#fa2c19" size="12px" />
        </TrendArrow>
    </Cell>
  );
};
export default App;
```

:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| rate         | Value, the arrow is up when it is greater than 0, and the arrow is down when it is less than 0    | Number | -                |
| digits         | decimal precision               | Number | 2               |
| showSign         | Whether to display plus and minus signs               | Boolean | false               |
| showZero         |whether to show 0               | Boolean | false               |
| arrowLeft        | whether to show an arrow to the left of the number     | Boolean | false               |
| syncTextColor   | Whether the text color is in sync with the arrow               | Boolean | true   |
| textColor        | text color               | String | '#333333'               |
| riseColor         | up arrow color               | String | '#fa2c19'               |
| dropColor         | down arrow color               | String | ‘#64b578’               |
| iconSize         | arrow size               | String | '12px'               |
| upIconName         | custom up arrow icon               | String | 'triangle-up'               |
| downIconName           | custom down arrow icon               | String | 'triangle-down'               |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-trendarrow-font-size | ` 14px` |
| --nutui-trendarrow-before-icon-margin | `  4px` |
| --nutui-trendarrow-font-size | ` 14px` |
| --nutui-trendarrow-before-icon-margin | `  4px` |
