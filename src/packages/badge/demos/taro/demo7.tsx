import React from 'react'
import { Badge, Cell } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo7 = () => {
  return (
    <Cell style={{ height: pxTransform(80) }}>
      <Badge style={{ marginRight: pxTransform(40) }} value={8} />
      <Badge style={{ marginRight: pxTransform(40) }} value={76} />
      <Badge style={{ marginRight: pxTransform(40) }} value="NEW" />
    </Cell>
  )
}
export default Demo7
