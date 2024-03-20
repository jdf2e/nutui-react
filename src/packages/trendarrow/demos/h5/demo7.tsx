import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react'

const Demo7 = () => {
  return (
    <Cell>
      <TrendArrow value={10.2365} riseColor="rgb(73,143,242)" />
      <TrendArrow value={-0.2535} symbol dropColor="rgb(255, 190, 13)" />
      <TrendArrow
        sync={false}
        value={-0.2535}
        symbol
        color="rgb(39,197,48)"
        dropColor="rgb(255, 190, 13)"
      />
    </Cell>
  )
}
export default Demo7
