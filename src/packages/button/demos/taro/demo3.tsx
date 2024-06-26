import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo3 = () => {
  const marginStyle = {
    width: pxTransform(80),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button type="primary" fill="solid" style={marginStyle}>
        Solid
      </Button>
      <Button type="primary" fill="outline" style={marginStyle}>
        Outline
      </Button>
      <Button type="primary" fill="dashed" style={marginStyle}>
        Dashed
      </Button>
      <Button fill="none" style={marginStyle}>
        None
      </Button>
    </Cell>
  )
}
export default Demo3
