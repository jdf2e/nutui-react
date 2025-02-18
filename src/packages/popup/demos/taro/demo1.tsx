import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo = () => {
  const [showIcon, setShowIcon] = useState(false)

  return (
    <>
      <Cell
        title="基础弹框"
        onClick={() => {
          setShowIcon(true)
        }}
      />
      <Popup
        closeable
        visible={showIcon}
        title="标题"
        description="这里是副标题这是副标题"
        position="bottom"
        onClose={() => {
          setShowIcon(false)
        }}
      />
    </>
  )
}
export default Demo
