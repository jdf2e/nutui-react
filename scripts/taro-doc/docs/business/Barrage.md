---
sidebar_class_name: hasIcon
---

# Barrage 弹幕

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于话语和词组的轮播展示，适用于视频中或其他类似需求中。

## 引入

```tsx
import { Barrage } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useRef } from 'react'
import { Cell, Button, Barrage } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const barrageList = [
    '画美不看画美不看画美不看画美不看',
    '不明觉厉',
    '喜大普奔',
    '男默女泪',
    '累觉不爱',
    '爷青结',
  ]
  const barrageRef = useRef<any>(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`随机——${String(n).substr(2, 10)}`)
    }
  }
  return (
    <>
      <Cell className="barrage-demo-wrap">
        <Barrage className="barrage-demo" ref={barrageRef} list={barrageList} />
      </Cell>
      <Button type="primary" onClick={addBarrage}>
        随机添加
      </Button>
    </>
  )
}
export default Demo1
```

## Barrage

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| list | 弹幕列表数据 | `Array<string>` | `[]` |
| interval | 可视区域内每个弹幕出现的时间间隔 | `number` | `500` |
| duration | 每个弹幕的滚动时间 | `number` | `3000` |
| rows | 弹幕行数，分几行展示 | `number` | `1` |
| gapY | 弹幕垂直距离 | `number` | `10` |
| loop | 是否循环播放 | `boolean` | `true` |

### Ref

| 属性 | 说明 | 类型 |
| :--- | :--- | :--- |
| add | 添加数据 | `(word: string) => void` |
