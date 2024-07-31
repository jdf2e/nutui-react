---
sidebar_class_name: hasIcon
---

# Divider 分割线

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于将内容分隔为多个区域。

## 引入

```tsx
import { Divider } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

默认渲染一条水平分割线。

```tsx
import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <Divider />
    </Cell>
  )
}
export default Demo1
```

### 展示文本

通过插槽在可以分割线中间插入内容。

```tsx
import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <Divider>文本</Divider>
    </Cell>
  )
}
export default Demo2
```

### 内容位置

通过 contentPosition 指定内容所在位置。

```tsx
import React from 'react'
import { Divider, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <>
      <Cell>
        <Divider contentPosition="left">文本</Divider>
      </Cell>
      <Cell>
        <Divider contentPosition="right">文本</Divider>
      </Cell>
    </>
  )
}
export default Demo3
```

### 虚线

```tsx
import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <Divider style={{ borderStyle: 'dashed' }}>文本</Divider>
    </Cell>
  )
}
export default Demo4
```

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

```tsx
import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'
import { rn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
  return (
    <Cell>
      <Divider
        style={{
          color: '#1989fa',
          paddingLeft: pxTransform(16),
          paddingRight: pxTransform(16),
          borderColor: '#1989fa',
          borderStyle: rn() ? 'solid' : 'dashed',
        }}
      >
        文本
      </Divider>
    </Cell>
  )
}
export default Demo5
```

### 垂直分割线

```tsx
import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'

const Demo6 = () => {
  return (
    <Cell align="center">
      <Text>文本</Text>
      <Divider direction="vertical" />
      <Text style={{ color: '#1989fa' }}>链接</Text>
      <Divider direction="vertical" />
      <Text style={{ color: '#1989fa' }}>链接</Text>
    </Cell>
  )
}
export default Demo6
```

## Divider

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| contentPosition | 内容位置 | `left` \| `center` \| `right` | `center` |
| direction | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-divider-margin | 分割线整体内容的margin值 | `16px 0` |
| \--nutui-divider-border-color | 分割线的边框色值 | `$color-border` |
| \--nutui-divider-text-font-size | 分割线整体内容的font-size大小 | `$font-size-base` |
| \--nutui-divider-text-color | 分割线整体内容的颜色 | `$color-title` |
| \--nutui-divider-line-height | 分割线的行高 | `1px` |
| \--nutui-divider-spacing | 左边分割线与文案的间隔值 | `8px` |
| \--nutui-divider-vertical-height | 垂直分割线的高度 | `12px` |
| \--nutui-divider-vertical-margin | 垂直分割线的margin值 | `0 8px` |
