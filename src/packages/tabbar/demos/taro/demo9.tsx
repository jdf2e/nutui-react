import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Message, Hi, Home, User } from '@nutui/icons-react-taro'

const Demo9 = () => (
  <Tabbar fixed>
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="逛" icon={<Hi />} />
    <Tabbar.Item title="消息" icon={<Message />} />
    <Tabbar.Item title="购物车" icon={<Cart />} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo9
