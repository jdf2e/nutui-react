import React, { useState } from 'react'
import { Failure } from '@nutui/icons-react'
import { Popup, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  const [showOverlayStop, setShowOverlayStop] = useState(false)
  const [showCloseIconStop, setShowCloseIconStop] = useState(false)

  return (
    <>
      <Cell
        title="阻塞点击 Overlay 关闭，方式1"
        onClick={() => {
          setShowOverlayStop(true)
        }}
      />
      <Popup
        closeable
        closeIcon={<Failure width={12} height={12} />}
        visible={showOverlayStop}
        style={{ height: '40%' }}
        position="bottom"
        onClose={() => {
          console.log('onClose')
          setShowOverlayStop(false)
        }}
        onOverlayClick={() => {
          console.log('onOverlayClick')
          return false
        }}
      />
      <Cell
        title="阻塞点击 Overlay 关闭，方式2"
        onClick={() => {
          setShowCloseIconStop(true)
        }}
      />
      <Popup
        closeable
        closeIcon={<Failure width={12} height={12} />}
        visible={showCloseIconStop}
        style={{ height: '40%' }}
        position="bottom"
        closeOnOverlayClick={false}
        onCloseIconClick={() => {
          console.log('onCloseIconClick')
          setShowCloseIconStop(false)
        }}
      />
    </>
  )
}
export default Demo4
