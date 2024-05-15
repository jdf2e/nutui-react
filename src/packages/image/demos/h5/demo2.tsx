import React from 'react'
import { Image } from '@nutui/nutui-react'

const Demo2 = () => {
  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down']
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
        {fits.map((i) => {
          return (
            <div key={i} style={{ width: 98 }}>
              <Image src={src} width="80" height="80" fit={i} />
              <div style={imageText}>{i}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Demo2
