import React from 'react'
import { Avatar, Toast } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo8 = () => {
  const activeAvatar = () => {
    Toast.show('触发点击头像')
  }
  return (
    <>
      <Avatar icon={<User />} onClick={activeAvatar} />
    </>
  )
}
export default Demo8
