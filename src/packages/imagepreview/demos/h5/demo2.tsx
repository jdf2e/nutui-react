import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [init, setInit] = useState(0)
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <Cell style={{ position: 'relative' }}>
        {images.map((image, index) => (
          <span
            key={image.src}
            onClick={() => {
              setShowPreview(true)
              setInit(index + 1)
            }}
            style={{ marginRight: '10px' }}
          >
            <img width={30} height={30} src={image.src} alt={image.src} />
          </span>
        ))}
      </Cell>
      <ImagePreview
        images={images}
        visible={showPreview}
        defaultValue={init}
        onClose={() => setShowPreview(false)}
        indicator
      />
    </>
  )
}
export default Demo2
