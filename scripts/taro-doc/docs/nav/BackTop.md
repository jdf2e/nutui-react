---
sidebar_class_name: hasIcon
---

# BackTop 返回顶部

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

提供较长的页面快捷返回顶部功能。

## 引入

```tsx
import { BackTop } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { View, Icon } from '@tarojs/components'
import { BackTop, Cell } from '@nutui/nutui-react-taro'
// @TODO 暂不支持
// import { Top } from '@nutui/icons-react-taro'

const Demo1 = () => {
  return (
    <View>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop
        threshold={200}
        style={{
          bottom: '50px',
          insetInlineEnd: '20px',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Icon size={12} type="search" />
          {/* <Top size={12} /> */}
          <View style={{ fontSize: '12px' }}>顶部</View>
        </View>
      </BackTop>
    </View>
  )
}
export default Demo1
```

### 设置出现位置

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { BackTop, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <View style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop threshold={200} />
    </View>
  )
}
export default Demo2
```

### 自定义样式

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Top } from '@nutui/icons-react-taro'
import { BackTop, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <View style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop threshold={100}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top size={12} />
          <View style={{ fontSize: '12px' }}>顶部</View>
        </View>
      </BackTop>
    </View>
  )
}
export default Demo3
```

### click事件

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { BackTop, Cell } from '@nutui/nutui-react-taro'
import { Top } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const handleClick = () => {
    console.log('触发返回顶部')
  }
  const demoStyle = {
    height: 'auto',
    minHeight: 'auto',
  }
  return (
    <View style={demoStyle} id="target">
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop
        threshold={200}
        style={{
          bottom: '50px',
          right: '20px',
        }}
        onClick={handleClick}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top size={12} />
          <View style={{ fontSize: '12px' }}>顶部</View>
        </View>
      </BackTop>
    </View>
  )
}
export default Demo4
```

### RN、鸿蒙端使用

由于不支持 fixed 定位，需配合 ScrollView 进行使用。

```tsx
/**
 * JDRN 端最佳实践
 */
import React, { useRef, useState } from 'react'
import { ScrollView, View, Icon } from '@tarojs/components'
import { BackTop } from '@nutui/nutui-react-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmony, rn } from '@/utils/platform-taro'
import { BasicComponent } from '@/utils/typings'
// @TODO 暂不支持
// import { Top } from '@nutui/icons-react-taro'

const Demo5 = (props: BasicComponent) => {
  const { children } = props
  const [scrollRes, setScrollRes] = useState<any>(null)
  const sv = useRef<any>(null)

  return (
    // @TODO 待 taro 侧支持获取视窗尺寸后调整
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: rn() ? pxTransform(710) : '100%',
      }}
    >
      <ScrollView
        onScroll={(res) => {
          setScrollRes(res.detail)
        }}
        ref={sv}
        // @TODO RN 端暂不支持
        // trapScroll={true}
        style={{ height: 'auto' }}
      >
        {children}
      </ScrollView>
      <BackTop
        threshold={200}
        scrollRes={scrollRes}
        onClick={() => {
          if (harmony()) {
            if (!sv.current?.scroller?.scrollEdge) return
            // @ts-ignore
            sv.current.scroller.scrollEdge(Edge.Top)
          }
          if (rn()) {
            if (!sv.current?.scrollToOffset) return
            sv.current.scrollToOffset({ offset: 0 })
          }
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Icon size={12} type="search" />
          {/* <Top size={12} /> */}
          <View style={{ fontSize: pxTransform(12) }}>顶部</View>
        </View>
      </BackTop>
    </View>
  )
}
export default Demo5
```

## BackTop

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| threshold | 页面垂直滚动多高后出现 | `number` | `200` |
| zIndex | 设置组件页面层级 | `number` | `900` |
| duration | 设置动画持续时间，为 0 时表示无动画 | `number` | `1000` |
| scrollRes | 被监听容器滚动时的回调参数，主要用于 rn、鸿蒙端 | `PageScrollObejct` | `-` |
| onClick | 按钮点击时触发事件 | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-backtop-border-color | 边框颜色 | `#e0e0e0` |
