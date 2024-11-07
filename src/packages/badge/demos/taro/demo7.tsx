import React from 'react'
import { Badge, Cell } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo7 = () => {
  const isRnAndHarmony = harmonyAndRn()
  const marginStyles = isRnAndHarmony
    ? { marginRight: pxTransform(40) }
    : { marginInlineEnd: '40px' }
  return (
    <Cell style={{ height: pxTransform(66) }}>
      <Badge style={marginStyles} value={8} />
      <Badge style={marginStyles} value={76} />
      <Badge style={marginStyles} value="NEW" />
    </Cell>
  )
}
export default Demo7
