import React from 'react'
import { HoverButton, SafeArea } from '@nutui/nutui-react'
import { Cart } from '@nutui/icons-react'

const App = () => {
  return (
    <>
      <HoverButton icon={<Cart />} zIndex={101} />
      <div
        style={{
          zIndex: 100,
          position: 'fixed',
          width: '100%',
          left: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div style={{ height: '50px' }}>这个图层层级为 100</div>
        <SafeArea position="bottom" />
      </div>
    </>
  )
}
export default App
