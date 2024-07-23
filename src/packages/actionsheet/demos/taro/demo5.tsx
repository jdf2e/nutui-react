import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo5 = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>自定义内容</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      >
        <View style={{ textAlign: 'left', padding: '10px 20px' }}>
          新建表格
        </View>
        <View style={{ textAlign: 'left', padding: '10px 20px' }}>
          新建文档
        </View>
      </ActionSheet>
    </>
  )
}
export default Demo5
