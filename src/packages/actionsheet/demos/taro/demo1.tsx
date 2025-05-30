import React, { useState } from 'react'
import { ActionSheet, Cell, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  const [val, setVal] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const options = [
    {
      name: '分享给朋友',
    },
    {
      name: '添加到收藏夹',
    },
    {
      name: '复制商品链接',
    },
  ]

  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <View>基础用法</View>
        <View style={{ marginLeft: pxTransform(10), color: '#999' }}>
          {val}
        </View>
      </Cell>
      <ActionSheet
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo1
