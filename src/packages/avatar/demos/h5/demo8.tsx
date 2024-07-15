import React from 'react'
import { Avatar, Toast, Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const Demo8 = () => {
  const activeAvatar = () => {
    Toast.show('触发点击头像')
  }
  return (
    <Cell>
      <Avatar icon={<User />} onClick={activeAvatar} />
    </Cell>
  )
}
export default Demo8
