import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Hi, Home, User, Heart, HeartFill } from '@nutui/icons-react'

const Demo = () => (
  <Tabbar>
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="逛" icon={<Hi />} />
    <Tabbar.Item
      title="收藏"
      icon={(active: boolean) => (active ? <HeartFill /> : <Heart />)}
    />
    <Tabbar.Item title="购物车" icon={<Cart />} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo
