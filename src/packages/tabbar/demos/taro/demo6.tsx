import React from 'react'
import { Tabbar, Space } from '@nutui/nutui-react-taro'
import {
  CartF,
  CartI,
  HomeF,
  HomeI,
  UserF,
  UserI,
} from '@nutui/icons-react-taro'

const Demo7 = () => (
  <Space direction="vertical">
    <Tabbar
      material="frosted"
      inactiveColor="#7d7e80"
      activeColor="var(--nutui-color-info, #0c82f7)"
    >
      <Tabbar.Item
        title="首页"
        icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
      />
      <Tabbar.Item
        title="购物车"
        icon={(active: boolean) => (active ? <CartF /> : <CartI />)}
      />
      <Tabbar.Item
        title="我的"
        icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
      />
    </Tabbar>

    <Tabbar
      material="frosted"
      inactiveColor="#7d7e80"
      activeColor="var(--nutui-color-info, #0c82f7)"
    >
      <Tabbar.Item
        title="首页"
        icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
      />
      <Tabbar.Item
        title="我的"
        icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
      />
    </Tabbar>

    <Tabbar
      material="frosted"
      inactiveColor="#7d7e80"
      activeColor="var(--nutui-color-info, #0c82f7)"
      direction="horizontal"
    >
      <Tabbar.Item
        title="我的优惠券"
        icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
        dot
      />
      <Tabbar.Item
        title="领券中心"
        icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
        value={22}
      />
    </Tabbar>
  </Space>
)

export default Demo7
