import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

const CellDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      verticalCenter: '垂直居中',
      customInfo: '自定义信息区+右侧区',
      fullyCustom: '完全自定义',
      group: '分组用法',
    },
    'zh-TW': {
      basic: '基礎用法',
      verticalCenter: '垂直居中',
      customInfo: '自定義信息區+右側區',
      fullyCustom: '完全自定義',
      group: '分組用法',
    },
    'en-US': {
      basic: 'Basic Usage',
      verticalCenter: 'Vertical Center',
      customInfo: 'Customize the info area and right area',
      fullyCustom: 'Fully Custom',
      group: 'Grouping Usage',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.verticalCenter}</h2>
        <Demo2 />
        <h2>{translated.customInfo}</h2>
        <Demo3 />
        <h2>{translated.fullyCustom}</h2>
        <Demo4 />
        <h2>{translated.group}</h2>
        <Demo5 />
      </div>
    </>
  )
}

export default CellDemo
