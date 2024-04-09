import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react'

const Demo1 = () => (
  <Tabbar defaultValue={0}>
    <Tabbar.Item
      title="首页"
      icon={<Home width={18} height={18} />}
      value={9}
    />
    <Tabbar.Item title="分类" icon={<Category width={18} height={18} />} dot />
    <Tabbar.Item title="发现" icon={<Find width={18} height={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart width={18} height={18} />} />
    <Tabbar.Item title="我的" icon={<User width={18} height={18} />} />
  </Tabbar>
)

export default Demo1
