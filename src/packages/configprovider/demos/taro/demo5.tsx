import React from 'react'
import { Text, View } from '@tarojs/components'
import { Cell, ConfigProvider } from '@nutui/nutui-react-taro'
import '../../demo.scss'

const Demo5 = () => {
  return (
    <>
      <ConfigProvider direction="rtl">
        <Cell
          title={
            <View>
              <Text className="nut-configprovider-cell-title">我是标题</Text>
            </View>
          }
          description={
            <Text
              className="nut-configprovider-cell-desc"
              style={{ color: '#ccc' }}
            >
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
