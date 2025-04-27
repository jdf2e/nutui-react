import React, { useState } from 'react'
import { Cell, Overlay, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo5 = () => {
  const [visible, setVisible] = useState(false)

  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell onClick={handleToggleShow}>
        <View>嵌套内容</View>
      </Cell>

      <Overlay visible={visible} onClick={onClose}>
        <View
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              display: 'flex',
              width: pxTransform(150),
              height: pxTransform(150),
              borderRadius: pxTransform(8),
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            这里是正文
          </View>
        </View>
      </Overlay>
    </>
  )
}
export default Demo5
