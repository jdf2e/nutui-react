import React from 'react'
import { Button } from '../../button'

const Demo2 = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button fill="solid" style={marginStyle}>
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
    </>
  )
}
export default Demo2
