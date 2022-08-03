import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Divider } from '../divider'

test('should divider snapshot match', () => {
  const { asFragment, container } = render(<Divider>文本</Divider>)
  expect(container.querySelector('.nut-divider')).toHaveTextContent('文本')
  expect(asFragment()).toMatchSnapshot()
})

test('prop dashed true', () => {
  const { getByTestId } = render(
    <>
      <Divider data-testid="divider-dashed" dashed>
        文本
      </Divider>
      <Divider data-testid="divider-hairline" hairline={false}>
        文本
      </Divider>
    </>
  )
  expect(getByTestId('divider-dashed')).toHaveClass('nut-divider__dashed')
  expect(getByTestId('divider-hairline')).not.toHaveClass(
    'nut-divider__hairline'
  )
})

test('prop contentPosition left', () => {
  const { container } = render(<Divider contentPosition="left">文本</Divider>)
  expect(container.querySelector('.nut-divider')).toHaveClass(
    'nut-divider__left'
  )
})

test('prop contentPosition right', () => {
  const { container } = render(<Divider contentPosition="right">文本</Divider>)
  expect(container.querySelector('.nut-divider')).toHaveClass(
    'nut-divider__right'
  )
})

test('custom style test', () => {
  const { container } = render(
    <Divider
      styles={{
        color: '#1989fa',
        borderColor: '#1989fa',
        padding: '0 16px',
      }}
    >
      文本
    </Divider>
  )
  expect(container.querySelector('.nut-divider')).toHaveAttribute(
    'style',
    'color: #1989fa;border-color: #1989fa;padding: 0 16px;'
  )
})

test('prop direction vertical test', () => {
  const { container } = render(
    <div style={{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }}>
      文本
      <Divider direction="vertical" />
      <a href="#/" style={{ color: '#1989fa' }}>
        链接
      </a>
      <Divider direction="vertical" />
      <a href="#/" style={{ color: '#1989fa' }}>
        链接
      </a>
    </div>
  )
  expect(container.querySelector('.nut-divider')).toHaveClass(
    'nut-divider__vertical'
  )
})
