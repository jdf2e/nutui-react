import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={0} type="slide" />
      </Cell>
    </>
  )
}
export default Demo6
