# Price 价格

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

## 引入

```tsx
import { Price } from '@dongdesign/ui'
```

## 示例代码

### 基础用法 small normal large

```tsx
import React from 'react'
import { Price, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Price price={0} size="small" thousands />
      </Cell>
      <Cell>
        <Price price={0} size="normal" thousands />
      </Cell>
      <Cell>
        <Price price={0} size="large" thousands />
      </Cell>
    </>
  )
}
export default Demo1

```

### 不保留小数

```tsx
import React from 'react'
import { Cell, Price } from '@dongdesign/ui'

const Demo2 = () => {
  return (
    <Cell>
      <Price price={8888} digits={0} size="normal" thousands />
    </Cell>
  )
}
export default Demo2

```

### 有人民币符号，无千位分隔

```tsx
import React from 'react'
import { Cell, Price } from '@dongdesign/ui'

const Demo3 = () => {
  return (
    <Cell>
      <Price price={10010.01} size="normal" thousands={false} />
    </Cell>
  )
}
export default Demo3

```

### 带人民币符号，有千位分隔，保留小数点后三位

```tsx
import React from 'react'
import { Cell, Price } from '@dongdesign/ui'

const Demo4 = () => {
  return (
    <Cell>
      <Price price={15213.1221} size="normal" digits={3} thousands />
    </Cell>
  )
}
export default Demo4

```

### 调整 symbol 符号位置

```tsx
import React from 'react'
import { Cell, Price } from '@dongdesign/ui'

const Demo5 = () => {
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
  )
}
export default Demo5

```

### 不展示 symbol 符号

```tsx
import React from 'react'
import { Cell, Price } from '@dongdesign/ui'

const Demo6 = () => {
  return (
    <Cell>
      <Price price={15213.1221} size="normal" symbol="" />
    </Cell>
  )
}
export default Demo6

```

### 异步随机变更

```tsx
import React, { useState, useEffect } from 'react'
import { Cell, Price } from '@dongdesign/ui'

const Demo7 = () => {
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
      <Price price={price} digits={3} size="normal" thousands />
    </Cell>
  )
}
export default Demo7

```

### 划线价

```tsx
import React from 'react'
import { Cell, Price } from '@dongdesign/ui'
import { Text } from '@tarojs/components'

const Demo8 = () => {
  return (
    <Cell align="center">
      <Price price={1513.12} size="normal" thousands />
      <Text>&nbsp;</Text>
      <Price price={1513.88} thousands line />
    </Cell>
  )
}
export default Demo8

```

## Price

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 价格数量 | `number` | `0` |
| symbol | 符号类型 | `string` | `&yen;` |
| digits | 小数位位数 | `number` | `2` |
| thousands | 是否按照千分号形式显示 | `boolean` | `false` |
| position | 符号显示在价格前或者后，`before`、`after` | `string` | `before` |
| size | 价格尺寸，`large`、`normal`、`small` | `string` | `large` |
| line | 是否划线价 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

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
| \--nutui-price-line-font-size | 划线价字体大小 | `10px` |
| \--nutui-price-line-color | 划线价颜色 |  `#757575` |
| \--nutui-price-symbol-padding-right | 符号的右内边距 |  `1px` |