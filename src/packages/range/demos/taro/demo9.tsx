import React, { useMemo } from 'react'
import { Range, Cell, pxTransform, harmony } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const cellStyle = useMemo(() => {
    return harmony()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])

  return (
    <Cell style={cellStyle}>
      <Range defaultValue={50} disabled />
    </Cell>
  )
}
export default Demo9
