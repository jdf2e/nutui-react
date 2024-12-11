import React, { CSSProperties, useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const viewStyle: CSSProperties = {
    textAlign: 'left',
    paddingLeft: pxTransform(20),
    paddingTop: pxTransform(10),
  }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <View>自定义内容</View>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      >
        <View style={viewStyle}>新建表格</View>
        <View style={viewStyle}>新建文档</View>
      </ActionSheet>
    </>
  )
}
export default Demo5
