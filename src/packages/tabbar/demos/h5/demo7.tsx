import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react'

const Demo7 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#0073ff">
    <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
    <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
    <Tabbar.Item title="我的" icon={<User width={20} height={20} />} />
  </Tabbar>
)

export default Demo7
