import React from 'react'
import { Avatar, Badge, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo5 = () => {
  const styles = { marginRight: '30px' }
  return (
    <Cell>
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
