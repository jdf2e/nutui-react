import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react'

const Demo4 = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])

  return (
    <Menu>
      <Menu.Item options={options} defaultValue={0} columns={2} />
    </Menu>
  )
}
export default Demo4
