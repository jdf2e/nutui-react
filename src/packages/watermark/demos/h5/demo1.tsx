import React, { useState, useRef } from 'react'
import { WaterMark, Cell, Button } from '@nutui/nutui-react'

const Demo1 = () => {
  const [flag, setFlag] = useState(0)
  const imgSrc = useRef(
    '//m.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
  )
  return (
    <Cell>
      <Button style={{ marginInlineEnd: '10px' }} onClick={() => setFlag(0)}>
        Text
      </Button>
      <Button style={{ marginInlineEnd: '10px' }} onClick={() => setFlag(2)}>
        Multi-line Text
      </Button>
      <Button onClick={() => setFlag(1)}>Image</Button>
      {flag === 0 && <WaterMark zIndex={200} content="NutUI-WaterMark" />}
      {flag === 1 && (
        <WaterMark
          zIndex={200}
          content="NutUI-WaterMark"
          rotate={22}
          imageWidth={60}
          imageHeight={23}
          image={imgSrc.current}
        />
      )}
      {flag === 2 && (
        <>
          <WaterMark
            zIndex={200}
            content="WaterMark"
            rotate={22}
            height={48}
            gapY={70}
            width={180}
          />
          <WaterMark
            zIndex={200}
            content="NutUI"
            rotate={22}
            height={48}
            gapY={70}
            startY={48}
            width={180}
          />
        </>
      )}
    </Cell>
  )
}
export default Demo1
