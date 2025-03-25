import React, { useState } from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Hi, Home, User } from '@nutui/icons-react'

const Demo = () => {
  const [index, setIndex] = useState(3)

  return (
    <>
      <Tabbar value={index} onSwitch={(value) => setIndex(value)}>
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="逛" icon={<Hi />} />
        <Tabbar.Item title="购物车" icon={<Cart />} />
        <Tabbar.Item title="我的" icon={<User />} />
      </Tabbar>
    </>
  )
}

export default Demo
