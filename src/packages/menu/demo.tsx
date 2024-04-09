import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'

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
      <div className="demo full">
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
