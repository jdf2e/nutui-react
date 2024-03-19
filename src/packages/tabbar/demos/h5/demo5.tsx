import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react'

const Demo5 = () => (
  <Tabbar>
    <Tabbar.Item title="首页" icon={<Home />} value={11} />
    <Tabbar.Item title="分类" icon={<Category />} />
    <Tabbar.Item title="发现" icon={<Find />} />
    <Tabbar.Item title="购物车" icon={<Cart />} value={110} />
    <Tabbar.Item title="我的" icon={<User width={20} height={20} />} />
  </Tabbar>
)

export default Demo5
