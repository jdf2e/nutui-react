# Indicator

### Intro

Displays the progress of a task or process, often used for provisioning processes

### Install

```javascript
import { Indicator } from '@nutui/nutui-react'
```
### Basic Usage
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
              Button
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
### Block usage
When `block` is true, it will be displayed as a block-level element, and the alignment can be set through `align`
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
### Do not add 0
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

### Vertical display
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

| Attribute           | Description                             | Type                      | Default            |
|--------------|----------------------------------|--------|------------------|
| current  | current step               | Number | 1              |
| size       | step length                         | Number | 3               |
| block | Whether to enable block level layout     | Boolean | false |
| align | Alignment, only valid when block is true, optional values 'left', 'right', 'center' | String | left |
| fillZero     | Whether to add 0 in front of the singular number                      | Boolean | true        |
| vertical | Whether to display vertically     | Boolean | false |
