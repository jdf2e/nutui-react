import React from 'react'
import { Cell, InputNumber, Toast } from '@nutui/nutui-react'

const Demo3 = () => {
  const overlimit = () => {
    Toast.show({ content: '超出限制事件触发', icon: 'warn' })
  }
  return (
    <Cell>
      <InputNumber
        defaultValue={10}
        min={10}
        max={20}
        onOverlimit={overlimit}
      />
    </Cell>
  )
}
export default Demo3
