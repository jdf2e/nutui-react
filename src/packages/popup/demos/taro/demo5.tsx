import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [showBottomRound, setShowBottomRound] = useState(false)

  return (
    <>
      <Cell
        title="圆角弹框"
        onClick={() => {
          setShowBottomRound(true)
        }}
      />
      <Popup
        visible={showBottomRound}
        style={{ height: '20%' }}
        position="top"
        round
        onClose={() => {
          setShowBottomRound(false)
        }}
      />
    </>
  )
}
export default Demo5
