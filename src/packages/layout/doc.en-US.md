# Layout layout

### introduce

for quick layout

### Install
```javascript
// react
import { Row, Col } from '@nutui/nutui-react'
```


## code demo

### Basic layout

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
:::


:::demo
### column interval

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
:::


:::demo
### Flex layout

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


## API

### row

| Field | Description | Type | Default Value |
|---------------|---------------------------------- |---------|-----------------|
| type | Layout mode, optional value is flex | string | - |
| gutter | The spacing between column elements (in px) | string \| number | `0` |
| justify | Flex main axis alignment, optional value is start end center space-around space-between| string | `start` |
| align | Flex cross-axis alignment, optional value is flex-start center flex-end | string | `flex-start` |
| wrap | Whether Flex wraps, the optional value is nowrap wrap reverse | string | `nowrap` |

### col

| Field | Description | Type | Default Value |
|---------|----------------|-------------| ------------------|
| span | Column element width (divided into 24 parts, for example, if a row is set to 3, then the span value is 8) | string \| number| `24`|
| offset | Column element offset distance | string \| number| `0` |

### row events

| Fields | Description | Callback Parameters |
|----- | ----- | ----- |
| onClick | Fired when clicked | `event: MouseEvent, type: 'row' \| 'col'` |

### col events

| Fields | Description | Callback Parameters |
|----- | ----- | ----- |
| onClick | Fired when clicked | `event: MouseEvent, type: 'row' \| 'col'` |
