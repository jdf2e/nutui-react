# Menu 菜单

## 介绍

向下弹出的菜单列表

## 安装

```tsx
import { Menu } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu
          onClose={(i: number) => console.log('onClose', i)}
          onOpen={(i: number) => console.log('onOpen', i)}
        >
          <Menu.Item options={options} value={0} />
          <Menu.Item options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 受控

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  const [stateOne, setStateOne] = useState(0)
  const [stateTwo, setStateTwo] = useState('a')
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={stateOne} onChange={(v) => setStateOne(v.value)} />
          <Menu.Item options={options1} value={stateTwo} onChange={(v) => setStateTwo(v.value)} />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定义菜单内容

使用实例上的 toggle 方法可以手动关闭弹框。

:::demo

```tsx
import React, { useRef, useState } from 'react'
import { Menu, Button } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  const itemRef = useRef(null)
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} />
          <Menu.Item title="筛选" ref={itemRef}>
            <div>自定义内容</div>
            <Button onClick={() => itemRef.current.toggle(false)}>确认</Button>
          </Menu.Item>
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 一行两列

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])

  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} columns={2} />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定义选中态颜色

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu activeColor="green">
          <Menu.Item options={options} value={0} />
          <Menu.Item options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定义图标

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';
import { TriangleDown, Success } from '@nutui/icons-react'

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu icon={<TriangleDown />}>
          <Menu.Item options={options} value={0} icon={<Success />} />
          <Menu.Item options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 向上展开

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} direction="up" />
          <Menu.Item options={options1} value="a" direction="up" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 禁用菜单

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} disabled />
          <Menu.Item options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

## Menu

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeColor | 选项的选中态图标颜色 | `string` | `#F2270C` |
| closeOnOverlayClick | 是否在点击遮罩层后关闭菜单 | `boolean` | `true` |
| lockScroll | 背景是否锁定 | `boolean` | `true` |
| scrollFixed | 滚动后是否固定，可设置固定位置 | `boolean` \| `string` \| `number` | `true` |
| icon | 自定义标题图标 | `React.ReactNode` | `-` |
| onOpen | menu 展开触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |
| onClose | menu 关闭触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |

## Menu.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 菜单项标题 | `string` | `当前选中项文字` |
| options | 选项数组 | `array` | `-` |
| disabled | 是否禁用菜单 | `boolean` | `false` |
| columns | 可以设置一行展示多少列 options | `number` | `1` |
| closeOnClickAway | 点击空白处关闭菜单 | `boolean` | `true` |
| icon | 自定义选项图标 | `React.ReactNode` | `Check` |
| direction | 菜单展开方向，可选值为up | `string` | `down` |
| onChange | 选择 option 之后触发 | `(event: any) => void` | `-` |

### Ref

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| toggle | 切换菜单展示状态，传 true 为显示，false 为隐藏，不传参为取反 | `show?: boolean` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-menu-bar-line-height | menu标题栏的行高 | `48px` |
| \--nutui-menu-item-font-size | 标题的字号 | `$font-size-2` |
| \--nutui-menu-item-text-color | 标题的颜色 | `$title-color` |
| \--nutui-menu-item-active-text-color | 打开状态的颜色 | `$primary-color` |
| \--nutui-menu-bar-opened-z-index | 打开状态的 z-index | `2001` |
| \--nutui-menu-item-disabled-color | 禁用状态的颜色 | `#969799` |
| \--nutui-menu-title-text-padding-left | 标题的左内边距 | `8px` |
| \--nutui-menu-title-text-padding-right | 标题的右内边距 | `8px` |
| \--nutui-menu-item-content-padding | 菜单选项容器的内边距 | `12px 24px` |
| \--nutui-menu-item-content-max-height | 菜单选项容器的最大高度 | `214px` |
| \--nutui-menu-item-option-padding-top | 菜单选项的顶部内边距 | `12px` |
| \--nutui-menu-item-option-padding-bottom | 菜单选项的底部内边距 | `12px` |
| \--nutui-menu-item-option-i-margin-right | 菜单选项文本与icon的距离 | `6px` |
| \--nutui-menu-bar-box-shadow | 菜单标题栏的阴影 | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| \--nutui-menu-scroll-fixed-top | fix 状态的顶部距离 | `0` |
| \--nutui-menu-scroll-fixed-z-index | fix 状态的z-index | `$mask-z-index` |
| \--nutui-menu-active-item-font-weight | 选中状态的字重 | `500` |
| \--nutui-menu-item-content-bg-color | 菜单选项容器的背景色 | `$gray6` |