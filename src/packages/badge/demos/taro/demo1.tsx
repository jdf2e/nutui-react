import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo1 = () => {
  const isRnAndHarmony = harmonyAndRn()
  const renderChildren = () => {
    return <Avatar icon={<User />} shape="square" />
  }
  const marginStyles = isRnAndHarmony
    ? { marginRight: pxTransform(40) }
    : { marginInlineEnd: '40px' }
  return (
    <Cell>
      <Badge style={marginStyles} value={8}>
        {renderChildren()}
      </Badge>
      <Badge style={marginStyles} value={76}>
        {renderChildren()}
      </Badge>
      <Badge style={marginStyles} value="NEW">
        {renderChildren()}
      </Badge>
      <Badge style={marginStyles} dot top="2" right="4">
        {renderChildren()}
      </Badge>
    </Cell>
  )
}
export default Demo1
