import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Message, Hi, Home, User } from '@nutui/icons-react'

const Demo = () => (
  <Tabbar>
    <Tabbar.Item title="首页" icon={<Home />} dot />
    <Tabbar.Item title="逛" icon={<Hi />} value="内容" />
    <Tabbar.Item title="消息" icon={<Message />} value={100} />
    <Tabbar.Item title="购物车" icon={<Cart />} value={80} />
    <Tabbar.Item title="我的" icon={<User />} value={8} />
  </Tabbar>
)

export default Demo
