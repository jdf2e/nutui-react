import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <Cell>
      <TrendArrow sync={false} value={1} />
      <TrendArrow sync={false} value={-0.2535} />
    </Cell>
  )
}
export default Demo1
