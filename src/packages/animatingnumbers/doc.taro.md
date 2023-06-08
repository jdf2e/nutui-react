# AnimatingNumbers 数字动画

## 介绍

数字动画集合

## 安装

```javascript
import { AnimatingNumbers } from '@nutui/nutui-react-taro'
```

## 代码演示

### AnimatingNumbers.CountUp-基础用法

:::demo

```tsx
import React from 'react'
import { AnimatingNumbers } from '@nutui/nutui-react-taro'

const App = () => {
  return <AnimatingNumbers.CountUp value="678.94" />
}
export default App
```

:::

### AnimatingNumbers.CountUp-自定义样式，动态修改数据（需要指定最大位数）

:::demo

```tsx
import React, { useEffect, useState } from 'react'
import { AnimatingNumbers } from '@nutui/nutui-react-taro'

const App = () => {
  const [value, setEndNumer] = useState('1570.99')
  useEffect(() => {
    setInterval(() => {
      setEndNumer(
        `${Math.floor(Math.random() * 999999)}.${Math.floor(
          Math.random() * 89 + 10
        )}`
      )
    }, 30000)
  }, [])
  return (
    <AnimatingNumbers.CountUp
      value={value}
      duration={1.2}
      length={6}
      className="custom-coutup"
    />
  )
}
export default App
```

:::

## AnimatingNumbers.CountUp

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| length | 设置最大展示长度，数值位数不够，数值前面按位补 0 | `number` | `0` |
| value | 结束值,必填项 | `string` | `number` |
| delay | 等待动画执行时间，单位 ms | `number` | `300` |
| duration | 动画执行时间，单位 s | `number` | `1` |
| thousands | 是否有千位分隔符 | `boolean` | `false` |