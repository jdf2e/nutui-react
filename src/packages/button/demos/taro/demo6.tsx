import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { harmonyAndRn, rn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo6 = () => {
  const marginStyle = harmonyAndRn()
    ? {
        width: pxTransform(rn() ? 120 : 150),
        marginRight: pxTransform(8),
        marginTop: pxTransform(8),
        marginLeft: pxTransform(8),
        marginBottom: pxTransform(8),
      }
    : {
        marginRight: 8,
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
      }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button shape="square" type="primary" style={marginStyle}>
        Square Button
      </Button>
      <Button shape="round" type="primary" style={marginStyle}>
        Round Button
      </Button>
    </Cell>
  )
}
export default Demo6
