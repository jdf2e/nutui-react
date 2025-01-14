import React from 'react'
import { Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  return (
    <Cell>
      <div>{t.customContent}</div>
    </Cell>
  )
}

export default withTranslation(Demo2)
