import React from 'react'
import { Divider, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
  return (
    <>
      <Cell>
        <Divider contentPosition="left">{t.text}</Divider>
      </Cell>
      <Cell>
        <Divider contentPosition="right">{t.text}</Divider>
      </Cell>
    </>
  )
}

export default withTranslation(Demo3)
