import React from 'react'
import { View } from '@tarojs/components'
import { Top } from '@nutui/icons-react-taro'
import { BackTop, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <View style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop threshold={100}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top size={12} />
          <View style={{ fontSize: '12px' }}>顶部</View>
        </View>
      </BackTop>
    </View>
  )
}
export default Demo3
