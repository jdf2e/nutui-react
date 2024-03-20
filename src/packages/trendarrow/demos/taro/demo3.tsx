import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <TrendArrow digits={1} value={10.2365} />
      <TrendArrow digits={3} value={-0.2535} />
    </Cell>
  )
}
export default Demo3
