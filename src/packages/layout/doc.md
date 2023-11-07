# Layout 布局

## 介绍

用于快速进行布局

## 安装

```tsx
import { Row, Col } from '@nutui/nutui-react'
```

## 代码演示

### 基础布局

:::demo

```tsx
import React from "react";
import { Row, Col } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Row>
            <Col span="24">
                <div className="flex-content">span:24</div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <div className="flex-content">span:12</div>
            </Col>
            <Col span="12">
                <div className="flex-content flex-content-light">span:12</div>
            </Col> 
        </Row>
        <Row>
            <Col span="8">
                <div className="flex-content">span:8</div>
            </Col>
            <Col span="8">
                <div className="flex-content flex-content-light">span:8</div>
            </Col> 
            <Col span="8">
                <div className="flex-content flex-content-light">span:8</div>
            </Col> 
        </Row>
        <Row>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
        </Row>
    </>
  )
};
export default App;
```

:::

:::demo

### 分栏间隔

```tsx
import React from "react";
import { Layout, Row, Col } from '@nutui/nutui-react';

const App = () => {
  return (
    <Row gutter="10">
        <Col span="8">
            <div className="flex-content">span:8</div>
        </Col>
        <Col span="8">
            <div className="flex-content flex-content-light">span:8</div>
        </Col> 
        <Col span="8">
            <div className="flex-content flex-content-light">span:8</div>
        </Col> 
    </Row>
  )
};
export default App;
```

:::

:::demo

### Flex布局

```tsx
import React from "react";
import { Layout, Row, Col } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Row type="flex" wrap="nowrap">
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
        </Row>
        <Row type="flex" justify="end">
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
        </Row>
        <Row type="flex" justify="space-between">
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
        </Row>
        <Row type="flex" justify="space-around">
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
                <div className="flex-content">span:6</div>
            </Col>
        </Row>
    </>
  )
}
export default App;
```

:::

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

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-col-default-margin-bottom | col 组件的下边距 | `15px` |