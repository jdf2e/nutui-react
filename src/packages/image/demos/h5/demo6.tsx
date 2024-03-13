import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react'
import { Failure } from '@nutui/icons-react'

const Demo6 = () => {
  const imageText = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <Row gutter={10}>
        <Col span="8">
          <Image
            src="https://x"
            width="100"
            height="100"
            onError={() => {
              console.log('image error')
            }}
          />
          <div style={imageText}>默认</div>
        </Col>
        <Col span="8">
          <Image src="https://x" width="100" height="100" error={<Failure />} />
          <div style={imageText}>自定义</div>
        </Col>
      </Row>
    </>
  )
}
export default Demo6
