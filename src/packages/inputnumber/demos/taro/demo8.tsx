import React, { useRef, useState } from 'react'
import { InputNumber, Toast } from '@nutui/nutui-react-taro'

type DebounceFunction<T extends any[]> = (...args: T) => void

function useDebounce<T extends any[]>(
  func: (...args: T) => void,
  delay: number
): DebounceFunction<T> {
  const timeoutId: any = useRef()
  return function (...args: T) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
    timeoutId.current = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

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
  const onChange = useDebounce((value: string | number) => {
    toastShow('异步演示 2 秒后更改', 'loading')
    setTimeout(() => {
      setInputValue(Number(value))
      SetShow(false)
    }, 2000)
  }, 300)

  return (
    <>
      <InputNumber
        value={inputValue}
        min={-9999}
        onChange={onChange}
        onOverlimit={overlimit}
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
