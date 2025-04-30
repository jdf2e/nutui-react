import React, { useState } from 'react'
import { ActionSheet, Cell, Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo5 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const itemStyle = { display: 'flex', alignItems: 'center', height: 52 }

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <View>自定义内容1</View>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      >
        <View
          style={{ ...itemStyle, borderColor: '#c2c4cc', borderBottomWidth: 1 }}
        >
          <Image
            src="https://img20.360buyimg.com/img/jfs/t1/298387/38/1291/2642/68106cb8Fa0bc75fe/91a0135a25729d88.png"
            width={20}
            height={20}
          />
          <View style={{ marginLeft: 8 }}>加密呼叫（86）18888888888</View>
        </View>
        <View style={itemStyle}>
          <Image
            src="https://img11.360buyimg.com/img/jfs/t1/270315/26/29639/1865/68106d4cFc40d2a06/ddffb93564a1f495.png"
            width={20}
            height={20}
          />
          <View style={{ marginLeft: 8 }}>在线客服</View>
        </View>
      </ActionSheet>
    </>
  )
}
export default Demo5
