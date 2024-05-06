import React from 'react'
import { Image } from '@nutui/nutui-react'
import { Failure } from '@nutui/icons-react'

const Demo6 = () => {
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
          <div style={imageText}>默认</div>
        </div>
        <div style={{ width: 110 }}>
          <Image src="https://x" width="100" height="100" error={<Failure />} />
          <div style={imageText}>自定义</div>
        </div>
      </div>
    </>
  )
}
export default Demo6
