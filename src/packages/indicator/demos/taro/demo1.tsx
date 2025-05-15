import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={0} />
      </Cell>
    </>
  )
}
export default Demo1
