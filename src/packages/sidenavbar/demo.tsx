import React, { useState } from 'react'
import SideNavBar from './index'
import SubSideNavBar from '../subsidenavbar'
import SideNavBarItem from '../sidenavbaritem'
import './sidenavbar.scss'
import Cell from '@/packages/cell'

const SideNavBarDemo = () => {
  const [showLeft, setShowLeft] = useState(false)
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="左侧弹出"
          isLink
          onClick={() => {
            setShowLeft(true)
          }}
        />
        <SideNavBar title="首页" visible={showLeft}>
          <SubSideNavBar>
            <SideNavBarItem title="一级内容1" />
            <SideNavBarItem title="一级内容2" />
            <SubSideNavBar title="二级标题">
              <SideNavBarItem title="二级内容1" />
              <SideNavBarItem title="二级内容2" />
              <SubSideNavBar title="三级标题">
                <SideNavBarItem title="三级内容1" />
                <SideNavBarItem title="三级内容2" />
              </SubSideNavBar>
            </SubSideNavBar>
            <SubSideNavBar title="二级标题">
              <SideNavBarItem title="二级内容1" />
              <SideNavBarItem title="二级内容2" />
            </SubSideNavBar>
          </SubSideNavBar>
          <SubSideNavBar title="一级标题">
            <SideNavBarItem title="一级内容1" />
            <SideNavBarItem title="一级内容2" />
          </SubSideNavBar>
        </SideNavBar>
      </div>
    </>
  )
}

export default SideNavBarDemo
