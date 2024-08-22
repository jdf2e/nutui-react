import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const CellDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title4: '链接 | 分组用法',
      title5: '垂直居中',
      title6: '自定义标题区域',
      title7: '分组用法',
      content: '自定义内容',
      customRight: '自定义右侧区域',
    },
    'zh-TW': {
      basic: '基础用法',
      title4: '鏈接 | 分組用法',
      title5: '垂直居中',
      title6: '自定義標題區域',
      title7: '分組用法',
      content: '自定義內容',
      customRight: '自定義右側區域',
    },
    'en-US': {
      basic: 'Basic Usage',
      title4: 'Link | Cell.Group Usage',
      title5: 'Vertical Center',
      title6: 'Customize the title area',
      title7: 'Grouping usage',
      content: 'Customize Content',
      customRight: 'Customize the right area',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.content}</h2>
        <Demo2 />
        <h2>{translated.title6}</h2>
        <Demo3 />
        <h2>{translated.customRight}</h2>
        <Demo4 />
        <h2>{translated.title5}</h2>
        <Demo5 />
        <h2>{translated.title4}</h2>
        <Demo6 />
        <h2>{translated.title7}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default CellDemo
