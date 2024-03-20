import React from 'react'
import { TrendArrow, Cell } from '@nutui/nutui-react'
import { Success, Failure } from '@nutui/icons-react'

const Demo8 = () => {
  return (
    <Cell>
      <TrendArrow value={10.2365} riseIcon={<Success color="blue" />} />
      <TrendArrow value={-10.2365} dropIcon={<Failure color="red" />} />
    </Cell>
  )
}
export default Demo8
