#  Layout 佈局

### 介紹

用於快速進行佈局

### 安裝
```javascript
import { Row, Col } from '@nutui/nutui-react'
```


## 代碼演示

### 基礎佈局

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
### 分欄間隔

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
### Flex佈局

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

| 字段         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| type         | 佈局方式，可選值為flex              | String | -                |
| gutter        | 列元素之間的間距（單位為px）         | String、Number | 0      |
| justify       | Flex 主軸對齊方式，可選值為 start end center space-around space-between| String | start               |
| align	 | Flex 交叉軸對齊方式，可選值為 flex-start center flex-end     | String | flex-start |
| wrap          | Flex是否換行，可選值為 nowrap wrap reverse    | String | nowrap              |

### col

| 字段 | 說明           | 類型     | 默認值           |
|--------|----------------|--------------| ------------------|
| span  | 列元素寬度（共分為24份，例如設置一行3個，那麼span值為8） | String、Number| 24|
| offset  | 列元素偏移距離 | String、Number| 0 |

### row events

| 字段 | 說明 | 回調參數 |
|----- | ----- | ----- |
| onClick`v1.3.0` | 點擊時觸發 | event: MouseEvent, type: 'row' | 'col' |

### col events

| 字段 | 說明 | 回調參數 |
|----- | ----- | ----- |
| onClick`v1.3.0` | 點擊時觸發 | event: MouseEvent, type: 'row' | 'col' |