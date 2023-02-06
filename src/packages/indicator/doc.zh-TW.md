# Indicator 指示器

### 介紹

顯示一個任務或流程的進度，常用於開通流程

### 安装

```javascript
// react
import { Indicator } from '@nutui/nutui-react'

```
### 基礎用法
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
              主要按鈕
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
在`block`為true時，將表現為塊級元素，可通過`align`，設置對齊方式
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
### 不補0
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
### 豎向展示
:::demo
```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <div 
        style={{ height: '100px', width: '50%' }} 
      >
        <Indicator fillZero={false} size={6} current={5} vertical />
      </div>
      <div 
        style={{ height: '100px', width: '50%' }} 
      >
        <Indicator size={6} current={2} vertical />
      </div>
    </Cell>
  );
};
export default App;
```
:::

## API

### Props

| 屬性 | 說明 | 類型 | 預設值           |
|--------------|----------------------------------|--------|------------------|
| current  | 當前步驟               | Number | 1              |
| size       | 步驟長度                         | Number | 3               |
| block | 是否啟用塊級佈局     | Boolean | false |
| align | 對齊方式，僅在block為true時生效, 可選值 'left', 'right', 'center'| String | left |
| fillZero     | 單數前面是否補0       | Boolean | true        |
| vertical | 是否豎向展示     | Boolean | false |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-indicator-color | ` $primary-color` |
| --nutui-indicator-dot-color | ` $disable-color` |
| --nutui-indicator-white | ` $white` |
| --nutui-indicator-size | ` 18px` |
| --nutui-indicator-number-font-size | `  10px` |
| --nutui-indicator-dot-margin | ` 4px` |
| --nutui-indicator-dot-vertical-margin | `  4px` |
| --nutui-indicator-dot-first-margin | `  0px` |
| --nutui-indicator-dot-last-margin | `  0px` |
