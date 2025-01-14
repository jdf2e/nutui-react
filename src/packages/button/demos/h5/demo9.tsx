import React from 'react'
import { Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const App = ({ t }: propsType) => {
  return (
    <>
      <Button
        color="blue"
        style={{
          margin: 8,
        }}
      >
        {t.simpleButton}
      </Button>
      <Button
        fill="outline"
        color="#7232dd"
        style={{
          margin: 8,
        }}
      >
        {t.simpleButton}
      </Button>
      <Button
        color="rgba(10,101,208,0.75)"
        style={{
          margin: 8,
        }}
      >
        {t.simpleButton}
      </Button>
      <Button
        type="primary"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        style={{
          margin: 8,
        }}
      >
        {t.gradientButton}
      </Button>
    </>
  )
}

export default withTranslation(App)
