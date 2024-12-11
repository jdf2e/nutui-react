import React from 'react'
import { Badge, Avatar, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo3 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge
        dot
        style={{
          '--nutui-badge-background-color':
            'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
        }}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        value={8}
        style={{
          '--nutui-badge-background-color':
            'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
        }}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        value="内容"
        style={{
          '--nutui-badge-background-color':
            'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
        }}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo3
