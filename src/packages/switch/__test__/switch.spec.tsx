import * as React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Switch } from '../switch'

test('activeText && checked && onChange && inactiveText && className && style test', async () => {
  const state: any = {
    activeText: '开',
    inactiveText: '关',
    checked: false,
    className: 'switch-test',
    style: { fontSize: '12px', '--nutui-switch-open-background-color': 'blue' },
  }
  const { activeText, inactiveText, className, style } = state
  const testFn = vi.fn()
  const { container } = render(
    <Switch
      className={className}
      style={style}
      defaultChecked
      activeText={activeText}
      checked={false}
      onChange={testFn}
      inactiveText={inactiveText}
    />
  )
  const el: Element | null = container.querySelector('.nut-switch-base')
  if (el) {
    expect(el).toHaveAttribute(
      'class',
      `nut-switch nut-switch-close  nut-switch-base switch-test`
    )
    expect(el).toHaveAttribute(
      'style',
      `font-size: 12px; --nutui-switch-open-background-color: blue;`
    )
    expect(el).toHaveTextContent(inactiveText)
    await act(() => {
      fireEvent.click(el)
    })
    waitFor(() => {
      // 异步
      expect(el).toHaveTextContent(activeText)
      expect(testFn).toBeCalled()
    })
  }
})

test('disabled test', () => {
  render(<Switch disabled />)
  const el = document.getElementsByClassName('nut-switch-disabled')
  expect(el.length > 0).toBe(true)
})
