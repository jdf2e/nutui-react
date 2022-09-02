#  Table组件

### 介绍

用于展示基础表格

### 安装
```ts
import { Table } from '@nutui/nutui-react';
```


## 代码演示

### 基本用法

:::demo
```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react';

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

  return <Table columns={columns1} data={data1} />;
};
export default App;
```
:::

### 是否显示边框，文字对齐
:::demo
```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react';

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
import { Table } from '@nutui/nutui-react';

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
import { Table } from '@nutui/nutui-react';

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

### 无数据默认展示，支持自定义
:::demo
```tsx
import  React, { useState } from "react";
import { Table } from '@nutui/nutui-react';

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
import { Table, Button, Icon } from '@nutui/nutui-react';

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
            onClick={() => Toast.text('hello')}
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
        return <Icon name="dongdong" size="14px" />
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
import { Table, Button, Icon } from '@nutui/nutui-react';

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
            onClick={() => Toast.text('hello')}
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
        return <Icon name="dongdong" size="14px" />
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

### 支持排序
:::demo
```tsx
import  React, { useState } from "react";
import { Table, Button, Icon } from '@nutui/nutui-react';

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
            onClick={() => Toast.text('hello')}
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
        return <Icon name="dongdong" size="14px" />
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


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| bordered         | 是否显示边框 | 	Boolean | true                |
| columns         | 表头数据 | 	TableColumnProps[] | []                |
| data         | 表格数据 | 	Object[] | []                |
| summary         | 是否显示简介 | 	React.ReactNode | -                |
| striped         | 条纹是否明暗交替 | 	Boolean | false                |
| noData         | 自定义无数据 | 	React.ReactNode | -                |

### TableColumnProps

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| key         | 列的唯一标识 | 	String | ''                |
| title         | 表头标题 | 	String | ''                |
| align         | 列的对齐方式，可选值left,center,right | 	String | left                |
| sorter         | 排序，可选值有 true,function, default, 其中 default表示点击之后可能会依赖接口, function可以返回具体的排序函数, default表示采用默认的排序算法 | 	Boolean、Function、String | -                |
| render         | 自定义渲染列数据，优先级高 | 	Function(record) | -                |



### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onSorter  | 点击排序按钮触发 | `item: TableColumnProps, data: Array<any>` |
