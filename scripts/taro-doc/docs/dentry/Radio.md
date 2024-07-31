---
sidebar_class_name: hasIcon
---

# Radio 单选按钮

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于在一组备选项中进行单选

## 引入

```tsx
import { Radio } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Radio, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell.Group>
      <Cell>
        <Radio defaultChecked>选项1</Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked labelPosition="left">
          选项1
        </Radio>
      </Cell>
      <Cell>
        <Radio defaultChecked disabled>
          选项1
        </Radio>
      </Cell>
    </Cell.Group>
  )
}
export default Demo1
```

### Group 模式下禁用某一项

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio disabled value="1">
        选项1
      </Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
  )
}
export default Demo2
```

### Group 模式下禁用全部选项

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Radio.Group disabled defaultValue="1">
      <Radio value="1">选项1</Radio>
      <Radio value="2">选项2</Radio>
      <Radio value="3">选项3</Radio>
    </Radio.Group>
  )
}
export default Demo3
```

### Group 模式下禁用某一项

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio shape="button" value="1" disabled>
        选项1
      </Radio>
      <Radio shape="button" value="2">
        选项2
      </Radio>
      <Radio shape="button" value="3">
        选项3
      </Radio>
    </Radio.Group>
  )
}
export default Demo4
```

### Group 模式下禁用全部选项

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Radio.Group disabled defaultValue="1">
      <Radio shape="button" value="1">
        选项1
      </Radio>
      <Radio shape="button" value="2">
        选项2
      </Radio>
      <Radio shape="button" value="3">
        选项3
      </Radio>
    </Radio.Group>
  )
}
export default Demo5
```

## 水平使用

```tsx
import React from 'react'
import { Radio, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Radio.Group defaultValue="1" direction="horizontal">
          <Radio value="1">选项1</Radio>
          <Radio disabled value="2">
            选项2
          </Radio>
          <Radio value="3">选项3</Radio>
        </Radio.Group>
      </Cell>
      <Cell>
        <Radio.Group
          defaultValue="1"
          labelPosition="left"
          direction="horizontal"
        >
          <Radio value="1">选项1</Radio>
          <Radio disabled value="2">
            选项2
          </Radio>
          <Radio value="3">选项3</Radio>
        </Radio.Group>
      </Cell>
      <Cell>
        <Radio.Group defaultValue="1" direction="horizontal">
          <Radio shape="button" value="1">
            选项1
          </Radio>
          <Radio shape="button" disabled value="2">
            选项2
          </Radio>
          <Radio shape="button" value="3">
            选项3
          </Radio>
        </Radio.Group>
      </Cell>
    </>
  )
}
export default Demo6
```

## 自定义尺寸

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <Radio
      style={{
        '--nut-icon-width': '12px',
        '--nutui-icon-height': '12px',
      }}
    >
      自定义尺寸
    </Radio>
  )
}
export default Demo7
```

## 自定义图标

建议 `icon` `activeIcon` 一起修改

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'
import { Checklist } from '@nutui/icons-react-taro'

const Demo8 = () => {
  return (
    <Radio
      icon={<Checklist />}
      activeIcon={<Checklist style={{ color: 'red' }} />}
    >
      自定义图标
    </Radio>
  )
}
export default Demo8
```

## 自定义图标，通过Group实现列表形式

建议 `icon` `activeIcon` 一起修改

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'
import { Checklist } from '@nutui/icons-react-taro'

const Demo9 = () => {
  return (
    <Radio.Group
      defaultValue="1"
      labelPosition="left"
      style={{ width: '100%' }}
    >
      <Radio
        icon={<Checklist />}
        activeIcon={<Checklist style={{ color: 'red' }} />}
        value="1"
      >
        自定义图标
      </Radio>
      <Radio
        icon={<Checklist />}
        activeIcon={<Checklist style={{ color: 'red' }} />}
        value="2"
      >
        自定义图标
      </Radio>
    </Radio.Group>
  )
}
export default Demo9
```

## 触发事件

```tsx
import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo10 = () => {
  const [checkedValue] = useState(1)
  return (
    <>
      <Radio.Group
        defaultValue={checkedValue}
        onChange={(value) =>
          Taro.showToast({
            icon: 'none',
            title: value.toString(),
          })
        }
      >
        <Radio value={1}>触发事件</Radio>
        <Radio value={2}>触发事件</Radio>
      </Radio.Group>
    </>
  )
}
export default Demo10
```

## 配置 options 渲染单选按钮

```tsx
import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [radioVal, setRadioVal] = useState('1')
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      label: '选项1',
      value: '1',
    },
    {
      label: '选项2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项3',
      value: '3',
    },
  ])
  const handleChange = (v: string | number) => {
    setRadioVal(v.toString())
  }
  return (
    <Radio.Group
      options={optionsDemo1}
      value={radioVal}
      onChange={handleChange}
    />
  )
}
export default Demo11
```

## 设置形状

```tsx
import React from 'react'
import { Radio } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  return (
    <Radio.Group defaultValue={1} shape="button">
      <Radio value={1}>设置形状</Radio>
      <Radio value={2}>设置形状</Radio>
    </Radio.Group>
  )
}
export default Demo12
```

## Radio

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| checked | 指定当前是否选中 | `boolean` | `-` |
| defaultChecked | 初始是否选中 | `boolean` | `-` |
| disabled | 是否禁用选择 | `boolean` | `false` |
| value | 携带的标识值，用于 Group 模式 | `string` \| `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| icon | <a href="#/icon">图标名称</a>，选中前(建议和`activeIcon`一起修改) | `ReactNode` | `'CheckNormal'` |
| activeIcon | <a href="#/icon">图标名称</a>，选中后(建议和`icon`一起修改) | `ReactNode` | `'CheckChecked'` |
| shape | 形状 | `button` \| `round` | `round` |
| onChange | 选中态变化时触发 | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 当前选中项的标识符 | `string` \| `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| disabled | 是否禁用 | `boolean` | `false` |
| shape | 形状 | `button` \| `round` | `-` |
| direction | 使用横纵方向 | `horizontal` \| `vertical` | `vertical` |
| options | 配置 options 渲染单选按钮 | `Array<{ label: string value: string disabled?: boolean }>` | `-` |
| onChange | 值变化时触发 | `(value: string \| number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-radio-icon-font-size | icon字号 | `18px` |
| \--nutui-radio-label-font-size | 字号 | `14px` |
| \--nutui-radio-label-color | 字体颜色 | `$color-title` |
| \--nutui-radio-label-margin-left | label 的左外边距 | `6px` |
| \--nutui-radio-button-font-size | shape为button的字号 | `12px` |
| \--nutui-radio-button-color | 字体颜色 | `$color-text` |
| \--nutui-radio-button-background | shape为button的背景色 | `$color-background` |
| \--nutui-radio-button-active-border | shape为button选中态的边框 | `1px solid $color-primary` |
| \--nutui-radio-button-padding | shape为button的内边距 | `5px 18px` |
| \--nutui-radio-button-border-radius | shape为button的圆角 | `15px` |
| \--nutui-radiogroup-radio-margin | Group模式下每个 radio 的右侧边距 | `20px` |
| \--nutui-radiogroup-radio-margin-bottom | Group模式下每个 radio 的底部边距 | `5px` |
| \--nutui-radiogroup-radio-label-margin | Group模式下每个 radio 中的 label 外边距 | `0 5px 0 5px` |
