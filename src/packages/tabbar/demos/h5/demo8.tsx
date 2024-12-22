import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Category, Hi, Home } from '@nutui/icons-react'

const Demo8 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#0073ff">
    <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="逛" icon={<Hi width={20} height={20} />} />
  </Tabbar>
)

export default Demo8
