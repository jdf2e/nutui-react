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

const BadgeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      '781b07fd': '自定义颜色',
      '1c730245': '自定义徽标内容',
      '1c730248': '自定义徽标样式',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
      a8237653: '填充模式',
    },
    'zh-TW': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      '781b07fd': '自定义颜色',
      '1c730245': '自定义徽标内容',
      '1c730248': '自定义徽标样式',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
      a8237653: '填充模式',
    },
    'en-US': {
      '8ab98966': 'Basic usage',
      '1e7a2282': 'Max Size',
      '781b07fd': 'Custom Color',
      '1c730245': ' Custom Context',
      '1c730248': 'Custom CSS',
      '915d7b01': 'Custom Position',
      f1089312: 'Display Alone',
      a8237653: 'Fill Mode',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['8ab98966']}</h2>
        <Demo1 />
        <h2>{translated['1e7a2282']}</h2>
        <Demo2 />
        <h2>{translated['781b07fd']}</h2>
        <Demo3 />
        <h2>{translated['1c730245']}</h2>
        <Demo4 />
        <h2>{translated['1c730248']}</h2>
        <Demo5 />
        <h2>{translated['915d7b01']}</h2>
        <Demo6 />
        <h2>{translated.f1089312}</h2>
        <Demo7 />
        <h2>{translated.a8237653}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default BadgeDemo
