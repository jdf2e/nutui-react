# HoverButton

## 介绍

若干功能按钮，通常出现在页面右下角，悬浮且位置固定，不随页面滚动出现位置的偏移； 可根据实际功能替换图标。

## 安装

```tsx
import { HoverButton } from '@dongdesign/ui'
```

## 代码演示

### 基础用法

```tsx
/**
 * 基础用法
 */
import React from 'react'
import { HoverButton } from '@dongdesign/ui'
import { ITouchEvent } from '@tarojs/components'
import { Cart } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    console.log('点击事件')
  }

  return <HoverButton icon={<Cart />} onClick={testClick} />
}
export default Demo1

```

### 多个按钮

```tsx
/**
 * 多个按钮
 */
import React from 'react'
import { HoverButton } from '@dongdesign/ui'
import { Cart } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const testClick1 = () => {
    console.log('点击了第 1 个按钮')
  }
  const testClick2 = () => {
    console.log('点击了第 2 个按钮')
  }
  const testClick3 = () => {
    console.log('点击了第 3 个按钮')
  }

  return (
    <HoverButton>
      <HoverButton.Item icon={<Cart />} onClick={testClick1} />
      <HoverButton.Item icon={<Cart />} onClick={testClick2} />
      <HoverButton.Item icon={<Cart />} onClick={testClick3} />
    </HoverButton>
  )
}
export default Demo2

```

### 有底部导航栏的情况

```tsx
/**
 * 有底部导航栏的情况
 */
import React from 'react'
// import { HoverButton, Tabbar } from '@dongdesign/ui'
// import { HoverButton } from '@dongdesign/ui'
import { View } from '@tarojs/components'
// import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo3 = () => {
  return (
    <View>
      {/* <HoverButton icon={<Cart />} tabbarHeight={48} /> */}
      {/* {process.env.TARO_ENV !== 'rn' && process.env.TARO_ENV !== 'jdrn' && ( */}
      {/*  <Tabbar fixed> */}
      {/*    <Tabbar.Item title="首页" icon={<Home size={18} />} /> */}
      {/*    <Tabbar.Item title="分类" icon={<Category size={18} />} /> */}
      {/*    <Tabbar.Item title="发现" icon={<Find size={18} />} /> */}
      {/*    <Tabbar.Item title="购物车" icon={<Cart size={18} />} /> */}
      {/*    <Tabbar.Item title="我的" icon={<User size={18} />} /> */}
      {/*  </Tabbar> */}
      {/* )} */}
    </View>
  )
}
export default Demo3

```

### 自定义层级

```tsx
/**
 * 自定义层级
 */
import React from 'react'
// import { HoverButton, SafeArea } from '@dongdesign/ui'
import { HoverButton } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import { Cart } from '@nutui/icons-react-taro'
import Taro, { pxTransform } from '@tarojs/taro'

const App = () => {
  return (
    <View>
      <HoverButton icon={<Cart />} zIndex={101} />
      <View
        style={{
          zIndex: 100,
          position: Taro.getEnv() === 'RN' ? 'absolute' : 'fixed',
          width: '100%',
          left: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View
          style={{
            height: pxTransform(60),
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          这个图层层级为 100
        </View>
        {/* <SafeArea position="bottom" /> */}
      </View>
    </View>
  )
}
export default App

```

## HoverButton

### Props

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| zIndex | 设置组件页面层级 | `number` | `10` |
| tabbarHeight | 底部导航栏高度（不包含安全区高度） | `number` | `-` |
| icon | 设置按钮图标 | `ReactNode` | `-` |
| onClick | 按钮点击时触发事件 | `Function` | `-` |

## HoverButton.Item

### Props

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 设置按钮图标 | `ReactNode` | `-` |
| onClick | 按钮点击时触发事件 | `Function` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-hoverbutton-spacing | 按钮垂直间距 | `16px` |
| \--nutui-hoverbutton-position-bottom | 按钮区域距离屏幕底部距离 | `48px` |
| \--nutui-hoverbutton-position-right | 按钮区域距离屏幕右侧距离 | `16px` |
| \--nutui-hoverbutton-item-border-color | 按钮边框色 | `rgba(0, 0, 0, 0.06)` |
| \--nutui-hoverbutton-item-background | 按钮背景色-正常态 | `#FFFFFF` |
| \--nutui-hoverbutton-item-background-active | 按钮背景色-点击态 | `#F6F6F6` |
| \--nutui-hoverbutton-item-icon-color | 图标色-正常态 | `#1A1A1A` |
| \--nutui-hoverbutton-item-icon-color-active | 图标色-点击态 | `#595959` |