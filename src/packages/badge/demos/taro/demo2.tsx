import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo2 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={200} max={9}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={200} max={20}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={200} max={99}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo2
