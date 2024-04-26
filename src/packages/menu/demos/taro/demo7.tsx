import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react-taro'

const Demo7 = () => {
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
  return (
    <Menu>
      <Menu.Item options={options} defaultValue={0} direction="up" />
      <Menu.Item options={options1} defaultValue="a" direction="up" />
    </Menu>
  )
}
export default Demo7
