# Indicator 指示器

### 介绍

显示一个任务或流程的进度，常用于开通流程。

### 安装

```javascript
import { Indicator } from '@nutui/nutui-react'
```
### 基础用法
:::demo
```tsx
import  React from "react";
import { Indicator, Cell, Button, Row, Col } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="demo">
      <Cell>
        <Indicator size={3} current={3} />
      </Cell>
      <Cell>
        <Row>
          <Col span="12">
            <Button size="small" type="primary">
              主要按钮
            </Button>
          </Col>
          <Col span="12">
            <Indicator block align="right" size={6} current={5} />
          </Col>
        </Row>
      </Cell>
    </div>
  );
};
export default App;
```
:::
### block用法
在`block`为true时，将表现为块级元素，可通过`align`，设置对齐方式
:::demo
```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="demo">
      <Cell>
        <Indicator block align="center" size={6} current={5} />
      </Cell>
      <Cell>
        <Indicator block align="left" size={6} current={1} />
      </Cell>
      <Cell>
        <Indicator block align="right" size={6} current={5} />
      </Cell>
    </div>
  );
};
export default App;
```
:::
### 不补0
:::demo
```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Indicator fillZero={false} size={6} current={5} />
    </Cell>
  );
};
export default App;
```
:::
### 竖向展示
:::demo
```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <view 
        style={{ height: '100px', width: '50%' }} 
      >
        <Indicator fillZero={false} size={6} current={5} vertical />
      </view>
      <view 
        style={{ height: '100px', width: '50%' }} 
      >
        <Indicator size={6} current={2} vertical />
      </view>
    </Cell>
  );
};
export default App;
```
:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| current  | 当前步骤               | Number | 1              |
| size       | 步骤长度                         | Number | 3               |
| block | 是否启用块级布局     | Boolean | false |
| align | 对齐方式，仅在block为true时生效, 可选值 'left', 'right', 'center'| String | left |
| fillZero     | 单数前面是否补0                      | Boolean | true        |
| vertical | 是否竖向展示     | Boolean | false |
