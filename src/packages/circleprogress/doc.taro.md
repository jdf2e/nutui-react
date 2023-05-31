# CircleProgress 进度条

## 介绍

展示操作或任务的当前进度。

## 安装

```ts
import { CircleProgress } from '@nutui/nutui-react-taro';
```

## 代码演示
### 基础用法

:::demo
```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <CircleProgress percent={20} />
      <CircleProgress percent={60}>60%</CircleProgress>
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
import { CircleProgress } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <CircleProgress percent={50} strokeWidth={10} />
    </>
  )
}
export default App;
```
:::

### 环形进度条自定义颜色(支持渐变色)
:::demo
```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react-taro';

const gradientColor = {
  '0%': '#ff404f',
  '100%': '#fa2c19',
}
const App = () => {
  return (
    <>
      <CircleProgress percent={50} color="#fa2c19">
        50%
      </CircleProgress>
      <CircleProgress percent={100} color={gradientColor}>
        100%
      </CircleProgress>
    </>
  )
}
export default App;
```
:::

### 环形进度条自定义大小
:::demo
```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react-taro';


const App = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        50%
      </CircleProgress>
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
import { CircleProgress } from '@nutui/nutui-react-taro';


const App = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        <div>3000</div>
        <div style={{ fontSize: '12px', color: 'var(--nutui-gray-2)' }}>
          步
        </div>
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
import { Button, CircleProgress } from '@nutui/nutui-react-taro';

const App = () => {
  const [percent, setPercent] = useState(30)
  
  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }

  return (
    <>
      <div className="demo__piece">
        <CircleProgress percent={percent}>{percent}%</CircleProgress>
      </div>
      <div className="demo__btn">
        <Button type="primary" onClick={setReduceVal}>
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

## CircleProgress
### Props

| 属性 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percent | 百分比 | `number \| string` | `必传项，无默认值`
| strokeWidth | 圆弧的宽度 | `number \| string` | `5`
| radius | 半径 |  `number \| string` | `50`
| color | 圆环进度条颜色，传入对象格式可以定义渐变色 | `object \| string` | `#fa2c19`
| background | 圆环轨道颜色| `string` | `#d9d9d9`
| strokeLinecap | 圆环进度条端点形状 | `'butt' \| 'round' \| 'square' \| 'inherit'` | `round`
| clockwise | 是否顺时针展示| `boolean` | `true`

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| --nutui-circleprogress-primary-color | 环形进度条填充部分的颜色 | `$primary-color` |
| --nutui-circleprogress-path-color | 环形进度条轨道的颜色 | `#e5e9f2` |
| --nutui-circleprogress-text-color | 环形进度条轨道内容区的颜色 | `$title-color` |
| --nutui-circleprogress-text-size | 环形进度条轨道内容区的大小 | `$font-size-3` |
