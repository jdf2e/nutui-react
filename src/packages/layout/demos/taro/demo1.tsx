import React, { CSSProperties } from 'react'
import { Row, Col } from '@nutui/nutui-react-taro'
import { pxTransform } from '@tarojs/taro'

const Demo1 = () => {
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
      <Row>
        <Col span="24">
          <div className="layout-flex-content" style={flexContent}>
            span:24
          </div>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <div className="layout-flex-content" style={flexContent}>
            span:12
          </div>
        </Col>
        <Col span="12">
          <div
            className="layout-flex-content layout-flex-content-light"
            style={flexContentLight}
          >
            span:12
          </div>
        </Col>
      </Row>
      <Row>
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
      <Row>
        <Col span="6">
          <div className="layout-flex-content" style={flexContent}>
            span:6
          </div>
        </Col>
        <Col span="6">
          <div
            className="layout-flex-content layout-flex-content-light"
            style={flexContentLight}
          >
            span:6
          </div>
        </Col>
        <Col span="6">
          <div className="layout-flex-content" style={flexContent}>
            span:6
          </div>
        </Col>
        <Col span="6">
          <div
            className="layout-flex-content layout-flex-content-light"
            style={flexContentLight}
          >
            span:6
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Demo1
