/**
 * 自定义层级
 */
import React from 'react'
import { HoverButton } from '@nutui/nutui-react'
import { Cart } from '@nutui/icons-react'

const App = () => {
  return (
    <>
      <HoverButton icon={<Cart />} zIndex={11} />
      <div
        style={{
          zIndex: 10,
          position: 'fixed',
          width: '100%',
          height: '50px',
          left: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        这个图层层级为 10
      </div>
    </>
  )
}
export default App
