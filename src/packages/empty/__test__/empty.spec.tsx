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
  expect(container.querySelector('.nut-empty-image')).toHaveStyle({
    width: '100px',
  })
})
test('should render image props correctly', () => {
  const { container } = render(<Empty status="empty" />)
  expect(container.querySelector('.img')).toHaveAttribute(
    'src',
    'https://storage.360buyimg.com/imgtools/30186cfda0-0d3eee40-c0ac-11ee-9382-9125782aa3b8.png'
  )
})
test('should render actions correctly', () => {
  const { container, getByTestId } = render(
    <Empty
      data-testid="testEmpty"
      title="标题"
      description="暂无数据"
      actions={[{ text: '操作1' }, { text: '操作2' }]}
    />
  )
  expect(container.querySelector('.nut-empty-actions')).toBeTruthy()
  expect(
    container.querySelectorAll('.nut-empty-actions .nut-button').length
  ).toEqual(2)
})
test('should render custom image correctly', () => {
  const { getByTestId } = render(
    <Empty
      description="店铺为空"
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
