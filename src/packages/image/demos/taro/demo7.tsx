import React from 'react'
import { Cell, Image, Row, Col } from '@nutui/nutui-react-taro'
import { pxTransform } from '@tarojs/taro'

const Demo7 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Row gutter={5}>
          <Col span={8}>
            <Image
              src={src}
              mode="top"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="bottom"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="center"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={8}>
            <Image
              src={src}
              mode="left"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="right"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="top left"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={8}>
            <Image
              src={src}
              mode="top right"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="bottom left"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
          <Col span={8}>
            <Image
              src={src}
              mode="bottom right"
              width={pxTransform(80)}
              height={pxTransform(80)}
            />
          </Col>
        </Row>
      </Cell>
    </>
  )
}
export default Demo7
