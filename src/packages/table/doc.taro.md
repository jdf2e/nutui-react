# Table组件

## 介绍

用于展示基础表格

## 安装

```tsx
import { Table } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react-taro';

interface TableColumnProps {
  key?: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}

const App = () => {
  const [columns1, setColumns1] = useState<Array<TableColumnProps>>([
    {
      title: 'ID',
      key: 'id',
      render: (record: any, index) => {
        return index + 1
      }
    },
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

  const [data1, setData1] = useState([
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

  return <Table columns={columns1} data={data1} />;
};
export default App;
```

:::

### 是否显示边框，文字对齐

:::demo

```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react-taro';

interface TableColumnProps {
  key?: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}

const App = () => {
  const [columns2, setColumns2] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'sex',
    },
    {
      title: '学历',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
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

  return <Table
        columns={columns2}
        data={data1}
        bordered={false}
    />;
};
export default App;
```

:::

### 显示总结栏

:::demo

```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react-taro';

interface TableColumnProps {
  key?: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}

const App = () => {
  const [columns1, setColumns1] = useState<Array<TableColumnProps>>([
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

  const [data1, setData1] = useState([
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

  return <Table
    columns={columns1}
    data={data1}
    summary="这是总结栏"
/>;
};
export default App;
```

:::

### 条纹、明暗交替

:::demo

```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react-taro';

interface TableColumnProps {
  key?: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}

const App = () => {
  const [columns1, setColumns1] = useState<Array<TableColumnProps>>([
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

  const [data1, setData1] = useState([
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

  return <Table
        columns={columns1}
        data={data1}
        striped
    />;
};
export default App;
```

:::

### 隐藏表头

:::demo

```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react-taro';

interface TableColumnProps {
  key?: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}

const App = () => {
  const [columns1, setColumns1] = useState<Array<TableColumnProps>>([
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

  const [data1, setData1] = useState([
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

  return <Table
        columns={columns1}
        data={data1}
        showHeader={false}
    />;
};
export default App;
```

:::

### 无数据默认展示，支持自定义

:::demo

```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react-taro';

interface TableColumnProps {
  key?: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}

const App = () => {
  const [columns1, setColumns1] = useState<Array<TableColumnProps>>([
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

  const [data2, setData2] = useState([])

  return (
    <>
        <Table columns={columns1} data={data2} />
        <Table
          columns={columns1}
          data={data2}
          noData="这里是自定义展示"
        />
    </>
  );
};
export default App;
```

:::

### 自定义单元格

:::demo

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react-taro';
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  const [columns4, setColumns4] = useState([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      key: 'sex',
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

  const [data4, setData4] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      render: () => {
        return (
          <Button
            onClick={() => Toast.show('hello')}
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
      sex: '女',
      record: '本科',
      render: () => {
        return <Dongdong size="14px" />
      },
    },
    {
      name: 'Jack',
      sex: '男',
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

  return <Table columns={columns4} data={data4} />;
};
export default App;
```

:::

### 支持异步渲染(5s之后看效果)

:::demo

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react';
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  const [data1, setData1] = useState([
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
  const [data3, setData3] = useState([]);
  const [columns1, setColumns1] = useState([
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
    setData3(data1)
  }, 5000)

  return <Table columns={columns1} data={data3} style={{ background: '#fff' }} />;
};
export default App;
```

:::

### 支持排序

:::demo

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [data5, setData5] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      age: 4,
    },
  ])

   const [columns5, setColumns5] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: '性别',
      key: 'sex',
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
    Toast.show(`${JSON.stringify(item)}`)
    setData5([...data])
  }

  return <Table
          columns={columns5}
          data={data5}
          onSort={handleSorter}
          style={{ background: '#fff' }}
        />;
};
export default App;
```

:::

### 支持排序替换ICON

:::demo

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react-taro';
import { TriangleDown } from '@nutui/icons-react-taro'

const App = () => {
  const [data5, setData5] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      age: 4,
    },
  ])

   const [columns5, setColumns5] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: '性别',
      key: 'sex',
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
    Toast.show(`${JSON.stringify(item)}`)
    setData5([...data])
  }

  return <Table
          columns={columns5}
          data={data5}
          onSort={handleSorter}
          style={{ background: '#fff' }}
          sorterIcon={<TriangleDown width="12px" height="12px" />}
        />;
};
export default App;
```

:::

## Table

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否显示边框 | `boolean` | `true` |
| columns | 表头数据 | `TableColumnProps[]` | `[]` |
| data | 表格数据 | `Object[]` | `[]` |
| summary | 是否显示简介 | `ReactNode` | `-` |
| striped | 条纹是否明暗交替 | `boolean` | `false` |
| showHeader | 是否显示表头 | `boolean` | `true` |
| noData | 自定义无数据 | `ReactNode` | `-` |
| onSort | 点击排序按钮触发 | `item: TableColumnProps, data: Array<any>` | `-` |

### TableColumnProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 列的唯一标识 | `string` | `-` |
| title | 表头标题 | `string` | `-` |
| align | 列的对齐方式 | `left` \| `center` \| `right`  | `left` |
| sorter | 排序，可选值有 true,function, default, 其中 default表示点击之后可能会依赖接口, function可以返回具体的排序函数, default表示采用默认的排序算法 | `boolean` \| `Function` \| `string` | `-` |
| render | 自定义渲染列数据，优先级高 | `Function(record)` | `-` |
| sorterIcon | 排序 icon | `ReactNode` | `<DownArrow />` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-table-border-color | 表格的边框色值 | `#ececec` |
| \--nutui-table-cols-padding | 表格列的padding值 | `10px` |
| \--nutui-table-tr-even-background-color | 表格偶数行的背景色 | `$gray4` |
| \--nutui-table-tr-odd-background-color | 表格奇数行的背景色 | `$gray6` |