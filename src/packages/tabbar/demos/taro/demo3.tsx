import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Message, Hi, Home, User } from '@nutui/icons-react-taro'

const Demo3 = () => (
  <Tabbar>
    <Tabbar.Item icon={<Home />} />
    <Tabbar.Item icon={<Hi />} />
    <Tabbar.Item icon={<Message />} />
    <Tabbar.Item icon={<Cart />} />
    <Tabbar.Item icon={<User />} />
  </Tabbar>
)
export default Demo3
