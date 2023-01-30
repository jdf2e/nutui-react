import React, { useState } from 'react'
import { Cell, ImagePreview } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface T {
  basic: string
  showPreview: string
  withInitNo: string
  withPagination: string
  withVideos: string
}

const images = [
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
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

const ImagePreviewDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      showPreview: '展示图片预览',
      withInitNo: '设置初始页码',
      withPagination: '设置轮播指示器及颜色',
      withVideos: '视频、图片预览',
    },
    'en-US': {
      basic: 'Basic usage',
      showPreview: 'Show Preview',
      withInitNo: 'With Init No',
      withPagination: 'With Pagination',
      withVideos: 'With Videos',
    },
  })

  const [showPreview1, setShowPreview1] = useState(false)
  const [showPreview2, setShowPreview2] = useState(false)
  const [showPreview3, setShowPreview3] = useState(false)

  const showFn1 = () => {
    setShowPreview1(true)
  }

  const showFn2 = () => {
    setShowPreview2(true)
  }

  const showFn3 = () => {
    setShowPreview3(true)
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

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <ImagePreview images={images} show={showPreview1} onClose={hideFn1} />
        <Cell title={translated.showPreview} isLink onClick={showFn1} />
        <h2>{translated.withInitNo}</h2>
        <ImagePreview
          images={images}
          show={showPreview2}
          initNo={3}
          onClose={hideFn2}
        />
        <Cell title={translated.withInitNo} isLink onClick={showFn2} />
        <h2>{translated.withPagination}</h2>
        <ImagePreview
          images={images}
          show={showPreview3}
          paginationVisible
          paginationColor="red"
          onClose={hideFn3}
        />
        <Cell title={translated.withPagination} isLink onClick={showFn3} />
      </div>
    </>
  )
}

export default ImagePreviewDemo
