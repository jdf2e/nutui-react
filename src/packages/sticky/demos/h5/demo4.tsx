import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => {
  return (
    <>
      <Sticky threshold={0} position="bottom">
        <Button type="primary">{t.distanceFromBottom} 0px</Button>
      </Sticky>
    </>
  )
}

export default withTranslation(Demo4)
