import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={0} color="white" />
      </Cell>
    </>
  )
}
export default Demo5
