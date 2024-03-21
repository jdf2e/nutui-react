import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
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
        closeable
        visible={showBottomRound}
        style={{ height: '20%' }}
        position="bottom"
        round
        onClose={() => {
          setShowBottomRound(false)
        }}
      />
    </>
  )
}
export default Demo4
