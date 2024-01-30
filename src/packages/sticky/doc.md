# Sticky组件

## 介绍

效果同 css 中的 position: sticky,对低端浏览器可使用其做兼容

## 安装

```tsx
import { Sticky } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  const handleChange = (val: boolean) => {
    console.log('吸顶状态发生了改变,当前fixed为', val)
  }
  return(
      <>
        <Sticky threshold={57} onChange={(val: boolean) => handleChange(val)}>
          <Button type="primary">吸顶</Button>
        </Sticky>
      </>
  )
}
export default App;
```

:::

### 吸顶距离

:::demo

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  return(
      <>
        <Sticky threshold={120}>
          <Button type="primary">距离顶部120px</Button>
        </Sticky>
      </>
  )
}
export default App;
```

:::

### 指定容器内吸顶

:::demo

```tsx
import React, { useRef } from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  const containerTopRef = useRef(null)
   return(
    <>
      <div
        ref={containerTopRef}
        style={{ height: '600px' }}
      >
        <Sticky container={containerTopRef} threshold={57}>
          <Button type="info" style={{ marginLeft: '100px' }}>
            指定容器内吸顶
          </Button>
        </Sticky>
      </div>
    </>
   )
}
export default App;
```

:::

### 吸底距离

:::demo

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
   return(
    <>
      <Sticky threshold={0} position="bottom">
        <Button type="primary">距离底部0px</Button>
      </Sticky>
    </>
   )
}
export default App;
```

:::

## Sticky

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 吸附位置 | `top` \| `bottom` | `top` |
| threshold | 距离，当 position 为 top 时，设置的是 top | `number` | `0` |
| zIndex | 吸附时的层级 | `number` | `2000` |
| container | 容器的 ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | 吸附状态改变时触发 | `(val: boolean) => void` | `-` |
