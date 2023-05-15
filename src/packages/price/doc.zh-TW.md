# Price 價格

## 介紹

用來對商品價格數值的小數點前後部分應用不同樣式，還支持人民幣符號、千位分隔符、設置小數點位數等功能。

## 安裝

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

### 有人民幣符號，無千位分隔

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
          digits={3}
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
          thousands
        />
    </Cell>
  );
};
export default App;
```

:::

### 不展示 symbol 符號

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

### 劃線價

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Price, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <Price price={1513.12} size="normal" thousands />
        <span>&nbsp;</span>
        <Price price={1513.88} thousands line />
      </Cell>
  );
};
export default App;
```

:::

## Price

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| price | 價格數量 | `number` | `0` |
| symbol | 符號類型 | `string` | `&yen;` |
| digits | 小數位位數 | `number` | `2` |
| thousands | 是否按照千分號形式顯示 | `boolean` | `false` |
| position | 符號顯示在價格前或者後，`before`、`after` | `string` | `before` |
| size | 價格尺寸，`large`、`normal`、`small` | `string` | `large` |
| line | 是否劃線價 | `boolean` | `false` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-price-symbol-big-size | large 尺寸符號字體大小 | `18px` |
| \--nutui-price-integer-big-size | large 尺寸整數部分字體大小 | `24px` |
| \--nutui-price-decimal-big-size | large 尺寸小數部分字體大小 | `18px` |
| \--nutui-price-symbol-medium-size | normal 尺寸符號字體大小 | `14px` |
| \--nutui-price-integer-medium-size | normal 尺寸整數部分字體大小 | `16px` |
| \--nutui-price-decimal-medium-size | normal 尺寸小數部分字體大小 | `14px` |
| \--nutui-price-symbol-small-size | small 尺寸符號字體大小 | `10px` |
| \--nutui-price-integer-small-size | small 尺寸整數部分字體大小 | `12px` |
| \--nutui-price-decimal-small-size | small 尺寸小數部分字體大小 | `10px` |
| \--nutui-price-line-font-size | 劃線價字體大小 | `10px` |
| \--nutui-price-line-color | 劃線價顏色 | `#757575` |