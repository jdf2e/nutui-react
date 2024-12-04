import React from 'react'
import { Row, Col } from '@nutui/nutui-react'

const Demo3 = () => {
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
      <Row type="flex" wrap="nowrap">
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
      <Row type="flex" justify="center">
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
