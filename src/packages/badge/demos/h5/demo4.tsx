import React from 'react'
import { Badge, Avatar, Cell } from '@nutui/nutui-react'
import { User, Checklist, Link as LinkIcon, Download } from '@nutui/icons-react'

const Demo4 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge value={<Checklist color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<LinkIcon color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<Download color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo4
