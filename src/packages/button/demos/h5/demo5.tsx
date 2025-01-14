import React from 'react'
import { Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button style={marginStyle} type="primary" shape="square">
        {t.squareButton}
      </Button>
      <Button style={marginStyle} type="primary">
        {t.roundButton}
      </Button>
    </>
  )
}

export default withTranslation(Demo5)
