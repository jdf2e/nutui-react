import React from 'react'
import { Checklist, User, Dongdong, Download } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge value={<Checklist color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<Dongdong color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<Download color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo4
