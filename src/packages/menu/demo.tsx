import React, { useState } from 'react'
import './demo.scss'
import Button from '../button'
import { Menu } from './menu'
import MenuItem from '../menuitem'

const MenuDemo = () => {
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
    <>
      <div className="demo full">
        <h2>基础用法</h2>
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
        </Menu>
        <h2>自定义菜单内容</h2>
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem title="筛选">
            <div>自定义内容</div>
            <Button>确认</Button>
          </MenuItem>
        </Menu>
        <h2>一行两列</h2>
        <Menu>
          <MenuItem options={options} value={0} columns={2} />
        </Menu>
        <h2>自定义选中态颜色</h2>
        <Menu activeColor="green">
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
        </Menu>
        <h2>自定义图标</h2>
        <Menu titleIcon="joy-smile">
          <MenuItem options={options} value={0} optionsIcon="success" />
          <MenuItem options={options1} value="a" />
        </Menu>
        {/* <div style={{ height: '800px' }}></div> */}
        <h2>向上展开</h2>
        <Menu>
          <MenuItem options={options} value={0} direction="up" />
          <MenuItem options={options1} value="a" direction="up" />
        </Menu>
        {/* <div style={{ height: '300px' }}></div> */}
        <h2>禁用菜单</h2>
        <Menu>
          <MenuItem options={options} value={0} disabled />
          <MenuItem options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}

export default MenuDemo
