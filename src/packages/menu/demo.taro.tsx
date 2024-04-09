import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'

const MenuDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      controlled: '受控',
      customMenuContent: '自定义菜单内容',
      twoColsInOneLine: '一行两列',
      customActiveColor: '自定义选中态颜色',
      customIcons: '自定义图标',
      expandDirection: '向上展开',
      disableMenu: '禁用菜单',
    },
    'en-US': {
      basic: 'Basic Usage',
      controlled: 'Controlled',
      customMenuContent: 'Custom Menu Content',
      twoColsInOneLine: 'Two Cols In One Line',
      customActiveColor: 'Custom Active Color',
      customIcons: 'Custom Icons',
      expandDirection: 'Expand Direction',
      disableMenu: 'Disable Menu',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo full ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.controlled}</h2>
        <Demo2 />
        <h2>{translated.customMenuContent}</h2>
        <Demo3 />
        <h2>{translated.twoColsInOneLine}</h2>
        <Demo4 />
        <h2>{translated.customActiveColor}</h2>
        <Demo5 />
        <h2>{translated.customIcons}</h2>
        <Demo6 />
        <h2>{translated.expandDirection}</h2>
        <Demo7 />
        <h2>{translated.disableMenu}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default MenuDemo
