# Price 价格

### 介绍

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

### 安装

```javascript
import { Price } from '@nutui/nutui-react'
```

## 代码演示

### 基本用法

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

### 有人民币符号，无千位分隔

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

### 带人民币符号，有千位分隔，保留小数点后三位

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

### 异步随机变更

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

| 参数           | 说明                     | 类型    | 默认值 |
| -------------- | ------------------------ | ------- | ------ |
| price          | 价格数量                 | Number  | 0      |
| needSymbol    | 是否需要加上 symbol 符号 | Boolean | true   |
| symbol         | 符号类型                 | String  | &yen;  |
| decimalDigits | 小数位位数               | Number  | 2      |
| thousands      | 是否按照千分号形式显示   | Boolean | false  |
