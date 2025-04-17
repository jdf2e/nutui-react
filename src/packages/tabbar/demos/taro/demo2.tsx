import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Hi, Home, User, Message } from '@nutui/icons-react-taro'

const Demo5 = () => (
  <Tabbar>
    <Tabbar.Item icon={<Home />} title="首页" dot />
    <Tabbar.Item title="逛" icon={<Hi />} value="内容" />
    <Tabbar.Item title="消息" icon={<Message />} value={100} />
    <Tabbar.Item title="购物车" icon={<Cart />} value={80} />
    <Tabbar.Item title="我的" icon={<User />} value={8} />
  </Tabbar>
)

export default Demo5
