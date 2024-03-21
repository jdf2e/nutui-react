import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

const Demo5 = () => (
  <Tabbar>
    <Tabbar.Item icon={<Home />} title="首页" value={11} />
    <Tabbar.Item title="分类" icon={<Category />} />
    <Tabbar.Item title="发现" icon={<Find />} />
    <Tabbar.Item title="购物车" icon={<Cart />} value={110} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo5
