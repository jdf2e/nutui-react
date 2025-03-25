import React from 'react'
import { Tabbar, Space } from '@nutui/nutui-react-taro'
import { Cart, Home, User } from '@nutui/icons-react-taro'

const Demo7 = () => (
  <Space direction="vertical">
    <Tabbar inactiveColor="#7d7e80" activeColor="#0073ff">
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>

    <Tabbar inactiveColor="#7d7e80" activeColor="#0073ff">
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>

    <Tabbar
      inactiveColor="#7d7e80"
      activeColor="#0073ff"
      direction="horizontal"
    >
      <Tabbar.Item title="我的优惠券" icon={<Home />} dot />
      <Tabbar.Item title="领券中心" icon={<User />} value={22} />
    </Tabbar>
  </Space>
)

export default Demo7
