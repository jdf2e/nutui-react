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

const TrendArrowDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
      title2: '改变文字颜色',
      title3: '指定小数位',
      title4: '箭头在前面',
      title5: '显示正负号',
      title6: '是否展示0',
      title7: '自定义颜色',
      title8: '自定义图标',
    },
    'zh-TW': {
      title1: '基础用法',
      title2: '改变文字颜色',
      title3: '指定小数位',
      title4: '箭头在前面',
      title5: '显示正负号',
      title6: '是否展示0',
      title7: '自定义颜色',
      title8: '自定义图标',
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Change text color',
      title3: 'Specify decimal places',
      title4: 'Arrow ahead',
      title5: 'Show sign',
      title6: 'Show zero or not',
      title7: 'Custom color',
      title8: 'Custom icon',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Demo1 />
        <h2>{translated.title2}</h2>
        <Demo2 />
        <h2>{translated.title3}</h2>
        <Demo3 />
        <h2>{translated.title4}</h2>
        <Demo4 />
        <h2>{translated.title5}</h2>
        <Demo5 />
        <h2>{translated.title6}</h2>
        <Demo6 />
        <h2>{translated.title7}</h2>
        <Demo7 />
        <h2>{translated.title8}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default TrendArrowDemo
