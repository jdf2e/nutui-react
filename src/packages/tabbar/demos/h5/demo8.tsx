import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import {
  CartF,
  CartI,
  HeartF,
  HeartI,
  StoreF,
  StoreI,
  HomeF,
  HomeI,
  UserF,
  UserI,
} from '@nutui/icons-react'

const Demo = () => (
  <Tabbar material="frosted">
    <Tabbar.Item
      title="首页"
      icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
    />
    <Tabbar.Item
      title="逛"
      icon={(active: boolean) => (active ? <StoreF /> : <StoreI />)}
    />
    <Tabbar.Item
      title="收藏"
      icon={(active: boolean) => (active ? <HeartF /> : <HeartI />)}
    />
    <Tabbar.Item
      title="焦点点击"
      icon={(active: boolean) => (active ? <CartF /> : <CartI />)}
      onActiveClick={() => console.log('可以在这里写想要的事件')}
    />
    <Tabbar.Item
      title="我的"
      icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
    />
  </Tabbar>
)

export default Demo
