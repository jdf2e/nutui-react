import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo1 = ({ t }: propsType) => {
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
      <BackTop target="target" />
    </>
  )
}

export default withTranslation(Demo1)
