import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Hi, Home, User } from '@nutui/icons-react'

const Demo = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#0073ff">
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="逛" icon={<Hi />} />
    <Tabbar.Item title="购物车" icon={<Cart />} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo
