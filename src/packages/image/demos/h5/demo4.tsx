import React from 'react'
import { Image } from '@nutui/nutui-react'

const Demo4 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText: React.CSSProperties = {
    width: 80,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: 98 }}>
          <Image src={src} width="80" height="80" fit="contain" radius="50%" />
          <div style={imageText}>contain</div>
        </div>
        <div style={{ width: 98 }}>
          <Image src={src} width="80" height="80" fit="cover" radius="50%" />
          <div style={imageText}>cover</div>
        </div>
        <div style={{ width: 98 }}>
          <Image src={src} width="80" height="80" fit="cover" radius="10" />
          <div style={imageText}>cover</div>
        </div>
      </div>
    </>
  )
}
export default Demo4
