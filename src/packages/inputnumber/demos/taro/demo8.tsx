import React, { useState } from 'react'
import { InputNumber, Toast } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [inputValue, setInputValue] = useState(0)
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const [toastType, SetToastType] = useState('text')

  const toastShow = (msg: any, type: string) => {
    SetToastMsg(msg)
    SetToastType(type)
    SetShow(true)
  }
  const overlimit = (e: any) => {
    console.log('超出限制事件触发', e)
  }
  const onChange = (value: string | number) => {
    toastShow('异步演示 2 秒后更改', 'loading')
    console.log('onChange', value)
    setTimeout(() => {
      setInputValue(Number(value))
      SetShow(false)
    }, 2000)
  }
  return (
    <>
      <InputNumber
        value={inputValue}
        min={-6}
        max={6}
        onChange={onChange}
        onOverlimit={overlimit}
        async
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
export default Demo8
