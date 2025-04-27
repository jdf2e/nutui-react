import React, { CSSProperties } from 'react'
import { Row, Col, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  const flexContent: CSSProperties = {
    display: 'flex',
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
      <Row type="flex" wrap="nowrap">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContentLight}>span:6</View>
        </Col>
        <Col span="6">
          <View style={flexContent}>span:6</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo3
