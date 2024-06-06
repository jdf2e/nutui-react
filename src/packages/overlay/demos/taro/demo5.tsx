import React, { useState } from 'react'
import { Cell, Overlay } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'

const Demo5 = () => {
  const isHarmony = [
    Taro.ENV_TYPE.HARMONY,
    Taro.ENV_TYPE.HARMONYHYBRID,
  ].includes(Taro.getEnv())
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
              width: isHarmony ? pxTransform(150) : 150,
              height: isHarmony ? pxTransform(150) : 150,
              borderRadius: isHarmony ? pxTransform(8) : 8,
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
