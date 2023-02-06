# CricleProgress 進度條

### 介紹

展示操作或任務的當前進度。

### 安裝

```ts
// react
import { CircleProgress } from '@nutui/nutui-react';

```

### 基礎用法

:::demo
```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress progress={10} />
    </>
  )
}
export default App;
```
:::

### 環形進度條自定義樣式

:::demo
```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const progressOption = {
  radius: 50,
  strokeOutWidth: 10,
  backColor: '#d9d9d9',
  progressColor: 'red',
}
const App = () => {
  return (
    <>
      <CircleProgress progress={50} progressOption={progressOption} />
    </>
  )
}
export default App;
```
:::

### 環形進度條自定義內容
:::demo
```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const progressOption = {
  radius: 50,
  strokeOutWidth: 10,
  backColor: '#d9d9d9',
  progressColor: 'red',
}
const App = () => {
  return (
    <>
      <CircleProgress progress={50} isAuto>
        <div>自定義</div>
      </CircleProgress>
    </>
  )
}
export default App;
```
:::

### 動態改變環形進度條的進度
:::demo
```tsx
import React, { useState } from "react";
import { Button, CircleProgress } from '@nutui/nutui-react';

const progressOption = {
  radius: 50,
  strokeOutWidth: 10,
  backColor: '#d9d9d9',
  progressColor: 'red',
}
const App = () => {
  const [percent, setPercent] = useState(50)
  const [strokeInnerWidth, setStrokeInnerWidth] = useState(10)
  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setStrokeInnerWidth(0)
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    setStrokeInnerWidth(10)
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }
  return (
    <>
      <div className="demo__piece">
        <CircleProgress
          progress={percent}
          progressOption={progressOption}
          strokeInnerWidth={strokeInnerWidth}
         />
      </div>
      <div className="demo__btn">
        <Button type="primary" onClick={setReduceVal} style={{ marginRight: '10px' }}>
          減少
        </Button>
        <Button type="primary" onClick={setAddVal}>
          增加
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::


## Prop

| 字段 | 說明 | 類型 | 默認值
|----- | ----- | ----- | -----
| progress | 百分比 | Number,String | 必傳項，無默認值
| strokeWidth | 圓弧的寬度 | Number,String | 5
| radius | 半徑 | Number,String | 50
| circleColor | 圓環進度條顏色 | Number,String | '#fa2c19'
| pathColor | 圓環軌道顏色 | String | '#d9d9d9'
| strokeLinecap | 圓環進度條端點形狀可選值為 square butt | String | 'round'
| clockwise| 是否順時針展示 | Boolean | true

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-circleprogress-primary-color | `  $primary-color` |
| --nutui-circleprogress-path-color | `  #e5e9f2` |
| --nutui-circleprogress-text-color | `  $title-color` |
| --nutui-circleprogress-text-size | `  $font-size-3` |
