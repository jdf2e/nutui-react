---
sidebar_class_name: hasIcon
---

# Cell 单元格

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

列表项，可组成列表。

## 引入

```tsx
import { Cell } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { ITouchEvent } from '@tarojs/components'

const Demo1 = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    console.log('点击事件')
  }
  return (
    <>
      <Cell title="我是标题" extra="描述文字" />
      <Cell title="我是标题" description="我是描述" extra="描述文字" />
      <Cell title="点击测试" onClick={(event) => testClick(event)} />
      <Cell title="圆角设置0" radius={0} />
    </>
  )
}
export default Demo1
```

### 自定义内容

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  return (
    <Cell>
      <View>自定义内容</View>
    </Cell>
  )
}
export default Demo2
```

### 自定义标题区域

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'

const Demo3 = () => {
  return (
    <Cell
      title={
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          {/* <User /> */}
          {/* <View style={{ marginLeft: 5 }}>我是标题</View> */}
          <View>我是标题</View>
        </View>
      }
      description={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          我是描述<Text style={{ color: 'red' }}>1</Text>
        </View>
      }
      extra="描述文字"
    />
  )
}
export default Demo3
```

### 自定义右侧区域

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'

const App = () => {
  return (
    <Cell.Group>
      <Cell title="Switch" extra={<Switch defaultChecked />} />
    </Cell.Group>
  )
}
export default App
```

### 垂直居中

通过 `align` 属性可以让 Cell 的左右内容都垂直居中。

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell
      align="center"
      title="我是标题"
      description="我是描述"
      extra="描述文字"
    />
  )
}
export default Demo5
```

### 链接 | 分组用法

使用 `nut-cell-group` 支持 `title`和`extra`

```tsx
import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { navigateTo, redirectTo } from '@tarojs/taro'
import { ArrowRight, User } from '@nutui/icons-react-taro'
import { ITouchEvent, Text, View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo6 = () => {
  const onJumpclick = (
    event: ITouchEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    link: string
  ) => {
    const replace = false
    if (link) {
      replace ? redirectTo({ url: link }) : navigateTo({ url: link })
    }
  }
  return (
    <>
      <Cell.Group>
        <Cell
          className="nutui-cell-clickable"
          title="链接"
          align="center"
          extra={harmonyAndRn() ? null : <ArrowRight />}
        />
        <Cell
          className="nutui-cell-clickable"
          title="URL 跳转"
          extra={
            <>
              <View style={{ marginRight: pxTransform(5) }}>
                /pages/index/index
              </View>
              {harmonyAndRn() ? null : <ArrowRight />}
            </>
          }
          align="center"
          onClick={(event) => {
            onJumpclick(event, '/pages/index/index')
          }}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View
              style={{
                display: 'flex',
                alignItems: 'baseline',
                flexDirection: 'row',
              }}
            >
              <View style={{ fontWeight: pxTransform(500) }}>我是标题</View>
              <View
                style={{
                  color: '#888B94',
                  fontSize: pxTransform(10),
                  marginLeft: pxTransform(5),
                }}
              >
                我是描述
              </View>
            </View>
          }
          extra={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              More
              {harmonyAndRn() ? null : (
                <ArrowRight size={12} style={{ marginLeft: 5 }} />
              )}
            </View>
          }
        />
        <Cell>
          <View style={{ minHeight: pxTransform(50) }}>自定义内容</View>
        </Cell>
        <Cell
          align="center"
          title={
            <Text
              style={{
                color: '#888B94',
                fontSize: pxTransform(12),
              }}
            >
              我是描述
            </Text>
          }
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              {harmonyAndRn() ? null : <User style={{ marginRight: 5 }} />}
              我是标题
            </View>
          }
          extra={harmonyAndRn() ? null : <ArrowRight />}
        />
        <Cell>
          <View style={{ minHeight: pxTransform(50) }}>自定义内容</View>
        </Cell>
        <Cell
          align="center"
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                color: 'blue',
              }}
            >
              我是标题
            </View>
          }
        />
        <Cell>
          <View style={{ color: '#26bf26' }}>自定义内容</View>
        </Cell>
      </Cell.Group>
    </>
  )
}
export default Demo6
```

### 分组用法

通过 `divider` 属性可以让单元格之间不显示下边线。

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <Cell.Group divider={false}>
      <Cell title="我是标题" extra="描述文字" />
      <Cell title="我是标题" extra="描述文字" />
    </Cell.Group>
  )
}
export default Demo7
```

## Cell.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 分组标题 | `ReactNode` | `-` |
| description | 分组描述 | `ReactNode` | `-` |
| divider | 单元格之间是否有分割线 | `boolean` | `true` |

## Cell

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | `ReactNode` | `-` |
| description | 描述 | `ReactNode` | `-` |
| extra | 右侧描述 | `ReactNode` | `-` |
| radius | 圆角半径 | `string` | `6px` |
| align | 纵轴方向上的对齐方式，可选值为：`flex-start`、`center`、`flex-end` | `string` | `flex-start` |
| onClick | 点击事件 | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-cell-title-color | 单元格标题字体颜色 | `$color-title` |
| \--nutui-cell-title-font-size | 单元格标题字体大小 | `$font-size-base` |
| \--nutui-cell-description-color | 单元格描述字体颜色 | `$color-text` |
| \--nutui-cell-description-font-size | 单元格描述字体大小 | `$font-size-small` |
| \--nutui-cell-extra-color | 单元格右侧描述字体颜色 | `$color-text` |
| \--nutui-cell-extra-font-size | 单元格右侧描述字体大小 | `$font-size-base` |
| \--nutui-cell-border-radius | 单元格圆角大小 | `6px` |
| \--nutui-cell-padding | 单元格内边距 | `13px 16px` |
| \--nutui-cell-line-height | 单元格行高 | `20px` |
| \--nutui-cell-divider-left | 单元格分割线左边距 | `16px` |
| \--nutui-cell-divider-right | 单元格分割线右边距 | `16px` |
| \--nutui-cell-divider-border-bottom | 单元格分割线下边框 | `1px solid #f5f6f7` |
| \--nutui-cell-background-color | 单元格背景颜色 | `$white` |
| \--nutui-cell-box-shadow | 单元格阴影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-cell-group-title-padding | 单元格分组的标题内边距 | `0 10px` |
| \--nutui-cell-group-title-color | 单元格分组的标题字体颜色 | `#909ca4` |
| \--nutui-cell-group-title-font-size | 单元格分组的标题字体大小 | `$font-size-base` |
| \--nutui-cell-group-title-line-height | 单元格分组的标题行高 | `20px` |
| \--nutui-cell-group-description-padding | 单元格分组的描述内边距 | `0 10px` |
| \--nutui-cell-group-description-color | 单元格分组的描述颜色 | `#909ca4` |
| \--nutui-cell-group-description-font-size | 单元格分组的描述字体大小 | `$font-size-small` |
| \--nutui-cell-group-description-line-height | 单元格分组的描述行高 | `16px` |
| \--nutui-cell-group-background-color | 单元格分组的背景颜色 | `$white` |
| \--nutui-cell-group-wrap-margin | 单元格分组容器的外边距 | `10px` |
