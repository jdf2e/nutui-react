// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render, waitFor, fireEvent } from '@testing-library/react'
import Cell from '@/packages/cell'
import Notify from '@/packages/notify'

const onClickNotify = jest.fn((type, msg, options?) => {
  switch (type) {
    case 'text':
      Notify.text(msg, options)
      break
    case 'primary':
      Notify.primary(msg, options)
      break
    case 'success':
      Notify.success(msg, options)
      break
    case 'danger':
      Notify.danger(msg, options)
      break
    case 'warn':
      Notify.warn(msg, options)
      break
    default:
      break
  }
})

test('event click-show-Notify test', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickNotify('text', '文案', { id: 'custom1' })}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  expect(onClickNotify).toBeCalled()
  expect(document.body.querySelector('.nut-notify')).toBeTruthy()
})

test('test toast props', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() =>
        onClickNotify('text', '主要通知', {
          id: 'custom2',
          duration: 5000,
          color: '#ad0000',
          background: '#ffe1e1',
          className: 'aa',
          position: 'bottom',
        })
      }
    />
  )
  fireEvent.click(getByTestId('emit-click'))

  await waitFor(() => {
    expect(onClickNotify).toBeCalled()
    expect(document.querySelector('.nut-notify')?.innerHTML).toBe('主要通知')
    expect(document.querySelector('.nut-notify')).toHaveClass(
      'nut-notify--base'
    )
    expect(document.querySelector('.nut-notify')).toHaveClass('aa')
    expect(document.querySelector('.nut-notify')).toHaveAttribute(
      'position',
      'bottom'
    )
    expect(document.querySelector('.nut-notify')).toHaveAttribute(
      'style',
      'color: rgb(173, 0, 0); background: rgb(255, 225, 225);'
    )
    expect(document.getElementById('custom2')).toBeTruthy()
    setTimeout(() => {
      expect(document.getElementById('custom2')).not.toBeTruthy()
    }, 5000)
  })
})

test('event show-primary-notify', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickNotify('primary', 'primary')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  await waitFor(() => {
    expect(onClickNotify).toBeCalled()
    expect(document.querySelector('.nut-notify')).toHaveClass(
      'nut-notify--primary'
    )
    expect(document.querySelector('.nut-notify')?.innerHTML).toBe('primary')
  })
})

test('event show-success-notify', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickNotify('success', 'success')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  await waitFor(() => {
    expect(onClickNotify).toBeCalled()
    expect(document.querySelector('.nut-notify')).toHaveClass(
      'nut-notify--success'
    )
    expect(document.querySelector('.nut-notify')?.innerHTML).toBe('success')
  })
})

test('event show-danger-notify', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickNotify('danger', 'danger')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  await waitFor(() => {
    expect(onClickNotify).toBeCalled()
    expect(document.querySelector('.nut-notify')).toHaveClass(
      'nut-notify--danger'
    )
    expect(document.querySelector('.nut-notify')?.innerHTML).toBe('danger')
  })
})

test('event show-warning-notify', async () => {
  const { getByTestId } = render(
    <Cell
      data-testid="emit-click"
      onClick={() => onClickNotify('warn', 'warn')}
    />
  )
  fireEvent.click(getByTestId('emit-click'))
  await waitFor(() => {
    expect(onClickNotify).toBeCalled()
    expect(document.querySelector('.nut-notify')).toHaveClass(
      'nut-notify--warning'
    )
    expect(document.querySelector('.nut-notify')?.innerHTML).toBe('warn')
  })
})
