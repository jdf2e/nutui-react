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
