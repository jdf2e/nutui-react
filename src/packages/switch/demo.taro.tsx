import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'

const SwitchDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '非受控',
      disabled: '禁用状态',
      asyncControl: '受控',
      customColor: '自定义颜色',
      supportText: '支持文字',
      open: '开',
      close: '关',
      eventTip: '触发了 onChange 事件，开关状态：',
      async: '2秒后异步触发',
    },
    'zh-TW': {
      basic: '非受控',
      disabled: '禁用狀態',
      asyncControl: '受控',
      customColor: '自定義顏色',
      supportText: '支持文字',
      open: '開',
      close: '關',
      eventTip: '觸發了 onChange 事件，開關狀態：',
      async: '2秒後異步觸發',
    },
    'en-US': {
      basic: 'Uncontrolled',
      disabled: 'Disabled',
      asyncControl: 'controlled',
      customColor: 'Custom Color',
      supportText: 'Support Text',
      open: 'Open',
      close: 'cClose',
      eventTip: 'Emit onChange event, current state:',
      async: 'Triggered asynchronously after 2 seconds',
    },
  })
  return (
    <>
      <div className="demo">
        <Demo1 title={translated.basic} />
        <Demo2 title={translated.asyncControl} text={translated.async} />
        <Demo3 title={translated.disabled} />
        <Demo4 title="onChange" text={translated.eventTip} />
        <Demo5 title={translated.customColor} />
        <Demo6
          title={translated.supportText}
          activeText={translated.open}
          inactiveText={translated.close}
        />
      </div>
    </>
  )
}

export default SwitchDemo
