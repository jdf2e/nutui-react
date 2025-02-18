import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { harmony } from '@/utils/platform-taro'

const App = () => {
  const marginStyle = {
    width: harmony() ? 120 : 'auto',
    margin: 8,
  }

  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button color="blue" style={marginStyle}>
        单色按钮
      </Button>
      <Button fill="outline" color="#7232dd" style={marginStyle}>
        单色按钮
      </Button>
      <Button color="rgba(10,101,208,0.75)" style={marginStyle}>
        单色按钮
      </Button>
      <Button
        type="primary"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        style={marginStyle}
      >
        渐变按钮
      </Button>
    </Cell>
  )
}
export default App
