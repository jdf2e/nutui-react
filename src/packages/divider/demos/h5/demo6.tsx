import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => {
  return (
    <Cell align="center">
      {t.text}
      <Divider direction="vertical" />
      <a href="#" style={{ color: '#0073ff', verticalAlign: 'middle' }}>
        {t.link}
      </a>
      <Divider direction="vertical" />
      <a href="#" style={{ color: '#0073ff', verticalAlign: 'middle' }}>
        {t.link}
      </a>
    </Cell>
  )
}

export default withTranslation(Demo6)
