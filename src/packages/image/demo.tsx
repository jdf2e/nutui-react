import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '@/packages/cell'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      lazyload: '图片懒加载',
      imageText: 'Image + text 模式',
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
      lazyload: 'Lazyload',
      imageText: 'image + text ',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated.fill}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.position}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated.circle}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated.loading}</h2>
        <Cell>
          <Demo5 />
        </Cell>
        <h2>{translated.error}</h2>
        <Cell>
          <Demo6 />
        </Cell>
        <h2>{translated.imageText}</h2>
        <Cell>
          <Demo7 />
        </Cell>
        <h2>{translated.lazyload}</h2>
        <Cell>
          <Demo8 />
        </Cell>
      </div>
    </>
  )
}

export default ImageDemo
