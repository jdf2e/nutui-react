import React, { CSSProperties } from 'react'
import { Row, Col } from '@nutui/nutui-react-taro'
import { pxTransform } from '@tarojs/taro'

const Demo2 = () => {
  const flexContent: CSSProperties = {
    lineHeight: pxTransform(40),
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    background: '#ff8881',
    fontSize: pxTransform(14),
  }
  const flexContentLight: CSSProperties = {
    lineHeight: pxTransform(40),
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    background: '#ffc7c4',
    fontSize: pxTransform(14),
  }

  return (
    <>
      <Row gutter="10">
        <Col span="8">
          <div className="layout-flex-content" style={flexContent}>
            span:8
          </div>
        </Col>
        <Col span="8">
          <div
            className="layout-flex-content layout-flex-content-light"
            style={flexContentLight}
          >
            span:8
          </div>
        </Col>
        <Col span="8">
          <div className="layout-flex-content" style={flexContent}>
            span:8
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Demo2
