import React, { useState } from 'react'
import {
  Cell,
  SideNavBar,
  SubSideNavBar,
  SideNavBarItem,
  Toast,
} from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
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
        title={t.show}
        onClick={() => {
          changeNarBar(true, 'right')
          setShowThird(true)
        }}
      />
      <SideNavBar
        title={t.home}
        visible={navBarState.visible}
        position={navBarState.position}
        onClose={() => changeNarBar(false)}
      >
        <SubSideNavBar
          title={t.firstLevelTitle}
          value="1-0"
          onClick={clickTitle}
        >
          <SideNavBarItem
            title={t.firstLevelContent1}
            value="1-01"
            onClick={clickItem}
          />
          <SideNavBarItem title={t.firstLevelContent2} value="1-02" />
          <SubSideNavBar title={t.secondLevelTitle} value="2-0">
            <SideNavBarItem title={t.secondLevelContent1} value="2-01" />
            <SideNavBarItem title={t.secondLevelContent2} value="2-02" />
            {showThird ? (
              <SubSideNavBar title={t.thirdLevelTitle} value="3-0">
                <SideNavBarItem title={t.thirdLevelContent1} value="3-01" />
                <SideNavBarItem title={t.thirdLevelContent2} value="3-02" />
              </SubSideNavBar>
            ) : null}
          </SubSideNavBar>
        </SubSideNavBar>
        <SubSideNavBar open={false} title={t.firstLevelTitle2} value="1-1">
          <SideNavBarItem title={t.firstLevelContent21} value="1-11" />
          <SideNavBarItem title={t.firstLevelContent22} value="1-12" />
        </SubSideNavBar>
      </SideNavBar>
    </>
  )
}

export default withTranslation(Demo2)
