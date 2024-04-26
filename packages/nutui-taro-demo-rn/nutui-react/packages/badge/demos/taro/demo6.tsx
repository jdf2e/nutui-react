import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo6 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={8} top="5" right="5">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={76} top="10" right="10">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value="NEW">
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo6
