---
sidebar_class_name: hasIcon
---

# Animate 动画/动效

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

给子元素添加动画效果

## 引入

```tsx
import { Animate } from '@dongdesign/ui'
```

## 示例代码

### 点击触发

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Animate, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const style = {
    marginBottom: '10px',
  }
  return (
    <>
      <View style={style}>
        <Animate type="slide-right" action="click">
          <Button type="primary">由右向左划入</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="slide-left" action="click">
          <Button type="primary">由左向右划入</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="slide-top" action="click">
          <Button type="primary">由上至下划入</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="slide-bottom" action="click">
          <Button type="primary">由下至上划入</Button>
        </Animate>
      </View>
    </>
  )
}

export default Demo1
```

### 循环动画

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Animate, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const style = {
    marginBottom: '10px',
  }
  return (
    <>
      <View style={style}>
        <Animate type="shake" loop>
          <Button type="primary">shake-抖动</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="ripple" loop>
          <Button type="primary">ripple-心跳</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="breath" loop>
          <Button type="primary">breath-呼吸灯</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="twinkle" loop>
          <Button type="primary">twinkle-水波</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="flicker" loop>
          <Button type="primary">flicker-擦亮</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="jump" loop>
          <Button type="primary">jump-跳跃</Button>
        </Animate>
      </View>

      <View style={style}>
        <Animate type="float" loop>
          <Button type="primary">float-漂浮</Button>
        </Animate>
      </View>
    </>
  )
}

export default Demo2
```

## Animate

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 动画类型，见下方type值说明 | `AnimateType` | `shake` |
| action | 触发方式，'initial'初始化执行; 'click'点击执行 | `initial` \| `click` | `initial` |
| loop | 是否循环执行。true循环执行;false执行一次 | `boolean` | `false` |
| onClick | 点击元素时触发 | `event: Event` | `-` |

### AnimateType值说明

| 序号 | 参数名称 | 参数说明 |
| :--- | :--- | :--- |
| 1 | shake | 抖动，建议loop为true |
| 2 | ripple | 不循环则是放大后缩小，循环则是心跳 |
| 3 | breath | 呼吸灯，建议loop为true |
| 4 | float | 漂浮，建议loop为true |
| 5 | slide-right | 由右向左划入 |
| 6 | slide-left | 由左向右划入 |
| 7 | slide-top | 由上至下划入 |
| 8 | slide-bottom | 由下至上划入 |
| 9 | jump | 跳跃，建议loop为true |
| 10 | twinkle | 水波，建议loop为true |
| 11 | flicker | 擦亮按钮，建议loop为true |
