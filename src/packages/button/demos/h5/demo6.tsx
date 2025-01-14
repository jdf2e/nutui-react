import React, { useState } from 'react'
import { Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => {
  const [loading, setLoading] = useState(false)
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button loading type="warning" style={marginStyle}>
        {t.loading}
      </Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
        style={marginStyle}
      >
        {t.clickMe}
      </Button>
    </>
  )
}

export default withTranslation(Demo6)
