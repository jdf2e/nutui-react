#  VirtualList 虚拟列表

### 介绍

在正常的列表展示以及上拉加载中，我们通常使用 NutUI-React 提供的 滚动加载 组件，那如果我们加载的数据量非常大时，则可能会产生严重的性能问题，导致视图无法响应操作一段时间，这时候我们就用到了虚拟列表组件 List，它可以保证只渲染当前可视区域，其他部分在用户滚动到可视区域内之后再渲染。保证了页面流程度，提升性能。

### 安装
```javascript
import { Virtuallist } from '@nutui/nutui-react';
```
## 代码演示


### 1、基础用法-垂直等高

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
  useEffect(() => {
    getData()
  }, [getData])
  const ItemRender = ({ data,index }) => {
    return <p>自定义-{data}-{index}</p>
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
### 2、垂直不等高&无限下滑

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
 const handleScroll = () => {
    if (pageNo > 100) return
    setPageNo(pageNo + 1)
  }
  useEffect(() => {
    getData()
  }, [getData])
  const ItemVariable = ({ data, index }) => {
    return (
      <p className={index % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>可变大小隔行展示-{data}</p>
    )
  }
  /** itemSize为首屏最大元素大小 */
  const ItemVariableDemo = React.memo(ItemVariable)
  return (
   <div className='nut-virtualList-demo-box  hideScrollbar heigh1'>
           <VirtualList
            sourceData={sourceData}
            ItemRender={ItemVariableDemo}
            itemSize={128}
            itemEqualSize={false}
            handleScroll={handleScroll}
          />
  </div>
  )
}
export default App;
```
:::

### 3、水平等宽

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
  useEffect(() => {
    getData()
  }, [getData])
  const ItemRender = ({ data,index }) => {
    return <p>自定义-{data}-{index}</p>
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
### 4、水平不等宽&无限滑动

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
 const handleScroll = () => {
    if (pageNo > 100) return
    setPageNo(pageNo + 1)
  }
  useEffect(() => {
    getData()
  }, [getData])
  const ItemVariable = ({ data, index }) => {
    return (
      <p className={index % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>可变大小隔行展示-{data}</p>
    )
  }
  /** itemSize为首屏最大元素大小 */
  const ItemVariableDemo = React.memo(ItemVariable)
  return (
   <div className='nut-virtualList-demo-box  hideScrollbar'>
          <VirtualList
            sourceData={sourceData}
            itemSize={300}
            ItemRender={ItemVariableDemo}
            horizontal
            itemEqualSize={false}
            handleScroll={handleScroll}
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
| sourceData    | 获取数据                             | Array    | -                                     |
| containerSize | 容器高度                             | Number   | 获取元素的offsetWidth或offsetHeight，需要css给出 |
| ItemRender    | virtual 列表父节点渲染的函数               | React.FC | -                                     |
| itemSize      | item高度，如果不定高，则为首屏单个最大size        | String   | -                                     |
| itemEqualSize | item大小是否一致                       | Boolean  | true                                  |
| overscan      | 除了视窗里面默认的元素, 还需要额外渲染的item个数      | Number   | 2                                     |
| key           | 唯一值 ,Item(sourceData)具体的某个唯一值的字段 | string   | index                                 |
| horizontal    | 决定列表是横向的还是纵向的                    | Boolean  | false                                 |
## Events
| 方法名          | 说明                  | 参数            | 返回值     |
| -------------- |---------------------| --------------- | ---------- |
| handleScroll   | 滑动到底(右)的事件，可以实现无限滚动 |        -        |      -    |



