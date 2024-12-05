import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const SwitchDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '非受控',
      disabled: '禁用状态',
      asyncControl: '受控',
      customColor: '自定义颜色',
      supportText: '支持文字',
      supportIcon: '支持Icon',
      eventTip: '触发了 onChange 事件，开关状态：',
    },
    'zh-TW': {
      basic: '非受控',
      disabled: '禁用狀態',
      asyncControl: '受控',
      customColor: '自定義顏色',
      supportText: '支持文字',
      supportIcon: '支持Icon',
      eventTip: '觸發了 onChange 事件，開關狀態：',
    },
    'en-US': {
      basic: 'Uncontrolled',
      disabled: 'Disabled',
      asyncControl: 'controlled',
      customColor: 'Custom Color',
      supportText: 'Support Text',
      supportIcon: 'Support Icon',
      eventTip: 'Emit onChange event, current state:',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.asyncControl}</h2>
        <Demo2 />
        <h2>{translated.disabled}</h2>
        <Demo3 />
        <h2>{translated.supportText}</h2>
        <Demo4 />
        <h2>{translated.supportIcon}</h2>
        <Demo5 />
        <h2>{translated.eventTip}</h2>
        <Demo6 />
        <h2>{translated.customColor}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default SwitchDemo
