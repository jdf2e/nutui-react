import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo1 = ({ t }: propsType) => {
  const handleChange = (val: boolean) => {
    console.log(t.stickyChangeText, val)
  }

  return (
    <>
      <Sticky threshold={57} onChange={(val: boolean) => handleChange(val)}>
        <Button type="primary">{t.sticky}</Button>
      </Sticky>
    </>
  )
}

export default withTranslation(Demo1)
