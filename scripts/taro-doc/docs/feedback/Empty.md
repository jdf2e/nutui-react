---
sidebar_class_name: hasIcon
---

# Empty组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

空状态时的占位提示

## 引入

```tsx
import { Empty } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Empty
        title="标题"
        description="无数据"
        actions={[{ text: '操作按钮' }, { text: '操作按钮', type: 'primary' }]}
      />
      <Empty
        description="无数据"
        actions={[{ text: '操作按钮' }]}
        style={{ marginTop: '10px' }}
      />
      <Empty description="无数据" style={{ marginTop: '10px' }} />
    </>
  )
}
export default Demo1
```

### Size 为 small 时，可用于半屏

```tsx
import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return <Empty description="无数据" size="small" />
}
export default Demo2
```

### 自定义内容大小

```tsx
import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return <Empty description="无数据" imageSize={80} />
}
export default Demo3
```

### 图片类型，内置 3 个

```tsx
import React, { useState } from 'react'
// import { Tabs, TabPane, Empty } from '@nutui/nutui-react-taro'
import { Empty } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')

  return (
    // <Tabs
    //   value={tabvalue}
    //   onChange={(paneKey) => {
    //     setTabvalue(paneKey)
    //   }}
    // >
    //   <TabPane title="无内容" value="0">
    //     <Empty status="empty" title="无内容" />
    //   </TabPane>
    //   <TabPane title="加载失败/错误" value="1">
    //     <Empty status="error" title="加载失败/错误" />
    //   </TabPane>
    //   <TabPane title="无网络" value="2">
    //     <Empty status="network" title="无网络" />
    //   </TabPane>
    // </Tabs>
    <>
      <Empty status="empty" title="无内容" />
      <Empty status="error" title="加载失败/错误" />
      <Empty status="network" title="无网络" />
    </>
  )
}
export default Demo4
```

### 自定义图片

> 如果您是京东站内相关项目的开发，我们特意为您提供了一系列的缺省状态的图片链接，您可通过内部群获取。

```tsx
import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'
import { Image } from '@tarojs/components'

const Demo5 = () => {
  return (
    <Empty
      description="店铺为空"
      image={
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          src="https://storage.360buyimg.com/imgtools/44f3cc10c4-0cf9a7e0-c0ac-11ee-8375-193101bb1a46.png"
        />
      }
    />
  )
}
export default Demo5
```

### 底部内容

```tsx
import React from 'react'
import { Empty, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo6 = () => {
  return (
    <Empty status="error" description="加载失败">
      <View style={{ marginTop: '10px' }}>
        <Button type="primary" size="small">
          重试
        </Button>
      </View>
    </Empty>
  )
}
export default Demo6
```

## Empty

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| image | 图片,支持传入图片 URL | `ReactNode` | `-` |
| imageSize | 图片大小，number 类型单位为 px | `number` \| `string` | `-` |
| title | 图片下方的标题 | `ReactNode` | `-` |
| description | 图片下方的描述文字 | `ReactNode` | `-` |
| size | 组件整体大小，适配于全屏或半屏 | `small` \| `base` | `base` |
| status | 默认图片错误类型 | `empty` \| `error` \| `network` | `empty` |
| actions | 可用于处理操作的一组数据 | `Array` | `[]` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-empty-padding | Empty组件图片的padding值 | `32px 40px` |
| \--nutui-empty-image-size | Empty组件图片的尺寸大小 | `160px` |
| \--nutui-empty-image-small-size | size 为 small 时，Empty组件图片的尺寸大小 | `120px` |
| \--nutui-empty-title-margin-top | Empty组件图片标题margin-top的值 | `0px` |
| \--nutui-empty-title-margin-top | Empty组件图片标题margin-top的值 | `8px` |
| \--nutui-empty-title-line-height | Empty组件图片标题行高 | `$font-size-base` |
| \--nutui-empty-description-margin-top | Empty组件图片描述margin-top的值 | `4px` |
| \--nutui-empty-description-line-height | Empty组件图片描述行高 | `1.2` |
| \--nutui-empty-background-color | Empty组件背景色 | `#fff` |
