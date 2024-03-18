import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo7 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <Tabbar.Item title="首页" icon={<Home size={18} />} />
    <Tabbar.Item title="分类" icon={<Category size={18} />} />
    <Tabbar.Item title="发现" icon={<Find size={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
    <Tabbar.Item title="我的" icon={<User size={18} />} />
  </Tabbar>
)

export default Demo7
