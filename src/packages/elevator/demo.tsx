import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

const ElevatorDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customIndex: '自定义索引key',
      sticky: '索引吸顶',
      customContent: '自定义内容',
      showKeys: '不展示右侧导航',
    },
    'zh-TW': {
      basic: '基础用法',
      customIndex: '自定義索引key',
      sticky: '索引吸頂',
      customContent: '自定義內容',
      showKeys: '不展示右側導航',
    },
    'en-US': {
      basic: 'Basic Usage',
      customIndex: 'Custom index key',
      sticky: 'Index ceiling',
      customContent: 'Custom content',
      showKeys: 'Right navigation is not displayed',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <div style={{ background: 'white' }}>
          <Demo1 />
        </div>
        <h2>{translated.customIndex}</h2>
        <div style={{ background: 'white' }}>
          <Demo2 />
        </div>
        <h2>{translated.showKeys}</h2>
        <div style={{ background: 'white' }}>
          <Demo3 />
        </div>
        <h2>{translated.sticky}</h2>
        <div style={{ background: 'white' }}>
          <Demo4 />
        </div>
        <h2>{translated.customContent}</h2>
        <div style={{ background: 'white' }}>
          <Demo5 />
        </div>
      </div>
    </>
  )
}

export default ElevatorDemo
