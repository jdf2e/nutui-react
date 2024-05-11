import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

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
        {/* <Button type='primary' onClick={handleToggleShow}>
          不锁定背景滚动
        </Button> */}
        <View onClick={handleToggleShow}>不锁定背景滚动</View>
      </Cell>

      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
    </>
  )
}
export default Demo4
