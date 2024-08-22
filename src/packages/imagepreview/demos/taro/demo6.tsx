import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
      index: 1,
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
      index: 2,
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
      index: 3,
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
      index: 4,
    },
  ]

  const videos = [
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4',
      },
      options: {
        muted: true,
        controls: true,
      },
      index: 0,
    },
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4',
      },
      options: {
        muted: true,
        controls: true,
      },
      index: 5,
    },
  ]
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <ImagePreview
        autoPlay={false}
        images={images}
        videos={videos}
        visible={showPreview}
        onClose={() => setShowPreview(false)}
      />
      <Cell title="视频、图片预览" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo6
