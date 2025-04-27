import React, { CSSProperties } from 'react'
import { Row, Col, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  const flexContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: pxTransform(40),
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    borderRadius: pxTransform(6),
    backgroundColor: '#ff8881',
    fontSize: pxTransform(14),
  }
  const flexContentLight: CSSProperties = {
    ...flexContent,
    backgroundColor: '#ffc7c4',
  }

  return (
    <>
      <Row>
        <Col span="24">
          <View style={flexContent}>span:24</View>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <View style={flexContent}>span:12</View>
        </Col>
        <Col span="12">
          <View style={flexContentLight}>span:12</View>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <View style={flexContent}>span:8</View>
        </Col>
        <Col span="8">
          <View style={flexContentLight}>span:8</View>
        </Col>
        <Col span="8">
          <View style={flexContent}>span:8</View>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo1
