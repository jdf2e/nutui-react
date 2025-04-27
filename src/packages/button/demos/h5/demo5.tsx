import React from 'react'
import { Button, Cell } from '@nutui/nutui-react'

const Demo5 = () => {
  const marginStyle = { margin: 8 }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button style={marginStyle} type="primary" shape="square">
        Square Button
      </Button>
      <Button style={marginStyle} type="primary">
        Round Button
      </Button>
    </Cell>
  )
}
export default Demo5
