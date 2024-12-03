import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

// TODO：鸿蒙支持的不好
const Demo13 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        tabStyle={{ position: 'sticky', top: 0, zIndex: 11 }}
        onChange={(value) => {
          setTabvalue(value)
        }}
      >
        <Tabs.TabPane title="Tab 1">
          <View>Tab 1</View>
          <View>Tab 1</View>
          <View>Tab 1</View>
          <View>Tab 1</View>
          <View>Tab 1</View>
          <View>Tab 1</View>
          <View>Tab 1</View>
          <View>Tab 1</View>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2">
          <View>Tab 2</View>
          <View>Tab 2</View>
          <View>Tab 2</View>
          <View>Tab 2</View>
          <View>Tab 2</View>
          <View>Tab 2</View>
          <View>Tab 2</View>
          <View>Tab 2</View>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo13
