---
sidebar_class_name: hasIcon
---

# Rate 评分

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于快速的评级操作，或对评价进行展示。

## 引入

```tsx
import { Rate } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return <Rate defaultValue={3} />
}
export default Demo1
```

### 受控方式

```tsx
import React, { useState } from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [score, setScore] = useState(2)
  return <Rate value={score} onChange={(value) => setScore(value)} />
}
export default Demo2
```

### 半星

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return <Rate allowHalf defaultValue={3.5} />
}
export default Demo3
```

### 自定义 icon

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'
import { HeartFill } from '@nutui/icons-react-taro'

const Demo4 = () => {
  return <Rate checkedIcon={<HeartFill />} defaultValue={3} />
}
export default Demo4
```

### 自定义数量

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return <Rate count={6} defaultValue={3} />
}
export default Demo5
```

### 最少选中数量（支持半星）

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return <Rate count={5} defaultValue={2} min={3} />
}
export default Demo6
```

### 自定义颜色

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'
import { HeartFill } from '@nutui/icons-react-taro'

const Demo7 = () => {
  return (
    <Rate
      defaultValue={3}
      checkedIcon={<HeartFill color="rgb(255, 200, 0)" />}
    />
  )
}
export default Demo7
```

### 禁用状态

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  return <Rate disabled defaultValue={3} />
}
export default Demo8
```

### 只读状态

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return <Rate defaultValue={3} readOnly />
}
export default Demo9
```

### 绑定事件

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const onChange = (val: any) => {
    console.log(val)
  }
  return <Rate defaultValue={3} onChange={onChange} />
}
export default Demo10
```

### 滑动选择

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  return (
    <>
      <Rate defaultValue={3} allowHalf touchable />
    </>
  )
}
export default Demo11
```

### 滑动事件

```tsx
import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  const handleTouchEnd = (event: any, val: any) => {
    console.log(event, val)
  }
  return (
    <>
      <Rate defaultValue={3} touchable onTouchEnd={handleTouchEnd} />
    </>
  )
}
export default Demo12
```

## Rate

## Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| defaultValue | 非受控的 star 默认值 | `number` | `0` |
| value | 受控的 star 数值 | `number` | `0` |
| count | star 总数 | `number` | `5` |
| min | 最少选中star数量 | `number` | `0` |
| uncheckedIcon | 使用图标(未选中) | `ReactNode` | `star-n` |
| checkedIcon | 使用图标(选中) | `ReactNode` | `star-n` |
| allowHalf | 是否半星 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| touchable | 是否允许滑动选择 ｜ `boolean` | `false` |
| onChange | 当前 star 数修改时触发 | `(value: number) => void` | `-` |
| onTouchEnd | touch 滑动结束时触发 | `(event: TouchEvent, value: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-rate-item-margin | 间距 | `14px` |
| \--nutui-rate-icon-color | icon 激活颜色 | `$color-primary` |
| \--nutui-rate-icon-inactive-color | icon 未激活颜色 | `$color-text-disabled` |
