import React, { useState, useRef } from 'react'
import { WaterMark } from './watermark'
import Cell from '@/packages/cell'
import Button from '@/packages/button'
import './demo.scss'

const WaterMarkDemo = () => {
  const [flag, setFlag] = useState(false)
  const src = useRef(
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  )
  const imgSrc = useRef(
    '//img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
  )

  const showTextMark = () => {
    setFlag(false)
  }

  const showImageMark = () => {
    setFlag(true)
  }

  return (
    <>
      <div className="demo demo-watermark">
        <h2>基础用法</h2>
        <Cell className="wrap">
          <Button onClick={showTextMark}>文字水印</Button>
          <Button onClick={showImageMark}>图片水印</Button>
          {!flag && (
            <WaterMark
              className="mark1"
              zIndex={1}
              content="nut-ui-water-mark"
            ></WaterMark>
          )}
          {flag && (
            <WaterMark
              className="mark1"
              zIndex={1}
              content="nut-ui-water-mark"
              imageWidth={60}
              imageHeight={23}
              image={imgSrc.current}
            ></WaterMark>
          )}
        </Cell>
        <h2>局部用法</h2>
        <Cell className="wrap wrap2">
          <img src={src.current} alt="" />
          <WaterMark
            fullPage={false}
            fontColor="#fa2c19"
            content="nut-ui"
          ></WaterMark>
        </Cell>
      </div>
    </>
  )
}

export default WaterMarkDemo
