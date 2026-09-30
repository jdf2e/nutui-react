import React, { useState } from 'react'
import { Cart, Home, Message, User } from '@nutui/icons-react'
import { ConfigProvider, Tabbar } from '@nutui/nutui-react'

const Demo12 = () => {
  const [dark, setDark] = useState(false)
  const [solidPreview, setSolidPreview] = useState(false)
  const [value, setValue] = useState(0)
  const solidColor = dark ? '#14171a' : '#ffffff'
  const tint = dark ? 'rgba(20, 23, 26, 0.8)' : 'rgba(255, 255, 255, 0.8)'
  const theme = {
    nutuiTabbarBackground: solidColor,
    nutuiTabbarMaterialTint: solidPreview ? solidColor : tint,
    nutuiTabbarMaterialBlur: solidPreview ? '0PX' : '3PX',
    nutuiTabbarActiveBackground: dark ? '#2a2f36' : '#f0f2f7',
    nutuiTabbarInactiveColor: dark ? '#e1e6eb' : '#11141a',
  }

  return (
    <div>
      <button type="button" onClick={() => setDark((current) => !current)}>
        {dark ? '切换浅色材质' : '切换暗色材质'}
      </button>
      <button
        type="button"
        onClick={() => setSolidPreview((current) => !current)}
      >
        {solidPreview ? '恢复毛玻璃' : '预览实色降级'}
      </button>
      <p>在下方视口内滚动彩色内容，对比模糊与实色预览。</p>
      <ConfigProvider
        theme={theme}
        style={{
          width: '100%',
          height: 300,
          position: 'relative',
          overflow: 'hidden',
          background: dark ? '#14171a' : '#f2f4f7',
        }}
      >
        <div style={{ height: '100%', overflowY: 'auto' }}>
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              style={{
                height: 96,
                padding: 16,
                boxSizing: 'border-box',
                color: index % 2 ? '#ffffff' : '#11141a',
                background:
                  index % 2
                    ? 'linear-gradient(120deg, #3f51b5, #b75ab8)'
                    : 'linear-gradient(120deg, #ffcf70, #77ded4)',
              }}
            >
              滚动背景 {index + 1}
            </div>
          ))}
        </div>
        <Tabbar
          fixed
          value={value}
          onSwitch={setValue}
          style={{ position: 'absolute' }}
        >
          <Tabbar.Item title="首页" icon={<Home />} />
          <Tabbar.Item title="消息" icon={<Message />} />
          <Tabbar.Item title="购物车" icon={<Cart />} />
          <Tabbar.Item title="我的" icon={<User />} />
        </Tabbar>
      </ConfigProvider>
    </div>
  )
}

export default Demo12
