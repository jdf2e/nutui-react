import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Row from '../../row'
import Col from '../../col'

test('basic usage', () => {
  render(
    <Row>
      <Col span="24">
        <div className="flex-content">span:24</div>
      </Col>
    </Row>
  )
  expect(document.querySelector('.nut-col-24')).toHaveClass('nut-col-gutter')
})

test('renders with gutter', () => {
  const { getByTestId } = render(
    <div data-testid="layout">
      <Row gutter="10">
        <Col span="8">
          <div className="flex-content">span:8</div>
        </Col>
        <Col span="8">
          <div className="flex-content flex-content-light">span:8</div>
        </Col>
        <Col span="8">
          <div className="flex-content">span:8</div>
        </Col>
      </Row>
    </div>
  )
  const dom: any = getByTestId('layout').querySelector('.nut-col-gutter')
  expect(dom.style.paddingRight).toBe('5px')
})

test('renders with flex', () => {
  const { getByTestId } = render(
    <div data-testid="layout">
      <Row type="flex" wrap="nowrap">
        <Col span="6">
          <div className="flex-content">span:6</div>
        </Col>
        <Col span="6">
          <div className="flex-content flex-content-light">span:6</div>
        </Col>
        <Col span="6">
          <div className="flex-content">span:6</div>
        </Col>
      </Row>
    </div>
  )
  expect(getByTestId('layout').querySelector('.nut-row')).toHaveClass(
    'nut-row-flex-nowrap'
  )
})
