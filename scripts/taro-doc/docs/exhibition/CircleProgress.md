---
sidebar_class_name: hasIcon
---

# CircleProgress 进度条

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

展示操作或任务的当前进度。

## 引入

```tsx
import { CircleProgress } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <CircleProgress percent={20} />
      <CircleProgress percent={60}>60%</CircleProgress>
    </>
  )
}
export default Demo1
```

### 环形进度条自定义样式

```tsx
import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <CircleProgress percent={50} strokeWidth={2} />
      <CircleProgress percent={60} strokeWidth={10} background="#e5e9f2" />
    </>
  )
}
export default Demo2
```

### 环形进度条自定义颜色(支持渐变色)

```tsx
import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062',
}
const Demo3 = () => {
  return (
    <>
      <CircleProgress percent={50} color="#1988fa">
        50%
      </CircleProgress>
      <CircleProgress percent={100} color={gradientColor}>
        100%
      </CircleProgress>
    </>
  )
}
export default Demo3
```

### 环形进度条自定义大小

```tsx
import React from 'react'
import { CircleProgress } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        50%
      </CircleProgress>
    </>
  )
}
export default Demo4
```

### 环形进度条自定义内容

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { CircleProgress } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        <View>3000</View>
        <View style={{ fontSize: '12px', color: 'var(--nutui-black-10)' }}>
          步
        </View>
      </CircleProgress>
    </>
  )
}
export default Demo5
```

### 动态改变环形进度条的进度

```tsx
import React, { useState } from 'react'
import { Button, CircleProgress, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [percent, setPercent] = useState(20)

  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }

  return (
    <>
      <Cell style={{ justifyContent: 'center' }}>
        <CircleProgress percent={percent}>{percent}%</CircleProgress>
      </Cell>
      <Cell
        className="demo-btn"
        radius="0 0 6px 6px"
        style={{ justifyContent: 'center' }}
      >
        <Button type="primary" size="small" onClick={setReduceVal}>
          减少
        </Button>
        <Button type="primary" size="small" onClick={setAddVal}>
          增加
        </Button>
      </Cell>
    </>
  )
}
export default Demo6
```

## CircleProgress

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| percent | 百分比 | `number` \| `string` | `必传项，无默认值` |
| strokeWidth | 圆弧的宽度 | `number` \| `string` | `5` |
| radius | 半径 | `number` \| `string` | `50` |
| color | 圆环进度条颜色，传入对象格式可以定义渐变色 | `Record<string, string> \| string` | `#FF0F23` |
| background | 圆环轨道颜色 | `string` | `#d9d9d9` |
| strokeLinecap | 圆环进度条端点形状 | `butt` \| `round` \| `square` \| `inherit` | `round` |
| clockwise | 是否顺时针展示 | `boolean` | `true` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-circleprogress-primary-color | 环形进度条填充部分的颜色 | `$color-primary` |
| \--nutui-circleprogress-path-color | 环形进度条轨道的颜色 | `#e5e9f2` |
| \--nutui-circleprogress-text-color | 环形进度条轨道内容区的颜色 | `$color-title` |
| \--nutui-circleprogress-text-size | 环形进度条轨道内容区的大小 | `$font-size-large` |
