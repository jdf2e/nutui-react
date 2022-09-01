# PullToRefresh 下拉刷新

### 介绍

在列表中通过手指下拉刷新加载新内容的交互操作。

### 安装

```js
import { PullToRefresh } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from "react";
import { PullToRefresh, Cell } from '@nutui/nutui-react'

const App = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <PullToRefresh>
          {list.map((item) => (
            <Cell key={item}>{item}</Cell>
          ))}
        </PullToRefresh>
      </div>
    </>
  )
}

export default App
```

:::

## API

### Props

| 字段 | 说明 | 类型 | 默认值 |
|--------------|----------------------------------|-----------|--|
| canReleaseText | 释放的提示文案 | `ReactNode` | `释放立即刷新` |
| completeText | 完成时的提示文案 | ReactNode | `刷新成功` |
| completeDelay | 完成后延迟消失的时间，单位为 ms | number | `500` |
| disabled | 是否禁用下拉刷新 | boolean | `false` |
| headHeight | 头部提示内容区的高度，单位为 px | number | `40` |
| pullingText | 下拉的提示文案 | ReactNode | `下拉刷新` |
| refreshingText | 刷新时的提示文案 | ReactNode | `加载中……` |
| renderText | 根据下拉状态，自定义下拉提示文案 | ReactNode | `-` |
| threshold | 触发刷新需要下拉多少距离，单位为 px | number | `60` |

### Events

| 事件名 | 说明           | 类型                   |
|--------|----------------|----------------------|
| onRefresh  | 触发刷新时的处理函数 | `() => Promise<any>` |
