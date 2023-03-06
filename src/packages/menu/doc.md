# Menu 菜单

### 介绍

向下弹出的菜单列表

### 安装

``` javascript
// react
import { Menu, MenuItem } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, {useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
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
import { Menu, MenuItem, Button } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} />
          <MenuItem title="筛选" ref={itemRef}>
            <div>自定义内容</div>
            <Button onClick={() => itemRef.current.toggle(false)}>确认</Button>
          </MenuItem>
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} columns={2} />
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
        <Menu titleIcon="joy-smile">
          <MenuItem options={options} value={0} optionsIcon="success" />
          <MenuItem options={options1} value="a" />
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} direction="up" />
          <MenuItem options={options1} value="a" direction="up" />
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} disabled />
          <MenuItem options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

## API

### Menu Props

| 参数                  | 说明                           | 类型                    | 默认值  |
|---------------------|--------------------------------|-------------------------|---------|
| activeColor         | 选项的选中态图标颜色           | string                  | `#F2270C` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单     | boolean                 | `true`    |
| lockScroll          | 背景是否锁定                   | boolean                 | `true`    |
| scrollFixed         | 滚动后是否固定，可设置固定位置                   | boolean \| string \| number                 | `true`    |
| titleIcon           | 自定义标题图标                 | string                  | -       |

### MenuItem Props

| 参数                          | 说明                                    | 类型    | 默认值           |
|-------------------------------|-----------------------------------------|---------|------------------|
| title                         | 菜单项标题                              | string  | 当前选中项文字   |
| options                       | 选项数组                                | Array   | -                |
| disabled                      | 是否禁用菜单                            | boolean | `false`            |
| columns                          | 可以设置一行展示多少列 options          | number  | `1`                |
| optionsIcon          | 自定义选项图标                          | string  | `Check`          |
| direction            | 菜单展开方向，可选值为up                | string  | `down`           |
| activeClassName    | 选项选中时自定义标题样式类              | string  | -                |
| inactiveClassName  | 选项非选中时自定义标题样式类            | string  | -                |
| fontClassName       | 自定义icon 字体基础类名                 | string  | `nutui-iconfont` |
| iconClassPrefix          | 自定义icon 类名前缀，用于使用自定义图标 | string  | `nut-icon`       |

### MenuItem Events

| 事件名      | 说明                 | 回调参数     |
|----------|----------------------|--------------|
| onChange | 选择 option 之后触发 | 选择的 value |

### MenuItem API

| 事件名 | 说明                 | 回调参数     |
|-----|----------------------|--------------|
| toggle   | 切换菜单展示状态，传 true 为显示，false 为隐藏，不传参为取反 | `show?: boolean` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-menu-bar-line-height | `48px` |
| --nutui-menu-item-font-size | `$font-size-2` |
| --nutui-menu-item-text-color | `$title-color` |
| --nutui-menu-item-active-text-color | `$primary-color` |
| --nutui-menu-bar-border-bottom-color | `#eaf0fb` |
| --nutui-menu-bar-opened-z-index | `2001` |
| --nutui-menu-item-disabled-color | `#969799` |
| --nutui-menu-title-text-padding-left | `8px` |
| --nutui-menu-title-text-padding-right | `8px` |
| --nutui-menu-item-content-padding | `12px 24px` |
| --nutui-menu-item-content-max-height | `214px` |
| --nutui-menu-item-option-padding-top | `12px` |
| --nutui-menu-item-option-padding-bottom | `12px` |
| --nutui-menu-item-option-i-margin-right | `6px` |
| --nutui-menu-bar-box-shadow | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| --nutui-menu-scroll-fixed-top | `0` |
| --nutui-menu-scroll-fixed-z-index | `$mask-z-index` |
| --nutui-menu-active-item-font-weight | `500` |
| --nutui-menu-item-content-bg-color | `$gray6` |
