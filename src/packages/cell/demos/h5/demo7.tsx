import React from 'react'
import { Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo7 = ({ t }: propsType) => {
  return (
    <Cell.Group divider={false}>
      <Cell title={t.title} extra={t.descriptionText} />
      <Cell title={t.title} extra={t.descriptionText} />
    </Cell.Group>
  )
}

export default withTranslation(Demo7)
