# Price

## Intro

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

## Install

```javascript
// react
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
            <Price price={0} size="small"  thousands />
        </Cell>
        <Cell>
            <Price price={0} size="normal"  thousands />
        </Cell>
        <Cell>
            <Price price={0} size="large"  thousands />
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
          digits={0}
          
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
        <Price price={10010.01} size="normal"  thousands={false} />
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
          digits={3}
          
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
          
          thousands
        />
    </Cell>
  );
};
export default App;
```

:::

### Do not display a symbol

:::demo

```tsx
import  React from "react"
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <Price price={15213.1221} size="normal" symbol="" />
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
          digits={3}
          size="normal"
          
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| price | Price | `number` | `0` |
| symbol | Symbol type | `string` | `&amp;amp;yen;` |
| digits | Decimal digits | `number` | `2` |
| thousands | Thousands separation | `boolean` | `false` |
| position | The symbol appear before or after the price，`before`、`after` | `string` | `before` |
| size | Size，`large`、`normal`、`small` | `string` | `large` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-price-symbol-big-size | large Size Symbol font size | `18px` |
| \--nutui-price-integer-big-size | large Size Integer partial font size | `24px` |
| \--nutui-price-decimal-big-size | large Size Size of the decimal part of the font | `18px` |
| \--nutui-price-symbol-medium-size | normal Size Symbol font size | `14px` |
| \--nutui-price-integer-medium-size | normal Size Integer partial font size | `16px` |
| \--nutui-price-decimal-medium-size | normal Size Size of the decimal part of the font | `14px` |
| \--nutui-price-symbol-small-size | small Size Symbol font size | `10px` |
| \--nutui-price-integer-small-size | small Size Integer partial font size | `12px` |
| \--nutui-price-decimal-small-size | small Size Size of the decimal part of the font | `10px` |