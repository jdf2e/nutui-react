import React from 'react'
import { Indicator } from './indicator'
import Cell from '@/packages/cell'
import Row from '@/packages/row'
import Col from '@/packages/col'
import Button from '@/packages/button'

const IndicatorDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Indicator className="demo1" size={3} current={3} />
        </Cell>
        <Cell>
          <Row>
            <Col span="12">
              <Button size="small" type="primary">
                主要按钮
              </Button>
            </Col>
            <Col span="12">
              <Indicator block align="right" size={6} current={5} />
            </Col>
          </Row>
        </Cell>
        <h2>block用法</h2>
        <Cell>
          <Indicator block align="center" size={6} current={5} />
        </Cell>
        <Cell>
          <Indicator block align="left" size={6} current={1} />
        </Cell>
        <Cell>
          <Indicator block align="right" size={6} current={5} />
        </Cell>
        <h2>不补0</h2>
        <Cell>
          <Indicator fillZero={false} size={6} current={5} />
        </Cell>
      </div>
    </>
  )
}

export default IndicatorDemo
