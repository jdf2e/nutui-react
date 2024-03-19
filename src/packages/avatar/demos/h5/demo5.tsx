import React from 'react'
import { Avatar, Badge } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo5 = () => {
  return (
    <>
      <Badge value="8">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </>
  )
}
export default Demo5
