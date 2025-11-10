import React from 'react'
import { Image } from '@nutui/nutui-react'
import { Failure } from '@nutui/icons-react'

const Demo9 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText: React.CSSProperties = {
    width: 100,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <Image
        src={src}
        alt="图片内容"
        ariaLabel="图片名称"
        onClick={() => {
          console.log('click image')
        }}
      />
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
export default Demo9
