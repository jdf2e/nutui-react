---
sidebar_class_name: hasIcon
---

# Table组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于展示基础表格

## 引入

```tsx
import { Table } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}

const Demo1 = () => {
  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: 'ID',
      key: 'id',
      render: (_record: any, index) => {
        return index + 1
      },
    },
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'gender',
      render: (record: any) => {
        return (
          <span style={{ color: record.gender === '女' ? 'blue' : 'green' }}>
            {record.gender}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
    },
  ])

  return <Table columns={columns} data={data} />
}
export default Demo1
```

### 是否显示边框，文字对齐

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}

const Demo2 = () => {
  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
    },
  ])

  return <Table columns={columns} data={data} bordered={false} />
}
export default Demo2
```

### 显示总结栏

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}

const Demo3 = () => {
  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'gender',
      render: (record: any) => {
        return (
          <span style={{ color: record.gender === '女' ? 'blue' : 'green' }}>
            {record.gender}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
    },
  ])

  return <Table columns={columns} data={data} summary="这是总结栏" />
}
export default Demo3
```

### 条纹、明暗交替

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}

const Demo4 = () => {
  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'gender',
      render: (record: any) => {
        return (
          <span style={{ color: record.gender === '女' ? 'blue' : 'green' }}>
            {record.gender}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
    },
  ])

  return <Table columns={columns} data={data} striped />
}
export default Demo4
```

### 隐藏表头

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}

const Demo5 = () => {
  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'gender',
      render: (record: any) => {
        return (
          <span style={{ color: record.gender === '女' ? 'blue' : 'green' }}>
            {record.gender}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
    },
  ])

  return <Table columns={columns} data={data} showHeader={false} />
}
export default Demo5
```

### 无数据默认展示，支持自定义

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}

const Demo6 = () => {
  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'gender',
      render: (record: any) => {
        return (
          <span style={{ color: record.gender === '女' ? 'blue' : 'green' }}>
            {record.gender}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data] = useState([])

  return (
    <>
      <Table columns={columns} data={data} />
      <Table columns={columns} data={data} noData="这里是自定义展示" />
    </>
  )
}
export default Demo6
```

### 自定义单元格

```tsx
import React, { useState } from 'react'
import { Table, Button } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'

const Demo7 = () => {
  const [columns] = useState([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '操作',
      key: 'render',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      render: () => {
        return (
          <Button
            onClick={() => Taro.showToast({ title: 'hello' })}
            size="small"
            type="primary"
          >
            <div>Hello</div>
          </Button>
        )
      },
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
      render: () => {
        return <Star size="14px" />
      },
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
      render: () => {
        return (
          <Button
            type="success"
            size="small"
            onClick={() => window.open('https://www.jd.com')}
          >
            <div>跳转到京东</div>
          </Button>
        )
      },
    },
  ])

  return <Table columns={columns} data={data} />
}
export default Demo7
```

### 支持异步渲染(5s之后看效果)

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [data1] = useState<Array<any>>([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
    },
  ])
  const [data, setData] = useState<Array<any>>([])
  const [columns] = useState([
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === '女' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: '学历',
      key: 'record',
    },
  ])
  setTimeout(() => {
    setData(data1)
  }, 5000)

  return <Table columns={columns} data={data} style={{ background: '#fff' }} />
}
export default Demo8
```

### 支持排序

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}
const Demo9 = () => {
  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      age: 10,
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
      age: 30,
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
      age: 4,
    },
  ])

  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '年龄',
      key: 'age',
      sorter: (row1: any, row2: any) => {
        return row1.age - row2.age
      },
    },
  ])

  const handleSorter = (item: TableColumnProps, data: Array<any>) => {
    Taro.showToast({ title: `${JSON.stringify(item)}` })
  }

  return (
    <Table
      columns={columns}
      data={data}
      onSort={handleSorter}
      style={{ background: '#fff' }}
    />
  )
}
export default Demo9
```

### 支持排序替换ICON

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'
import { TriangleDown } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}
const Demo10 = () => {
  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      age: 10,
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
      age: 30,
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
      age: 4,
    },
  ])

  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '年龄',
      key: 'age',
      sorter: (row1: any, row2: any) => {
        return row1.age - row2.age
      },
    },
  ])

  const handleSorter = (item: TableColumnProps, data: Array<any>) => {
    Taro.showToast({ title: `${JSON.stringify(item)}` })
  }

  return (
    <Table
      columns={columns}
      data={data}
      onSort={handleSorter}
      style={{ background: '#fff' }}
      sorterIcon={<TriangleDown size={12} />}
    />
  )
}
export default Demo10
```

### 固定表头

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}

const Demo11 = () => {
  const summaryContent = '这是总结栏'
  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      gender: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      gender: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
  ])

  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '生日',
      key: 'birthday',
    },
    {
      title: '年龄',
      key: 'age',
    },
  ])

  return (
    <Table
      columns={columns}
      data={data}
      style={{ height: 150 }}
      summary={summaryContent}
    />
  )
}
export default Demo11
```

### 固定左侧列

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}
const Demo12 = () => {
  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      gender: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      gender: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
  ])

  const [columnsStickLeft] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      fixed: 'left',
      width: 100,
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '生日',
      key: 'birthday',
    },
    {
      title: '年龄',
      key: 'age',
    },
  ])

  return <Table columns={columnsStickLeft} data={data} />
}
export default Demo12
```

### 固定右侧列

```tsx
import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}
const Demo13 = () => {
  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      gender: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      gender: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
  ])

  const [columnsStickRight, setColumnsStickRight] = useState<
    Array<TableColumnProps>
  >([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '生日',
      key: 'birthday',
    },
    {
      title: '年龄',
      key: 'age',
      fixed: 'right',
      width: 60,
    },
  ])

  return <Table columns={columnsStickRight} data={data} />
}
export default Demo13
```

## Table

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| bordered | 是否显示边框 | `boolean` | `true` |
| columns | 表头数据 | `TableColumnProps[]` | `[]` |
| data | 表格数据 | `Object[]` | `[]` |
| summary | 是否显示简介 | `ReactNode` | `-` |
| striped | 条纹是否明暗交替 | `boolean` | `false` |
| showHeader | 是否显示表头 | `boolean` | `true` |
| noData | 自定义无数据 | `ReactNode` | `-` |
| onSort | 点击排序按钮触发 | `item: TableColumnProps, data: Array<any>` | `-` |
| sorterIcon | 排序 icon | `ReactNode` | `<ArrowDown />` |

### TableColumnProps

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| key | 列的唯一标识 | `string` | `-` |
| title | 表头标题 | `string` | `-` |
| align | 列的对齐方式 | `left` \| `center` \| `right` | `left` |
| sorter | 排序，可选值有 true,function, default, 其中 default表示点击之后可能会依赖接口, function可以返回具体的排序函数, default表示采用默认的排序算法 | `boolean` \| `Function` \| `string` | `-` |
| render | 自定义渲染列数据，优先级高 | `Function(record)` | `-` |
| width | 列宽度 | `number` | `auto` |
| fixed | 固定位置 | `left` \| `right` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-table-border-color | 表格的边框色值 | `#ececec` |
| \--nutui-table-cols-padding | 表格列的padding值 | `10px` |
| \--nutui-table-tr-even-background-color | 表格偶数行的背景色 | `$color-background` |
| \--nutui-table-tr-odd-background-color | 表格奇数行的背景色 | `$white` |
| \--nutui-table-sticky-left-shadow | 表格左侧固定阴影 | `4px 0 8px 0 rgba(0, 0, 0, 0.1)` |
| \--nutui-table-sticky-right-shadow | 表格右侧固定阴影 | `-4px 0 8px 0 rgba(0, 0, 0, 0.1)` |
