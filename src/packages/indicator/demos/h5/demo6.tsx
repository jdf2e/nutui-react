import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={2} type="slide" />
      </Cell>
      <Cell>
        <Indicator total={2} type="dualScreen" current={0} />
      </Cell>
      <Cell style={{ background: '#C2C4CC' }}>
        <Indicator total={2} type="dualScreen" current={1} color="default" />
      </Cell>
    </>
  )
}
export default Demo6
