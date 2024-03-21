import React, { useState } from 'react'
import { Collapse, Button, Space } from '@nutui/nutui-react-taro'

const oldData = [
  {
    title: '标题1',
    name: '1',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题12',
    name: '2',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题13',
    name: '3',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
]
const newData = [
  {
    title: '标题21',
    name: '1',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题22',
    name: '2',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
]

const Demo7 = () => {
  const [data, setData] = useState(oldData)
  const changeNewData = () => {
    setData(newData)
  }
  const changeOldData = () => {
    setData(oldData)
  }
  return (
    <>
      <Collapse defaultActiveName="2" accordion>
        {data.map((item, index) => {
          return (
            <Collapse.Item title={item.title} name={item.name} key={index}>
              {item.data}
            </Collapse.Item>
          )
        })}
      </Collapse>
      <Space style={{ margin: '10px' }}>
        <Button type="primary" size="small" onClick={() => changeNewData()}>
          改变数据
        </Button>
        <Button type="info" size="small" onClick={() => changeOldData()}>
          还原数据
        </Button>
      </Space>
    </>
  )
}
export default Demo7
