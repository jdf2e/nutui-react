import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo4 = () => {
  return (
    <Cell className="cell-avatar">
      <Avatar
        color="#ffffff"
        background={`${harmonyAndRn() ? '#ff0f23' : 'var(--nutui-color-primary)'}`}
        icon={<User />}
      />
      <Avatar
        color={`${harmonyAndRn() ? '#ff0f23' : 'var(--nutui-color-primary)'}`}
        background={`${harmonyAndRn() ? '#ffebf1' : 'var(--nutui-color-primary-light-pressed)'}`}
      >
        U
      </Avatar>
    </Cell>
  )
}
export default Demo4
