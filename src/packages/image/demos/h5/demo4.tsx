import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react'

const Demo4 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText: React.CSSProperties = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <Row gutter={10}>
        <Col span="8">
          <Image
            src={src}
            width="100"
            height="100"
            fit="contain"
            radius="50%"
          />
          <div style={imageText}>contain</div>
        </Col>
        <Col span="8">
          <Image src={src} width="100" height="100" fit="cover" radius="50%" />
          <div style={imageText}>cover</div>
        </Col>
        <Col span="8">
          <Image src={src} width="100" height="100" fit="cover" radius="10" />
          <div style={imageText}>cover</div>
        </Col>
      </Row>
    </>
  )
}
export default Demo4
