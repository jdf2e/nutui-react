import React, { useState } from 'react'
import { Table, Button } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'

const Demo7 = () => {
  const [columns] = useState([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
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
      title: '操作',
      key: 'render',
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      render: () => {
        return (
          <Button
            onClick={() => Taro.showToast({ title: 'hello' })}
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
      gender: '女',
      record: '本科',
      render: () => {
        return <Star size="14px" />
      },
    },
    {
      name: 'Jack',
      gender: '男',
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

  return <Table columns={columns} data={data} />
}
export default Demo7
