# Price 

### Intro

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

### Install

```javascript
import { Price } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

```tsx
import  React from "react"
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <Price price={1010} needSymbol={false} thousands />
    </Cell>
  );
};
export default App;
```

:::

### With RMB symbol, no thousands separator

:::demo

```tsx
import  React from "react"
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <Price price={10010.01} needSymbol thousands={false} />
    </Cell>
  );
};
export default App;
```

:::

### With RMB symbol, separated by thousands, keep three decimal places

:::demo

```tsx
import  React from "react"
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <Price price={15213.1221} decimalDigits={3} needSymbol thousands />
    </Cell>
  );
};
export default App;
```

:::

### Asynchronous random changes

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  const [price, setPrice] = useState(Math.random() * 10000000)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrice(Math.random() * 10000000)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Cell>
      <Price price={price} decimalDigits={3} needSymbol thousands />
    </Cell>
  );
};
export default App;
```

:::

## API

### Props

| Attribute      | Description                                                | Type            | Default |
|----------------|------------------------------------------------------------|------------------|--------|
| price          | Price                 | Number  | 0      |
| needSymbol    | Add symbol | Boolean | true   |
| symbol         | Symbol type                 | String  | &yen;  |
| decimalDigits | Decimal digits               | Number  | 2      |
| thousands      | Thousands separation   | Boolean | false  |
