import React from 'react'
import { Button } from '@nutui/nutui-react'

const Demo5 = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button style={marginStyle} type="primary" shape="square">
        Square Button
      </Button>
      <Button style={marginStyle} type="primary">
        Round Button
      </Button>
    </>
  )
}
export default Demo5
