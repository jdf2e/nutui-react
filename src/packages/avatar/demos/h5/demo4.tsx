import React from 'react'
import { Avatar } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo4 = () => {
  return (
    <>
      <Avatar
        className="demo-avatar"
        color="#fff"
        background="var(--nutui-color-primary)"
        icon={<User />}
      />
      <Avatar
        color="var(--nutui-color-primary)"
        background="var(--nutui-color-primary-light)"
      >
        U
      </Avatar>
    </>
  )
}
export default Demo4
