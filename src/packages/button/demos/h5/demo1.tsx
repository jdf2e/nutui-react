import React from 'react'
import { Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo1 = ({ t }: propsType) => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button type="primary" style={marginStyle}>
        {t.primary}
      </Button>
      <Button type="info" style={marginStyle}>
        {t.info}
      </Button>
      <Button type="default" style={marginStyle}>
        {t.default}
      </Button>
      <Button type="danger" style={marginStyle}>
        {t.danger}
      </Button>
      <Button type="warning" style={marginStyle}>
        {t.warning}
      </Button>
      <Button type="success" style={marginStyle}>
        {t.success}
      </Button>
    </>
  )
}
export default withTranslation(Demo1)
