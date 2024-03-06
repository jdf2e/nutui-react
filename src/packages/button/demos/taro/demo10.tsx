import React from 'react'
import { Button } from '@nutui/nutui-react-taro'

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        style={{
          margin: 8,
          '--nutui-button-default-border-color': 'blue',
          '--nutui-button-default-color': '#fff',
          '--nutui-button-default-background-color': 'blue',
        }}
      >
        单色按钮
      </Button>
      <Button
        fill="outline"
        style={{
          margin: 8,
          '--nutui-button-default-border-color': '#7232dd',
          '--nutui-button-default-color': '#7232dd',
        }}
      >
        单色按钮
      </Button>
      <Button
        style={{
          margin: 8,
          '--nutui-button-default-border-color': 'transparent',
          '--nutui-button-default-color': '#fff',
          '--nutui-button-default-background-color': 'rgba(10,101,208,0.75)',
        }}
      >
        单色按钮
      </Button>
      <Button
        type="primary"
        style={{
          margin: 8,
          '--nutui-button-default-border-color': 'transparent',
          '--nutui-button-default-color': '#fff',
          '--nutui-button-default-background-color':
            'linear-gradient(to right, #ff6034, #ee0a24)',
        }}
      >
        渐变按钮
      </Button>
    </>
  )
}
export default App
