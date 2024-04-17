import React from 'react'
import { Cell, Image, Row, Col } from '@nutui/nutui-react-taro'
import { pxTransform } from '@tarojs/taro'

const Demo6 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Row gutter={5}>
          <Col span={8}>
            <Image
              src={src}
              mode="scaleToFill"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="aspectFit"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="aspectFill"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={8}>
            <Image
              src={src}
              mode="widthFix"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="heightFix"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
        </Row>
      </Cell>
    </>
  )
}
export default Demo6
