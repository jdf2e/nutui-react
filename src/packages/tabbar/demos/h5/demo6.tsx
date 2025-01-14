import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => (
  <Tabbar>
    <Tabbar.Item title={t.home} icon={<Home />} dot />
    <Tabbar.Item title={t.category} icon={<Category />} />
    <Tabbar.Item title={t.explore} icon={<Hi />} />
    <Tabbar.Item title={t.cart} icon={<Cart />} dot />
    <Tabbar.Item title={t.mine} icon={<User />} />
  </Tabbar>
)

export default withTranslation(Demo6)
