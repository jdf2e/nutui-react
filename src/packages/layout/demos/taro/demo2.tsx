import React, { CSSProperties } from 'react'
import { Row, Col, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
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
      <Row gutter="10">
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
    </>
  )
}
export default Demo2
