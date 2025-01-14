import React, { useRef } from 'react'
import { Button, Sticky } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
  const containerTopRef = useRef(null)
  return (
    <>
      <div ref={containerTopRef} style={{ height: '600px' }}>
        <Sticky container={containerTopRef} threshold={57}>
          <Button type="info" style={{ marginLeft: '100px' }}>
            {t.stickyWithinContainer}
          </Button>
        </Sticky>
      </div>
    </>
  )
}

export default withTranslation(Demo3)
