import React from 'react'
import { Row, Col } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import '../../demo.scss'

const Demo1 = () => {
  return (
    <>
      <Row>
        <Col span="24">
          <View className="flex-content">span:24</View>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <View className="flex-content">span:12</View>
        </Col>
        <Col span="12">
          <View className="flex-content-light">span:12</View>
        </Col>
      </Row>
      <Row>
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
      <Row>
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content-light">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content-light">span:6</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo1
