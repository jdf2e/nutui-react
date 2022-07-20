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
import { Indicator, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Indicator size={3} current={3}>
      </Indicator>
    </Cell>
    <Cell>
      <Row>
        <Col span="12">
          <Button size="small" type="primary">
            主要按钮
          </Button>
        </Col>
        <Col span="12">
          <Indicator block={true} align="right" size={6} current={5}>
          </Indicator>
        </Col>
      </Row>
    </Cell>
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
    <Cell>
      <Indicator block={true} align="center" size={6} current={5}>
      </Indicator>
    </Cell>
    <Cell>
      <Indicator block={true} align="left" size={6} current={1}>
      </Indicator>
    </Cell>
    <Cell>
      <Indicator block={true} align="right" size={6} current={5}>
      </Indicator>
    </Cell>
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
      <Indicator fillZero={false} size={6} current={5}>
      </Indicator>
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
