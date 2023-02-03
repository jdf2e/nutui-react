# Price 價格

### 介紹

用來對商品價格數值的小數點前後部分應用不同樣式，還支持人民幣符號、千位分隔符、設置小數點位數等功能。

### 安裝

```javascript
// react
import { Price } from '@nutui/nutui-react'

```

## 代碼演示

### 基礎用法 small normal large

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

### 不保留小數

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

### 有人民幣符號，無千位分隔

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

### 帶人民幣符號，有千位分隔，保留小數點後三位

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

### 調整 symbol 符號位置

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

### 異步隨機變更

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

| 參數           | 說明                     | 類型    | 默認值 |
| -------------- | ------------------------ | ------- | ------ |
| price          | 價格數量                 | Number  | 0      |
| needSymbol    | 是否需要加上 symbol 符號 | Boolean | true   |
| symbol         | 符號類型                 | String  | &yen;  |
| decimalDigits | 小數位位數               | Number  | 2      |
| thousands      | 是否按照千分號形式顯示   | Boolean | false  |
| position`v1.3.9`  | 符號顯示在價格前或者後，`before`、`after`  | String           | before |
| size`v1.3.9`   | 價格尺寸，`large`、`normal`、`small`     | String           | large |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-price-symbol-big-size | ` 18px` |
| --nutui-price-integer-big-size | ` 24px` |
| --nutui-price-decimal-big-size | ` 18px` |
| --nutui-price-symbol-medium-size | ` 14px` |
| --nutui-price-integer-medium-size | `  16px` |
| --nutui-price-decimal-medium-size | `  14px` |
| --nutui-price-symbol-small-size | ` 10px` |
| --nutui-price-integer-small-size | ` 12px` |
| --nutui-price-decimal-small-size | ` 10px` |
