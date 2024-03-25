import { User } from '@nutui/icons-react'
import { Avatar, Badge, Cell } from '@nutui/nutui-react'
import React from 'react'

const Demo8 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={8} color="green">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={76} fill="outline">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value="NEW"
        color="blue"
        fill="outline"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo8
