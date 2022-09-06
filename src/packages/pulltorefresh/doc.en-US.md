# PullToRefresh

### Intro

An interaction to load new content with a finger pull-to-refresh in a list.

### Install

```js
import { PullToRefresh } from '@nutui/nutui-react';
```

## Demo

### Basic usage

:::demo

```tsx
import React from "react";
import { PullToRefresh, Cell } from '@nutui/nutui-react'

const App = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <div className="demo">
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

| Field | Description | Type | Default Value |
|---------------|---------------------------------- |------------|--|
| canReleaseText | Release prompt text | `ReactNode` | `Release immediate refresh` |
| completeText | Prompt text when complete | ReactNode | `Refresh successful` |
| completeDelay | The time for the delay to disappear after completion, in ms | number | `500` |
| disabled | Whether to disable pull-to-refresh | boolean | `false` |
| headHeight | The height of the head tip content area, in px | number | `40` |
| pullingText | Pull down text | ReactNode | `Pull to refresh` |
| refreshingText | Refresh text when refreshing | ReactNode | `Loading...` |
| renderText | Customize the drop-down prompt text according to the drop-down state | ReactNode | `-` |
| threshold | How far to pull down to trigger refresh, the unit is px | number | `60` |

### Events

| 事件名 | 说明           | 类型                   |
|--------|----------------|----------------------|
| onRefresh  | 触发刷新时的处理函数 | `() => Promise<any>` |
