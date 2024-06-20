import React, { useState } from 'react'
import { Cell, InputNumber, Toast } from '@nutui/nutui-react'

const Demo8 = () => {
  const [inputValue, setInputValue] = useState(0)
  const onChange = (value: string | number) => {
    Toast.show({ icon: 'loading', content: '异步演示2秒后更改' })
    setTimeout(() => {
      setInputValue(Number(value))
      Toast.clear()
    }, 2000)
  }
  return (
    <Cell>
      <InputNumber value={inputValue} min={-6} onChange={onChange} async />
    </Cell>
  )
}
export default Demo8
