---
sidebar_class_name: hasIcon
---

# Navbar 头部导航

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

提供导航功能。

## 引入

```tsx
import { NavBar } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { NavBar } from '@nutui/nutui-react-taro'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  return (
    <>
      <NavBar
        back={
          <>
            <ArrowLeft size={14} />
            返回
          </>
        }
        right={
          <span
            className="flex-center"
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            <Share size={14} />
          </span>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <span onClick={(e) => Taro.showToast({ title: '标题' })}>订单详情</span>
      </NavBar>
      <NavBar
        right={
          <span onClick={(e) => Taro.showToast({ title: '清空' })}>清空</span>
        }
        left={<Close size={14} />}
        back={<ArrowLeft size={14} />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View className="title">
          <span onClick={(e) => Taro.showToast({ title: '清空' })}>
            浏览记录
          </span>
          <span className="desc">浏览记录</span>
        </View>
      </NavBar>
      <NavBar
        back={<ArrowLeft size={14} />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </span>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <span onClick={(e) => Taro.showToast({ title: '标题' })}>购物车</span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Taro.showToast({ title: 'icon' })}
        >
          <Cart size={14} />
        </i>
      </NavBar>
    </>
  )
}
export default Demo1
```

### 标题位置

```tsx
import React from 'react'
import { NavBar } from '@nutui/nutui-react-taro'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  return (
    <>
      <NavBar
        titleAlign="left"
        back={
          <>
            <ArrowLeft size={14} />
            返回
          </>
        }
        right={
          <span
            className="flex-center"
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            <Share size={14} />
          </span>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <span onClick={(e) => Taro.showToast({ title: '标题' })}>订单详情</span>
      </NavBar>

      <NavBar
        titleAlign="left"
        right={
          <span onClick={(e) => Taro.showToast({ title: '清空' })}>清空</span>
        }
        left={<Close size={14} />}
        back={<ArrowLeft size={14} />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View className="title">
          <span onClick={(e) => Taro.showToast({ title: '清空' })}>
            浏览记录
          </span>
          <span className="desc">浏览记录</span>
        </View>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft size={14} />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </span>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <span onClick={(e) => Taro.showToast({ title: '标题' })}>购物车</span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Taro.showToast({ title: 'icon' })}
        >
          <Cart size={14} />
        </i>
      </NavBar>
    </>
  )
}
export default Demo2
```

### 多tab切换导航

```tsx
import React, { useState } from 'react'
import { NavBar, Tabs, TabPane } from '@nutui/nutui-react-taro'
import { More, ArrowLeft } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <NavBar
        back={<ArrowLeft size={14} />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </span>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-gap': 0,
            }}
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
            <TabPane title="Tab 4"> Tab 4 </TabPane>
          </Tabs>
        </View>
      </NavBar>

      <NavBar
        titleAlign="left"
        back={<ArrowLeft size={14} />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </span>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <div>
          <Tabs
            className="navbar-tabs"
            align="left"
            activeType="simple"
            value={tab2value}
            onChange={(paneKey) => {
              setTab2value(paneKey)
            }}
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
          </Tabs>
        </div>
      </NavBar>
    </>
  )
}
export default Demo3
```

## Navbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| right | 右侧内容 | `ReactNode` | `-` |
| left | 左侧内容，渲染在返回区域的右侧 | `ReactNode` | `-` |
| back | 返回区域的文字 | `ReactNode` | `-` |
| titleAlign | 标题位置,可选值center left | `string` | `center` |
| fixed | 是否固定 | `boolean` | `false` |
| safeAreaInsetTop | 是否适配安全区 | `boolean` | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | `boolean` | `false` |
| zIndex | 导航栏层级 | `number` \| `string` | `10` |
| onBackClick | 点击返回区域后的回调 | `onBackClick:(event: Event)=>void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-navbar-width | 头部导航的宽度 | `100%` |
| \--nutui-navbar-height | 头部导航的高度 | `44px` |
| \--nutui-navbar-margin-bottom | 头部导航的下边距 | `20px` |
| \--nutui-navbar-background | 头部导航的背景颜色 | `$white` |
| \--nutui-navbar-box-shadow | 头部导航的阴影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | 头部导航的字体颜色 | `$color-text` |
| \--nutui-navbar-font-size | 头部导航的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-size | 头部导航标题的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-weight | 头部导航标题的字体粗细 | `0` |
| \--nutui-navbar-title-font-color | 头部导航标题的字体颜色 | `$color-title` |
