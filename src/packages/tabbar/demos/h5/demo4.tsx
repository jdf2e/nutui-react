import React from 'react'
import { Tabbar } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title={t.home} value={9} />
    <Tabbar.Item title={t.category} />
    <Tabbar.Item title={t.explore} />
    <Tabbar.Item title={t.cart} />
    <Tabbar.Item title={t.mine} />
  </Tabbar>
)

export default withTranslation(Demo4)
