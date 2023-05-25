# VirtualList 虚拟列表

## 介绍

在正常的列表展示以及上拉加载中，我们通常使用 NutUI-React 提供的 滚动加载 组件，那如果我们加载的数据量非常大时，则可能会产生严重的性能问题，导致视图无法响应操作一段时间，这时候我们就用到了虚拟列表组件 VirtualList，它可以保证只渲染当前可视区域，其他部分在用户滚动到可视区域内之后再渲染。保证了页面流程度，提升性能。

## 安装

```javascript
import { VirtualList } from '@nutui/nutui-react-taro';
```

## 代码演示

### 1、基础用法-垂直等高

:::demo

```tsx
import React, { useState, useEffect, useCallback } from 'react'
import { VirtualList } from '@nutui/nutui-react-taro';

const App =() => {
  const [list, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50px',
    background: '#fff',
    borderRadius: '10px',
  }

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

  const ItemRender = ({ data }: any) => {
    return <div style={itemStyle}>{data}</div>
  }
  const ItemRenderMemo = React.memo(ItemRender)

  const onScroll = () => {
    if (pageNo > 50 || isLoading) return
    setIsLoading(true)
    setTimeout(() => {
      setPageNo(pageNo + 1)
      setIsLoading(false)
    }, 30)
  }
  return (
   <div style={{ height: '100%' }}>
          <VirtualList
            itemHeight={50}
            list={list}
            ItemRender={ItemRenderMemo}
            onScroll={onScroll}
          />
  </div>
  )
}
export default App;
```

:::

### 2、垂直不等高&无限下滑

:::demo

```tsx
import React, { useState, useEffect, useCallback } from 'react'
import { VirtualList } from '@nutui/nutui-react-taro';

const App =() => {
  const [list, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  
  const itemStyel2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    background: '#fff',
    borderRadius: '10px',
  }

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

   const ItemVariable = ({ data, index }: any) => {
    return (
      <div
        style={{
          height: `${index % 2 === 0 ? '100px' : '50px'}`,
          ...itemStyel2,
        }}
      >{data}</div>
    )
  }
  const ItemVariableDemo = React.memo(ItemVariable)

  const onScroll = () => {
    if (pageNo > 50 || isLoading) return
    setIsLoading(true)
    setTimeout(() => {
      setPageNo(pageNo + 1)
      setIsLoading(false)
    }, 30)
  }
  return (
   <div style={{ height: '100%' }}>
          <VirtualList
            itemHeight={80}
            list={list}
            ItemRender={ItemVariableDemo}
            onScroll={onScroll}
            itemEqual={false}
            containerHeight={500}
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
| list | 获取数据 | `Array` | - |
| containerHeight | 容器高度 | `number` | `获取元素的 offsetWidth 或 offsetHeight，需要 css 给出` |
| ItemRender | virtual 列表父节点渲染的函数 | `React.FC` | - |
| itemHeight | item 高度，如果不定高，则为首屏单个最大 height | `number` | `66` |
| itemEqual | item 高度是否一致 | `boolean` | `true` |
| overscan | 除了视窗里面默认的元素, 还需要额外渲染的 item 个数 | `number` | `2` |
| key | 用于指定 list 数据每一项的唯一 key 的字段名，默认取下标 | `string` | - |
| onScroll | 滑动到底的事件，可以实现无限滚动 | `() => void` | - |
