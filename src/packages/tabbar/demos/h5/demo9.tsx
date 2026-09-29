import React, { useState } from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Message, Hi, Home, Top, User } from '@nutui/icons-react'

interface DemoProps {
  scrollTop?: number
  onBackToTop?: () => void
}

const Demo = ({ scrollTop = 0, onBackToTop }: DemoProps) => {
  const [value, setValue] = useState(0)
  const canBackToTop = scrollTop >= 160

  return (
    <Tabbar fixed value={value} onSwitch={setValue}>
      <Tabbar.Item
        title={
          <span
            style={{
              display: 'block',
              width: 44,
              height: 14,
              lineHeight: '14px',
              textAlign: 'center',
            }}
          >
            首页
          </span>
        }
        icon={(active) =>
          active && canBackToTop ? (
            <span
              aria-label="返回顶部"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: 'var(--nutui-tabbar-active-color, #ff0f23)',
              }}
            >
              <Top width={12} height={12} color="#fff" />
            </span>
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

export default Demo
