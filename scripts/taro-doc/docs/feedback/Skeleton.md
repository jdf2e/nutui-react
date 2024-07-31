---
sidebar_class_name: hasIcon
---

# Skeleton 骨架屏组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

## 引入

```tsx
import { Skeleton } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Skeleton } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return <Skeleton animated />
}
export default Demo1
```

### 传入多行

```tsx
import React from 'react'
import { Skeleton } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return <Skeleton rows={3} title animated />
}
export default Demo2
```

### 显示头像

```tsx
import React from 'react'
import { Skeleton } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return <Skeleton rows={3} title animated avatar avatarSize="100px" />
}
export default Demo3
```

### 标题段落圆角风格

```tsx
import React from 'react'
import { Skeleton, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <ConfigProvider
      theme={{
        nutuiSkeletonLineBorderRadius: '10px',
      }}
    >
      <Skeleton rows={3} animated />
    </ConfigProvider>
  )
}
export default Demo4
```

### 显示子组件

```tsx
import { Avatar, Image, Skeleton, Switch } from '@nutui/nutui-react-taro'
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo5 = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <View style={{ width: '100%' }}>
      <Switch
        onChange={(value, event: any) => changeStatus(value, event)}
        style={{ display: 'flex', marginBottom: pxTransform(8) }}
      />
      <Skeleton title animated avatar rows={3} visible={checked}>
        <View
          className="nut-skeleton-content"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <Avatar
            className="nut-skeleton-content-avatar"
            style={{ marginRight: '20px' }}
            size="50"
            icon={
              <Image
                loading={false}
                src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              />
            }
          />
          <View className="nut-skeleton-content-line">
            <Text className="nut-skeleton-content-title">NutUI-React</Text>
            <View className="description">
              一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </View>
          </View>
        </View>
      </Skeleton>
    </View>
  )
}
export default Demo5
```

## Skeleton

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| visible | 是否显示骨架屏(true不显示骨架屏，false显示骨架屏) | `boolean` | `true` |
| animated | 是否开启骨架屏动画 | `boolean` | `false` |
| avatar | 是否显示头像 | `boolean` | `false` |
| avatarShape | 头像形状：正方形/圆形 | `string` | `round` |
| avatarSize | 头像大小 | `string` | `50px` |
| rows | 设置段落行数 | `number` | `1` |
| title | 是否显示段落标题 | `boolean` | `true` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-skeleton-background | 背景 | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | 线条宽度 | `100%` |
| \--nutui-skeleton-line-height | 线条高度 | `15px` |
| \--nutui-skeleton-line-border-radius | 线条边框圆角 | `0` |
