# VirtualList 虛擬列錶

## 介紹

在正常的列錶展示以及上拉加載中，我們通常使用 NutUI-React 提供的 滾動加載 組件，那如果我們加載的數據量非常大時，則可能會產生嚴重的性能問題，導致視圖無法響應操作一段時間，這時候我們就用到了虛擬列錶組件 VirtualList，它可以保證只渲染當前可視區域，其他部分在用戶滾動到可視區域內之後再渲染。保證了頁面流程度，提升性能。

## 安裝

```tsx
import { VirtualList } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法-垂直等高

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
  useEffect(() => {
    getData()
  }, [getData])
  const itemRender = (data, dataIndex) => {
    return <p>自定義-{data}-{dataIndex}</p>
  }
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar heigh1'>
      <VirtualList
        itemHeight={66}
        list={list}
        itemRender={itemRender}
      />
    </div>
  )
}
export default App;
```

:::

### 垂直不等高&無限下滑

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
  const itemVariable = (data, dataIndex) => {
    return (
      <p className={dataIndex % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>可變大小隔行展示-{data}</p>
    )
  }
  /** itemSize為首屏最大元素大小 */
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar heigh1'>
      <VirtualList
        list={list}
        itemRender={itemVariable}
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

### 水平等寬

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
  const itemRender = (data, dataIndex) => {
    return <p>自定義-{data}-{dataIndex}</p>
  }
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar'>
      <VirtualList
        list={list}
        itemRender={itemRender}
        itemHeight={124}
        direction="horizontal"
      />
    </div>
  )
}
export default App;
```

:::

### 水平不等寬&無限滑動

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
  const itemVariable = (data, dataIndex) => {
    return (
      <p className={dataIndex % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>可變大小隔行展示-{data}</p>
    )
  }
  /** itemSize為首屏最大元素大小 */
  return (
    <div className='nut-virtualList-demo-box  hideScrollbar'>
      <VirtualList
        list={list}
        itemHeight={300}
        itemRender={itemVariable}
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 獲取數據 | `Array` | `-` |
| containerHeight | 容器高度 | `number` | `獲取元素的 offsetWidth 或 offsetHeight，需要 css 給出` |
| itemRender | virtual 列錶父節點渲染的函數 | `(data: any, dataIndex: number, index: number) => ReactNode` | `-` |
| itemHeight | item 高度，如果不定高，則為首屏單個最大 height | `number` | `66` |
| itemEqual | item 高度是否一致 | `boolean` | `true` |
| overscan | 除了視窗裏面默認的元素, 還需要額外渲染的 item 個數 | `number` | `2` |
| key | 用於指定 list 數據每一項的唯一 key 的字段名，默認取下標 | `string` | `-` |
| direction | `vertical`、`horizontal` | `string` | `vertical` |
| onScroll | 滑動到底(右)的事件，可以實現無限滾動 | `() => void` | `-` |