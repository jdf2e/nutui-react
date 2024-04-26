import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import './demo.scss'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'
import Demo11 from './demos/h5/demo11'

const NoticeBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础使用',
      align: '居中布局，不支持滚动',
      customTheme: '自定义主题',
      scrollable: '滚动播放',
      mode: '关闭模式',
      multiline: '多行展示',
      customeRight: '自定义右侧内容',
      vertical: '垂直滚动',
      complexAm: '纵向模式：自定义左侧图标',
      customAm: '纵向模式：自定义滚动内容',
      customRightIcon: '纵向模式：自定义右侧图标',
    },
    'en-US': {
      basic: 'Basic Usage',
      align: 'The layout is centered and does not support scrolling',
      customTheme: 'custom theme',
      scrollable: 'Scrollable',
      mode: 'Mode',
      multiline: 'wrap',
      customeRight: 'custom right content',
      vertical: 'Vertical Scroll',
      complexAm: 'Vertical Scroll Complex Animation',
      customAm: 'Vertical Scroll Custom Style',
      customRightIcon: 'Vertical Scroll Custom Right Icon',
    },
  })

  return (
    <>
      <div className="demo" style={{ paddingBottom: '30px' }}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.align}</h2>
        <Demo2 />
        <h2>{translated.scrollable}</h2>
        <Demo3 />
        <h2>{translated.mode}</h2>
        <Demo4 />
        <h2>{translated.multiline}</h2>
        <Demo5 />
        <h2>{translated.customeRight}</h2>
        <Demo6 />
        <h2>{translated.customTheme}</h2>
        <Demo7 />
        <h2>{translated.vertical}</h2>
        <Demo8 />
        <h2>{translated.complexAm}</h2>
        <Demo9 />
        <h2>{translated.customAm}</h2>
        <div className="interstroll-list">
          <Demo10 />
        </div>
        <h2>{translated.customRightIcon}</h2>
        <div className="interstroll-list">
          <Demo11 />
        </div>
      </div>
    </>
  )
}

export default NoticeBarDemo
