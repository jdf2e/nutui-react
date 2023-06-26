# VirtualList

## Intro

In normal list show and pull-up loading, we usually use the InfiniteLoading component provided by NutUI. If we load a large amount of data, serious performance problems may occur, resulting in the view unable to respond to the operation for a period of time. At this time, we use the virtual list component list, which can ensure that only the current visual area is rendered, Other parts are rendered after the user scrolls to the visible area. Ensure page flow and improve performance.

## Install

```tsx
import { Virtuallist } from '@nutui/nutui-react';
```

## Demo

### Basic usage - vertical height

:::demo

```tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [list, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((list) => {
      return [...list, ...datas]
    })
  }, [])
  useEffect(() => {
    getData()
  }, [getData])
  const ItemRender = ({ data,index }) => {
    return <p>Custom-{data}-{index}</p>
  }
  const ItemRenderMemo = React.memo(ItemRender)
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar heigh1'>
      <VirtualList
        itemHeight={66}
        list={list}
        ItemRender={ItemRenderMemo}
      />
    </div>
  )
}
export default App;
```

:::

### Vertical unequal height & infinite slide

:::demo

```tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [list, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((list) => {
      return [...list, ...datas]
    })
  }, [])
 const onScroll = () => {
    if (pageNo > 100) return
    setPageNo(pageNo + 1)
  }
  useEffect(() => {
    getData()
  }, [getData])
  const ItemVariable = ({ data, index }) => {
    return (
      <p className={index % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>Variable size-{data}</p>
    )
  }
  /** ItemSize Indicates the maximum size of the first screen element */
  const ItemVariableDemo = React.memo(ItemVariable)
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar heigh1'>
      <VirtualList
        list={list}
        ItemRender={ItemVariableDemo}
        itemHeight={128}
        itemEqual={false}
        onScroll={onScroll}
      />
    </div>
  )
}
export default App;
```

:::

### horizontal width

:::demo

```tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [list, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((list) => {
      return [...list, ...datas]
    })
  }, [])
  useEffect(() => {
    getData()
  }, [getData])
  const ItemRender = ({ data,index }) => {
    return <p>Custom-{data}-{index}</p>
  }
  const ItemRenderMemo = React.memo(ItemRender)
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar'>
      <VirtualList
        list={list}
        ItemRender={ItemRenderMemo}
        itemHeight={124}
        direction="horizontal"
      />
    </div>
  )
}
export default App;
```

:::

### Horizontal unequal width & infinite sliding

:::demo

```tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [list, setsourceData] = useState([])

  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((list) => {
      return [...list, ...datas]
    })
  }, [])
  const onScroll = () => {
    if (pageNo > 100) return
    setPageNo(pageNo + 1)
  }
  useEffect(() => {
    getData()
  }, [getData])
  const ItemVariable = ({ data, index }) => {
    return (
      <p className={index % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>Variable size-{data}</p>
    )
  }
  /** ItemSize Indicates the maximum size of the first screen element */
  const ItemVariableDemo = React.memo(ItemVariable)
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar'>
      <VirtualList
        list={list}
        itemHeight={300}
        ItemRender={ItemVariableDemo}
        direction="horizontal"
        itemEqual={false}
        onScroll={onScroll}
      />
    </div>
  )
}
export default App;
```

:::

## VirtualList

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | source data | `Array` | `-` |
| containerHeight | container height | `number` | `Get the element offsetWidth or offsetHeight, which is given by CSS` |
| ItemRender | virtual function rendered by the parent of the list | `React.FC` | `-` |
| itemHeight | Item height, if not height, the first screen single maximum height | `number` | `66` |
| itemEqual | the sizes of items are consistent | `boolean` | `true` |
| overscan | In addition to the default elements in the viewport, there is an additional number of items to render | `number` | `2` |
| key | the key name of item in list, index as default | `string` | `-` |
| direction | horizontal or vertical | `string` | `vertical` |
| onScroll | scroll to end | `() => void` | `-` |