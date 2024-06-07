import React from 'react'
import { View } from '@tarojs/components'
import { BackTop, Cell } from '@nutui/nutui-react-taro'
import { Top } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const handleClick = () => {
    console.log('触发返回顶部')
  }
  const demoStyle = {
    height: 'auto',
    minHeight: 'auto',
  }
  return (
    <View style={demoStyle} id="target">
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop
        threshold={200}
        style={{
          bottom: '50px',
          right: '20px',
        }}
        onClick={handleClick}
      >
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
export default Demo4
