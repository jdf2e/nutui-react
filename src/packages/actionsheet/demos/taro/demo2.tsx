import React, { useState } from 'react'
import { ActionSheet, Cell, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [val, setVal] = useState('')
  const options = [
    {
      name: '分享给朋友',
    },
    {
      name: '添加到收藏夹',
    },
  ]
  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <View>展示标题</View>
        <View style={{ marginLeft: pxTransform(10), color: '#999' }}>
          {val}
        </View>
      </Cell>
      <ActionSheet
        title="标题"
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
        cancelText="取消"
      />
    </>
  )
}
export default Demo2
