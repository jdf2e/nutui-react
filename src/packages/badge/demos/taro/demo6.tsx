import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo6 = () => {
  const isRnAndHarmony = harmonyAndRn()
  const renderChildren = () => {
    return <Avatar icon={<User />} shape="square" />
  }
  const marginStyles = isRnAndHarmony
    ? { marginRight: pxTransform(40) }
    : { marginInlineEnd: '40px' }
  return (
    <Cell>
      <Badge style={marginStyles} value={8} top="3" right="5">
        {renderChildren()}
      </Badge>
      <Badge style={marginStyles} value={76} top="-3" right="10">
        {renderChildren()}
      </Badge>
      <Badge style={marginStyles} value="NEW">
        {renderChildren()}
      </Badge>
    </Cell>
  )
}
export default Demo6
