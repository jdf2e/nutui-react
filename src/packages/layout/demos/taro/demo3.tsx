import React, { CSSProperties } from 'react'
import { Row, Col } from '@nutui/nutui-react-taro'
import { pxTransform } from '@tarojs/taro'

const Demo3 = () => {
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
      <Row type="flex" wrap="nowrap">
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
      </Row>
      <Row type="flex" justify="center">
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
      </Row>
      <Row type="flex" justify="end">
        <Col span="6">
          <div className="layout-flex-content">span:6</div>
        </Col>
        <Col span="6">
          <div className="layout-flex-content layout-flex-content-light">
            span:6
          </div>
        </Col>
        <Col span="6">
          <div className="layout-flex-content">span:6</div>
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col span="6">
          <div className="layout-flex-content">span:6</div>
        </Col>
        <Col span="6">
          <div className="layout-flex-content layout-flex-content-light">
            span:6
          </div>
        </Col>
        <Col span="6">
          <div className="layout-flex-content">span:6</div>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span="6">
          <div className="layout-flex-content">span:6</div>
        </Col>
        <Col span="6">
          <div className="layout-flex-content layout-flex-content-light">
            span:6
          </div>
        </Col>
        <Col span="6">
          <div className="layout-flex-content">span:6</div>
        </Col>
      </Row>
    </>
  )
}
export default Demo3
