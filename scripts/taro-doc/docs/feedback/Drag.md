---
sidebar_class_name: hasIcon
---

# Drag 拖拽

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

实现可拖拽的任意元素

## 引入

```tsx
import { Drag } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const onDragStart = () => {
    console.log('dragStart')
  }
  const onDragEnd = (state: any) => {
    console.log('dragEnd', state)
  }
  const onDrag = (state: any) => {
    console.log('dragging', state)
  }
  return (
    <Drag
      style={{ top: '120px', left: '24px' }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
    >
      <Button type="primary">drag</Button>
    </Drag>
  )
}
export default Demo1
```

### 限制拖拽方向

```tsx
import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <Drag
        direction="x"
        style={{
          top: '200px',
          left: '8px',
        }}
        className="drag-demo21"
      >
        <Button type="primary">X</Button>
      </Drag>
      <Drag
        direction="y"
        style={{
          top: '200px',
          right: '50px',
        }}
        className="drag-demo22"
      >
        <Button type="primary">Y</Button>
      </Drag>
    </>
  )
}
export default Demo2
```

### 自动吸边

```tsx
import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Drag
      direction="x"
      attract
      style={{
        top: '275px',
        left: '0px',
      }}
      className="drag-demo3"
    >
      <Button type="primary">attract</Button>
    </Drag>
  )
}
export default Demo3
```

### 限制拖拽边界

```tsx
import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'
import { getSystemInfoSync } from '@tarojs/taro'

const Demo4 = () => {
  const { screenWidth, windowHeight, screenHeight } = getSystemInfoSync()

  console.log(windowHeight, screenHeight)

  const right = () => {
    return screenWidth - 300 - 9
  }
  const bottom = () => {
    return windowHeight - 501 - 57
  }
  return (
    <>
      <div
        className="drag-boundary"
        style={{
          position: 'absolute',
          top: '360px',
          left: '8px',
          width: '300px',
          height: '200px',
          border: '1px solid var(--nutui-color-primary)',
        }}
      />
      <Drag
        className="drag-demo4"
        boundary={{ top: 361, left: 9, bottom: bottom(), right: right() }}
        style={{ top: '400px', left: '50px' }}
      >
        <Button type="primary">boundary</Button>
      </Drag>
    </>
  )
}
export default Demo4
```

## Drag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| attract | 是否开启自动吸边 | `boolean` | `false` |
| direction | 拖拽元素的拖拽方向限制 | `x` \| `y` \| `all` | `all` |
| boundary | 拖拽元素的拖拽边界 | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |
| onDragStart | 开始拖拽元素 | `() => void` | `-` |
| onDrag | 拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
| onDragEnd | 停止拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
