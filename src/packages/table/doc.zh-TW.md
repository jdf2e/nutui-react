# Table組件

## 介紹

用於展示基礎錶格

## 安裝

```tsx
import { Table } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

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
      title: '性別',
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
      title: '學歴',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小學',
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

### 是否顯示邊框，文字對齊

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
      title: '性別',
      key: 'sex',
    },
    {
      title: '學歴',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小學',
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

### 顯示總結欄

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
      title: '性別',
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
      title: '學歴',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小學',
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
    summary="這是總結欄"
    />;
};
export default App;
```

:::

### 條紋、明暗交替

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
      title: '性別',
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
      title: '學歴',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小學',
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

### 隱藏錶頭

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
      title: '性別',
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
      title: '學歴',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小學',
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

### 無數據默認展示，支持自定義

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
      title: '性別',
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
      title: '學歴',
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
          noData="這裏是自定義展示"
        />
    </>
  );
};
export default App;
```

:::

### 自定義單元格

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
      title: '性別',
      key: 'sex',
    },
    {
      title: '學歴',
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
      record: '小學',
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
            <div>跳轉到京東</div>
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

### 支持異步渲染(5s之後看效果)

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
      record: '小學',
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
      title: '性別',
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
      title: '學歴',
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
import { Table, Button } from '@nutui/nutui-react';


const App = () => {
  const [data5, setData5] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小學',
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
      title: '性別',
      key: 'sex',
    },
    {
      title: '學歴',
      key: 'record',
    },
    {
      title: '年齡',
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

### 支持排序替換ICON

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
      record: '小學',
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
      title: '性別',
      key: 'sex',
    },
    {
      title: '學歴',
      key: 'record',
    },
    {
      title: '年齡',
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| bordered | 是否顯示邊框 | `boolean` | `true` |
| columns | 錶頭數據 | `TableColumnProps[]` | `[]` |
| data | 錶格數據 | `Object[]` | `[]` |
| summary | 是否顯示簡介 | `ReactNode` | `-` |
| striped | 條紋是否明暗交替 | `boolean` | `false` |
| showHeader | 是否顯示錶頭 | `boolean` | `true` |
| noData | 自定義無數據 | `ReactNode` | `-` |
| onSort | 點擊排序按鈕觸發 | `item: TableColumnProps, data: Array<any>` | `-` |

### TableColumnProps

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| key | 列的唯一標識 | `string` | `-` |
| title | 錶頭標題 | `string` | `-` |
| align | 列的對齊方式 | `left` \| `center` \| `right` | `left` |
| sorter | 排序，可選值有 true,function, default, 其中 default錶示點擊之後可能會依賴接口, function可以返回具體的排序函數, default錶示採用默認的排序算法 | `boolean` \| `Function` \| `string` | `-` |
| render | 自定義渲染列數據，優先級高 | `Function(record)` | `-` |
| sorterIcon | 排序 icon | `ReactNode` | `<DownArrow />` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-table-border-color | 錶格的邊框色值 | `#ececec` |
| \--nutui-table-cols-padding | 錶格列的padding值 | `10px` |
| \--nutui-table-tr-even-background-color | 錶格偶數行的背景色 | `$gray4` |
| \--nutui-table-tr-odd-background-color | 錶格奇數行的背景色 | `$gray6` |