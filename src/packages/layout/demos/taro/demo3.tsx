import React from 'react'
import { Col, Row } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  return (
    <>
      <Row type="flex" wrap="nowrap">
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content-light">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content-light">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content-light">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content-light">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content-light">span:6</View>
        </Col>
        <Col span="6">
          <View className="flex-content">span:6</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo3
