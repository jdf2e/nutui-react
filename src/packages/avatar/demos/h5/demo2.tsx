import React from 'react'
import { Avatar } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo2 = () => {
  return (
    <>
      <Avatar icon={<User />} shape="square" />
      <Avatar icon={<User />} shape="round" />
    </>
  )
}
export default Demo2
