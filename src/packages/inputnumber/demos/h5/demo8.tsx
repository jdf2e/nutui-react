import React, { useState } from 'react'
import { Cell, InputNumber, Toast } from '@nutui/nutui-react'

const Demo8 = () => {
  const [inputValue, setInputValue] = useState(0)
  const overlimit = (e: any) => {
    console.log('超出限制事件触发', e)
  }

  const beforeChange = (value: number | string): Promise<boolean> => {
    Toast.show({ icon: 'loading', content: '异步演示2秒后更改' })

    return new Promise((resolve) => {
      setTimeout(() => {
        Toast.clear()
        resolve(true)
      }, 500)
    })
  }

  return (
    <Cell>
      <InputNumber
        value={inputValue}
        min={-9999}
        beforeChange={beforeChange}
        onChange={(value) => setInputValue(Number(value))}
        onOverlimit={overlimit}
      />
    </Cell>
  )
}
export default Demo8
