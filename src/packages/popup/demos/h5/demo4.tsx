import React, { useState } from 'react'
import { Failure } from '@nutui/icons-react'
import { Popup, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  const [showOverlayStop, setShowOverlayStop] = useState(false)
  const [showCloseIconStop, setShowCloseIconStop] = useState(false)

  return (
    <>
      <Cell
        title="阻塞点击 Overlay 关闭"
        onClick={() => {
          setShowOverlayStop(true)
        }}
      />
      <Popup
        visible={showOverlayStop}
        style={{ padding: '30px 50px' }}
        onClose={() => {
          setShowOverlayStop(false)
        }}
        onOverlayClick={() => {
          console.log('onOverlayClick')
          return false
        }}
      >
        正文
      </Popup>
      <Cell
        title="阻塞点击 close icon 关闭"
        onClick={() => {
          setShowCloseIconStop(true)
        }}
      />
      <Popup
        closeable
        closeIcon={<Failure width="12px" height="12px" />}
        visible={showCloseIconStop}
        closeOnOverlayClick={false}
        style={{ height: '40%' }}
        position="bottom"
        onCloseIconClick={() => {
          console.log('onCloseIconClick')
        }}
      />
    </>
  )
}
export default Demo4
