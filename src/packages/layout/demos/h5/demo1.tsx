import React from 'react'
import { Row, Col } from '@nutui/nutui-react'

const Demo1 = () => {
  const style = `
    .layout-flex-content {
      line-height: 40px;
      color: #fff;
      text-align: center;
      border-radius: 2px;
      background: #ff8881;
      font-size: 14px;
    }

    .layout-flex-content-light {
      background: #ffc7c4;
    }
  `
  return (
    <>
      <style>{style}</style>
      <Row>
        <Col span="24">
          <div className="layout-flex-content">span:24</div>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <div className="layout-flex-content">span:12</div>
        </Col>
        <Col span="12">
          <div className="layout-flex-content layout-flex-content-light">
            span:12
          </div>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <div className="layout-flex-content">span:8</div>
        </Col>
        <Col span="8">
          <div className="layout-flex-content layout-flex-content-light">
            span:8
          </div>
        </Col>
        <Col span="8">
          <div className="layout-flex-content">span:8</div>
        </Col>
      </Row>
      <Row>
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
        <Col span="6">
          <div className="layout-flex-content layout-flex-content-light">
            span:6
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Demo1
