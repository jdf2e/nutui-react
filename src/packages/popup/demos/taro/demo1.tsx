import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [showPopupResiable, setShowPopupResiable] = useState(false)

  return (
    <>
      <Cell
        title="基础弹框"
        onClick={() => {
          setShowPopup(true)
        }}
      />
      <Cell
        title="基础弹框：可上下滑动"
        onClick={() => {
          setShowPopupResiable(true)
        }}
      />
      <Popup
        closeable
        visible={showPopup}
        title="标题"
        description="这里是副标题这是副标题"
        position="bottom"
        onClose={() => {
          setShowPopup(false)
        }}
      />
      <Popup
        closeable
        resizable
        minHeight="10%"
        style={{ height: '60%' }}
        visible={showPopupResiable}
        title="上下滑动"
        description="弹层区域滑动起来"
        position="bottom"
        onClose={() => {
          setShowPopupResiable(false)
        }}
        onTouchMove={(height, e, direction) => {
          console.log('onTouchMove', height, e, direction)
        }}
        onTouchStart={(height, e) => {
          console.log('onTouchStart', height, e)
        }}
        onTouchEnd={(height, e) => {
          console.log('onTouchEnd', height, e)
        }}
      />
    </>
  )
}
export default Demo
