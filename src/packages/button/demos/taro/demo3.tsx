import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const marginStyle = {
    margin: 8,
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
