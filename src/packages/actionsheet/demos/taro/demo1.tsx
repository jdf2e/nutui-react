import React, { useState } from 'react'
import { ActionSheet, Cell, pxTransform } from '@nutui/nutui-react-taro'
import { Gift } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  const [val, setVal] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [val2, setVal2] = useState('')
  const [isVisible2, setIsVisible2] = useState(false)
  const options = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]
  const iconOptions = [
    { name: '文案内容', icon: <Gift width={14} height={14} /> },
    { name: '文案内容', icon: <Gift width={14} height={14} /> },
    { name: '文案内容', icon: <Gift width={14} height={14} /> },
  ]

  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }

  const handleSelect2 = (item: any) => {
    setVal2(item.name)
    setIsVisible2(false)
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
        title="标题"
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
      <Cell onClick={() => setIsVisible2(!isVisible2)}>
        <View>图标列表</View>
        <View style={{ marginLeft: pxTransform(10), color: '#999' }}>
          {val2}
        </View>
      </Cell>
      <ActionSheet
        title="标题"
        visible={isVisible2}
        options={iconOptions}
        onSelect={handleSelect2}
        onCancel={() => setIsVisible2(false)}
      />
    </>
  )
}
export default Demo1
