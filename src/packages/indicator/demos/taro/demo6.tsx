import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={2} type="slide" />
      </Cell>
      <Cell>
        <Indicator total={3} current={2} type="slide" direction="vertical" />
      </Cell>
    </>
  )
}
export default Demo6
