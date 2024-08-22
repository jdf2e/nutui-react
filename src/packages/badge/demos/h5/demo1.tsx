import { User } from '@nutui/icons-react'
import { Avatar, Badge, Cell } from '@nutui/nutui-react'
import React from 'react'

const Demo1 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={8}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={76}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value="NEW">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} dot top="2" right="4">
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo1
