# TrendArrow 指標趨勢

## 介紹

帶有箭頭指示的百分比數字,用以展示指標趨勢

## 安裝

```tsx
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
        <TrendArrow syncColor={false} value={1} />
        <TrendArrow syncColor={false} value={-0.2535} />
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
        <TrendArrow value={10.2365} />
        <TrendArrow value={-0.2535} />
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
        <TrendArrow digits={1} value={10.2365} />
        <TrendArrow digits={3} value={-0.2535} />
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
        <TrendArrow arrowLeft value={0.2535} />
        <TrendArrow arrowLeft value={-0.2535} />
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

### 自定義顏色

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

### 自定義圖標

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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 數值，大於0時箭頭嚮上，小於0時箭頭嚮下 | `number` | `-` |
| digits | 小數位精度 | `number` | `2` |
| symbol | 是否顯示加減號 | `boolean` | `false` |
| zero | 是否顯示 0 | `boolean` | `false` |
| arrowLeft | 是否在數字左側顯示箭頭 | `boolean` | `false` |
| syncColor | 文字顏色是否與箭頭同步 | `boolean` | `true` |
| color | 文字顏色 | `string` | `#333333` |
| riseColor | 嚮上箭頭顏色 | `string` | `#fa2c19` |
| dropColor | 嚮下箭頭顏色 | `string` | `#64b578` |
| riseIcon | 自定義嚮上箭頭icon | `React.ReactNode` | `<TriangleUp/>` |
| downIcon | 自定義嚮下箭頭icon | `React.ReactNode` | `<TriangleDown/>` |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | 指標趨勢的文字大小 | `14px` |
| \--nutui-trendarrow-icon-margin | 指標趨勢的文字與圖標間距 | `4px` |