import React from 'react'
import { Button } from '@nutui/nutui-react-taro'

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        color="blue"
        style={{
          margin: 8,
        }}
      >
        单色按钮
      </Button>
      <Button
        fill="outline"
        color="#7232dd"
        style={{
          margin: 8,
        }}
      >
        单色按钮
      </Button>
      <Button
        color="rgba(10,101,208,0.75)"
        style={{
          margin: 8,
        }}
      >
        单色按钮
      </Button>
      <Button
        type="primary"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        style={{
          margin: 8,
        }}
      >
        渐变按钮
      </Button>
    </>
  )
}
export default App
