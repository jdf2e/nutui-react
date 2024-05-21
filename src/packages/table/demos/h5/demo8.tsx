import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react'

const Demo8 = () => {
  const data1 = useState<Array<any>>([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
    },
  ])
  const [data, setData] = useState<Array<any>>([])
  const [columns1] = useState([
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
  setTimeout(() => {
    setData(data1)
  }, 5000)

  return <Table columns={columns1} data={data} style={{ background: '#fff' }} />
}
export default Demo8
