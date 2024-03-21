import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [showMutiple, setShowMutiple] = useState(false)
  const [showMutipleInner, setShowMutipleInner] = useState(false)

  return (
    <>
      <Cell
        title="多层堆叠"
        onClick={() => {
          setShowMutiple(true)
        }}
      />
      <Popup
        visible={showMutiple}
        style={{ padding: '30px 50px' }}
        onClose={() => {
          setShowMutiple(false)
        }}
      >
        <span
          onClick={() => {
            setShowMutipleInner(true)
          }}
        >
          Click It
        </span>
      </Popup>
      <Popup
        visible={showMutipleInner}
        style={{ padding: '30px 50px' }}
        onClose={() => {
          setShowMutipleInner(false)
        }}
      >
        <span
          onClick={() => {
            setShowMutipleInner(false)
          }}
        >
          close
        </span>
      </Popup>
    </>
  )
}
export default Demo6
