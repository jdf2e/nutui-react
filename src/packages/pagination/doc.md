# Pagination 分页

## 介绍

当数据量较多时，采用分页的形式分隔长列表。

## 安装

```tsx
import { Pagination } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

通过 value 来绑定当前页码时，组件为受控状态，分页显示取决于传入的 value ，一般搭配 onChange 使用。 不需要受控时，可通过 defaultValue 指定当前页码 

:::demo

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const pageChange1 = (v: number) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      value={currentPage1}
      total={25}
      pageSize={5}
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

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v: number) => {
    const c = v
    setCurrentPage2(c)
  }
  return (
    <Pagination
      value={currentPage2}
      total={12}
      pageSize={1}
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

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage3, setCurrentPage3] = useState(1)
  const pageChange3 = (v: number) => {
    const c = v
    setCurrentPage3(c)
  }
  return (
    <Pagination
      value={currentPage3}
      total={125}
      itemSize={2}
      ellipse
      onChange={pageChange3}
    />
  )
}
export default App;
```

:::

### 自定义按钮

通过itemRender传入自定义方法，入参数为page:{ number:页数, text:"文本", active:"选中状态" } 

:::demo

```tsx
import React, { useState } from 'react'
import { Pagination} from '@nutui/nutui-react'; 
import { Left, Right } from '@nutui/icons-react';

const App = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: number) => {
    const c = v
    setCurrentPage4(c)
  }
  const itemRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
  }
  return (
    <Pagination
      value={currentPage4}
      total={500}
      itemSize={5}
      onChange={pageChange4}
      itemRender={itemRender} 
      prev={<Left />}
      next={<Right />}
    />
  )
}
export default App;
```

:::

### 非受控方式

:::demo

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react'; 

const App = () => {
  const pageChange5 = (v: number) => {
    console.log(v)
  }
  return (
    <Pagination
      defaultValue={15}
      total={500}
      pageSize={10}
      itemSize={3}
      onChange={pageChange5}
    />
  )
}
export default App;
```

:::

## Pagination

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前页码，受控值，与 onChange 搭配使用 | `number` | `-` |
| defaultValue | 默认页码，非受控 | `number` | `1` |
| mode | 显示模式 | `multi` \| `simple` | `multi` |
| prev | 自定义上一页按钮内容 | `ReactNode` | `上一页` |
| next | 自定义下一页按钮内容 | `ReactNode` | `下一页` |
| total | 总记录数 | `number` | `50` |
| pageSize | 每页记录数 | `number` | `10` |
| itemSize | 显示的页码个数 | `number` | `5` |
| ellipse | 是否显示省略号 | `boolean` | `false` |
| itemRender | 用于自定义页码的结构 | `(page: {number, text}) => ReactNode` | `-` |
| onChange | 页码改变时触发 | `(value) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-pagination-color | 页码字色 |  `$primary-color` |
| \--nutui-pagination-font-size | 页码字号 | `$font-size-2` |
| \--nutui-pagination-item-border-color | 边框颜色 | `$gray9` |
| \--nutui-pagination-disable-color | 不可用色 | `$disable-color` |
| \--nutui-pagination-disable-background-color | 不可用背景色 | `$gray10` |
| \--nutui-pagination-item-border-width | 边框宽度 | `1px` |
| \--nutui-pagination-item-border-radius | 边框圆角 | `2px` |
| \--nutui-pagination-prev-next-padding | padding 值 | `0 11px` |