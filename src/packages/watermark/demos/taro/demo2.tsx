import React, { useRef } from 'react'
import { WaterMark, Cell, Image } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const src = useRef(
    '//m.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  )
  return (
    <Cell>
      <Image src={src.current} width="100%" height={200} mode="aspectFit" />
      <WaterMark fullPage={false} color="red" content="nutui" />
    </Cell>
  )
}
export default Demo2
