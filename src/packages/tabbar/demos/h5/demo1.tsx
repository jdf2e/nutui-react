import React from 'react'
import { Tabbar, Image, Space } from '@nutui/nutui-react'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react'

const Demo1 = () => (
  <Space direction="vertical">
    <Tabbar defaultValue={0}>
      <Tabbar.Item title="首页" icon={<Home />} value={9} />
      <Tabbar.Item title="分类" icon={<Category />} dot />
      <Tabbar.Item title="逛" icon={<Hi />} />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>

    <Tabbar defaultValue={0}>
      <Tabbar.Item title="首页" icon={<Home />} value={9} />
      <Tabbar.Item title="分类" icon={<Category />} dot />
      <Tabbar.Item
        icon={
          <Image src="https://m.360buyimg.com/babel/jfs/t1/191442/19/49010/10556/67111e93F323e2874/0aed1c833b4f56f9.png" />
        }
        activeIcon={<Hi />}
        title="逛"
      />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>

    {/* <Tabbar defaultValue={0}>
      <Tabbar.Item
        title="首页"
        icon={<Home />}
        activeIcon={
          <Image src="https://storage.360buyimg.com/imgtools/ba40719add-025fcd20-0618-11f0-8bdb-aba55e067ea2.png" />
        }
      />
      <Tabbar.Item title="分类" icon={<Category />} dot />
      <Tabbar.Item icon={<Hi />} title="逛" />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar> */}
  </Space>
)

export default Demo1
