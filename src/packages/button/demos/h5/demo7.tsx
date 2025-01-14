import React from 'react'
import { Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const App = ({ t }: propsType) => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button type="primary" style={marginStyle}>
        {t.normal}
      </Button>
      <Button style={marginStyle}>{t.normal}</Button>
      <Button size="small" style={marginStyle} type="primary">
        {t.small}
      </Button>
      <Button size="mini" style={marginStyle} type="primary">
        {t.mini}
      </Button>
      <Button size="large" type="primary" style={marginStyle}>
        {t.large}
      </Button>
      <Button size="xlarge" type="primary" style={marginStyle}>
        {t.xlarge}
      </Button>
    </>
  )
}

export default withTranslation(App)
