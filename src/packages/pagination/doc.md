#  Pagination 分页

### 介绍
    
当数据量较多时，采用分页的形式分隔长列表。
    
### 安装
``` javascript
import { Pagination } from '@nutui/nutui-react';
```    

### 基础用法
通过modelValue来绑定当前页码时，组件为受控状态，分页显示取决于传入的modelValue，一般搭配onChange使用。
不需要受控时，可通过defaultCurrentPage指定当前页码
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const pageChange1 = (v: any) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      modelValue={currentPage1}
      totalItems="25"
      itemsPerPage="5"
      onChange={pageChange1}
    />
  )
}
export default App;
```
:::
### 简单模式
将 mode 设置为 "simple" 来切换到简单模式，此时分页器不会展示具体的页码按钮。
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v: any) => {
    const c = v
    setCurrentPage2(c)
  }
  return (
    <Pagination
      modelValue={currentPage2} 
      pageCount={12} 
      mode="simple" 
      onChange={pageChange2} 
    />
  )
}
export default App;
```
:::

### 显示省略号
设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage3, setCurrentPage3] = useState(1)
  const pageChange3 = (v: any) => {
    const c = v
    setCurrentPage3(c)
  }
  return (
    <Pagination
      modelValue={currentPage3}
      totalItems="125"
      showPageSize="3"
      forceEllipses
      onChange={pageChange3}
    />
  )
}
export default App;
```
:::
### 自定义按钮
通过pageNodeRender传入自定义方法，入参数为page:{ number:页数, text:"文本", active:"选中状态" } 
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination,Icon } from '@nutui/nutui-react';

const App = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: any) => {
    const c = v
    setCurrentPage4(c)
  }
  const pageNodeRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
  }
  return (
    <Pagination
      modelValue={currentPage4}
      totalItems="500"
      showPageSize="5"
      onChange={pageChange4}
      pageNodeRender={pageNodeRender} 
      prevText={<Icon name="left"/>} 
      nextText={<Icon name="right"/>}
    />
  )
}
export default App;
```
:::
    
## API
    
### Props
    
| 参数           | 说明                             | 类型                      | 默认值            |
| -------------- | -------------------------------- | ------------------------- | ----------------- |
| modelValue     | 当前页码                         | Number                    | -                 |
| defaultValue   | 当前页码                         | Number                    | 1                 |
| mode           | 显示模式,可选值为：multi，simple | String                    | multi             |
| prevText       | 自定义上一页按钮内容             | String \| React.ReactNode | 上一页            |
| nextText       | 自定义下一页按钮内容             | String \| React.ReactNode | 下一页            |
| pageCount      | 总页数                           | String \| Number          | 传入/根据页数计算 |
| totalItems     | 总记录数                         | String \| Number          | 0                 |
| itemsPerPage   | 每页记录数                       | String \| Number          | 10                |
| showPageSize   | 显示的页码个数                   | String \| Number          | 5                 |
| forceEllipses  | 是否显示省略号                   | Boolean                   | false             |
| pageNodeRender | 用于自定义页码的结构             | (page) => React.ReactNode | -                 |
    
### Events
    
| 事件名   | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| onChange | 页码改变时触发 | value    |
