# Price 

### Intro

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

### Install

```javascript
import { Price } from '@nutui/nutui-react'
```

## Demo

### Support three sizes：small、normal、large

:::demo

```tsx
import  React from "react"
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
<>
        <Cell>
            <Price price={0} size="small" needSymbol thousands />
        </Cell>
        <Cell>
            <Price price={0} size="normal" needSymbol thousands />
        </Cell>
        <Cell>
            <Price price={0} size="large" needSymbol thousands />
        </Cell>
    </>
  );
};
export default App;
```

:::

### No decimals
:::demo

```tsx
import  React from "react"
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <Price
          price={8888}
          decimalDigits={0}
          needSymbol
          size="normal"
          thousands
        />
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
        <Price price={10010.01} size="normal" needSymbol thousands={false} />
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
        <Price
          price={15213.1221}
          size="normal"
          decimalDigits={3}
          needSymbol
          thousands
        />
    </Cell>
  );
};
export default App;
```

:::

### Adjust the symbol position

:::demo

```tsx
import  React from "react"
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <Price
          price={8888.01}
          size="normal"
          position="after"
          symbol="元"
          needSymbol
          thousands
        />
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
        <Price
          price={price}
          decimalDigits={3}
          size="normal"
          needSymbol
          thousands
        />
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
| position`v1.3.9`   | The symbol appear before or after the price，`before`、`after` | String           | before |
| size`v1.3.9`   | Size，`large`、`normal`、`small`                            | String           | large |
