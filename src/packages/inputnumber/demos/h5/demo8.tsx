import React, { useState } from 'react'
import { InputNumber, Toast } from '@nutui/nutui-react'

const Demo8 = () => {
  const [inputValue, setInputValue] = useState(0)
  const onChange = (value: string | number) => {
    Toast.show({ icon: 'loading', content: '异步演示2秒后更改' })
    setTimeout(() => {
      setInputValue(Number(value))
      Toast.clear()
    }, 2000)
  }
  return <InputNumber value={inputValue} min={-6} onChange={onChange} async />
}
export default Demo8
