import React, { useState } from 'react'
import { Table, Toast } from '@nutui/nutui-react'
import { TriangleDown } from '@nutui/icons-react'

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
  }

  return (
    <Table
      columns={columns5}
      data={data5}
      onSort={handleSorter}
      style={{ background: '#fff' }}
      sorterIcon={<TriangleDown width="12px" height="12px" />}
    />
  )
}
export default Demo10
