#  Table

### Intro

Used to display the basic table

### Install
```ts
// react
import { Table } from '@nutui/nutui-react';
```


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
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Gender',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === 'Femal' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: 'Education',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
    },
    {
      name: 'Lucy',
      sex: 'Femal',
      record: 'Undergraduate',
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
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
      title: 'Name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Gender',
      key: 'sex',
    },
    {
      title: 'Education',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
    },
    {
      name: 'Lucy',
      sex: 'Femal',
      record: 'Undergraduate',
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
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
import { Table, Button, Icon } from '@nutui/nutui-react';

const App = () => {
  const [columns1, setColumns1] = useState([
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Gender',
      key: 'sex',
      render: (record) => {
        return (
          <span style={{ color: record.sex === 'Femal' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: 'Education',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
    },
    {
      name: 'Lucy',
      sex: 'Femal',
      record: 'Undergraduate',
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
    },
  ])

  return <Table
    columns={columns1}
    data={data1}
    summary="summary"
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
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Gender',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === 'Femal' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: 'Education',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
    },
    {
      name: 'Lucy',
      sex: 'Femal',
      record: 'Undergraduate',
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
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
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Gender',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === 'Femal' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: 'Education',
      key: 'record',
    },
  ])

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
    },
    {
      name: 'Lucy',
      sex: 'Femal',
      record: 'Undergraduate',
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
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
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Gender',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === 'Femal' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: 'Education',
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
          noData="custom"
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
import { Table, Button, Icon } from '@nutui/nutui-react';

const App = () => {
  const [columns4, setColumns4] = useState([
    {
      title: 'Name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Gender',
      key: 'sex',
    },
    {
      title: 'Education',
      key: 'record',
    },
    {
      title: 'Operator',
      key: 'render',
    },
  ])

  const [data4, setData4] = useState([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
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
      sex: 'Femal',
      record: 'Undergraduate',
      render: () => {
        return <Icon name="dongdong" size="14px" />
      },
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
      render: () => {
        return (
          <Button
            type="success"
            size="small"
            onClick={() => window.open('https://www.jd.com')}
          >
            <div>JD</div>
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
import { Table, Button, Icon } from '@nutui/nutui-react';

const App = () => {
  const [columns1, setColumns1] = useState([
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Gender',
      key: 'sex',
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === 'Femal' ? 'blue' : 'green' }}>
            {record.sex}
          </span>
        )
      },
    },
    {
      title: 'Education',
      key: 'record',
    },
  ])

  const [data3, setData3] = useState([] as any)

  useEffect(() => {
    setTimeout(() => {
      setData3([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
    },
    {
      name: 'Lucy',
      sex: 'Femal',
      record: 'Undergraduate',
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
    },
  ])
    }, 5000)
  }, [])

  return <Table columns={columns1} data={data3} />;
};
export default App;
```
:::

### Support sorting
:::demo
```tsx
import  React, { useState } from "react";
import { Table, Button, Icon } from '@nutui/nutui-react';

const App = () => {
  const [columns, setColumns] = useState([
    {
      title: 'Name',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: 'Gender',
      key: 'sex',
    },
    {
      title: 'Education',
      key: 'record',
    },
    {
      title: 'Age',
      key: 'age',
      sorter: (row1: any, row2: any) => {
        return row1.age - row2.age
      },
    },
  ])

  const [data, setData] = useState([
    {
      name: 'Tom',
      sex: 'Male',
      record: 'Primary',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: 'Femal',
      record: 'Undergraduate',
      age: 30,
    },
    {
      name: 'Jack',
      sex: 'Male',
      record: 'Senior',
      age: 4,
    },
  ])

  const handleSorter = (item, data) => {
    Toast.text(`${JSON.stringify(item)}`)
    setData([...data])
  }
  return <Table
    columns={columns}
    data={data}
    onSorter={handleSorter}
    style={{ background: '#fff' }}
  />;
};
export default App;
```
:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| bordered         | Show border | 	boolean | `true`                |
| columns         | Header data | 	TableColumnProps[] | `[]`                |
| data         | Table data | 	Object[] | `[]`                |
| summary         | Show profile | 	ReactNode | -                |
| striped         | Whether the stripes alternate light and dark | 	boolean | `false`                |
| showHeader`v1.4.11`         | Show Header | 	boolean | `true`                |
| noData         | Custom noData | 	ReactNode | -                |

### TableColumnProps

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| key         | Unique identification of the column | 	string | -                |
| title         | Header title | 	string | -                |
| align         |Alignment of columns, optional values`left`,`center`,`right`  | 	string | `left`                |
| sorter         | sort，optional values `true`,`function`, `default`, Where `default` means that you may depend on the interface after clicking, `function` you can return a specific sorting function, `default` indicates that the default sorting algorithm is adopted | 	boolean \| Function \| string | -                |
| render         | Custom render column data, high priority | 	Function(record) | -                |



### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| onSorter  | Click the sort button to trigger | `item: TableColumnProps, data: Array<any>` |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-table-border-color | `#ececec` |
| --nutui-table-cols-padding | `10px` |
| --nutui-table-tr-even-bg-color | `$gray4` |
| --nutui-table-tr-odd-bg-color | `$gray6` |
