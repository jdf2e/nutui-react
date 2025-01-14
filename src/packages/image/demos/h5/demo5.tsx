import React from 'react'
import { Image } from '@nutui/nutui-react'
import { Loading } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => {
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
            width="100"
            height="100"
            lazy
            onLoad={() => {
              console.log('image onload')
            }}
          />
          <div style={imageText}>{t.default}</div>
        </div>
        <div style={{ width: 110 }}>
          <Image width="100" height="100" lazy loading={<Loading />} />
          <div style={imageText}>{t.custom}</div>
        </div>
      </div>
    </>
  )
}

export default withTranslation(Demo5)
