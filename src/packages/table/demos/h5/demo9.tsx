import React, { useState } from 'react'
import {
  SortStateType,
  Table,
  TableColumnProps,
  Toast,
} from '@nutui/nutui-react'
import { ArrowDown, ArrowUp } from '@nutui/icons-react'

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
      sorterIcon: (currentSortState) => {
        if (currentSortState === null)
          return (
            <ArrowDown width="12px" height="12px" style={{ opacity: 0.3 }} />
          )
        if (currentSortState === 'asc')
          return <ArrowDown width="12px" height="12px" />
        if (currentSortState === 'desc')
          return <ArrowUp width="12px" height="12px" />
      },
      sorter: (row1: any, row2: any) => row1.age - row2.age,
    },
  ])

  const handleSorter = (
    item: TableColumnProps,
    sortedData?: Array<any>,
    sortState?: SortStateType
  ) => {
    Toast.show(`${item.title} 排序状态：${sortState || '不排序'}`)
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
