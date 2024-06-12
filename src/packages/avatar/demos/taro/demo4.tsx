import React from 'react'
import { Avatar } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <>
      <Avatar
        color="#fff"
        background="var(--nutui-color-primary)"
        // icon={<User />}
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
