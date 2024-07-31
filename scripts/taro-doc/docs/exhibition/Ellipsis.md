---
sidebar_class_name: hasIcon
---

# Ellipsis组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

展示空间不足时，隐去部分内容并用“...”替代。

## 引入

```tsx
import { Ellipsis } from '@dongdesign/ui'
```

## 示例代码

### 头部省略

```tsx
import React from 'react'
import { Ellipsis, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
      <Ellipsis content={content} direction="start" />
    </Cell>
  )
}
export default Demo1
```

### 尾部省略

```tsx
import React from 'react'
import { Ellipsis, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
      <Ellipsis content={content} direction="end" />
    </Cell>
  )
}
export default Demo2
```

### 中间省略

```tsx
import React from 'react'
import { Ellipsis, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
      <Ellipsis content={content} direction="middle" />
    </Cell>
  )
}
export default Demo3
```

### 多行省略

```tsx
import React from 'react'
import { Ellipsis, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
      <Ellipsis content={content} direction="start" rows="3" />
    </Cell>
  )
}
export default Demo4
```

### 展开收起

```tsx
import React from 'react'
import { Ellipsis, Cell } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo5 = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <>
      <Cell>
        <Ellipsis
          content={content}
          onClick={() => Taro.showToast({ title: 'Clicked!' })}
          onChange={(type) => Taro.showToast({ title: type })}
          direction="start"
          expandText="展开"
          collapseText="收起"
        />
      </Cell>
      <Cell>
        <Ellipsis
          content={content}
          direction="middle"
          expandText="展开"
          collapseText="收起"
        />
      </Cell>
      <Cell>
        <Ellipsis
          content={content}
          direction="end"
          rows="3"
          expandText="展开"
          collapseText="收起"
        />
      </Cell>
    </>
  )
}
export default Demo5
```

### 自定义宽度

```tsx
import React from 'react'
import { Ellipsis, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
      <Ellipsis content={content} direction="end" width={100} />
    </Cell>
  )
}
export default Demo6
```

## Ellipsis

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| content | 文本内容 | `string` | `-` |
| direction | 省略位置 | `start` \| `end` \| `middle` | `end` |
| rows | 展示几行 | `number` | `1` |
| expandText | 展开操作的文案 | `string` | `-` |
| collapseText | 收起操作的文案 | `string` | `-` |
| symbol | 省略的符号 | `string` | `...` |
| lineHeight | 容器的行高 | `string` \| `number` | `20` |
| onClick | 文本点击是触发 | `() => void` | `-` |
| onChange | 点击展开收起时触发 | `(type: string) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按钮颜色 | `#3460fa` |
