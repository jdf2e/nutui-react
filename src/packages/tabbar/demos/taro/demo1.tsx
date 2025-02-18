import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react-taro'

const Demo1 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title="首页" icon={<Home />} value={9} />
    <Tabbar.Item title="分类" icon={<Category />} />
    <Tabbar.Item title="逛" icon={<Hi />} />
    <Tabbar.Item title="购物车" icon={<Cart />} />
    <Tabbar.Item title="我的" icon={<User />} />
  </Tabbar>
)

export default Demo1
