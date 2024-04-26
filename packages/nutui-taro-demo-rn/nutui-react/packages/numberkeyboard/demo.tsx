import React from 'react'
import { useTranslate } from '@/sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'

const NumberKeyboardDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '默认键盘',
      sidebar: '带右侧栏键盘',
      confirmText: '支付',
      randomKeyOrder: '随机数键盘',
      title: '标题',
      withTitle: '带标题栏键盘',
      idNumberKeyboard: '身份证键盘',
      popup: '透传 Popup 属性',
    },
    'zh-TW': {
      basic: '默認鍵盤',
      sidebar: '帶右側欄鍵盤',
      confirmText: '支付',
      randomKeyOrder: '隨機數鍵盤',
      title: '標題',
      withTitle: '帶標題欄鍵盤',
      idNumberKeyboard: '身份證鍵盤',
      popup: '透傳 Popup 屬性',
    },
    'en-US': {
      basic: 'Default Keyboard',
      sidebar: 'Keyboard With Sidebar',
      confirmText: 'pay',
      randomKeyOrder: 'Random Key Order',
      title: 'title',
      withTitle: 'Show Keyboard With Title',
      idNumberKeyboard: 'Show IdNumber Keyboard',
      popup: 'Use Popup Props',
    },
  })

  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Demo1 />
      <h2>{translated.sidebar}</h2>
      <Demo2 />
      <h2>{translated.randomKeyOrder}</h2>
      <Demo3 />
      <h2>{translated.withTitle}</h2>
      <Demo4 />
      <h2>{translated.idNumberKeyboard}</h2>
      <Demo5 />
      <h2>{translated.popup}</h2>
      <Demo6 />
    </div>
  )
}

export default NumberKeyboardDemo
