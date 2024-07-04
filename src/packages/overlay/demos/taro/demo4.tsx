import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import '../../demo.scss'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <View className="nut-overlay-text" onClick={handleToggleShow}>
          不锁定背景滚动
        </View>
      </Cell>

      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
    </>
  )
}
export default Demo4
