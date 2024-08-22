import React, { useState } from 'react'
import { InputNumber, Toast } from '@nutui/nutui-react'

const Demo8 = () => {
  const [inputValue, setInputValue] = useState(0)
  const overlimit = (e: any) => {
    console.log('超出限制事件触发', e)
  }
  const onChange = (value: string | number) => {
    Toast.show({ icon: 'loading', content: '异步演示2秒后更改' })
    console.log('onChange', value)
    setTimeout(() => {
      setInputValue(Number(value))
      Toast.clear()
    }, 2000)
  }
  return (
    <InputNumber
      value={inputValue}
      min={-6}
      max={6}
      onChange={onChange}
      onOverlimit={overlimit}
      async
    />
  )
}
export default Demo8
