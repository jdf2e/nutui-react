import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <>
      <Cell style={{ background: '#C2C4CC' }}>
        <Indicator total={3} current={0} color="white" />
      </Cell>
    </>
  )
}
export default Demo5
