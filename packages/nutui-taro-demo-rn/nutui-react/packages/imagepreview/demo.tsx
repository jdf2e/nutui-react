import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'

const ImagePreviewDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      withInitNo: '设置初始页码',
      withControl: '受控模式',
      withPagination: '设置轮播指示器及颜色',
      withVideos: '视频、图片预览',
      thumb: '点击缩略图切换',
      closeIcon: '关闭按钮',
    },
    'en-US': {
      basic: 'Basic usage',
      withInitNo: 'With Init No',
      withControl: 'With control',
      withPagination: 'With Pagination',
      withVideos: 'With Videos',
      thumb: 'Click image to switch',
      closeIcon: 'Close Icon',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.thumb}</h2>
        <Demo2 />
        <h2>{translated.withInitNo}</h2>
        <Demo3 />
        <h2>{translated.withControl}</h2>
        <Demo4 />
        <h2>{translated.withPagination}</h2>
        <Demo5 />
        <h2>{translated.withVideos}</h2>
        <Demo6 />
        <h2>{translated.closeIcon}</h2>
        <Demo7 />
      </div>
    </>
  )
}

export default ImagePreviewDemo
