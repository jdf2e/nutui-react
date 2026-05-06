import React, { useState } from 'react'
import { QuickEnter, Cell } from '@nutui/nutui-react'
import { Message, Home, Search, Cart, ArrowUp } from '@nutui/icons-react'

const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: '消息', icon: <Message />, badge: 8 },
    { title: '首页', icon: <Home /> },
    { title: '搜索', icon: <Search /> },
    { title: '购物车', icon: <Cart /> },
  ]

  return (
    <>
      <Cell title="自定义关闭图标" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        closeIcon={<ArrowUp width={12} height={12} />}
        style={{
          '--nutui-quickenter-bg-color': '#fff',
          '--nutui-quickenter-item-icon-bg-color': '#F5F5F5B3',
        }}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo3
