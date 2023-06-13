# Barrage 弹幕

## 介绍

用于话语和词组的轮播展示，适用于视频中或其他类似需求中。

## 安装

```tsx
import { Barrage } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useRef } from "react";
import { Cell, Button, Barrage } from '@nutui/nutui-react-taro';

const barrageStyle = {
  padding: '20px 0',
  height: '150px',
  boxSizing: 'border-box'
}
const App = () => {
  const barrageList = ['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-']
  const barrageRef = useRef(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`随机——${  String(n).substr(2, 10)}`)
    }
  }
  return (
    <div className="demo">
      <h2>基础用法</h2>
      <Cell className="barrage-demo-wrap" style={barrageStyle}>
        <Barrage className="barrage-demo" ref={barrageRef} list={barrageList} style={barrageStyle} />
      </Cell>
      <div className="test" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={addBarrage}>
          随机添加
        </Button>
      </div>
    </div>
  )
}
export default App;
```

:::

## Barrage

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 弹幕列表数据 | `Array<string>` | `[]` |
| interval | 可视区域内每个弹幕出现的时间间隔 | `number` | `500` |
| duration | 每个弹幕的滚动时间 | `number` | `3000` |
| rows | 弹幕行数，分几行展示 | `number` | `1` |
| gapY | 弹幕垂直距离 | `number` | `10` |
| loop | 是否循环播放 | `boolean` | `true` |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| add | 添加数据 | `(word: string) => void` |