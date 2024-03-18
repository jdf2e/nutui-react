import React from 'react'
import { useTranslate } from '@/sites/assets/locale//taro'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import { Cell } from '../nutui.react.taro'

const SwitchDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '非受控',
      disabled: '禁用状态',
      asyncControl: '受控',
      customColor: '自定义颜色',
      supportText: '支持文字',
      eventTip: '触发了 onChange 事件，开关状态：',
    },
    'zh-TW': {
      basic: '非受控',
      disabled: '禁用狀態',
      asyncControl: '受控',
      customColor: '自定義顏色',
      supportText: '支持文字',
      eventTip: '觸發了 onChange 事件，開關狀態：',
    },
    'en-US': {
      basic: 'Uncontrolled',
      disabled: 'Disabled',
      asyncControl: 'controlled',
      customColor: 'Custom Color',
      supportText: 'Support Text',
      eventTip: 'Emit onChange event, current state:',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.asyncControl}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.disabled}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.eventTip}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.customColor}</h2>
        <Cell>
          <Demo5 />
        </Cell>
        <h2>{translated.supportText}</h2>
        <Cell>
          <Demo6 />
        </Cell>
      </div>
    </>
  )
}

export default SwitchDemo
