import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'
import { Heart } from '@nutui/icons-react-taro'

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
        left="返回"
        title="我是标题"
        position="bottom"
        onClose={() => {
          setShowIcon(false)
        }}
      />
      <Popup
        closeable
        visible={showIconPosition}
        closeIconPosition="top-left"
        position="bottom"
        onClose={() => {
          setShowIconPosition(false)
        }}
      />
      <Popup
        closeable
        closeIcon={<Heart size="15px" />}
        visible={showIconDefine}
        style={{ height: '100%' }}
        position="bottom"
        onClose={() => {
          setShowIconDefine(false)
        }}
      />
    </>
  )
}
export default Demo3
