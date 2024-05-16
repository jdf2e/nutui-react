import React from 'react'
import { Image } from '@nutui/nutui-react'

const Demo3 = () => {
  const positions = ['top', 'center', 'bottom', 'left', 'center', 'right']
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
        {positions.map((i) => {
          return (
            <div key={i} style={{ width: 98 }}>
              <Image
                src={src}
                width="80"
                height="80"
                fit="contain"
                position={i}
              />
              <div style={imageText}>contain</div>
              <div style={imageText}>{i}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Demo3
