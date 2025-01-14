import React from 'react'
import { Image } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo7 = ({ t }: propsType) => {
  return (
    <>
      <Image
        src="http://m.360buyimg.com/babel/s181x181_jfs/t1/210178/19/10205/31538/619bbcd9E5071aed5/8e1b7eb632aeed49.png"
        width="30"
        height="30"
        style={{ marginRight: '10px' }}
        onError={() => {
          console.log('image error')
        }}
      />
      <div style={{ width: '220px' }}>{t.imageText}</div>
    </>
  )
}

export default withTranslation(Demo7)
