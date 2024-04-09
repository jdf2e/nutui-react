import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react'

const Demo2 = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  const [stateOne, setStateOne] = useState(0)
  const [stateTwo, setStateTwo] = useState('a')
  return (
    <Menu>
      <Menu.Item
        options={options}
        value={stateOne}
        onChange={(val) => {
          setStateOne(val.value)
        }}
      />
      <Menu.Item
        options={options1}
        value={stateTwo}
        onChange={(val) => {
          setStateTwo(val.value)
        }}
      />
    </Menu>
  )
}
export default Demo2
