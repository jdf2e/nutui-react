import React from 'react'
import { Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button type="primary" fill="solid" style={marginStyle}>
        {t.solid}
      </Button>
      <Button type="primary" fill="outline" style={marginStyle}>
        {t.outline}
      </Button>
      <Button type="primary" fill="dashed" style={marginStyle}>
        {t.dashed}
      </Button>
      <Button fill="none" style={marginStyle}>
        {t.none}
      </Button>
    </>
  )
}

export default withTranslation(Demo2)
