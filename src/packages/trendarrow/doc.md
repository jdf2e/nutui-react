# TrendArrow 指标趋势

## 介绍

带有箭头指示的百分比数字,用以展示指标趋势

## 安装

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
        <TrendArrow syncColor={false} value={1} />
        <TrendArrow syncColor={false} value={-0.2535} />
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
        <TrendArrow value={10.2365} />
        <TrendArrow value={-0.2535} />
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
        <TrendArrow digits={1} value={10.2365} />
        <TrendArrow digits={3} value={-0.2535} />
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
        <TrendArrow arrowLeft value={0.2535} />
        <TrendArrow arrowLeft value={-0.2535} />
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
        <TrendArrow symbol value={1} />
        <TrendArrow symbol value={-0.2535} />
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
        <TrendArrow symbol value={0} />
        <TrendArrow symbol zero value={0} />
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
        <TrendArrow value={10.2365} riseColor="rgb(73,143,242)" />
        <TrendArrow value={-0.2535} symbol dropColor="rgb(255, 190, 13)" />
        <TrendArrow
        syncColor={false}
        value={-0.2535}
        symbol
        color="rgb(39,197,48)"
        dropColor="rgb(255, 190, 13)"
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
import { Success, Failure } from '@nutui/icons-react'

const App = () => {
  return (
    <Cell>
        <TrendArrow value={10.2365} riseIcon={<Success color="blue" />} />
        <TrendArrow value={-10.2365} downIcon={<Failure color="red" />} />
    </Cell>
  );
};
export default App;
```

:::

## TrendArrow

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 数值，大于0时箭头向上，小于0时箭头向下 | `number` | `-` |
| digits | 小数位精度 | `number` | `2` |
| symbol | 是否显示加减号 | `boolean` | `false` |
| zero | 是否显示 0 | `boolean` | `false` |
| arrowLeft | 是否在数字左侧显示箭头 | `boolean` | `false` |
| syncColor | 文字颜色是否与箭头同步 | `boolean` | `true` |
| color | 文字颜色 | `string` | `#333333` |
| riseColor | 向上箭头颜色 | `string` | `#fa2c19` |
| dropColor | 向下箭头颜色 | `string` | `#64b578` |
| riseIcon | 自定义向上箭头icon | `React.ReactNode` | `<TriangleUp/>` |
| downIcon | 自定义向下箭头icon | `React.ReactNode` | `<TriangleDown/>` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | 指标趋势的文字大小 | `14px` |
| \--nutui-trendarrow-icon-margin | 指标趋势的文字与图标间距 | `4px` |