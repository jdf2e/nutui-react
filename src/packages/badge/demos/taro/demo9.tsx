import React from 'react'
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge dot disabled>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={8} disabled>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value="内容" disabled>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo9
