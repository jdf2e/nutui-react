import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Cell, ImagePreview } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

interface T {
  basic: string
  showPreview: string
  withInitNo: string
  withControl: string
  withPagination: string
  withVideos: string
  thumb: string
  closeIcon: string
}

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
  },
]

const ImagePreviewDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      showPreview: '展示图片预览',
      withInitNo: '设置初始页码',
      withControl: '受控模式',
      withPagination: '设置轮播指示器及颜色',
      withVideos: '视频、图片预览',
      thumb: '点击缩略图切换',
      closeIcon: '关闭按钮',
    },
    'en-US': {
      basic: 'Basic usage',
      showPreview: 'Show Preview',
      withInitNo: 'With Init No',
      withControl: 'With control',
      withPagination: 'With Pagination',
      withVideos: 'With Videos',
      thumb: 'Click image to switch',
      closeIcon: 'Close Icon',
    },
  })

  const [showPreview0, setShowPreview0] = useState(false)
  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)
  const [showPreview4, setShowPreview4] = useState(false)
  const [showPreview5, setShowPreview5] = useState(false)
  const [showPreview6, setShowPreview6] = useState(false)

  const [init1, setInit1] = useState<any>(1)
  const [init2, setInit2] = useState<any>(2)
  const [init3, setInit3] = useState<any>(3)
  const [init5, setInit5] = useState<any>(2)

  const showFn0 = () => {
    setShowPreview0(true)
  }
  const showFn1 = () => {
    setShowPreview1(true)
  }

  const showFn2 = () => {
    setShowPreview2(true)
  }

  const showFn3 = () => {
    setShowPreview3(true)
  }
  const showFn4 = () => {
    setShowPreview4(true)
  }
  const showFn5 = () => {
    setShowPreview5(true)
  }
  const showFn6 = () => {
    setShowPreview6(true)
  }

  const hideFn0 = () => {
    setShowPreview0(false)
  }

  const hideFn1 = () => {
    setShowPreview1(false)
  }

  const hideFn2 = () => {
    setShowPreview2(false)
  }

  const hideFn3 = () => {
    setShowPreview3(false)
  }

  const hideFn4 = () => {
    setShowPreview4(false)
  }
  const hideFn5 = () => {
    setShowPreview5(false)
  }
  const hideFn6 = () => {
    setShowPreview6(false)
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <ImagePreview
          autoPlay
          images={images}
          visible={showPreview0}
          onClose={hideFn0}
        />
        <Cell title={translated.showPreview} onClick={showFn0} />
        <h2>{translated.thumb}</h2>
        <Cell style={{ position: 'relative' }}>
          {images.map((image, index) => (
            <span
              key={image.src}
              onClick={() => {
                showFn1()
                setInit1(index + 1)
              }}
              style={{ marginRight: '10px' }}
            >
              <img width="30px" height="30px" src={image.src} alt={image.src} />
            </span>
          ))}
        </Cell>
        <ImagePreview
          autoPlay
          images={images}
          visible={showPreview1}
          defaultValue={init1}
          onClose={hideFn1}
          indicator
        />
        <h2>{translated.withInitNo}</h2>
        <ImagePreview
          autoPlay
          images={images}
          visible={showPreview2}
          defaultValue={init2}
          onClose={hideFn2}
        />

        <Cell
          title={translated.withInitNo}
          onClick={() => {
            showFn2()
          }}
        />
        <h2>{translated.withControl}</h2>
        <ImagePreview
          autoPlay
          images={images}
          visible={showPreview5}
          value={init5}
          defaultValue={init5}
          indicator
          onChange={(value) => {
            console.log('demo onChange', value)
            setInit5(value)
          }}
          onClose={hideFn5}
        />
        <Cell
          title={translated.withControl}
          onClick={() => {
            showFn5()
          }}
        />
        <h2>{translated.withPagination}</h2>
        <ImagePreview
          autoPlay
          images={images}
          visible={showPreview3}
          indicator
          indicatorColor="red"
          onClose={hideFn3}
        />
        <Cell title={translated.withPagination} onClick={showFn3} />
        <h2>{translated.withVideos}</h2>
        <ImagePreview
          autoPlay={false}
          images={images}
          videos={videos}
          visible={showPreview4}
          onClose={hideFn4}
        />
        <Cell title={translated.withVideos} onClick={showFn4} />

        <h2>{translated.closeIcon}</h2>
        <ImagePreview
          autoPlay={false}
          images={images}
          visible={showPreview6}
          closeIcon
          onClose={hideFn6}
        />
        <Cell title={translated.closeIcon} onClick={showFn6} />
      </div>
    </>
  )
}

export default ImagePreviewDemo
