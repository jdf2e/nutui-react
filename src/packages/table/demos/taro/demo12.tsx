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
