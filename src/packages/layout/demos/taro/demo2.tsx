import React from 'react'
import { Col, Row } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  return (
    <>
      <Row gutter="10">
        <Col span="8">
          <View className="flex-content">span:8</View>
        </Col>
        <Col span="8">
          <View className="flex-content-light">span:8</View>
        </Col>
        <Col span="8">
          <View className="flex-content">span:8</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo2
