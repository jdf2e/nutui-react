import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const marginStyle = {
    margin: 8,
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button type="primary" style={marginStyle}>
        Primary
      </Button>
      <Button type="info" style={marginStyle}>
        Info
      </Button>
      <Button type="default" style={marginStyle}>
        Default
      </Button>
      <Button type="danger" style={marginStyle}>
        Danger
      </Button>
      <Button type="warning" style={marginStyle}>
        Warning
      </Button>
      <Button type="success" style={marginStyle}>
        Success
      </Button>
    </Cell>
  )
}
export default Demo2
