import React from 'react'
import { Badge, Avatar, Cell } from '@nutui/nutui-react'
import { User, Checklist, Link as LinkIcon, Download } from '@nutui/icons-react'

const Demo4 = () => {
  return (
    <Cell>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={<Checklist color="#fff" />}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={<LinkIcon color="#fff" />}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={<Download color="#fff" />}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo4
