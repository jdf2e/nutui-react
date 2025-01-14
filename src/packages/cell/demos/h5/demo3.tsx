import React from 'react'
import { Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
  return (
    <Cell
      title={
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <User />
          <span style={{ marginLeft: 5 }}>{t.title}</span>
        </div>
      }
      description={
        <span>
          {t.description}
          <b style={{ color: 'red' }}>1</b>
        </span>
      }
      extra={t.descriptionText}
    />
  )
}

export default withTranslation(Demo3)
