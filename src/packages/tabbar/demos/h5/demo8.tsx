import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Category, Hi, Home } from '@nutui/icons-react'

const Demo8 = () => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#0073ff">
    <Tabbar.Item title="首页" icon={<Home />} />
    <Tabbar.Item title="分类" icon={<Category />} />
    <Tabbar.Item title="逛" icon={<Hi />} />
  </Tabbar>
)

export default Demo8
