import React from 'react'
import { Image } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: 98 }}>
          <Image
            src={src}
            mode="aspectFit"
            width="80"
            height="80"
            radius="50%"
          />
        </div>
        <div style={{ width: 98 }}>
          <Image
            src={src}
            mode="scaleToFill"
            width="80"
            height="80"
            radius="50%"
          />
        </div>
        <div style={{ width: 98 }}>
          <Image
            src={src}
            mode="scaleToFill"
            width="80"
            height="80"
            radius="10px"
          />
        </div>
      </div>
    </>
  )
}
export default Demo2
