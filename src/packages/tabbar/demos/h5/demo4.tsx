import React from 'react'
import { Tabbar } from '@nutui/nutui-react'

const Demo4 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title="首页" value={9} />
    <Tabbar.Item title="分类" dot />
    <Tabbar.Item title="发现" />
    <Tabbar.Item title="购物车" />
    <Tabbar.Item title="我的" />
  </Tabbar>
)
export default Demo4
