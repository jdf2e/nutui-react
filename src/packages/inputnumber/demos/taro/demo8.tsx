import React, { useState } from 'react'
import { Cell, InputNumber, Toast } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [inputValue, setInputValue] = useState(0)
  const [show, setShow] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [toastType, setToastType] = useState('text')

  const toastShow = (msg: any, type: string) => {
    setToastMsg(msg)
    setToastType(type)
    setShow(true)
  }
  const overlimit = (e: any) => {
    console.log('超出限制事件触发', e)
  }

  const beforeChange = (value: number | string): Promise<boolean> => {
    toastShow('异步演示 2 秒后更改', 'loading')

    return new Promise((resolve) => {
      setTimeout(() => {
        setShow(false)
        resolve(true)
      }, 500)
    })
  }

  return (
    <>
      <Cell>
        <InputNumber
          value={inputValue}
          min={-9999}
          beforeChange={beforeChange}
          onChange={(value) => setInputValue(Number(value))}
          onOverlimit={overlimit}
        />
      </Cell>
      <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          setShow(false)
        }}
      />
    </>
  )
}
export default Demo8
