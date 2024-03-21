import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react'
import { Heart } from '@nutui/icons-react'

const Demo3 = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [showIconPosition, setShowIconPosition] = useState(false)
  const [showIconDefine, setShowIconDefine] = useState(false)

  return (
    <>
      <Cell
        title="关闭图标"
        onClick={() => {
          setShowIcon(true)
        }}
      />
      <Cell
        title="图标位置"
        onClick={() => {
          setShowIconPosition(true)
        }}
      />
      <Cell
        title="自定义图标"
        onClick={() => {
          setShowIconDefine(true)
        }}
      />
      <Popup
        closeable
        visible={showIcon}
        style={{ height: '20%' }}
        position="bottom"
        onClose={() => {
          setShowIcon(false)
        }}
      />
      <Popup
        closeable
        visible={showIconPosition}
        style={{ height: '20%' }}
        closeIconPosition="top-left"
        position="bottom"
        onClose={() => {
          setShowIconPosition(false)
        }}
      />
      <Popup
        visible={showIconDefine}
        style={{ height: '20%' }}
        closeable
        closeIcon={<Heart />}
        position="bottom"
        onClose={() => {
          setShowIconDefine(false)
        }}
      />
    </>
  )
}
export default Demo3
