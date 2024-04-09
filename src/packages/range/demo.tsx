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
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'
import Demo11 from './demos/h5/demo11'
import Demo12 from './demos/h5/demo12'
import Demo13 from './demos/h5/demo13'

const RangeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '双滑块',
      title2: '指定范围',
      title3: '设置步长',
      title4: '隐藏范围',
      title5: '隐藏标签',
      title6: '禁用',
      title7: '自定义样式',
      title8: '自定义按钮',
      title9: '垂直方向',
      title10: '刻度标记',
      title11: '自定义描述',
      controlled: '受控方式',
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Dual thumb',
      title2: 'Range',
      title3: 'Step Size',
      title4: 'Hidden Range',
      title5: 'Hidden Tag',
      title6: 'Disabled',
      title7: 'Custom Style',
      title8: 'Custom Button',
      title9: 'Vertical',
      title10: 'Marks',
      title11: 'Range Desc',
      controlled: 'Controlled',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.title}</h2>
        <Demo1 />
        <h2>{translated.controlled}</h2>
        <Demo2 />
        <h2>{translated.title11}</h2>
        <Demo3 />
        <h2>{translated.title1}</h2>
        <Demo4 />
        <h2>{translated.title2}</h2>
        <Demo5 />
        <h2>{translated.title3}</h2>
        <Demo6 />
        <h2>{translated.title4}</h2>
        <Demo7 />
        <h2>{translated.title5}</h2>
        <Demo8 />
        <h2>{translated.title6}</h2>
        <Demo9 />
        <h2>{translated.title7}</h2>
        <Demo10 />
        <h2>{translated.title8}</h2>
        <Demo11 />
        <h2>{translated.title9}</h2>
        <Demo12 />
        <h2>{translated.title10}</h2>
        <Demo13 />
      </div>
    </>
  )
}

export default RangeDemo
