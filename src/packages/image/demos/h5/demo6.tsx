import React from 'react'
import { Image } from '@nutui/nutui-react'
import { Failure } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => {
  const imageText: React.CSSProperties = {
    width: 100,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: 110 }}>
          <Image
            src="https://x"
            width="100"
            height="100"
            onError={() => {
              console.log('image error')
            }}
          />
          <div style={imageText}>{t.default}</div>
        </div>
        <div style={{ width: 110 }}>
          <Image src="https://x" width="100" height="100" error={<Failure />} />
          <div style={imageText}>{t.custom}</div>
        </div>
      </div>
    </>
  )
}

export default withTranslation(Demo6)
