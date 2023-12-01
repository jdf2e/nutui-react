# AnimatingNumbers 數字動畫

## 介紹

數字動畫集合

## 安裝

```tsx
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## 代碼演示

### AnimatingNumbers.CountUp-基礎用法

:::demo

```tsx
import React from 'react'
import { AnimatingNumbers, Cell } from '@nutui/nutui-react'

const App = () => {
    return  <Cell title={<AnimatingNumbers.CountUp value="678.94" />} />
}
export default App
```

:::

### AnimatingNumbers.CountUp-自定義樣式，動態修改數據（需要指定最大位數）

:::demo

```tsx
import React, { useEffect, useState } from 'react'
import { AnimatingNumbers, Cell } from '@nutui/nutui-react'

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
    <Cell
        title={
        <AnimatingNumbers.CountUp
            value={value}
            duration={1.2}
            length={6}
            className="custom-coutup"
        />
        }
    />
  )
}
export default App
```

:::

## AnimatingNumbers

### AnimatingNumbers.CountUp Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| length | 設置最大展示長度，數值位數不夠，數值前面按位補 0 | `number` | `0` |
| value | 結束值,必填項 | `string` | `number` |
| delay | 等待動畫執行時間，單位 ms | `number` | `300` |
| duration | 動畫執行時間，單位 s | `number` | `1` |
| thousands | 是否有千位分隔符 | `boolean` | `false` |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-countup-width | 每個數字的寬度 | `auto` |
| \--nutui-countup-height | 數字高度 | `32px` |
| \--nutui-countup-base-size | 字號 | `18px` |
| \--nutui-countup-border-radius | 每個數字的邊框圓角 | `4px` |
| \--nutui-countup-lr-margin | 每個數字的margin | `0` |
| \--nutui-countup-bg-color | 每個數字塊的背景色 | `inherit` |
| \--nutui-countup-color | 每個數字塊的字色 | `$color-title` |
