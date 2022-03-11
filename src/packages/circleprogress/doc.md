# CricleProgress 进度条

### 介绍

展示操作或任务的当前进度。

### 安装

``` ts
import { CirecleProgress } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

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

### 环形进度条自定义样式

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

### 环形进度条自定义内容
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
        <div>自定义</div>
      </CircleProgress>
    </>
  )
}
export default App;
```
:::

### 动态改变环形进度条的进度
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
const demoBtnStyle = {
  textAlign: 'center',
  width: '100%',
  height: '50px',
  borderTop: '1px solid rgba(234, 240, 251, 1)',
  paddingTop: '6px',
  background: 'rgba(255, 255, 255, 1)'
}
const demoPieceStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 1)'
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
      <div className="demo__piece" style={demoPieceStyle}>
        <CircleProgress
          progress={percent}
          progressOption={progressOption}
          strokeInnerWidth={strokeInnerWidth}
         />
      </div>
      <div className="demo__btn" style={demoBtnStyle}>
        <Button type="primary" onClick={setReduceVal} style={{ marginRight: '10px' }}>
          减少
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

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| progress | 百分比 | Number,String | 必传项，无默认值
| strokeInnerWidth | 圆弧的宽度 | Number,String | 10
| isAuto | 是否自定义内容显示（taro暂不支持） | Boolean | false
| progressOption | 外圆相关参数对象,其中包括半径，宽度，背景颜色，进度色值 | Object | {radius: 50,strokeOutWidth: 10, backColor: '#d9d9d9',progressColor: 'red'}