import React from 'react'
import { Badge, Cell } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <Cell align="center" style={{ justifyContent: 'space-around' }}>
      <Badge dot />
      <Badge value={8} />
      <Badge value="内容" />
    </Cell>
  )
}
export default Demo7
