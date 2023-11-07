# Table

## Intro

Used to display the basic table

## Install

```tsx
import { Table } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

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
  const [columns1, setColumns1] = useState([
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

### Whether to display border and align text

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
  const [columns2, setColumns2] = useState([
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

### Show summary bar

:::demo

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react';

const App = () => {
  const [columns1, setColumns1] = useState([
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'sex',
      render: (record) => {
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

### Stripes, alternating light and shade

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

### Hide table header

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

### No data is displayed by default, and customization is supported

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

### Custom cell

:::demo

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react';
import { Dongdong } from '@nutui/icons-react'

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
        return <Dongdong height="14px" width="14px" />
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

### Support asynchronous rendering

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

### Supports sorting

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react';

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

### Supports sorting and changing ICONS

:::demo

```tsx
import  React, { useState } from "react";
import { Table, Button } from '@nutui/nutui-react';
import { TriangleDown } from '@nutui/icons-react'

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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Show border | `boolean` | `true` |
| columns | Header data | `TableColumnProps[]` | `[]` |
| data | Table data | `Object[]` | `[]` |
| summary | Show profile | `ReactNode` | `-` |
| striped | Whether the stripes alternate light and dark | `boolean` | `false` |
| showHeader | Show Header | `boolean` | `true` |
| noData | Custom noData | `ReactNode` | `-` |
| sorterIcon | Sort icon | `ReactNode` | `<DownArrow />` |

### TableColumnProps

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identification of the column | `string` | `-` |
| title | Header title | `string` | `-` |
| align | Alignment of columns | `left` \| `center` \| `right` | `left` |
| sorter | sort，optional values `true`,`function`, `default`, Where `default` means that you may depend on the interface after clicking, `function` you can return a specific sorting function, `default` indicates that the default sorting algorithm is adopted | `boolean` \| `Function` \| `string` | `-` |
| render | Custom render column data, high priority | `Function(record)` | `-` |
| onSort | Click the sort button to trigger | `item: TableColumnProps, data: Array<any>` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-table-border-color | table border color | `#ececec` |
| \--nutui-table-cols-padding | table columns padding value | `10px` |
| \--nutui-table-tr-even-background-color | table even rows background color | `$gray4` |
| \--nutui-table-tr-odd-background-color | table odd rows background color | `$gray6` |