import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => {
  return (
    <Cell>
      <Divider style={{ borderStyle: 'dashed' }}>{t.text}</Divider>
    </Cell>
  )
}

export default withTranslation(Demo4)
