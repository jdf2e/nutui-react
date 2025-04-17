import React, { useState } from 'react'
import { Button, Cell } from '@nutui/nutui-react'

const Demo6 = () => {
  const [loading, setLoading] = useState(false)
  const marginStyle = { margin: 8 }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button loading type="warning" style={marginStyle}>
        Loading
      </Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
        style={marginStyle}
      >
        Click Me!
      </Button>
    </Cell>
  )
}
export default Demo6
