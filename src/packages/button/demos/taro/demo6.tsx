import React from 'react'
import { Button } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button shape="square" type="primary" style={marginStyle}>
        Square Button
      </Button>
      <Button shape="round" type="primary" style={marginStyle}>
        Round Button
      </Button>
    </>
  )
}
export default Demo6
