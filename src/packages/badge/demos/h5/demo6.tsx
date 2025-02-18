import { User } from '@nutui/icons-react'
import { Avatar, Badge, Cell } from '@nutui/nutui-react'
import React from 'react'

const Demo6 = () => {
  return (
    <Cell style={{ justifyContent: 'space-around' }}>
      <Badge dot top={4} right={4}>
        <Avatar icon={<User />} />
      </Badge>
      <Badge value={8} top={7} right={7}>
        <Avatar icon={<User />} />
      </Badge>
      <Badge value="内容" top={7} right={10}>
        <Avatar icon={<User />} />
      </Badge>
    </Cell>
  )
}
export default Demo6
