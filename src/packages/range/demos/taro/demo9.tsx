import React, { useMemo } from 'react'
import { Range, Cell } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo9 = () => {
  const cellStyle = useMemo(
    () => ({
      paddingTop: pxTransform(40),
      paddingBottom: pxTransform(40),
      paddingLeft: pxTransform(18),
      paddingRight: pxTransform(18),
    }),
    []
  )

  return (
    <Cell style={cellStyle}>
      <Range defaultValue={50} disabled />
    </Cell>
  )
}
export default Demo9
