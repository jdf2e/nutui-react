import React, { useState } from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react'

const Demo2 = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  return (
    <Tabbar
      defaultValue={0}
      value={activeIndex}
      onSwitch={(value) => {
        setActiveIndex(value)
      }}
    >
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="分类" icon={<Category />} />
      <Tabbar.Item title="逛" icon={<Hi />} />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )
}

export default Demo2
