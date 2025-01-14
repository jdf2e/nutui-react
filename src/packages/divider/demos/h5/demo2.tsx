import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  return (
    <Cell>
      <Divider>{t.text}</Divider>
    </Cell>
  )
}

export default withTranslation(Demo2)
