---
sidebar_class_name: hasIcon
---

# ActionSheet 动作面板

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

从底部弹出的动作菜单面板。

## 引入

```tsx
import { ActionSheet } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  const [val, setVal] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const options = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]

  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>基础用法</span>
        <View style={{ marginInlineStart: '10px', color: '#999' }}>{val}</View>
      </Cell>
      <ActionSheet
        title="标题"
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo1
```

### 展示取消按钮

```tsx
import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [val, setVal] = useState('')
  const options = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]
  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>展示取消按钮</span>
        <View style={{ marginInlineStart: '10px', color: '#999' }}>{val}</View>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo2
```

### 展示描述信息

```tsx
import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [val, setVal] = useState('')
  const options: Record<string, string>[] = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
      description: '删除后无法恢复',
    },
  ]
  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>展示描述信息</span>
        <View style={{ marginInlineStart: '10px', color: '#999' }}>{val}</View>
      </Cell>
      <ActionSheet
        visible={isVisible}
        title="标题"
        description="请选择操作动作"
        cancelText="取消"
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo3
```

### 选项状态

```tsx
import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const options: Record<string, string | boolean>[] = [
    {
      name: '着色选项',
      danger: true,
    },
    {
      name: '禁用选项',
      disabled: true,
    },
  ]
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>选项状态</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        options={options}
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo4
```

### 自定义内容

```tsx
import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo5 = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>自定义内容</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      >
        <View style={{ textAlign: 'left', padding: '10px 20px' }}>
          新建表格
        </View>
        <View style={{ textAlign: 'left', padding: '10px 20px' }}>
          新建文档
        </View>
      </ActionSheet>
    </>
  )
}
export default Demo5
```

### 自定义key

```tsx
import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const options: Record<string, string | boolean>[] = [
    {
      title: '权限设置',
    },
    {
      title: '重命名',
    },
    {
      title: '删除',
      disabled: true,
    },
  ]
  const optionKey = {
    name: 'title',
  }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>自定义key</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        optionKey={optionKey}
        options={options}
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo6
```

## ActionSheet

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| visible | 遮罩层可见 | `boolean` | `false` |
| title | 设置列表面板标题 | `string` | `-` |
| description | 设置列表面板副标题/描述 | `string` | `-` |
| options | 列表项 | `Array` | `[]` |
| optionKey | 列表项的自定义设置 | `{ [key: string]: string }` | `-` |
| cancelText | 取消文案 | `string` | `取消` |
| onSelect | 选择之后触发 | `(item: any, index: number) => void` | `-` |
| onCancel | 点击取消文案时触发 | `() => void` | `-` |

### options

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 列表项的标题key值 | `string` | `-` |
| description | 列表项的描述key值 | `string` | `-` |
| danger | 高亮颜色 | `string` | `$color-primary` |
| disabled | 禁用状态 | `string` | `$disabled-color` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-actionsheet-background-color | 背景色 | `$color-background-overlay` |
| \--nutui-actionsheet-border-radius | 列表和取消按钮圆角 | `0` |
| \--nutui-actionsheet-border-color | 标题和取消位置的border色值 | `#f6f6f6` |
| \--nutui-actionsheet-item-text-align | 列表项的文字对齐方式 | `center` |
| \--nutui-actionsheet-item-border-bottom | 列表项的底部border | `none` |
| \--nutui-actionsheet-item-line-height | 列表项行高 | `24px` |
| \--nutui-actionsheet-item-color | 列表项字色 | `$color-title` |
| \--nutui-actionsheet-item-danger | 列表项danger字色 | `$color-primary` |
