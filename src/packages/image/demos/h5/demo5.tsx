import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react'
import { Loading } from '@nutui/icons-react'

const Demo5 = () => {
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
            width="100"
            height="100"
            lazy
            onLoad={() => {
              console.log('image onload')
            }}
          />
          <div style={imageText}>默认</div>
        </Col>
        <Col span="8">
          <Image width="100" height="100" lazy loading={<Loading />} />
          <div style={imageText}>自定义</div>
        </Col>
      </Row>
    </>
  )
}
export default Demo5
