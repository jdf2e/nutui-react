---
sidebar_class_name: hasIcon
---

# Sticky 组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

效果同 css 中的 position: sticky,对低端浏览器可使用其做兼容

> 支持吸顶、吸底、容器内吸顶效果，也可以使用官方sticky组件 https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/extended/component-plus/sticky.html

## 引入

```tsx
import { Sticky } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react-taro'
import { getEnv } from '@tarojs/taro'

const Demo1 = () => {
  const handleChange = (val: boolean) => {
    console.log('吸顶状态发生了改变,当前fixed为', val)
  }
  return (
    <>
      <Sticky
        threshold={getEnv() === 'WEB' ? 60 : 0}
        onChange={(val: boolean) => handleChange(val)}
      >
        <Button type="primary">吸顶</Button>
      </Sticky>
    </>
  )
}
export default Demo1
```

### 吸顶距离

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <Sticky threshold={120}>
        <Button type="primary">距离顶部120px</Button>
      </Sticky>
    </>
  )
}
export default Demo2
```

### 指定容器内吸顶

```tsx
import React, { useRef } from 'react'
import { View } from '@tarojs/components'
import { Button, Sticky } from '@nutui/nutui-react-taro'
import { getEnv } from '@tarojs/taro'

const Demo3 = () => {
  const containerTopRef = useRef(null)
  return (
    <>
      <View ref={containerTopRef} style={{ height: '600px' }}>
        <Sticky
          container={containerTopRef}
          threshold={getEnv() === 'WEB' ? 60 : 0}
        >
          <Button type="info" style={{ marginLeft: '100px' }}>
            指定容器内吸顶
          </Button>
        </Sticky>
      </View>
    </>
  )
}
export default Demo3
```

### 吸底距离

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <>
      <Sticky threshold={0} position="bottom">
        <Button type="primary">距离底部0px</Button>
      </Sticky>
    </>
  )
}
export default Demo4
```

## Sticky

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| position | 吸附位置 | `top` \| `bottom` | `top` |
| threshold | 距离，当 position 为 top 时，设置的是 top | `number` | `0` |
| zIndex | 吸附时的层级 | `number` | `2000` |
| container | 容器的 ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | 吸附状态改变时触发 | `(val: boolean) => void` | `-` |
