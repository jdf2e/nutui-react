import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const App = ({ t }: propsType) => {
  return <Cell title={t.switch} extra={<Switch defaultChecked />} />
}

export default withTranslation(App)
