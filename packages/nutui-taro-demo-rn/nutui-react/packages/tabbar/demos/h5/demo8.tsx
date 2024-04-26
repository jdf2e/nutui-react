import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Category, Find, Home } from '@nutui/icons-react'

const Demo8 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#1989fa">
    <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
  </Tabbar>
)

export default Demo8
