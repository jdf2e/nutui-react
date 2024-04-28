import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
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
      <Cell>
        {/* <Button type='success' onClick={handleToggleShow}>
          嵌套内容
        </Button> */}
        <View onClick={handleToggleShow}>嵌套内容</View>
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
              width: 200,
              height: 200,
              backgroundColor: '#fff',
              borderRadius: 8,
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
