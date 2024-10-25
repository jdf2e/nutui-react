import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Divider } from '../divider'

test('should divider snapshot match', () => {
  const { asFragment, container } = render(<Divider>文本</Divider>)
  expect(container.querySelector('.nut-divider')).toHaveTextContent('文本')
  expect(asFragment()).toMatchSnapshot()
})

test('prop contentPosition left', () => {
  const { container } = render(<Divider contentPosition="left">文本</Divider>)
  expect(container.querySelector('.nut-divider')).toHaveClass(
    'nut-divider-left'
  )
})

test('prop contentPosition right', () => {
  const { container } = render(<Divider contentPosition="right">文本</Divider>)
  expect(container.querySelector('.nut-divider')).toHaveClass(
    'nut-divider-right'
  )
})

test('custom style test', () => {
  const { container } = render(
    <Divider
      style={{
        color: '#0073ff',
        borderColor: '#0073ff',
        padding: '0 16px',
      }}
    >
      文本
    </Divider>
  )
  expect(container.querySelector('.nut-divider')).toHaveAttribute(
    'style',
    'color: #0073ff; border-color: #0073ff; padding: 0px 16px;'
  )
})

test('prop direction vertical test', () => {
  const { container } = render(
    <div style={{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }}>
      文本
      <Divider direction="vertical" />
      <a href="#/" style={{ color: '#0073ff' }}>
        链接
      </a>
      <Divider direction="vertical" />
      <a href="#/" style={{ color: '#0073ff' }}>
        链接
      </a>
    </div>
  )
  expect(container.querySelector('.nut-divider')).toHaveClass(
    'nut-divider-vertical'
  )
})
