import React from 'react'
import { Avatar } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'

const Demo8 = () => {
  const activeAvatar = () => {
    Taro.showToast({ title: '触发点击头像' })
  }
  return (
    <>
      <Avatar icon={<User />} onClick={activeAvatar} />
    </>
  )
}
export default Demo8
