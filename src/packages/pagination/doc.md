#  Pagination 分页

### 介绍
    
当数据量较多时，采用分页的形式分隔长列表。
    
### 安装
``` javascript
// react
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
      pageSize="5"
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
      itemSize="3"
      ellipse
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
import { Pagination} from '@nutui/nutui-react'; 
import { Left, Right } from '@nutui/icons-react';

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
      itemSize="5"
      onChange={pageChange4}
      pageNodeRender={pageNodeRender} 
      prev={<Left />}
      next={<Right />}
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
| modelValue     | 当前页码                         | number                    | -                 |
| defaultValue   | 当前页码                         | number                    | `1`                 |
| mode           | 显示模式,可选值为：multi，simple | string                    | `multi`             |
| prev       | 自定义上一页按钮内容             | string \| ReactNode | `上一页`            |
| next       | 自定义下一页按钮内容             | string \| ReactNode | `下一页`            |
| pageCount      | 总页数                           | string \| number          | 传入/根据页数计算 |
| totalItems     | 总记录数                         | string \| number          | `0`                 |
| pageSize   | 每页记录数                       | string \| number          | `10`                |
| itemSize   | 显示的页码个数                   | string \| number          | `5`                 |
| ellipse  | 是否显示省略号                   | boolean                   | `false`             |
| pageNodeRender | 用于自定义页码的结构             | (page) => ReactNode | -                 |
    
### Events
    
| 事件名   | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| onChange | 页码改变时触发 | `value`    |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-pagination-color | `$primary-color` |
| --nutui-pagination-font-size | `$font-size-2` |
| --nutui-pagination-item-border-color | `#e4e7eb` |
| --nutui-pagination-disable-color | `$disable-color` |
| --nutui-pagination-disable-background-color | `#f7f8fa` |
| --nutui-pagination-item-border-width | `1px` |
| --nutui-pagination-item-border-radius | `2px` |
| --nutui-pagination-prev-next-padding | `0 11px` |
