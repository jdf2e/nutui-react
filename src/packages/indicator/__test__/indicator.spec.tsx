import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Indicator } from '../indicator'
import Button from '@/packages/button'
import Cell from '@/packages/cell'
import Row from '@/packages/row'
import Col from '@/packages/col'

test('should match snapshot', () => {
  const { asFragment } = render(<Indicator total={3} current={3} />)
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
            total={6}
            current={5}
          />
        </Col>
      </Row>
    </Cell>
  )
  expect(getByTestId('indicator')).toHaveClass('aa')
  expect(container.querySelectorAll('.nut-indicator__dot')).toHaveLength(5)
  expect(container.querySelectorAll('.nut-indicator__number')).toHaveLength(1)
})
