import {
  Checklist,
  Download,
  Link as LinkIcon,
  User,
} from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

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
