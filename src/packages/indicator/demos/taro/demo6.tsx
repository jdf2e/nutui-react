import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Indicator total={3} current={2} type="slide" />
      </Cell>
      <Cell>
        <Indicator total={2} type="dualScreen" current={0} />
      </Cell>
      <Cell style={{ background: 'var(--nutui-color-text-disabled, #c2c4cc)' }}>
        <Indicator total={2} type="dualScreen" current={1} color="default" />
      </Cell>
    </>
  )
}
export default Demo6
