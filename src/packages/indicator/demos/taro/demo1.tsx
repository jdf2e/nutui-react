import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={0} />
      </Cell>
      <Cell>
        <Indicator total={2} current={0} />
      </Cell>
      <Cell>
        <Indicator total={2} current={0} direction="vertical" />
      </Cell>
      <Cell style={{ background: '#C2C4CC' }}>
        <Indicator total={2} current={1} direction="vertical" color="white" />
      </Cell>
    </>
  )
}
export default Demo1
