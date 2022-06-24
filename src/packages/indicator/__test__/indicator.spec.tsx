import * as React from 'react'
// import * as renderer from 'react-test-renderer'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useState } from 'react'
import { Indicator } from '../indicator'
import Button from '@/packages/button'
import Cell from '@/packages/cell'
import Row from '@/packages/row'
import Col from '@/packages/col'

test('should match snapshot', () => {
  const { asFragment } = render(<Indicator className="demo1" size={3} current={3}></Indicator>)
  expect(asFragment()).toMatchSnapshot()
})

test('should be shown when passing size and current', () => {
  const { container, getByTestId } = render(
    <Cell>
      <Row>
        <Col span="12">
          <Button size="small" type="primary">
            主要按钮
          </Button>
        </Col>
        <Col span="12">
          <Indicator
            data-testid="indicator"
            className="aa"
            block={true}
            align="right"
            size={6}
            current={5}
          ></Indicator>
        </Col>
      </Row>
    </Cell>
  )
  expect(getByTestId('indicator')).toHaveClass('aa')
  expect(container.querySelectorAll('.nut-indicator__dot')).toHaveLength(5)
  expect(container.querySelectorAll('.nut-indicator__number')).toHaveLength(1)
})

test('should be shown when passing block and align and fillZero', () => {
  const IndicatorDemo = () => {
    const [loading, setLoading] = useState(false)
    return (
      <Cell>
        <Indicator block={true} fillZero={true} align="center" size={6} current={5}></Indicator>
      </Cell>
    )
  }

  const { container } = render(<IndicatorDemo />)

  let wrapper = container.querySelector('.nut-indicator')
  expect(wrapper).toHaveClass('nut-indicator__align__center')
  expect(wrapper).toHaveClass('nut-indicator__block')
  expect(container.querySelector('.nut-indicator__number')).toHaveTextContent('05')
})
