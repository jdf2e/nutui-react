import React from 'react'
import { Button } from '@nutui/nutui-react'

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button size="large" type="primary">
        Large
      </Button>
      <Button type="primary" style={marginStyle}>
        Normal
      </Button>
      <Button style={marginStyle}>Normal</Button>
      <Button size="small" style={marginStyle} type="primary">
        Small
      </Button>
      <Button size="mini" style={marginStyle} type="primary">
        Mini
      </Button>
    </>
  )
}
export default App
