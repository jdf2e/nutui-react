import React, { useState } from 'react'
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    console.log(`enter:${number}`)
  }
  const onDelete = () => {
    console.log('delete')
  }

  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }

  return (
    <>
      <Cell title="透传 Popup 属性" onClick={() => setVisible(true)} />
      <NumberKeyboard
        visible={visible}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
        duration={1}
        overlayClassName="number-keyboard-overlay"
        onOpen={() => {
          toastShow('onOpen')
        }}
      />
      <Toast
        type="text"
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}
export default Demo6
