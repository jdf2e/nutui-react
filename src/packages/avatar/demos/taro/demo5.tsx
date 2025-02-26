import React from 'react'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo5 = () => {
  const styles = { marginRight: 30 }
  return (
    <Cell className="cell-avatar">
      <Badge value="8" style={styles}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo5
