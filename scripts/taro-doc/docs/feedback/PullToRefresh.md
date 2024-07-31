---
sidebar_class_name: hasIcon
---

# PullToRefresh 下拉刷新

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

在列表中通过手指下拉刷新加载新内容的交互操作。

## 引入

```tsx
import { PullToRefresh } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Image, View } from '@tarojs/components'
import { PullToRefresh } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])

  return (
    <>
      <PullToRefresh
        style={{
          backgroundColor: `var(--nutui-gray-3)`,
          color: 'var(--nutui-gray-7)',
        }}
        onRefresh={() =>
          new Promise((resolve) => {
            Taro.showToast({
              title: '😊',
              icon: 'none',
            })
            resolve('done')
          })
        }
        renderIcon={(status) => {
          return (
            <>
              {(status === 'pulling' || status === 'complete') && (
                <Image
                  style={{ height: pxTransform(26), width: pxTransform(36) }}
                  src="https://img13.360buyimg.com/imagetools/jfs/t1/219180/19/37902/438/65fa8cbbF5278d022/5eabe69b64bba791.png"
                />
              )}
              {(status === 'canRelease' || status === 'refreshing') && (
                <Image
                  style={{ height: pxTransform(26), width: pxTransform(36) }}
                  src="https://img10.360buyimg.com/imagetools/jfs/t1/230454/20/14523/223/65fab2d1F379c3968/ac35992443abab0c.png"
                />
              )}
            </>
          )
        }}
      >
        {list.map((item) => (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: pxTransform(50),
            }}
            key={item}
          >
            {item}
          </View>
        ))}
      </PullToRefresh>
    </>
  )
}

export default Demo1
```

> 在 PullToRefresh 组件内部采用 Selector API 获得父滚动元素的 scrollTop 值会带来下拉卡顿的性能问题。因此需要在 PullRefresh 组件外部判断 scrollTop 值，在页面中使用 usePageScroll() 钩子获得 scrollTop 值，在 ScrollView 组件内监听 onScroll 事件获得 scrollTop 值。

### ScrollView

```tsx
import React, { useState } from 'react'
import { ScrollView } from '@tarojs/components'
import { Cell, PullToRefresh } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo2 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  const [scrollTop, setScrollTop] = useState(0)
  return (
    <>
      <ScrollView
        style={{ height: pxTransform(150) }}
        scrollY
        onScrollEnd={(e) => {
          // scrollTop > 0, PullToRefresh 不触发 touchmove 事件。
          if (e.detail?.scrollTop) {
            setScrollTop(e.detail?.scrollTop)
          }
        }}
      >
        <PullToRefresh
          scrollTop={scrollTop}
          onRefresh={() =>
            new Promise((resolve) => {
              toastShow('😊')
              resolve('done')
            })
          }
        >
          {list.map((item) => (
            <Cell key={item}>{item}</Cell>
          ))}
        </PullToRefresh>
      </ScrollView>
    </>
  )
}

export default Demo2
```

### 深色背景-反白模式:type='primary'

```tsx
import React, { useState } from 'react'
import { Image, Text, View } from '@tarojs/components'
import { PullToRefresh } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <PullToRefresh
        type="primary"
        onRefresh={() =>
          new Promise((resolve) => {
            Taro.showToast({
              title: '😊',
              icon: 'none',
            })
            resolve('done')
          })
        }
        renderIcon={(status) => {
          return (
            <>
              {(status === 'pulling' || status === 'complete') && (
                <Image
                  style={{ height: pxTransform(26), width: pxTransform(36) }}
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/232373/2/15010/432/65fab02fF99afdb71/0457cdfa268f92df.png"
                />
              )}
              {(status === 'canRelease' || status === 'refreshing') && (
                <Image
                  style={{ height: pxTransform(26), width: pxTransform(36) }}
                  src="https://img14.360buyimg.com/imagetools/jfs/t1/186707/25/42738/223/65fab272F0965554b/eae33de2f17909b8.png"
                />
              )}
            </>
          )
        }}
      >
        {list.map((item) => (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: pxTransform(50),
            }}
            key={item}
          >
            <Text style={{ color: '#ffffff' }}>{item}</Text>
          </View>
        ))}
      </PullToRefresh>
    </>
  )
}

export default Demo1
```

## PullToRefresh

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| canReleaseText | 释放的提示文案 | `ReactNode` | `松手刷新` |
| completeText | 完成时的提示文案 | `ReactNode` | `刷新成功` |
| completeDelay | 完成后延迟消失的时间，单位为 ms | `number` | `500` |
| disabled | 是否禁用下拉刷新 | `boolean` | `false` |
| headHeight | 头部提示内容区的高度，单位为 px | `number` | `40` |
| scrollTop | 可滚动的父元素的 scrollTop | `number` | `0` |
| pullingText | 下拉的提示文案 | `ReactNode` | `下拉刷新` |
| refreshingText | 刷新时的提示文案 | `ReactNode` | `刷新中` |
| renderIcon | 根据下拉状态，自定义下拉提示图标 | `ReactNode` | `<Loading />` |
| renderText | 根据下拉状态，自定义下拉提示文案 | `ReactNode` | `-` |
| threshold | 触发刷新需要下拉多少距离，单位为 px | `number` | `60` |
| onRefresh | 触发刷新时的处理函数 | `() => Promise<any>` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-pulltorefresh-icon-width | 下拉时icon宽度 | `36px` |
| \--nutui-pulltorefresh-icon-height | 下拉时icon高度 | `26px` |
| \--nutui-pulltorefresh-color-primary | 深色背景模式 | `$color-primay` |
