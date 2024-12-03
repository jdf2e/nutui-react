import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'

// TODO：鸿蒙支持的不好
const Demo14 = () => {
  const [tab2value, setTab2value] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tab2value}
        autoHeight
        onChange={(value) => {
          setTab2value(value)
        }}
      >
        <Tabs.TabPane title="Tab 1">
          <View>
            <Text>Tab 1</Text>
          </View>
          <View>
            <Text>Tab 1</Text>
          </View>
          <View>
            <Text>Tab 1</Text>
          </View>
          <View>
            <Text>Tab 1</Text>
          </View>
          <View>
            <Text>Tab 1</Text>
          </View>
          <View>
            <Text>Tab 1</Text>
          </View>
          <View>
            <Text>Tab 1</Text>
          </View>
          <View>
            <Text>Tab 1</Text>
          </View>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo14
