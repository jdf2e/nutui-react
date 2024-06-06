import React from 'react'
import { Cell, Progress } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <Progress
        percent={30}
        color="#FF0F23"
        background="#FFEAE8"
        strokeWidth="15"
      />
    </Cell>
  )
}
export default Demo2
