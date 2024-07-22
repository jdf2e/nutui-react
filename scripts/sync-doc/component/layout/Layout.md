# Layout 布局

用于快速进行布局

## 引入

```tsx
import { Row, Col } from '@dongdesign/ui'
```

## 示例代码

### 基础布局

```tsx
import React, { CSSProperties } from 'react'
import { Row, Col } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo1 = () => {
  const flexContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: pxTransform(40),
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    borderRadius: pxTransform(6),
    backgroundColor: '#ff8881',
    fontSize: pxTransform(14),
  }
  const flexContentLight: CSSProperties = {
    ...flexContent,
    backgroundColor: '#ffc7c4',
  }

  return (
    <>
      <Row>
        <Col span="24">
          <View style={flexContent}>span:24</View>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <View style={flexContent}>span:12</View>
        </Col>
        <Col span="12">
          <View style={flexContentLight}>span:12</View>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <View style={flexContent}>span:8</View>
        </Col>
        <Col span="8">
          <View style={flexContentLight}>span:8</View>
        </Col>
        <Col span="8">
          <View style={flexContent}>span:8</View>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo1

```

### 分栏间隔

```tsx
import React, { CSSProperties } from 'react'
import { Row, Col } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo2 = () => {
  const flexContent: CSSProperties = {
    display: 'flex',
    width: '100%',
    height: pxTransform(40),
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    borderRadius: pxTransform(6),
    backgroundColor: '#ff8881',
    fontSize: pxTransform(14),
  }
  const flexContentLight: CSSProperties = {
    ...flexContent,
    backgroundColor: '#ffc7c4',
  }

  return (
    <>
      <Row gutter="10">
        <Col span="8">
          <View style={flexContent}>span:8</View>
        </Col>
        <Col span="8">
          <View style={flexContentLight}>span:8</View>
        </Col>
        <Col span="8">
          <View style={flexContent}>span:8</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo2

```

### Flex布局

```tsx
import React, { CSSProperties } from 'react'
import { Row, Col } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo3 = () => {
  const flexContent: CSSProperties = {
    display: 'flex',
    width: '100%',
    height: pxTransform(40),
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    borderRadius: pxTransform(6),
    backgroundColor: '#ff8881',
    fontSize: pxTransform(14),
  }
  const flexContentLight: CSSProperties = {
    ...flexContent,
    backgroundColor: '#ffc7c4',
  }
  return (
    <>
      <Row type="flex" wrap="nowrap">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo3

```

## Row

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局方式，可选值为flex | `string` | `-` |
| gutter | 列元素之间的间距（单位为px） | `string` \| `number` | `0` |
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | `string` | `start` |
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | `string` | `flex-start` |
| wrap | Flex是否换行，可选值为 nowrap wrap reverse | `string` | `nowrap` |
| onClick | Fired when clicked | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## Col

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | `string` \| `number` | `24` |
| offset | 列元素偏移距离 | `string` \| `number` | `0` |
| onClick | 点击时触发 | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-col-default-margin-bottom | col 组件的下边距 | `15px` |