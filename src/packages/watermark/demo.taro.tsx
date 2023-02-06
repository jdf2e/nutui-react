import React, { useState, useRef } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Button, WaterMark } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'
import '@/packages/watermark/demo.scss'

interface T {
  '84aa6bce': string
  ddd76b7f: string
  '6de1e02a': string
  fa139733: string
}
const WaterMarkDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      ddd76b7f: '文字水印',
      '6de1e02a': '图片水印',
      fa139733: '局部用法',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      ddd76b7f: '文字浮水印',
      '6de1e02a': '圖片浮水印',
      fa139733: '局部用法',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      ddd76b7f: 'Text WaterMark',
      '6de1e02a': 'Image WaterMark',
      fa139733: 'Part Usage',
    },
  })

  const [flag, setFlag] = useState(false)
  const src = useRef(
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  )
  const imgSrc = useRef(
    'http://img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
  )

  const showTextMark = () => {
    setFlag(false)
  }

  const showImageMark = () => {
    setFlag(true)
  }

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} demo-watemark`}
      >
        <h2>{translated['84aa6bce']}</h2>
        <Cell className="wrap">
          <Button onClick={showTextMark}>{translated.ddd76b7f}</Button>
          <Button onClick={showImageMark}>{translated['6de1e02a']}</Button>
          {!flag && (
            <WaterMark
              className="mark1-taro"
              zIndex={1}
              content="nut-ui-water-mark"
            />
          )}
          {flag && (
            <WaterMark
              className="mark1-taro"
              zIndex={1}
              content="nut-ui-water-mark"
              imageWidth={60}
              imageHeight={23}
              image={imgSrc.current}
            />
          )}
        </Cell>
        <h2>{translated.fa139733}</h2>
        <Cell className="wrap wrap2">
          <img src={src.current} alt="" />
          <WaterMark fullPage={false} fontColor="#fa2c19" content="nut-ui" />
        </Cell>
      </div>
    </>
  )
}

export default WaterMarkDemo
