#  VirtualList

### Intro

In normal list show and pull-up loading, we usually use the InfiniteLoading component provided by NutUI. If we load a large amount of data, serious performance problems may occur, resulting in the view unable to respond to the operation for a period of time. At this time, we use the virtual list component list, which can ensure that only the current visual area is rendered, Other parts are rendered after the user scrolls to the visible area. Ensure page flow and improve performance.

### Install
```javascript
import { Virtuallist } from '@nutui/nutui-react';
```
## Demo


### 1、Basic usage - vertical height

:::demo
``` tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [sourceData, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((sourceData) => {
      return [...sourceData, ...datas]
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
            itemSize={66}
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
          />
  </div>
  )
}
export default App;
```
:::
### 2、Vertical unequal height & infinite slide

:::demo
``` tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [sourceData, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((sourceData) => {
      return [...sourceData, ...datas]
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
            sourceData={sourceData}
            ItemRender={ItemVariableDemo}
            itemSize={128}
            itemEqualSize={false}
            onScroll={onScroll}
          />
  </div>
  )
}
export default App;
```
:::

### 3、horizontal width

:::demo
``` tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [sourceData, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((sourceData) => {
      return [...sourceData, ...datas]
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
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            itemSize={124}
            horizontal
          />
  </div>
  )
}
export default App;
```
:::
### 4、Horizontal unequal width & infinite sliding

:::demo
``` tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App =() => {
  const [sourceData, setsourceData] = useState([])

  const getData = useCallback(() => {
    const datas = []
    const pageSize = 90
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`)
    }
    setsourceData((sourceData) => {
      return [...sourceData, ...datas]
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
            sourceData={sourceData}
            itemSize={300}
            ItemRender={ItemVariableDemo}
            horizontal
            itemEqualSize={false}
            onScroll={onScroll}
          />
  </div>
  )
}
export default App;
```
:::
## API

### Props

| 参数           | 说明                               | 类型       | 默认值                                   |
|---------------|----------------------------------|----------|---------------------------------------|
| sourceData    | source data                      | Array    | -                                     |
| containerSize | container height                      | Number   | Get the element offsetWidth or offsetHeight, which is given by CSS |
| ItemRender    | virtual function rendered by the parent of the list               | React.FC | -                                     |
| itemSize      | Item height, if not height, the first screen single maximum size       | String   | -                                     |
| itemEqualSize | the sizes of items are consistent                       | Boolean  | true                                  |
| overscan      | In addition to the default elements in the viewport, there is an additional number of items to render      | Number   | 2                                     |
| key           | Unique value,Item(sourceData) Specifies a field with a unique value | string   | index                                 |
| horizontal    |  horizontal or vertical                    | Boolean  | false                                 |
## Events
| 方法名            | 说明       | 参数            | 返回值     |
|----------------|----------| --------------- | ---------- |
| onScroll`v1.3.8` | scroll event |        -        |      -    |



