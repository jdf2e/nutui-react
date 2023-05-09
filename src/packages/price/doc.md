# Price 价格

### 介绍

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

### 安装

```javascript
// react
import { Price } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法 small normal large

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

### 不保留小数

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

### 有人民币符号，无千位分隔

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

### 带人民币符号，有千位分隔，保留小数点后三位

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

### 调整 symbol 符号位置

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

### 不展示 symbol 符号

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 价格数量 | `number` | `0` |
| symbol | 符号类型 | `string` | `&amp;amp;yen;` |
| digits | 小数位位数 | `number` | `2` |
| thousands | 是否按照千分号形式显示 | `boolean` | `false` |
| position | 符号显示在价格前或者后，`before`、`after` | `string` | `before` |
| size | 价格尺寸，`large`、`normal`、`small` | `string` | `large` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-price-symbol-big-size | large 尺寸符号字体大小 | `18px` |
| \--nutui-price-integer-big-size | large 尺寸整数部分字体大小 | `24px` |
| \--nutui-price-decimal-big-size | large 尺寸小数部分字体大小 | `18px` |
| \--nutui-price-symbol-medium-size | normal 尺寸符号字体大小 | `14px` |
| \--nutui-price-integer-medium-size | normal 尺寸整数部分字体大小 | `16px` |
| \--nutui-price-decimal-medium-size | normal 尺寸小数部分字体大小 | `14px` |
| \--nutui-price-symbol-small-size | small 尺寸符号字体大小 | `10px` |
| \--nutui-price-integer-small-size | small 尺寸整数部分字体大小 | `12px` |
| \--nutui-price-decimal-small-size | small 尺寸小数部分字体大小 | `10px` |