import React from 'react'
import { Badge, Avatar, Cell } from '@nutui/nutui-react'
import { User, Check, Link as LinkIcon, Fabulous } from '@nutui/icons-react'

const Demo4 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge value={<Check color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<LinkIcon color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<Fabulous color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo4
