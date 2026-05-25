import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <>
      <Cell style={{ background: 'var(--nutui-color-text-disabled, #c2c4cc)' }}>
        <Indicator total={3} current={0} color="default" />
      </Cell>
    </>
  )
}
export default Demo5
