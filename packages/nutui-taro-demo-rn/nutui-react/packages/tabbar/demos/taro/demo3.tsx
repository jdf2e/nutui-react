import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo3 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item icon={<Home />} />
    <Tabbar.Item icon={<Category />} />
    <Tabbar.Item icon={<Find />} />
    <Tabbar.Item icon={<Cart />} />
    <Tabbar.Item icon={<User />} />
  </Tabbar>
)

export default Demo3
