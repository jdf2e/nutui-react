import React, { useState } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import {
  CartF,
  CartI,
  StoreF,
  StoreI,
  HomeF,
  HomeI,
  MessageF,
  MessageI,
  BacktopF,
  UserF,
  UserI,
} from '@nutui/icons-react-taro'

interface DemoProps {
  scrollTop?: number
  onBackToTop?: () => void
}

const Demo9 = ({ scrollTop = 0, onBackToTop }: DemoProps) => {
  const [value, setValue] = useState(0)
  const canBackToTop = scrollTop >= 160

  return (
    <Tabbar material="frosted" fixed value={value} onSwitch={setValue}>
      <Tabbar.Item
        title="首页"
        icon={(active) => {
          if (active && canBackToTop) {
            return (
              <BacktopF
                size={20}
                color="var(--nutui-tabbar-active-color, var(--nutui-color-primary, #ff0f23))"
                ariaLabel="返回顶部"
              />
            )
          }

          return active ? <HomeF /> : <HomeI />
        }}
        onActiveClick={() => {
          if (canBackToTop) onBackToTop?.()
        }}
      />
      <Tabbar.Item
        title="逛"
        icon={(active: boolean) => (active ? <StoreF /> : <StoreI />)}
      />
      <Tabbar.Item
        title="消息"
        icon={(active: boolean) => (active ? <MessageF /> : <MessageI />)}
      />
      <Tabbar.Item
        title="购物车"
        icon={(active: boolean) => (active ? <CartF /> : <CartI />)}
      />
      <Tabbar.Item
        title="我的"
        icon={(active: boolean) => (active ? <UserF /> : <UserI />)}
      />
    </Tabbar>
  )
}

export default Demo9
