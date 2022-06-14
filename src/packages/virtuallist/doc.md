
#  VirtualList组件

### 介绍

虚拟列表

### 安装
```javascript
import { Virtuallist } from '@nutui/nutui-react';
```
## 代码演示


### 基础用法1

:::demo
``` tsx
import React, {  FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import { VirtualList } from '@nutui/nutui-react';

const App = () => {
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

  const ItemRender = ({ data,index }) => {
    return <p>自定义-{data}-{index}</p>
  }
  const ItemRenderMemo = React.memo(ItemRender)
  return (
   <div style={{height: '120px', overflow: 'auto'}}>
          <VirtualList
            className="itemEqualSize"
            itemSize={43}
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
          />
  </div>
  )
}
export default App;
```
:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| sourceData       |  获取数据                  | Array | -                |
| ItemRender       | virtual 列表父节点渲染的函数 | React.FC<any> | -|
| itemSize         | item高度，如果不定高，则为首屏单个最大size | String      | -  |
| handleScroll     |活动到底(右)的事件，可以实现无限滚动     | Function | -     |
| itemEqualSize    | item大小是否一致             | Boolean    | true |
| overscan         |除了视窗里面默认的元素, 还需要额外渲染的item个数 | Number | 2  |
| key              |唯一值 ,Item(sourceData)具体的某个唯一值的字段   | string | index   |
| horizontal       |决定列表是横向的还是纵向的      | Boolean | false     |


