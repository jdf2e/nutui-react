import React from 'react'
import { Indicator, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={0} />
      </Cell>
      <Cell>
        <Indicator total={3} current={1} />
      </Cell>
      <Cell>
        <Indicator total={3} current={2} />
      </Cell>
    </>
  )
}
export default Demo1
