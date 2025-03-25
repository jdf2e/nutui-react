import React, { useState } from 'react'
import { Cell, InputNumber, Toast } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const overlimit = () => {
    toastShow('超出限制事件触发')
  }
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')

  const toastShow = (msg: string) => {
    SetToastMsg(msg)
    SetShow(true)
  }

  return (
    <>
      <Cell>
        <InputNumber
          onChange={(v) => {
            console.log(v)
          }}
          defaultValue={10}
          min={10}
          max={20}
          onOverlimit={overlimit}
        />
      </Cell>
      <Toast
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
