// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'

import Toast from '@/packages/toast'
import Cell from '@/packages/cell'

const onClickToast = jest.fn((type, msg, options?) => {
  switch (type) {
    case 'text':
      Toast.text(msg, options)
      break
    case 'success':
      Toast.success(msg, options)
      break
    case 'fail':
      Toast.fail(msg, options)
      break
    case 'warn':
      Toast.warn(msg, options)
      break
    case 'loading':
      Toast.loading(msg, options)
      break
    default:
      break
  }
})

test('event click-show-toast test', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('text', '文案', { id: 'custom1' })}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickToast).toBeCalled()
  expect(document.body.querySelector('.nut-toast')).toBeTruthy()
})

test('test toast props', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() =>
        onClickToast('text', '文案', {
          id: 'custom2',
          duration: 5000,
          title: 'title展示',
          customClass: 'class1',
          icon: 'JD',
          size: 'small',
        })
      }
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickToast).toBeCalled()
  expect(document.querySelector('.nut-toast__text')?.innerHTML).toBe('文案')
  expect(document.querySelector('.nut-toast')).toHaveClass('nut-toast-center')
  expect(document.querySelector('.nut-toast')).toHaveClass('nut-toast-small')
  expect(document.querySelector('.nut-toast')).toHaveClass('nut-toast-has-icon')
  expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-JD')
  expect(document.getElementById('toast-custom2')).toBeTruthy()
  expect(document.querySelector('.nut-toast-title')?.innerHTML).toBe(
    'title展示'
  )
  setTimeout(() => {
    expect(document.getElementById('toast-custom2')).not.toBeTruthy()
  }, 5000)
})

test('event show-success-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('success', 'success')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickToast).toBeCalled()
  expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-success')
  expect(document.querySelector('.nut-toast__text')?.innerHTML).toBe('success')
})

test('event show-fail-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('fail', 'fail')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickToast).toBeCalled()
  expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-failure')
  expect(document.querySelector('.nut-toast__text')?.innerHTML).toBe('fail')
})

test('event show-warn-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('warn', 'warn')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickToast).toBeCalled()
  expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-tips')
  expect(document.querySelector('.nut-toast__text')?.innerHTML).toBe('warn')
})

test('event show-loading-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('loading', 'loading')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickToast).toBeCalled()
  expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-loading')
  expect(document.querySelector('.nut-toast__text')?.innerHTML).toBe('loading')
})
