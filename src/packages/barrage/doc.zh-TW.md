# Barrage 彈幕

## 介紹

用於話語和詞組的輪播展示，適用於視頻中或其他類似需求中。

## 安裝

```tsx
import { Barrage } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useRef } from 'react'
import { Cell, Button, Barrage } from '@nutui/nutui-react'

const barrageStyle = {
  padding: '20px 0',
  height: '150px',
  boxSizing: 'border-box',
}
const App = () => {
  const barrageList = [
    '畫美不看',
    '不明覺厲',
    '喜大普奔',
    '男默女淚',
    '纍覺不愛',
    '爺青結-',
  ]
  const barrageRef = useRef(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`隨機——${String(n).substr(2, 10)}`)
    }
  }
  return (
    <div className="demo">
      <h2>基礎用法</h2>
      <Cell className="barrage-demo-wrap" style={barrageStyle}>
        <Barrage
          className="barrage-demo"
          ref={barrageRef}
          list={barrageList}
          style={barrageStyle}
        />
      </Cell>
      <div className="test" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={addBarrage}>
          隨機添加
        </Button>
      </div>
    </div>
  )
}
export default App
```

:::

## Barrage

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 彈幕列錶數據 | `Array<string>` | `[]` |
| interval | 可視區域內每個彈幕出現的時間間隔 | `number` | `500` |
| duration | 每個彈幕的滾動時間 | `number` | `3000` |
| rows | 彈幕行數，分幾行展示 | `number` | `1` |
| gapY | 彈幕垂直距離 | `number` | `10` |
| loop | 是否循環播放 | `boolean` | `true` |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| add | 添加數據 | `(word: string) => void` |