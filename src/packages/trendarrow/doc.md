# TrendArrow 指标趋势

### 介绍

带有箭头指示的百分比数字,用以展示指标趋势

### 安装

```javascript
// React
import { TrendArrow } from '@nutui/nutui-react';

```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow syncTextColor={false} rate={1} />
        <TrendArrow syncTextColor={false} rate={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### 改变文字颜色

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow rate={10.2365} />
        <TrendArrow rate={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### 指定小数位

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
     <Cell>
        <TrendArrow digits={1} rate={10.2365} />
        <TrendArrow digits={3} rate={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### 箭头在前面

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow arrowLeft rate={0.2535} />
        <TrendArrow arrowLeft rate={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### 显示正负号

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow showSign rate={1} />
        <TrendArrow showSign rate={-0.2535} />
    </Cell>
  );
};
export default App;
```

:::

### 是否展示0

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow showSign rate={0} />
        <TrendArrow showSign showZero rate={0} />
    </Cell>
  );
};
export default App;
```

:::

### 自定义颜色

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow rate={10.2365} riseColor="rgb(73,143,242)" />
        <TrendArrow rate={-0.2535} showSign dropColor="rgb(255, 190, 13)" />
        <TrendArrow
        syncTextColor={false}
        rate={-0.2535}
        showSign
        textColor="rgb(39,197,48)"
        dropColor="rgb(39,197,48)"
        />
    </Cell>
  );
};
export default App;
```

:::

### 自定义图标

:::demo

```tsx
import  React from "react"
import { TrendArrow, Cell, Icon } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow rate={10.2365} upIconName="success" />
        <TrendArrow rate={-10.2365} downIconName="failure" />
        <TrendArrow rate={10.2365}>
        <Icon name="heart-fill" color="#fa2c19" size="12px" />
        </TrendArrow>
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
| rate         | 数值，大于0时箭头向上，小于0时箭头向下    | Number | -                |
| digits         | 小数位精度               | Number | 2               |
| showSign         | 是否显示加减号               | Boolean | false               |
| showZero         | 是否显示 0               | Boolean | false               |
| arrowLeft        | 是否在数字左侧显示箭头     | Boolean | false               |
| syncTextColor   | 文字颜色是否与箭头同步               | Boolean | true   |
| textColor        | 文字颜色               | String | '#333333'               |
| riseColor         | 向上箭头颜色               | String | '#fa2c19'               |
| dropColor         | 向下箭头颜色               | String | ‘#64b578’               |
| iconSize         | 箭头大小               | String | '12px'               |
| upIconName         | 自定义向上箭头icon               | String | 'triangle-up'               |
| downIconName         | 自定义向下箭头icon               | String | 'triangle-down'               |




## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-trendarrow-font-size | ` 14px` |
| --nutui-trendarrow-before-icon-margin | `  4px` |
| --nutui-trendarrow-font-size | ` 14px` |
| --nutui-trendarrow-before-icon-margin | `  4px` |
