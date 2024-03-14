import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react-taro'
import { Failure } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo4 = () => {
  return (
    <>
      <Row gutter={10}>
        <Col span="8">
          <Image src="https://x" width="80" height="80" />
          <View style={{ textAlign: 'left' }}>默认</View>
        </Col>
        <Col span="8">
          <Image src="https://x" width="80" height="80" error={<Failure />} />
          <View style={{ textAlign: 'left' }}>自定义</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo4
