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
  const [data6, setData6] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      sex: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      sex: '男',
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
      width: 100,
    },
    {
      title: '性别',
      key: 'sex',
      width: 60,
    },
    {
      title: '学历',
      key: 'record',
      width: 100,
    },
    {
      title: '生日',
      key: 'birthday',
      width: 100,
    },
    {
      title: '年龄',
      key: 'age',
      fixed: 'right',
      width: 60,
    },
  ])

  return <Table columns={columnsStickRight} data={data6} />
}
export default Demo13
