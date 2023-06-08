# AnimatingNumbers

## Intro

Digital animation collection

## Install

```javascript
// react
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## Demo

### AnimatingNumbers.CountUp - Basic Usage

:::demo

```tsx
import React from 'react'
import { AnimatingNumbers } from '@nutui/nutui-react'

const App = () => {
  return <AnimatingNumbers.CountUp value="678.94" />
}
export default App
```

:::

### AnimatingNumbers.CountUp - Custom styles to dynamically modify data (maximum number of bits required)

:::demo

```tsx
import React, { useEffect, useState } from 'react'
import { AnimatingNumbers } from '@nutui/nutui-react'

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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| length | Set the maximum display length, the number of bits is not enough, the number of bits before the zero | `number` | `0` |
| value | The end value, | `string` | `number` |
| delay | Wait time for animation execution, in ms | `number` | `300` |
| duration | Animation execution time, in s | `number` | `1` |
| thousands | 是否有千位分隔符 Whether there are thousands separators | `boolean` | `false` |