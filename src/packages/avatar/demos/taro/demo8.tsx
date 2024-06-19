import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo8 = () => {
  const activeAvatar = () => {
    Taro.showToast({ title: '触发点击头像' })
  }
  return (
    <Cell className="cell-avatar">
      {harmonyAndRn() ? (
        <Avatar>N</Avatar>
      ) : (
        <Avatar icon={<User />} onClick={activeAvatar} />
      )}
    </Cell>
  )
}
export default Demo8
