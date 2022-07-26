#  Layout 布局

### 介绍

用于快速进行布局

### 安装
```javascript
import { Row, Col } from '@nutui/nutui-react'
```


## 代码演示

### 基础布局

:::demo
``` tsx
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

:::demo
### 分栏间隔

``` tsx
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

:::demo
### Flex布局

``` tsx
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
        <Row ttype="flex" justify="center">
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
        <Row ttype="flex" justify="end">
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
        <Row ttype="flex" justify="space-between">
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
        <Row ttype="flex" justify="space-around">
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


## API

### row

| 字段         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 布局方式，可选值为flex              | String | -                |
| gutter        | 列元素之间的间距（单位为px）         | String、Number | 0      |
| justify       | Flex 主轴对齐方式，可选值为 start end center space-around space-between| String | start               |
| align	 | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end     | String | flex-start |
| wrap          | Flex是否换行，可选值为 nowrap wrap reverse    | String | nowrap              |

### col

| 字段 | 说明           | 类型     | 默认值           |
|--------|----------------|--------------| ------------------|
| span  | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | String、Number| 24|
| offset  | 列元素偏移距离 | String、Number| 0|
