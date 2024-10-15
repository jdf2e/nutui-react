import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ResultPage } from '../resultpage'

test('should render description correctly', () => {
  const { container, getByText } = render(
    <ResultPage description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行" />
  )
  expect(
    getByText(
      '内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行'
    )
  ).toBeTruthy()
  expect(container).toMatchSnapshot()
})
test('should render actions correctly', () => {
  const { container, getByTestId } = render(
    <ResultPage
      title="信息补充"
      description="暂无数据"
      actions={[{ text: '操作1' }, { text: '操作2' }]}
    />
  )
  expect(container.querySelector('.nut-resultpage-actions')).toBeTruthy()
  expect(
    container.querySelectorAll('.nut-resultpage-actions .nut-button').length
  ).toEqual(2)
})

test('should render custom icon correctly', () => {
  const { getByTestId } = render(
    <ResultPage
      description="测试"
      icon={
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
