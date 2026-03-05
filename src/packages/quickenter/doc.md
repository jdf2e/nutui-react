# QuickEnter 快捷入口

## 介绍

快捷入口组件，底部弹出的快捷导航列表。

## 引入

```tsx
import { QuickEnter } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

```tsx
import React, { useState } from 'react'
import { QuickEnter, Cell, Toast } from '@nutui/nutui-react'
import {
  Message,
  Home,
  Search,
  Cart,
  Edit,
  Shop,
  Del,
} from '@nutui/icons-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: '消息', icon: <Message /> },
    { title: '首页', icon: <Home /> },
    { title: '搜索', icon: <Search /> },
    { title: '购物车', icon: <Cart /> },
    { title: '功能反馈', icon: <Edit /> },
    { title: '我的常购', icon: <Shop /> },
    { title: '订单回收站', icon: <Del /> },
  ]

  const onChange = (item: any) => {
    Toast.show(`Clicked: ${item.title}`)
  }

  return (
    <>
      <Cell title="点击查看快捷入口" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
        onChange={onChange}
      />
    </>
  )
}
export default Demo
```

### 自定义关闭图标

```tsx
import React, { useState } from 'react'
import { QuickEnter, Cell } from '@nutui/nutui-react'
import { Message, Home, Search, Cart, ArrowUp } from '@nutui/icons-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: '消息', icon: <Message />, badge: 8 },
    { title: '首页', icon: <Home /> },
    { title: '搜索', icon: <Search /> },
    { title: '购物车', icon: <Cart /> },
  ]

  return (
    <>
      <Cell title="自定义关闭图标" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        style={{ '--nutui-quickenter-bg-color': '#fff' }}
        closeIcon={<ArrowUp width={12} height={12} />}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | `boolean` | `false` |
| title | 标题 | `ReactNode` | `快捷入口` |
| options | 选项列表 | `QuickEnterOption[]` | `[]` |
| closeIcon | 自定义关闭图标 | `ReactNode` | `-` |
| popupProps | 透传给 Popup 组件的属性 | `PopupProps` | `{}` |
| closeOnOverlayClick | 是否在点击遮罩层后关闭 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClose | 关闭时触发 | `-` |
| onChange | 点击选项时触发 | `item: QuickEnterOption, index: number` |

### QuickEnterOption 数据结构

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 选项标题 | `string` | `-` |
| icon | 选项图标 | `ReactNode` | `-` |
| type | 选项类型 | `string` | `-` |
| url | 跳转链接 | `string` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，详情请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-quickenter-bg-color | `$f5f5f5` |
| --nutui-quickenter-max-height | `256px` |
| --nutui-quickenter-title-font-size | `$font-size-base` |
| --nutui-quickenter-title-color | `$color-title` |
| --nutui-quickenter-item-title-font-size | `$font-size-s` |
| --nutui-quickenter-item-title-color | `$color-title` |
| --nutui-quickenter-item-icon-bg-color | `$white` |
| --nutui-quickenter-item-icon-color | `$color-title` |
| --nutui-quickenter-close-icon-size | `12px` |
| --nutui-quickenter-close-icon-color | `#808080` |
