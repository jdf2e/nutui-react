import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import {
  CartF,
  CartI,
  HeartF,
  HeartI,
  HiI,
  HomeF,
  HomeI,
  UserF,
  UserI,
} from '@nutui/icons-react-taro'

const Demo = () => (
  <Tabbar material="frosted">
    <Tabbar.Item
      title="首页"
      icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
    />
    <Tabbar.Item title="逛" icon={<HiI />} />
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
