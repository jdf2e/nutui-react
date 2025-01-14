import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  return (
    <>
      <Sticky threshold={120}>
        <Button type="primary">{t.distanceFromBottom} 120px</Button>
      </Sticky>
    </>
  )
}

export default withTranslation(Demo2)
