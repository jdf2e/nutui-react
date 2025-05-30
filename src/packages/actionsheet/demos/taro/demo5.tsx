import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Dongdong, Message } from '@nutui/icons-react-taro'

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
          <Dongdong width={20} height={20} />
          <View style={{ marginLeft: 8 }}>加密呼叫（86）18888888888</View>
        </View>
        <View style={itemStyle}>
          <Message width={20} height={20} />
          <View style={{ marginLeft: 8 }}>在线客服</View>
        </View>
      </ActionSheet>
    </>
  )
}
export default Demo5
