import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [data1, setData1] = useState<Array<any>>([
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
  const [data3, setData3] = useState<Array<any>>([])
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

  return (
    <Table columns={columns1} data={data3} style={{ background: '#fff' }} />
  )
}
export default Demo8
