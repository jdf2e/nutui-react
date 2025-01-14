import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo1 = ({ t }: propsType) => (
  <Tabbar defaultValue={0}>
    <Tabbar.Item title={t.home} icon={<Home />} value={9} />
    <Tabbar.Item title={t.category} icon={<Category />} dot />
    <Tabbar.Item title={t.explore} icon={<Hi />} />
    <Tabbar.Item title={t.cart} icon={<Cart />} />
    <Tabbar.Item title={t.mine} icon={<User />} />
  </Tabbar>
)

export default withTranslation(Demo1)
