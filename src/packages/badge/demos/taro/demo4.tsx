import React from 'react'
import { Check, User, Dongdong, Fabulous } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge value={<Check color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<Dongdong color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<Fabulous color="#fff" />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo4
