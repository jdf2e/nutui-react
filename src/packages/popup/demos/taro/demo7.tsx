import React, { useState } from 'react'
import { Text } from '@tarojs/components'
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
        <Text
          onClick={() => {
            setShowMutipleInner(true)
          }}
        >
          Click It
        </Text>
      </Popup>
      <Popup
        visible={showMutipleInner}
        style={{ padding: '40px 50px' }}
        overlayStyle={{ backgroundColor: 'transparent' }}
        onClose={() => {
          setShowMutipleInner(false)
        }}
      >
        <Text
          onClick={() => {
            setShowMutipleInner(false)
          }}
        >
          close
        </Text>
      </Popup>
    </>
  )
}
export default Demo6
