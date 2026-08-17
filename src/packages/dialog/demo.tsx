import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
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

const DialogDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      funUse: '函数式调用',
      title1: '以下为标签式使用:',
      title10: '基础用法',
      title2: 'footer区域定制',
      title3: '点击取消时，拦截',
      title4: '确认按钮loading效果',
      title5: '带关闭按钮',
      title6: '自定义内容区域',
      title7: '顶部带插图',
      title8: '标题图标和副标题',
      title9: '倒计时自动关闭',
    },
    'en-US': {
      funUse: 'Function use',
      title1: 'Labeled use',
      title10: 'Basic use',
      title2: 'Customize footer area',
      title3: 'Intercept when cancel is clicked',
      title4: 'Confirm button loading effect',
      title5: 'With close button',
      title6: 'Custom content area',
      title7: 'Top with picture',
      title8: 'Title icon and subtitle',
      title9: 'Auto close with countdown',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.funUse}</h2>
        <Demo1 />
        <h2>{translated.title1}</h2>
        <h2>{translated.title10}</h2>
        <Demo2 />
        <h2>{translated.title2}</h2>
        <Demo3 />
        <h2>{translated.title3}</h2>
        <Demo4 />
        <h2>{translated.title4}</h2>
        <Demo5 />
        <h2>{translated.title5}</h2>
        <Demo6 />
        <h2>{translated.title6}</h2>
        <Demo7 />
        <h2>{translated.title7}</h2>
        <Demo8 />
        <h2>{translated.title8}</h2>
        <Demo9 />
        <h2>{translated.title9}</h2>
        <Demo10 />
      </div>
    </>
  )
}

export default DialogDemo
