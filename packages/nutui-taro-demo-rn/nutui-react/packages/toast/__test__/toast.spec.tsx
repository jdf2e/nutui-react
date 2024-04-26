// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'

import { Jd } from '@nutui/icons-react'
import Toast from '@/packages/toast'
import Cell from '@/packages/cell'

const onClickToast = vi.fn((type, msg, options?) => {
  switch (type) {
    case 'text':
      Toast.show({ content: msg, ...options })
      break
    case 'success':
      Toast.show({ content: msg, icon: 'success', ...options })
      break
    case 'fail':
      Toast.show({ content: msg, icon: 'fail', ...options })
      break
    case 'warn':
      Toast.show({ content: msg, icon: 'warn', ...options })
      break
    case 'loading':
      Toast.show({ content: msg, icon: 'loading', ...options })
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
  await waitFor(() => {
    fireEvent.click(getByTestId('emit-click'))
    expect(onClickToast).toBeCalled()
    expect(document.body.querySelector('.nut-toast')).toBeTruthy()
  })
})

test('test toast props', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() =>
        onClickToast('text', '文案', {
          id: 'custom2',
          duration: 2,
          title: 'title展示',
          icon: <Jd />,
          size: 'small',
        })
      }
    />
  )
  await waitFor(() => {
    fireEvent.click(getByTestId('emit-click'))
    expect(onClickToast).toBeCalled()
    expect(document.querySelector('.nut-toast-text')?.innerHTML).toBe('文案')
    expect(document.querySelector('.nut-toast')).toHaveClass('nut-toast-small')
    expect(document.querySelector('.nut-toast')).toHaveClass(
      'nut-toast-has-icon'
    )
    expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-Jd')
    expect(document.querySelector('.nut-toast-title')?.innerHTML).toBe(
      'title展示'
    )
  })
})

test('event show-success-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('success', 'success')}
    />
  )
  await waitFor(() => {
    fireEvent.click(getByTestId('emit-click'))
    expect(onClickToast).toBeCalled()
    expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-Check')
    expect(document.querySelector('.nut-toast-text')?.innerHTML).toBe('success')
  })
})

test('event show-fail-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('fail', 'fail')}
    />
  )
  await waitFor(() => {
    fireEvent.click(getByTestId('emit-click'))
    expect(onClickToast).toBeCalled()
    expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-Failure')
    expect(document.querySelector('.nut-toast-text')?.innerHTML).toBe('fail')
  })
})

test('event show-warn-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('warn', 'warn')}
    />
  )
  await waitFor(() => {
    fireEvent.click(getByTestId('emit-click'))
    expect(onClickToast).toBeCalled()
    expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-Tips')
    expect(document.querySelector('.nut-toast-text')?.innerHTML).toBe('warn')
  })
})

test('event show-loading-toast', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickToast('loading', 'loading')}
    />
  )
  await waitFor(() => {
    fireEvent.click(getByTestId('emit-click'))
    expect(onClickToast).toBeCalled()
    expect(document.querySelector('.nut-icon')).toHaveClass('nut-icon-loading')
    expect(document.querySelector('.nut-toast-text')?.innerHTML).toBe('loading')
  })
})
