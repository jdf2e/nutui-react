import React from 'react'
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge value={200} max={9}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={200} max={20}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={200} max={99}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo2
