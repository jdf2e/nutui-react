/**
 * 有底部导航栏的情况
 */
import React from 'react'
import { HoverButton, Tabbar } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo3 = () => {
  return (
    <View>
      <HoverButton icon={<Cart />} tabbarHeight={48} />
      {harmonyAndRn() ? null : (
        <Tabbar fixed>
          <Tabbar.Item title="首页" icon={<Home size={18} />} />
          <Tabbar.Item title="分类" icon={<Category size={18} />} />
          <Tabbar.Item title="逛" icon={<Hi size={18} />} />
          <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
          <Tabbar.Item title="我的" icon={<User size={18} />} />
        </Tabbar>
      )}
    </View>
  )
}
export default Demo3
