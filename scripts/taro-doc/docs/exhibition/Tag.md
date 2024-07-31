---
sidebar_class_name: hasIcon
---

# Tag 标签

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于标记和分类的标签。

## 引入

```tsx
import { Tag } from '@dongdesign/ui'
```

## 代码实例

### 基础用法

```tsx
import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Cell.Group>
        <Cell title="primary" extra={<Tag type="primary">标签</Tag>} />
        <Cell title="info" extra={<Tag type="info">标签</Tag>} />
        <Cell title="success" extra={<Tag type="success">标签</Tag>} />
        <Cell title="danger" extra={<Tag type="danger">标签</Tag>} />
        <Cell title="warning" extra={<Tag type="warning">标签</Tag>} />
      </Cell.Group>
    </>
  )
}
export default Demo1
```

### 样式风格

```tsx
import React from 'react'
// import { Failure } from '@nutui/icons-react-taro'
import { Cell, Tag } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo2 = () => {
  return (
    <>
      <Cell.Group>
        <Cell title="plain" extra={<Tag plain>标签</Tag>} />
        <Cell
          title="round"
          extra={
            <Tag round type="primary">
              标签
            </Tag>
          }
        />
        <Cell
          title="mark"
          extra={
            <Tag mark type="primary">
              标签
            </Tag>
          }
        />
        <Cell
          title="closeable"
          extra={
            <Tag
              closeable
              onClose={() => Taro.showToast({ title: 'Tag closed' })}
              type="primary"
            >
              标签
            </Tag>
          }
        />
        <Cell
          title="closeable"
          extra={
            <Tag
              closeable
              // TODO: icon 适配
              closeIcon="C"
              // closeIcon={<Failure size={8} />}
              onClose={() => Taro.showToast({ title: 'Tag closed' })}
              type="primary"
            >
              标签
            </Tag>
          }
        />
      </Cell.Group>
    </>
  )
}
export default Demo2
```

### 自定义颜色

```tsx
import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <>
      <Cell.Group>
        <Cell title="background" extra={<Tag background="#FA685D">标签</Tag>} />
        <Cell
          title="color"
          extra={
            <Tag background="#E9E9E9" color="#999999">
              标签
            </Tag>
          }
        />
        <Cell
          title="plain"
          extra={
            <Tag background="#FA2400" plain>
              标签
            </Tag>
          }
        />
      </Cell.Group>
    </>
  )
}
export default Demo3
```

### 图文

```tsx
import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react-taro'
import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

const Demo4 = () => {
  const convertSize = (size: number) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.RN) {
      return size
    }
    return `${size}px`
  }
  return (
    <>
      <Cell
        title="image-text"
        extra={
          <Tag type="info">
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: 'auto',
              }}
            >
              <Image
                style={{
                  height: convertSize(10),
                  width: convertSize(10),
                }}
                src="https://img13.360buyimg.com/imagetools/jfs/t1/249078/11/8928/559/6641c6f6F823e1c5e/a90a3b3cab20caaa.png"
              />
              <Text
                style={{
                  fontSize: convertSize(10),
                  color: 'white',
                }}
              >
                标签
              </Text>
            </View>
          </Tag>
        }
      />
    </>
  )
}
export default Demo4
```

## Tag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 标签类型 | `primary` \| `default` \| `info` \| `success` \| `danger` \| `warning` | `default` |
| background | 标签颜色 | `string` | `-` |
| color | 文本颜色，优先级高于color属性 | `string` | `white` |
| plain | 是否为空心样式 | `boolean` | `false` |
| round | 是否为圆角样式 | `boolean` | `false` |
| mark | 是否为标记样式 | `boolean` | `false` |
| closeable | 是否为可关闭标签 | `boolean` | `false` |
| closeIcon | 关闭按钮 | `ReactNode` | `null` |
| onClick | 点击事件 | `(e: MouseEvent) => void` | `-` |
| onClose | 关闭事件 | `(e?: any) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-tag-padding | padding 值 | `0 2px` |
| \--nutui-tag-font-size | 字号 | `10px` |
| \--nutui-tag-border-radius | 圆角 | `2px` |
| \--nutui-tag-height | 高度 | `14px` |
| \--nutui-tag-color | 字色 | `#ffffff` |
| \--nutui-tag-border-width | 边宽 | `1px` |
| \--nutui-tag-background-color | 背景色 | `$color-title` |
| \--nutui-tag-primary-background-color | 主色背景色 | `$color-primary-gradient-1` |
| \--nutui-tag-success-background-color | 成功背景色 | `#4fc08d` |
| \--nutui-tag-info-background-color | 信息背景色 | `$color-info` |
| \--nutui-tag-warning-background-color | 警告背景色 | `#f3812e` |
| \--nutui-tag-danger-background-color | 危险背景色 | `$color-primary` |
| \--nutui-tag-round-border-radius | round模式下的圆角 | `8px` |
| \--nutui-tag-mark-border-radius | mark模式下的圆角 | `0 8px 8px 0` |
