import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmony } from '@/utils/platform-taro'

const Demo4 = () => {
  return (
    <Cell className="cell-avatar">
      <Avatar
        color="#ffffff"
        background={`${harmony() ? '#ff0f23' : 'var(--nutui-color-primary)'}`}
        icon={<User />}
      />
      <Avatar
        color={`${harmony() ? '#ff0f23' : 'var(--nutui-color-primary)'}`}
        background={`${harmony() ? '#ffebf1' : 'var(--nutui-color-primary-light-pressed)'}`}
      >
        U
      </Avatar>
    </Cell>
  )
}
export default Demo4
