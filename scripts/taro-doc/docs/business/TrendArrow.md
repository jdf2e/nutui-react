---
sidebar_class_name: hasIcon
---

# TrendArrow 指标趋势

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

带有箭头指示的百分比数字,用以展示指标趋势

## 引入

```tsx
import { TrendArrow } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <TrendArrow sync={false} value={1} />
      <TrendArrow sync={false} value={-0.2535} />
    </Cell>
  )
}
export default Demo1
```

### 改变文字颜色

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <TrendArrow value={10.2365} />
      <TrendArrow value={-0.2535} />
    </Cell>
  )
}
export default Demo2
```

### 指定小数位

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <TrendArrow digits={1} value={10.2365} />
      <TrendArrow digits={3} value={-0.2535} />
    </Cell>
  )
}
export default Demo3
```

### 箭头在前面

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <TrendArrow left value={0.2535} />
      <TrendArrow left value={-0.2535} />
    </Cell>
  )
}
export default Demo4
```

### 显示正负号

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <TrendArrow symbol value={1} />
      <TrendArrow symbol value={-0.2535} />
    </Cell>
  )
}
export default Demo5
```

### 是否展示0

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <Cell>
      <TrendArrow symbol value={0} />
      <TrendArrow symbol zero value={0} />
    </Cell>
  )
}
export default Demo6
```

### 自定义颜色

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <Cell>
      <TrendArrow value={10.2365} riseColor="rgb(73,143,242)" />
      <TrendArrow value={-0.2535} symbol dropColor="rgb(255, 190, 13)" />
      <TrendArrow
        sync={false}
        value={-0.2535}
        symbol
        color="rgb(39,197,48)"
        dropColor="rgb(255, 190, 13)"
      />
    </Cell>
  )
}
export default Demo7
```

### 自定义图标

```tsx
import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'
import { Success, Failure } from '@nutui/icons-react-taro'

const Demo8 = () => {
  return (
    <Cell>
      <TrendArrow value={10.2365} riseIcon={<Success color="blue" />} />
      <TrendArrow value={-10.2365} dropIcon={<Failure color="red" />} />
    </Cell>
  )
}
export default Demo8
```

## TrendArrow

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 数值，大于0时箭头向上，小于0时箭头向下 | `number` | `-` |
| digits | 小数位精度 | `number` | `2` |
| symbol | 是否显示加减号 | `boolean` | `false` |
| zero | 是否显示 0 | `boolean` | `false` |
| left | 是否在数字左侧显示箭头 | `boolean` | `false` |
| sync | 文字颜色是否与箭头同步 | `boolean` | `true` |
| color | 文字颜色 | `string` | `#333333` |
| riseColor | 向上箭头颜色 | `string` | `#FF0F23` |
| dropColor | 向下箭头颜色 | `string` | `#64b578` |
| riseIcon | 自定义向上箭头icon | `React.ReactNode` | `<TriangleUp/>` |
| dropIcon | 自定义向下箭头icon | `React.ReactNode` | `<TriangleDown/>` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-trendarrow-font-size | 指标趋势的文字大小 | `14px` |
| \--nutui-trendarrow-icon-margin | 指标趋势的文字与图标间距 | `4px` |
