import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import '../../demo.scss'

const Demo6 = () => {
  const [visible, setVisible] = useState(false)
  const wrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const contentStyle = {
    display: 'flex',
    width: pxTransform(150),
    height: pxTransform(150),
    borderRadius: pxTransform(8),

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  }
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
          点击遮罩不关闭
        </View>
      </Cell>
      <Overlay visible={visible} closeOnOverlayClick={false}>
        <View style={wrapperStyle}>
          <View style={contentStyle} onClick={onClose}>
            这里是正文
          </View>
        </View>
      </Overlay>
    </>
  )
}
export default Demo6
