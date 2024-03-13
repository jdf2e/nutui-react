import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Row gutter={10}>
        <Col span="8">
          <Image
            src={src}
            mode="aspectFit"
            width="80"
            height="80"
            radius="50%"
          />
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span="8">
          <Image
            src={src}
            mode="scaleToFill"
            width="80"
            height="80"
            radius="50%"
          />
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span="8">
          <Image
            src={src}
            mode="scaleToFill"
            width="80"
            height="80"
            radius="10px"
          />
        </Col>
      </Row>
    </>
  )
}
export default Demo2
