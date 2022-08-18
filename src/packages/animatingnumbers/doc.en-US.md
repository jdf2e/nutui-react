# AnimatingNumbers 

### Intro

Digital animation collection

### Install

```javascript
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## Demo

### AnimatingNumbers.CountUp - Basic Usage

:::demo

```tsx
import React from 'react'
import { AnimatingNumbers } from '@nutui/nutui-react'

const App = () => {
  return <AnimatingNumbers.CountUp endNumber="678.94" />
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
  const [endNumber, setEndNumer] = useState('1570.99')
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
      endNumber={endNumber}
      easeSpeed={1.2}
      maxLen={6}
      className="custom-coutup"
    />
  )
}
export default App
```

:::

## API

### AnimatingNumbers.CountUp Props

| Props    | Description                             | Type   | Default           |
| ---------- | ---------------------------------- | ------- | ------ |
| maxLen     | Set the maximum display length. If the length is insufficient, make up 0 bit by bit | Number  | 0      |
| endNumer   | The end value,                       | String  | ''     |
| delaySpeed | Wait time for animation execution, in ms          | Number  | 300    |
| easeSpeed  | Animation execution time, in s               | Number  | 1      |
| thousands  | 是否有千位分隔符  Whether there are thousands separators                  | Boolean | false  |
