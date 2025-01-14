import React from 'react'
import { Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => {
  return (
    <Cell
      align="center"
      title={t.title}
      description={t.description}
      extra={t.descriptionText}
    />
  )
}

export default withTranslation(Demo5)
