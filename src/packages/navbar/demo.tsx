import React from 'react'
import './demo.scss'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const NavBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      group1: 'iOS26以下/安卓鸿蒙',
      group2: 'iOS26以上',
      cat1: '标题型',
      cat3: '导航型',
    },
    'zh-TW': {
      group1: 'iOS26以下/安卓鴻蒙',
      group2: 'iOS26以上',
      cat1: '標題型',
      cat3: '導航型',
    },
    'en-US': {
      group1: 'iOS 26 and below / Android & HarmonyOS',
      group2: 'iOS 26 and above',
      cat1: 'Title',
      cat3: 'Navigation',
    },
  })
  return (
    <>
      <div className="demo navbar-demo">
        <h2>{translated.group1}</h2>
        <h3>{translated.cat1}</h3>
        <Demo1 />
        <h3>{translated.cat3}</h3>
        <Demo2 />
        <h2>{translated.group2}</h2>
        <h3>{translated.cat1}</h3>
        <Demo3 />
        <h3>{translated.cat3}</h3>
        <Demo4 />
      </div>
    </>
  )
}

export default NavBarDemo
