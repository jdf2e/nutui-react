import React, { useState } from 'react'
import './demo.scss'
import { Menu } from './menu'
import MenuItem from '../menuitem'

const MenuDemo = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  return (
    <>
      <div className="demo full">
        <h2>基础用法</h2>
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem options={options} value={1} />
        </Menu>
      </div>
    </>
  )
}

export default MenuDemo
