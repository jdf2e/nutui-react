---
sidebar_class_name: hasIcon
---

# Overlay 遮罩层

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

创建一个遮罩层，通常用于阻止用户进行其他操作

## 引入

```tsx
import { Overlay } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View onClick={handleToggleShow}>点击按钮显示遮罩层</View>
      </Cell>

      <Overlay
        visible={visible}
        onClick={onClose}
        style={{ '--nutui-overlay-zIndex': 2020 }}
        afterShow={() => {
          console.log('afterShow')
        }}
        afterClose={() => {
          console.log('afterClose')
        }}
      />
    </>
  )
}
export default Demo1
```

### 自定义遮罩样式

```tsx
import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View onClick={handleToggleShow}>自定义遮罩样式</View>
      </Cell>

      <Overlay
        visible={visible}
        onClick={onClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
    </>
  )
}
export default Demo2
```

### 设置动画时间

```tsx
import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View onClick={handleToggleShow}>设置动画时间</View>
      </Cell>

      <Overlay
        visible={visible}
        onClick={onClose}
        style={{ '--nutui-overlay-animation-duration': '2.5s' }}
        duration={2500}
        afterShow={() => {
          console.log('afterShow')
        }}
        afterClose={() => {
          console.log('afterClose')
        }}
      />
    </>
  )
}
export default Demo3
```

### 不锁定背景滚动

```tsx
import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View onClick={handleToggleShow}>不锁定背景滚动</View>
      </Cell>

      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
    </>
  )
}
export default Demo4
```

### 嵌套内容

```tsx
import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo5 = () => {
  const [visible, setVisible] = useState(false)

  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View onClick={handleToggleShow}>嵌套内容</View>
      </Cell>

      <Overlay visible={visible} onClick={onClose}>
        <View
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              display: 'flex',
              width: pxTransform(150),
              height: pxTransform(150),
              borderRadius: pxTransform(8),
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            这里是正文
          </View>
        </View>
      </Overlay>
    </>
  )
}
export default Demo5
```

### 点击遮罩不关闭

```tsx
import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo6 = () => {
  const [visible, setVisible] = useState(false)
  const wrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const contentStyle = {
    display: 'flex',
    width: pxTransform(150),
    height: pxTransform(150),
    borderRadius: pxTransform(8),

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  }
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View onClick={handleToggleShow}>点击遮罩不关闭</View>
      </Cell>
      <Overlay visible={visible} closeOnOverlayClick={false}>
        <View style={wrapperStyle}>
          <View style={contentStyle} onClick={onClose}>
            这里是正文
          </View>
        </View>
      </Overlay>
    </>
  )
}
export default Demo6
```

## Overlay

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| visible | 当前组件是否显示 | `boolean` | `false` |
| duration | 动画时长，单位毫秒 | `number` | `300` |
| lockScroll | 背景是否锁定 | `boolean` | `true` |
| zIndex | 设置组件页面层级 | `number` | `1000` |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | `true` |
| onClick | 点击时触发 | `event: Event` | `-` |
| afterClose | 完全关闭后触发 | `() => void` | `-` |
| afterShow | 完全展示后触发 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-overlay-bg-color | 遮罩层背景颜色 | `$color-mask` |
| \--nutui-overlay-zIndex | overlay 的 z-index | `1000` |
| \--nutui-overlay-content-bg-color | 遮罩层嵌套内容背景颜色 | `$white` |
| \--nutui-overlay-content-color | 遮罩层嵌套内容字体颜色 | `$color-title` |
| \--nutui-overlay-animation-duration | 遮罩层动画延时的时长 | `0.3s` |
