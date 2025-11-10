import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, HeartFill, Heart, Hi, Home, User } from '@nutui/icons-react-taro'

const Demo10 = () => (
  <Tabbar>
    <Tabbar.Item
      title="首页"
      ariaLabel="首页"
      ariaRoledescription="切换tab操作"
      icon={<Home />}
    />
    <Tabbar.Item
      title="逛"
      ariaLabel="逛"
      ariaRoledescription="切换tab操作"
      icon={<Hi />}
    />
    <Tabbar.Item
      title="收藏"
      ariaLabel="收藏"
      ariaRoledescription="切换tab操作"
      icon={(active: boolean) => (active ? <HeartFill /> : <Heart />)}
    />
    <Tabbar.Item
      title="购物车"
      ariaLabel="购物车"
      ariaRoledescription="切换tab操作"
      icon={<Cart />}
    />
    <Tabbar.Item
      title="我的"
      ariaLabel="我的"
      ariaRoledescription="切换tab操作"
      icon={<User />}
    />
  </Tabbar>
)

export default Demo10
