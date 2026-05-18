import React, { useState } from 'react'
import { QuickEnter, Cell, Toast } from '@nutui/nutui-react-taro'
import { Message, Home, Search, Cart, Edit, Del } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: '消息', icon: <Message />, badge: 8 },
    { title: '首页', icon: <Home /> },
    { title: '搜索', icon: <Search /> },
    { title: '购物车', icon: <Cart /> },
    { title: '功能反馈', icon: <Edit /> },
    { title: '订单回收站', icon: <Del /> },
  ]

  const onChange = (item: any) => {
    Toast.show('toast', {
      title: `Clicked: ${item.title}`,
      icon: 'none',
    })
  }

  return (
    <>
      <Cell title="点击查看快捷入口" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
        onChange={onChange}
      />
      <Toast id="toast" />
    </>
  )
}
export default Demo1
