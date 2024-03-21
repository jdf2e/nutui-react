import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <>
      <Cell>
        <Progress percent={30} strokeWidth="5" showText />
      </Cell>
      <Cell>
        <Progress percent={50} strokeWidth="10" showText />
      </Cell>
      <Cell>
        <Progress percent={70} strokeWidth="15" showText />
      </Cell>
    </>
  )
}
export default Demo5
