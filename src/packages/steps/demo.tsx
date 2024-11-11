import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const StepsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      dot: '基础用法：点状',
      info: '标题和描述信息',
      custom: '自定义步骤条',
      customDot: '自定义步骤条：点状',
      customBoth: '自定义步骤条：点状 + icon',
      customIcon: '自定义图标',
    },
    'zh-TW': {
      basic: '基础用法',
      dot: '基础用法：点状',
      info: '標題和描述信息',
      custom: '自定義步驟条',
      customDot: '自定義步驟条：点状',
      customBoth: '自定義步驟条：点状+icon',
      customIcon: '自定義圖標',
    },
    'en-US': {
      basic: 'Basic usage',
      dot: 'Basic usage: Dot',
      info: 'Title and description information',
      custom: 'Custom Step Bar',
      customDot: 'Custom Step Bar: Dot',
      customBoth: 'Custom Step Bar: Dot+icon',
      customIcon: 'custom Icon',
    },
  })
  return (
    <>
      <div className="demo full bg-w">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.dot}</h2>
        <Demo2 />
        <h2>{translated.info}</h2>
        <Demo3 />
        <h2>{translated.custom}</h2>
        <Demo4 />
        <h2>{translated.customDot}</h2>
        <Demo5 />
        <h2>{translated.customBoth}</h2>
        <Demo6 />
        <h2>{translated.customIcon}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default StepsDemo
