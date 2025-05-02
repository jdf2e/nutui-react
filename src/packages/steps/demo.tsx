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

const StepsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '横版左右布局1行文案',
      horizontalTwoLine: '横版左右布局2行文案',
      horizontalIcon: '横版左右布局icon',
      horizontalDouble: '横版上下布局点状、icon、文案',
      horizontalDotIcon: '横向上下布局混合：点状 + icon',
      custom: '自定义步骤条',
      customIcon: '横向自定义icon',
      vertical: '竖向点状',
      verticalDotIcon: '竖向混合：点状 + icon',
    },
    'zh-TW': {
      basic: '橫版左右布局1行文案',
      horizontalTwoLine: '橫版左右布局2行文案',
      horizontalIcon: '橫版左右布局icon',
      horizontalDouble: '橫版上下布局點狀、icon、文案',
      horizontalDotIcon: '橫版上下布局混合：點狀 + icon',
      custom: '自定義步驟条',
      customIcon: '橫版自定義icon',
      vertical: '豎向點狀',
      verticalDotIcon: '豎向步驟條：点状+icon',
    },
    'en-US': {
      basic: 'Horizontal 1-line text layout',
      horizontalTwoLine: 'Horizontal 2-line text layout',
      horizontalIcon: 'Horizontal icon layout',
      horizontalDouble: 'Horizontal dot, icon, text layout',
      horizontalDotIcon: 'Horizontal mixed layout: dot + icon',
      custom: 'Custom step bar',
      customIcon: 'Horizontal custom icon',
      vertical: 'Vertical dot',
      verticalDotIcon: 'Vertical dot + icon',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.horizontalTwoLine}</h2>
        <Demo3 />
        <h2>{translated.horizontalIcon}</h2>
        <Demo7 />
        <h2>{translated.horizontalDouble}</h2>
        <Demo2 />
        <h2>{translated.horizontalDotIcon}</h2>
        <Demo6 />
        <h2>{translated.customIcon}</h2>
        <Demo5 />
        <h2>{translated.custom}</h2>
        <Demo4 />
        <h2>{translated.vertical}</h2>
        <Demo8 />
        <h2>{translated.verticalDotIcon}</h2>
        <Demo9 />
      </div>
    </>
  )
}

export default StepsDemo
