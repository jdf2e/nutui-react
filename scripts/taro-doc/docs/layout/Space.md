---
sidebar_class_name: hasIcon
---

# Space组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

#

元素排列中保持相同的宽度。

### 引入

```tsx
import { Space } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Space, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Space>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
}
export default Demo1
```

### 换行

```tsx
import React from 'react'
import { Space, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Space wrap>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
      <Button>按钮4</Button>
      <Button>按钮5</Button>
      <Button>按钮6</Button>
    </Space>
  )
}
export default Demo2
```

### 垂直

```tsx
import React from 'react'
import { Space, Button } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Space direction="vertical">
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
}
export default Demo3
```

### 间距大小

```tsx
import React from 'react'
import { Space, Button, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <ConfigProvider
      theme={{
        nutuiSpaceGap: '20px',
      }}
    >
      <Space direction="vertical">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    </ConfigProvider>
  )
}
export default Demo4
```

### 主轴对齐方式

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Space, Button } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Space justify="start" wrap>
      <Button>按钮1</Button>
      <View>
        <Button block style={{ marginBottom: 5 }}>
          按钮2
        </Button>
        <Button block>按钮2</Button>
      </View>
      <View>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block>按钮3</Button>
      </View>
    </Space>
  )
}
export default Demo5
```

### 交叉轴对齐方式

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Space, Button } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <Space align="end" wrap>
      <Button>按钮1</Button>
      <View>
        <Button block style={{ marginBottom: 5 }}>
          按钮2
        </Button>
        <Button block>按钮2</Button>
      </View>
      <View>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block style={{ marginBottom: 5 }}>
          按钮3
        </Button>
        <Button block>按钮3</Button>
      </View>
    </Space>
  )
}
export default Demo6
```

## Space

### Props

| 属性 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| direction | 间距方向 | `'vertical'｜ 'horizontal'` | `'horizontal'` |
| align | 交叉轴对齐方式 | `'start'｜'end'｜'center'｜'baseline'` | `-` |
| justify | 主轴对齐方式 | `'start' ｜ 'end' ｜ 'center' ｜ 'between' ｜ 'around' ｜ 'evenly' ｜ 'stretch'` | `-` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| :--- | :--- | :--- |
| \--nutui-space-gap | `8px` | 间距大小 |
