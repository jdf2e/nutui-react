import React, { useState } from 'react'
import {
  Cell,
  SubSideNavBar,
  SideNavBarItem,
  SideNavBar,
} from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

type Position = 'left' | 'right'
type NavBarState = {
  visible: boolean
  position: Position
}
type TSideNavBarDemo = {
  text1: string
  text2: string
  level1: string
  level2: string
  level3: string
  title: string
  title1: string
  title2: string
  title3: string
  title4: string
  content: string
}
const SideNavBarDemo = () => {
  const [translated] = useTranslate<TSideNavBarDemo>({
    'zh-CN': {
      text1: '基础用法',
      text2: '导航嵌套（建议最多三层）',
      level1: '一级',
      level2: '二级',
      level3: '三级',
      title: '标题',
      title1: '左侧弹出',
      title2: '右侧弹出',
      title3: '显示',
      title4: '首页',
      content: '内容',
    },
    'zh-TW': {
      text1: '基礎用法',
      text2: '導航嵌套（建議最多三層）',
      level1: '一級',
      level2: '二級',
      level3: '三級',
      title: '標題',
      title1: '左側彈出',
      title2: '右側彈出',
      title3: '顯示',
      title4: '首頁',
      content: '內容',
    },
    'en-US': {
      text1: 'Basic Usage',
      text2: 'Navigation nesting (recommended up to three levels)',
      level1: 'Level One',
      level2: 'Level Two',
      level3: 'Level Three',
      title: 'title',
      title1: 'left pop up',
      title2: 'right pop up',
      title3: 'show',
      title4: 'front page',
      content: 'content',
    },
    'id-ID': {
      text1: 'Penggunaan dasar',
      text2: 'Sarang navigasi (disarankan hingga tiga tingkat)',
      level1: 'tingkat satu',
      level2: 'Sekunder',
      level3: 'Tingkat tiga',
      title: 'judul',
      title1: 'munculan kiri',
      title2: 'sisi kanan muncul',
      title3: 'menunjukkan',
      title4: 'halaman Depan',
      content: 'isi',
    },
  })
  const {
    text1,
    text2,
    level1,
    level2,
    level3,
    title,
    title1,
    title2,
    title3,
    title4,
    content,
  } = translated
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

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{text1}</h2>
        <Cell
          title={title1}
          isLink
          onClick={() => {
            changeNarBar(true, 'left')
          }}
        />
        <Cell
          title={title2}
          isLink
          onClick={() => {
            changeNarBar(true, 'right')
          }}
        />
        <h2>{text2}</h2>
        <Cell
          title={title3}
          isLink
          onClick={() => {
            changeNarBar(true, 'right')
            setShowThird(true)
          }}
        />
        <SideNavBar
          title={title4}
          visible={navBarState.visible}
          position={navBarState.position}
          onClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title={`${level1}${title}`} ikey="1-0">
            <SideNavBarItem title={`${level1}${content}1`} ikey="1-01" />
            <SideNavBarItem title={`${level1}${content}2`} ikey="1-02" />
            <SubSideNavBar title={`${level2}${title}`} ikey="2-0">
              <SideNavBarItem title={`${level2}${content}1`} ikey="2-01" />
              <SideNavBarItem title={`${level2}${content}2`} ikey="2-02" />
              {showThird ? (
                <SubSideNavBar title={`${level3}${title}`} ikey="3-0">
                  <SideNavBarItem title={`${level3}${content}1`} ikey="3-01" />
                  <SideNavBarItem title={`${level3}${content}2`} ikey="3-02" />
                </SubSideNavBar>
              ) : null}
            </SubSideNavBar>
          </SubSideNavBar>
          <SubSideNavBar open={false} title={`${level1}${title}-2`} ikey="1-1">
            <SideNavBarItem title={`${level1}${content}2-1`} ikey="1-11" />
            <SideNavBarItem title={`${level1}${content}2-2`} ikey="1-12" />
          </SubSideNavBar>
        </SideNavBar>
      </div>
    </>
  )
}

export default SideNavBarDemo
