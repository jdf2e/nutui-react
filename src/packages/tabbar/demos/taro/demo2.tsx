import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import {
  CartF,
  CartI,
  StoreF,
  StoreI,
  HomeF,
  HomeI,
  MessageF,
  MessageI,
  UserF,
  UserI,
} from '@nutui/icons-react-taro'

const Demo5 = () => (
  <Tabbar material="frosted">
    <Tabbar.Item
      icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
      title="首页"
      dot
    />
    <Tabbar.Item
      title="逛一逛"
      icon={(active: boolean) => (active ? <StoreF /> : <StoreI />)}
      value="最多四字"
    />
    <Tabbar.Item
      title="消息"
      icon={(active: boolean) => (active ? <MessageF /> : <MessageI />)}
      value={100}
    />
    <Tabbar.Item
      title="购物车"
      icon={(active: boolean) => (active ? <CartF /> : <CartI />)}
      value={80}
    />
    <Tabbar.Item
      title="我的"
      icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
      value={8}
    />
  </Tabbar>
)

export default Demo5
