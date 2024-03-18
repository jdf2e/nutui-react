import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo3 = () => {
  return (
    <Cell>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={8}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={76}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value="NEW"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        top="2"
        right="4"
        dot
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo3
