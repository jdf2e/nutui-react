import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { Category, Hi, Home } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo8 = ({ t }: propsType) => (
  <Tabbar inactiveColor="#7d7e80" activeColor="#0073ff">
    <Tabbar.Item title={t.home} icon={<Home />} />
    <Tabbar.Item title={t.category} icon={<Category />} />
    <Tabbar.Item title={t.explore} icon={<Hi />} />
  </Tabbar>
)

export default withTranslation(Demo8)
