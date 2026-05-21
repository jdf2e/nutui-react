import React, { useState } from 'react'
import { QuickEnter, Cell } from '@nutui/nutui-react-taro'
import {
  Message,
  Home,
  Search,
  Cart,
  Edit,
  Del,
  Star,
  Share,
  Setting,
  User,
} from '@nutui/icons-react-taro'

const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: '消息', icon: <Message />, badge: 8 },
    { title: '首页', icon: <Home /> },
    { title: '搜索', icon: <Search /> },
    { title: '购物车', icon: <Cart /> },
    { title: '功能反馈', icon: <Edit /> },
    { title: '订单回收站', icon: <Del /> },
    { title: '收藏', icon: <Star /> },
    { title: '店铺', icon: <Share /> },
    { title: '设置', icon: <Setting /> },
    { title: '个人中心', icon: <User /> },
  ]

  return (
    <>
      <Cell title="点击查看可滚动的快捷入口" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo2
