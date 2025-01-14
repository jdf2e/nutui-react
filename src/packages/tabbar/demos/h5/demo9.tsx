import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo9 = ({ t }: propsType) => (
  <Tabbar fixed>
    <Tabbar.Item title={t.home} icon={<Home />} />
    <Tabbar.Item title={t.category} icon={<Category />} />
    <Tabbar.Item title={t.explore} icon={<Hi />} />
    <Tabbar.Item title={t.cart} icon={<Cart />} />
    <Tabbar.Item title={t.mine} icon={<User />} />
  </Tabbar>
)

export default withTranslation(Demo9)
