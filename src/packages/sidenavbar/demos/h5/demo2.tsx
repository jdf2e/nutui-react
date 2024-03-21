import React, { useState } from 'react'
import {
  Cell,
  SideNavBar,
  SubSideNavBar,
  SideNavBarItem,
  Toast,
} from '@nutui/nutui-react'

const Demo2 = () => {
  type Position = 'left' | 'right'
  type NavBarState = {
    visible: boolean
    position: Position
  }
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
    const { title, value } = data
    showThird && Toast.show(`title=${title},value=${value}`)
  }
  const clickTitle = (data: any) => {
    const { title, value, isShow } = data
    showThird && Toast.show(`title=${title},value=${value},isShow=${isShow}`)
  }
  return (
    <>
      <Cell
        title="显示"
        onClick={() => {
          changeNarBar(true, 'right')
          setShowThird(true)
        }}
      />
      <SideNavBar
        title="首页"
        visible={navBarState.visible}
        position={navBarState.position}
        onClose={() => {
          changeNarBar(false)
        }}
      >
        <SubSideNavBar title="一级标题" value="1-0" onClick={clickTitle}>
          <SideNavBarItem title="一级内容1" value="1-01" onClick={clickItem} />
          <SideNavBarItem title="一级内容2" value="1-02" />
          <SubSideNavBar title="二级标题" value="2-0">
            <SideNavBarItem title="二级内容1" value="2-01" />
            <SideNavBarItem title="二级内容2" value="2-02" />
            {showThird ? (
              <SubSideNavBar title="三级标题" value="3-0">
                <SideNavBarItem title="三级内容1" value="3-01" />
                <SideNavBarItem title="三级内容2" value="3-02" />
              </SubSideNavBar>
            ) : null}
          </SubSideNavBar>
        </SubSideNavBar>
        <SubSideNavBar open={false} title="一级标题-2" value="1-1">
          <SideNavBarItem title="一级内容2-1" value="1-11" />
          <SideNavBarItem title="一级内容2-2" value="1-12" />
        </SubSideNavBar>
      </SideNavBar>
    </>
  )
}
export default Demo2
