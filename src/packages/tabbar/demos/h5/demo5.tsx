import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => (
  <Tabbar>
    <Tabbar.Item title={t.home} icon={<Home />} value={11} />
    <Tabbar.Item title={t.category} icon={<Category />} />
    <Tabbar.Item title={t.explore} icon={<Hi />} />
    <Tabbar.Item title={t.cart} icon={<Cart />} value={110} />
    <Tabbar.Item title={t.mine} icon={<User />} />
  </Tabbar>
)

export default withTranslation(Demo5)
