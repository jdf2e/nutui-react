import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Category, Find, Home } from '@nutui/icons-react-taro'

const Demo8 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="分类" icon={<Category />} />
    <Tabbar.Item title="发现" icon={<Find />} />
  </Tabbar>
)

export default Demo8
