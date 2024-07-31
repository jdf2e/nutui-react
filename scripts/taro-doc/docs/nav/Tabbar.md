---
sidebar_class_name: hasIcon
---

# Tabbar 标签栏

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

底部导航常用场景

## 引入

```tsx
import { Tabbar } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo1 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title="首页" icon={<Home size={18} />} value={9} />
    <Tabbar.Item title="分类" icon={<Category size={18} />} />
    <Tabbar.Item title="发现" icon={<Find size={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
    <Tabbar.Item title="我的" icon={<User size={18} />} />
  </Tabbar>
)

export default Demo1
```

### 自定义选中

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo2 = () => (
  <Tabbar defaultValue={2}>
    <Tabbar.Item title="首页" icon={<Home size={18} />} />
    <Tabbar.Item title="分类" icon={<Category size={18} />} />
    <Tabbar.Item title="发现" icon={<Find size={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
    <Tabbar.Item title="我的" icon={<User size={18} />} />
  </Tabbar>
)

export default Demo2
```

### 只配图标

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo3 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item icon={<Home />} />
    <Tabbar.Item icon={<Category />} />
    <Tabbar.Item icon={<Find />} />
    <Tabbar.Item icon={<Cart />} />
    <Tabbar.Item icon={<User />} />
  </Tabbar>
)

export default Demo3
```

### 无图标

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'

const Demo4 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title="首页" value={9} />
    <Tabbar.Item title="分类" dot />
    <Tabbar.Item title="发现" />
    <Tabbar.Item title="购物车" />
    <Tabbar.Item title="我的" />
  </Tabbar>
)

export default Demo4
```

### 徽标提示

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo5 = () => (
  <Tabbar>
    <Tabbar.Item icon={<Home />} title="首页" value={11} />
    <Tabbar.Item title="分类" icon={<Category />} />
    <Tabbar.Item title="发现" icon={<Find />} />
    <Tabbar.Item title="购物车" icon={<Cart />} value={110} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo5
```

### 红点

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo6 = () => (
  <Tabbar>
    <Tabbar.Item title="首页" icon={<Home size={18} />} dot />
    <Tabbar.Item title="分类" icon={<Category size={18} />} />
    <Tabbar.Item title="发现" icon={<Find size={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart size={18} />} dot />
    <Tabbar.Item title="我的" icon={<User size={18} />} />
  </Tabbar>
)

export default Demo6
```

### 自定义颜色

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo7 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <Tabbar.Item title="首页" icon={<Home size={18} />} />
    <Tabbar.Item title="分类" icon={<Category size={18} />} />
    <Tabbar.Item title="发现" icon={<Find size={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
    <Tabbar.Item title="我的" icon={<User size={18} />} />
  </Tabbar>
)

export default Demo7
```

### 可自定义icon个数的tabbar

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Category, Find, Home } from '@nutui/icons-react-taro'

const Demo8 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="分类" icon={<Category />} />
    <Tabbar.Item title="发现" icon={<Find />} />
  </Tabbar>
)

export default Demo8
```

### 固定底部

```tsx
import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo9 = () => (
  <Tabbar fixed>
    <Tabbar.Item title="首页" icon={<Home size={18} />} />
    <Tabbar.Item title="分类" icon={<Category size={18} />} />
    <Tabbar.Item title="发现" icon={<Find size={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
    <Tabbar.Item title="我的" icon={<User size={18} />} />
  </Tabbar>
)

export default Demo9
```

## Tabbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| defaultValue | 默认选中的标签的索引值 | `number` | `0` |
| value | 选中的标签的索引值 | `number` | `-` |
| fixed | 是否固定在页面底部，为 true 时默认开启 safeArea | `boolean` | `false` |
| activeColor | icon激活的颜色 | `string` | `#1989fa` |
| inactiveColor | icon未激活的颜色 | `string` | `#7d7e80` |
| safeArea | 是否开启iphone系列全面屏底部安全区适配 | `boolean` | `false` |
| onSwitch | 切换页签时触发事件 | `(value) => void` | `-` |

## Tabbar.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标签页的标题 | `ReactNode` | `-` |
| icon | 自定义图标 | `ReactNode` | `-` |
| value | 徽标中显示的内容，支持数字、字符和自定义内容 | `ReactNode` | `-` |
| max | value 为数值时，最大值 | `number` | `99` |
| dot | 徽标是否为小点 | `boolean` | `false` |
| top | 徽标的上下偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |
| right | 徽标的左右偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-tabbar-height | 高度 | `50px` |
| \--nutui-tabbar-active-color | 选中颜色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未选中颜色 | `$color-title` |
| \--nutui-tabbar-border-top | 上边框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下边框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 阴影 | `none` |
| \--nutui-tabbar-text-font-size | 标题字体大小 | `$font-size-xs` |
| \--nutui-tabbar-text-large-font-size | 无图标时标题字体大小 | `$font-size-large` |
| \--nutui-tabbar-text-large-font-weight | 无图标时标题字体粗细 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字体行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 标题上外边距 | `3px` |
