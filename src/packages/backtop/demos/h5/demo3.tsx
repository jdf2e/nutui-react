import React from 'react'
import { Top } from '@nutui/icons-react'
import { BackTop, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
  return (
    <>
      {new Array(24).fill(0).map((_, index) => {
        return (
          <Cell key={index}>
            {t.testData}
            {index}
          </Cell>
        )
      })}
      <BackTop threshold={100} target="target">
        <Top width={12} height={12} />
        <div style={{ fontSize: '12px' }}>{t.top}</div>
      </BackTop>
    </>
  )
}

export default withTranslation(Demo3)
