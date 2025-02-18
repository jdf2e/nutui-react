import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Button, Cell, Loading, Overlay } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [visible, setVisible] = useState(false)

  const WrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const showOverlay = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <>
      <Cell>
        <Button type="success" onClick={() => showOverlay()}>
          遮罩层loading(两秒后关闭)
        </Button>
      </Cell>
      <Overlay visible={visible}>
        <View className="wrapper" style={WrapperStyle}>
          <Loading direction="vertical">加载中</Loading>
        </View>
      </Overlay>
    </>
  )
}
export default Demo8
