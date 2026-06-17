import * as React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { EMPTY_STATUS_IMAGES } from '@/types'
import { Empty } from '../empty'

test('should render description correctly', () => {
  const { container, getByText } = render(<Empty description="暂无数据" />)
  expect(getByText('暂无数据')).toBeTruthy()
  expect(container).toMatchSnapshot()
})

test('should render title correctly', () => {
  const { getByText } = render(
    <Empty title="网络连接已断开" description="请检查网络设置" />
  )
  expect(getByText('网络连接已断开')).toHaveClass('nut-empty-title')
})

test('should use default half size and network status image', () => {
  const { container } = render(<Empty description="暂无数据" />)
  expect(container.querySelector('.nut-empty')).toHaveClass('nut-empty--half')
  expect(container.querySelector('.nut-empty-image img')).toHaveAttribute(
    'src',
    EMPTY_STATUS_IMAGES.network
  )
})

test('should render imageSize correctly', async () => {
  const { container } = render(<Empty description="暂无数据" imageSize={100} />)
  await waitFor(() => {
    expect(container.querySelector('.nut-empty-image')).toHaveStyle({
      width: '100px',
      height: '100px',
    })
  })
})

test('should render status image correctly', () => {
  const { container } = render(<Empty status="search" />)
  expect(container.querySelector('.nut-empty-image img')).toHaveAttribute(
    'src',
    EMPTY_STATUS_IMAGES.search
  )
})

test('should render full size modifier class', () => {
  const { container } = render(
    <Empty size="full" title="标题" description="描述" />
  )
  expect(container.querySelector('.nut-empty')).toHaveClass('nut-empty--full')
  expect(
    container.querySelector('.nut-empty-partial-body')
  ).not.toBeInTheDocument()
})

test('should render partial layout structure', () => {
  const { container } = render(
    <Empty size="partial" status="search" description="没有更多商品咯" />
  )
  expect(container.querySelector('.nut-empty')).toHaveClass(
    'nut-empty--partial'
  )
  expect(container.querySelector('.nut-empty-partial-body')).toBeInTheDocument()
  expect(container.querySelector('.nut-empty-content')).toBeInTheDocument()
})

test('should render actions correctly', () => {
  const { container } = render(
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

test('should render children correctly', () => {
  const { getByTestId } = render(
    <Empty description="暂无数据">
      <button type="button" data-testid="custom-child">
        自定义按钮
      </button>
    </Empty>
  )
  expect(getByTestId('custom-child')).toBeInTheDocument()
})
