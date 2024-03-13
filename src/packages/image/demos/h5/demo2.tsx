import React from 'react'
import { Image, Row, Col } from '@nutui/nutui-react'

const Demo2 = () => {
  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down']
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
        {fits.map((i) => {
          return (
            <Col span="8" key={i}>
              <Image src={src} width="80" height="80" fit={i} />
              <div style={imageText}>{i}</div>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
export default Demo2
