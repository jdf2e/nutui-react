import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => {
  return (
    <Cell>
      <Divider
        style={{
          color: '#0073ff',
          borderColor: '#0073ff',
          padding: '0 16px',
          borderStyle: 'dashed',
        }}
      >
        {t.text}
      </Divider>
    </Cell>
  )
}

export default withTranslation(Demo5)
