import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react'

const Demo3 = () => {
  const position1 = ['left', 'center', 'right']
  const position2 = ['top', 'center', 'bottom']
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <Row gutter={10} type="flex" wrap="wrap">
        {position2.map((i) => {
          return (
            <Col span="8" key={i}>
              <Image
                src={src}
                width="80"
                height="80"
                fit="contain"
                position={i}
              />
              <div style={imageText}>contain</div>
              <div style={imageText}>{i}</div>
            </Col>
          )
        })}
        {position1.map((i) => {
          return (
            <Col span="8" key={i}>
              <Image
                src={src}
                width="80"
                height="80"
                fit="cover"
                position={i}
              />
              <div style={imageText}>cover</div>
              <div style={imageText}>{i}</div>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
export default Demo3
