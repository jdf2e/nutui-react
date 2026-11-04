import React from 'react'
import './demo.scss'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const NavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      sceneMaterial: '场景材质',
      subBar: '二级楼层',
      customContent: '自定义内容',
    },
    'zh-TW': {
      sceneMaterial: '場景材質',
      subBar: '二級樓層',
      customContent: '自定義內容',
    },
    'en-US': {
      sceneMaterial: 'Scene Materials',
      subBar: 'Sub Bar',
      customContent: 'Custom Content',
    },
  })
  return (
    <>
      <div className="demo navbar-demo">
        <h2>{translated.sceneMaterial}</h2>
        <Demo1 />
        <h2>{translated.subBar}</h2>
        <Demo2 />
        <h2>{translated.customContent}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default NavBarDemo
