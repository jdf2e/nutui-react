import React, { useState } from 'react'
import { Cell, InputNumber } from '@nutui/nutui-react-taro'

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
      <Cell>
        <InputNumber
          defaultValue={10}
          min={10}
          max={20}
          onOverlimit={overlimit}
        />
      </Cell>
      {/* <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      /> */}
    </>
  )
}
export default Demo3
