import React, { useState } from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [loading, setLoading] = useState(false)
  const marginStyle = {
    marginRight: 8,
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8,
  }
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
        Click me!
      </Button>
    </Cell>
  )
}
export default Demo7
