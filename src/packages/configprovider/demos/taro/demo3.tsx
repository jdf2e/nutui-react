import React from 'react'
import { View, Text } from '@tarojs/components'
import { ConfigProvider, Cell, pxTransform } from '@nutui/nutui-react-taro'

const Demo = () => {
  return (
    <>
      <ConfigProvider direction="rtl">
        <Cell
          title={
            <View>
              <Text style={{ fontSize: pxTransform(14) }}>我是标题</Text>
            </View>
          }
          description={
            <Text style={{ fontSize: pxTransform(12), color: '#ccc' }}>
              我是描述
            </Text>
          }
          extra="描述文字"
        />
      </ConfigProvider>
    </>
  )
}

export default Demo
