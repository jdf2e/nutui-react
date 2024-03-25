import { Badge, Cell } from '@nutui/nutui-react'
import React from 'react'

const Demo7 = () => {
  return (
    <Cell style={{ height: '80px' }}>
      <Badge style={{ marginInlineEnd: '40px' }} value={8} />
      <Badge style={{ marginInlineEnd: '40px' }} value={76} />
      <Badge style={{ marginInlineEnd: '40px' }} value="NEW" />
    </Cell>
  )
}
export default Demo7
