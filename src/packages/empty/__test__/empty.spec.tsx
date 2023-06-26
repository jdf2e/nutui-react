import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Empty } from '../empty'

test('should render description correctly', () => {
  const { container, getByText } = render(<Empty description="暂无数据" />)
  expect(getByText('暂无数据')).toBeTruthy()
  expect(container).toMatchSnapshot()
})
test('should render imageSize correctly', () => {
  const { container } = render(<Empty description="暂无数据" imageSize={100} />)
  expect(container.querySelector('.nut-empty__image')).toHaveStyle({
    width: '100px',
  })
})
test('should render image props correctly', () => {
  const { container } = render(<Empty status="empty" />)
  expect(container.querySelector('.img')).toHaveAttribute(
    'src',
    'https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png'
  )
})
test('should render custom image correctly', () => {
  const { getByTestId } = render(
    <Empty
      description="无优惠券"
      image={
        <img
          src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png"
          alt=""
          data-testid="testImg"
        />
      }
    />
  )
  expect(getByTestId('testImg')).toHaveAttribute(
    'src',
    'https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png'
  )
})
