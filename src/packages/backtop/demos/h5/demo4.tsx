import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => {
  return (
    <div id="target2" style={{ height: '800px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return (
          <Cell key={index}>
            {t.testData}
            {index}
          </Cell>
        )
      })}
      <BackTop target="target2" threshold={100} />
    </div>
  )
}

export default withTranslation(Demo4)
