import React, { useState } from 'react'
import { InputNumber, Toast } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const overlimit = () => {
    toastShow('超出限制事件触发', 'warn')
  }
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const [toastType, SetToastType] = useState('text')

  const toastShow = (msg: any, type: string) => {
    SetToastMsg(msg)
    SetToastType(type)
    SetShow(true)
  }

  return (
    <>
      <InputNumber
        defaultValue={10}
        min={10}
        max={20}
        onOverlimit={overlimit}
        onChange={(v) => {
          console.log('onChange', v)
        }}
      />
      <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}
export default Demo3
