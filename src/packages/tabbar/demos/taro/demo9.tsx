import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Message, Hi, Home, Top, User } from '@nutui/icons-react-taro'

interface DemoProps {
  scrollTop?: number
  onBackToTop?: () => void
}

const Demo9 = ({ scrollTop = 0, onBackToTop }: DemoProps) => {
  const [value, setValue] = useState(0)
  const canBackToTop = scrollTop >= 160

  return (
    <Tabbar fixed value={value} onSwitch={setValue}>
      <Tabbar.Item
        title={
          <View
            style={{
              width: '44px',
              height: '14px',
              lineHeight: '14px',
              textAlign: 'center',
            }}
          >
            首页
          </View>
        }
        icon={(active) =>
          active && canBackToTop ? (
            <View
              aria-label="返回顶部"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'var(--nutui-tabbar-active-color, #ff0f23)',
              }}
            >
              <Top size={12} color="#fff" />
            </View>
          ) : (
            <Home />
          )
        }
        onActiveClick={() => {
          if (canBackToTop) onBackToTop?.()
        }}
      />
      <Tabbar.Item title="逛" icon={<Hi />} />
      <Tabbar.Item title="消息" icon={<Message />} />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )
}

export default Demo9
