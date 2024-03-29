import React, { useState, useRef } from 'react'
import { WaterMark, Cell, Button } from '@nutui/nutui-react'

const Demo1 = () => {
  const [flag, setFlag] = useState(false)
  const imgSrc = useRef(
    '//m.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
  )
  return (
    <Cell>
      <Button
        style={{ marginInlineEnd: '10px' }}
        onClick={() => setFlag(false)}
      >
        Text
      </Button>
      <Button onClick={() => setFlag(true)}>Image</Button>
      {!flag && <WaterMark zIndex={200} content="NutUI-WaterMark" />}
      {flag && (
        <WaterMark
          zIndex={200}
          content="NutUI-WaterMark"
          rotate={22}
          imageWidth={60}
          imageHeight={23}
          image={imgSrc.current}
        />
      )}
    </Cell>
  )
}
export default Demo1
