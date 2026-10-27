import React, { useState } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import {
  CartF,
  CartI,
  HiI,
  HomeF,
  HomeI,
  UserF,
  UserI,
} from '@nutui/icons-react-taro'

const Demo = () => {
  const [index, setIndex] = useState(3)

  return (
    <>
      <Tabbar
        material="frosted"
        value={index}
        onSwitch={(value) => setIndex(value)}
      >
        <Tabbar.Item
          title="首页"
          icon={(active: boolean) => (active ? <HomeF /> : <HomeI />)}
        />
        <Tabbar.Item title="逛" icon={<HiI />} />
        <Tabbar.Item
          title="购物车"
          icon={(active: boolean) => (active ? <CartF /> : <CartI />)}
        />
        <Tabbar.Item
          title="我的"
          icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
        />
      </Tabbar>
    </>
  )
}

export default Demo
