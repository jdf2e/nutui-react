# AnimatingNumbers 數字動畫

### 介紹

數字動畫集合

### 安裝

```javascript
// react
import { AnimatingNumbers } from '@nutui/nutui-react'

```

## 代碼演示

### AnimatingNumbers.CountUp-基礎用法

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

### AnimatingNumbers.CountUp-自定義樣式，動態修改數據（需要指定最大位數）

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

| 參數       | 說明                               | 類型    | 默認值 |
| ---------- | ---------------------------------- | ------- | ------ |
| maxLen     | 設置最大展示長度，長度不夠按位補 0 | Number  | 0      |
| endNumer   | 結束值,必填項                      | String  | ''     |
| delaySpeed | 等待動畫執行時間，單位 ms          | Number  | 300    |
| easeSpeed  | 動畫執行時間，單位 s               | Number  | 1      |
| thousands  | 是否有千位分隔符                   | Boolean | false  |
