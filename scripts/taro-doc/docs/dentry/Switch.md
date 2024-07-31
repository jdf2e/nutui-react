---
sidebar_class_name: hasIcon
---

# Switch 开关

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用来打开或关闭选项。

## 引入

```tsx
import { Switch } from '@dongdesign/ui'
```

## 示例代码

### 非受控

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <Switch defaultChecked />
    </Cell>
  )
}
export default Demo1
```

### 受控

```tsx
import React, { useState } from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo2 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)

  const onChangeAsync = (value: boolean, event: any) => {
    Taro.showToast({ title: `2秒后异步触发 ${value}` })
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <Cell>
      <Switch
        checked={checkedAsync}
        onChange={(value, event) => onChangeAsync(value, event)}
      />
    </Cell>
  )
}
export default Demo2
```

### 禁用状态

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <Switch defaultChecked disabled />
    </Cell>
  )
}
export default Demo3
```

### onChange事件

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo4 = () => {
  const onChange = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    Taro.showToast({ title: `触发了onChange事件，开关状态：${value}` })
  }
  return (
    <Cell>
      <Switch
        defaultChecked
        onChange={(value, event) => onChange(value, event)}
      />
    </Cell>
  )
}
export default Demo4
```

### 自定义颜色

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Switch
        defaultChecked
        style={{
          '--nutui-switch-open-background-color': 'blue',
          '--nutui-switch-close-line-background-color': '#ebebeb',
        }}
      />
    </Cell>
  )
}
export default Demo5
```

### 支持文字

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <Cell>
      <Switch defaultChecked activeText="开" inactiveText="关" />
    </Cell>
  )
}
export default Demo6
```

## Switch

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| defaultChecked | 开关状态，非受控 | `boolean` | `false` |
| checked | 开关状态，受控 | `boolean` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| activeText | 打开时文字描述 | `string` | `-` |
| inactiveText | 关闭时文字描述 | `string` | `-` |
| onChange | 切换开关时触发 | `onChange:(value: boolean, event: Event)` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-switch-close-background-color | 开关关闭状态背景颜色 | `$color-text-disabled` |
| \--nutui-switch-open-background-color | 开关打开状态背景颜色 | `$color-primary` |
| \--nutui-switch-close-disabled-background-color | 开关关闭时的禁用时的背景颜色 | `$color-background` |
| \--nutui-switch-open-disabled-background-color | 开关打开时的禁用时的背景颜色 | `$color-primary-disabled` |
| \--nutui-switch-width | 开关宽度 | `40px` |
| \--nutui-switch-height | 开关高度 | `24px` |
| \--nutui-switch-line-height | 开关行高 | `24px` |
| \--nutui-switch-border-radius | 开关圆角大小 | `8px` |
| \--nutui-switch-inside-width | 开关内部按钮宽度 | `20px` |
| \--nutui-switch-inside-height | 开关内部按钮高度 | `20px` |
| \--nutui-switch-inside-open-transform | 开关打开状态内部按钮位置 | `translateX(18px)` |
| \--nutui-switch-inside-close-transform | 开关关闭状态内部按钮位置 | `translateX(2px)` |
| \--nutui-switch-close-line-bg-color | 开关关闭状态内部按钮线条颜色 | `#ffffff` |
