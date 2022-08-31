import React, { useState } from 'react'
import SideNavBar from './index'
import SubSideNavBar from '@/packages/subsidenavbar'
import SideNavBarItem from '@/packages/sidenavbaritem'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'

type Position = 'left' | 'right'
type NavBarState = {
  visible: boolean
  position: Position
}
const SideNavBarDemo = () => {
  const [navBarState, setNavBarState] = useState<NavBarState>({
    visible: false,
    position: 'left',
  })
  const [showThird, setShowThird] = useState(false)
  const changeNarBar = (
    visible: boolean,
    position: Position = navBarState.position
  ) => {
    setNavBarState({
      visible,
      position,
    })
    setShowThird(false)
  }
  const clickItem = (data: any) => {
    const { title, ikey } = data
    showThird && Toast.text(`title=${title},ikey=${ikey}`)
  }
  const clickTitle = (data: any) => {
    const { title, ikey, isShow } = data
    showThird && Toast.text(`title=${title},ikey=${ikey},isShow=${isShow}`)
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="左侧弹出"
          isLink
          onClick={() => {
            changeNarBar(true, 'left')
          }}
        />
        <Cell
          title="右侧弹出"
          isLink
          onClick={() => {
            changeNarBar(true, 'right')
          }}
        />
        <h2>导航嵌套（建议最多三层）,点击一级标题和一级内容1回调</h2>
        <Cell
          title="显示"
          isLink
          onClick={() => {
            changeNarBar(true, 'right')
            setShowThird(true)
          }}
        />
        <SideNavBar
          title="首页"
          visible={navBarState.visible}
          position={navBarState.position}
          handleClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title="一级标题" ikey="1-0" titleClick={clickTitle}>
            <SideNavBarItem title="一级内容1" ikey="1-01" click={clickItem} />
            <SideNavBarItem title="一级内容2" ikey="1-02" />
            <SubSideNavBar title="二级标题" ikey="2-0">
              <SideNavBarItem title="二级内容1" ikey="2-01" />
              <SideNavBarItem title="二级内容2" ikey="2-02" />
              {showThird ? (
                <SubSideNavBar title="三级标题" ikey="3-0">
                  <SideNavBarItem title="三级内容1" ikey="3-01" />
                  <SideNavBarItem title="三级内容2" ikey="3-02" />
                </SubSideNavBar>
              ) : null}
            </SubSideNavBar>
          </SubSideNavBar>
          <SubSideNavBar open={false} title="一级标题-2" ikey="1-1">
            <SideNavBarItem title="一级内容2-1" ikey="1-11" />
            <SideNavBarItem title="一级内容2-2" ikey="1-12" />
          </SubSideNavBar>
        </SideNavBar>
      </div>
    </>
  )
}

export default SideNavBarDemo
