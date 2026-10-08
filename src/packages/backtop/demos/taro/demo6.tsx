import React from 'react'
import { BackTop, Cell, Tabbar } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <View>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop tabbarHeight={48} />
      <Tabbar fixed>
        <Tabbar.Item title="首页" icon={<Home size={18} />} />
        <Tabbar.Item title="分类" icon={<Category size={18} />} />
        <Tabbar.Item title="逛" icon={<Hi size={18} />} />
        <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
        <Tabbar.Item title="我的" icon={<User size={18} />} />
      </Tabbar>
    </View>
  )
}
export default Demo6
