import React from 'react'
import { Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo8 = ({ t }: propsType) => {
  return (
    <Button block type="primary">
      {t.blockButton}
    </Button>
  )
}

export default withTranslation(Demo8)
