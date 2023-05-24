import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Toast, NumberKeyboard } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

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
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const onChange = (number: string) => {
    // Toast.text(`输入：${number}`)
    toastShow(`输入：${number}`)
  }
  const onDelete = () => {
    // Toast.text('删除')
    toastShow('删除')
  }
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.basic}
          onClick={() => {
            setVisible1(true)
          }}
        />
        <NumberKeyboard
          visible={visible1}
          onChange={onChange}
          onDelete={onDelete}
          onClose={() => setVisible1(false)}
        />
        <h2>{translated.sidebar}</h2>
        <Cell
          title={translated.sidebar}
          onClick={() => {
            setVisible2(true)
          }}
        />
        <NumberKeyboard
          visible={visible2}
          type="rightColumn"
          custom={['.', 'x']}
          onChange={onChange}
          onDelete={onDelete}
          onClose={() => setVisible2(false)}
        />
        <h2>{translated.randomKeyOrder}</h2>
        <Cell
          title={translated.randomKeyOrder}
          onClick={() => {
            setVisible3(true)
          }}
        />
        <NumberKeyboard
          visible={visible3}
          random
          onChange={onChange}
          onDelete={onDelete}
          onClose={() => setVisible3(false)}
        />
        <h2>{translated.withTitle}</h2>
        <Cell
          title={translated.withTitle}
          onClick={() => {
            setVisible4(true)
          }}
        />
        <NumberKeyboard
          visible={visible4}
          title={translated.title}
          custom={['.']}
          onChange={onChange}
          onDelete={onDelete}
          onClose={() => setVisible4(false)}
        />
        <h2>{translated.idNumberKeyboard}</h2>
        <Cell
          title={translated.idNumberKeyboard}
          onClick={() => {
            setVisible5(true)
          }}
        />
        <NumberKeyboard
          visible={visible5}
          custom={['X']}
          onChange={onChange}
          onDelete={onDelete}
          onClose={() => setVisible5(false)}
        />
        <h2>{translated.popup}</h2>
        <Cell
          title={translated.popup}
          onClick={() => {
            setVisible6(true)
          }}
        />
        <NumberKeyboard
          visible={visible6}
          onChange={onChange}
          onDelete={onDelete}
          onClose={() => setVisible6(false)}
          duration={1}
          overlayClassName="number-keyboard-overlay"
          onOpen={() => {
            toastShow('onOpen')
          }}
        />
        <Toast
          type="text"
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
      </div>
    </>
  )
}

export default NumberKeyboardDemo
