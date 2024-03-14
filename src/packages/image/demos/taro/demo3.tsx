import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react-taro'
import { Loading } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  return (
    <>
      <Row gutter={10}>
        <Col span="8">
          <Image width="80" height="80" />
          <View style={{ textAlign: 'left' }}>默认</View>
        </Col>
        <Col span="8">
          <Image
            width="80"
            height="80"
            loading={<Loading className="nut-icon-loading" />}
          />
          <View style={{ textAlign: 'left' }}>自定义</View>
        </Col>
      </Row>
    </>
  )
}
export default Demo3
