import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import {
  CartF,
  CartI,
  HiI,
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
    <Tabbar.Item title="逛一逛" icon={<HiI />} value="最多四字" />
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
