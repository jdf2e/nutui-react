# TrendArrow 指標趨勢

### 介紹

帶有箭頭指示的百分比數字,用以展示指標趨勢

### 安裝

```javascript
// React
import { TrendArrow } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

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

### 改變文字顏色

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

### 指定小數位

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

### 箭頭在前面

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

### 顯示正負號

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

### 自定義顏色

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

### 自定義圖標

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

| 參數         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| rate         | 數值，大於0時箭頭向上，小於0時箭頭向下    | Number | -                |
| digits         | 小數位精度               | Number | 2               |
| showSign         | 是否顯示加減號               | Boolean | false               |
| showZero         | 是否顯示 0               | Boolean | false               |
| arrowLeft        | 是否在數字左側顯示箭頭     | Boolean | false               |
| syncTextColor   | 文字顏色是否與箭頭同步               | Boolean | true   |
| textColor        | 文字顏色               | String | '#333333'               |
| riseColor         | 向上箭頭顏色               | String | '#fa2c19'               |
| dropColor         | 向下箭頭顏色               | String | 『#64b578』               |
| iconSize         | 箭頭大小               | String | '12px'               |
| upIconName         | 自定義向上箭頭icon               | String | 'triangle-up'               |
| downIconName         | 自定義向下箭頭icon               | String | 'triangle-down'               |




## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-trendarrow-font-size | ` 14px` |
| --nutui-trendarrow-before-icon-margin | `  4px` |
| --nutui-trendarrow-font-size | ` 14px` |
| --nutui-trendarrow-before-icon-margin | `  4px` |
