import React, { useRef, useState } from 'react'
import { InputNumber, Toast } from '@nutui/nutui-react'

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
  const overlimit = (e: any) => {
    console.log('超出限制事件触发', e)
  }

  const onChange = useDebounce((value: string | number) => {
    Toast.show({ icon: 'loading', content: '异步演示2秒后更改' })
    setTimeout(() => {
      setInputValue(Number(value))
      Toast.clear()
    }, 2000)
  }, 300)

  return (
    <InputNumber
      value={inputValue}
      min={-9999}
      onChange={onChange}
      onOverlimit={overlimit}
    />
  )
}
export default Demo8
