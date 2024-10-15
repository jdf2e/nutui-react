import React from 'react'
import { View, Text } from '@tarojs/components'
import { ConfigProvider, Cell } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
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

export default Demo5
