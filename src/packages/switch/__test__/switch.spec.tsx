import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Switch } from '../switch'

test('activeColor && inactiveColor &&  activeText && checked && change && inactiveText && isAsync && className && style test', () => {
  const state: any = {
    activeColor: 'rgb(124, 88, 33)',
    inactiveColor: 'rgb(250, 104, 93)',
    activeText: '开',
    inactiveText: '关',
    checked: false,
    className: 'switch-test',
    style: { fontSize: '12px' },
  }
  const { activeColor, inactiveColor, activeText, inactiveText, className, style } = state
  const testFn = jest.fn()
  const { container } = render(
    <Switch
      className={className}
      style={style}
      isAsync
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      activeText={activeText}
      checked={false}
      change={testFn}
      inactiveText={inactiveText}
    />
  )
  const el: Element | null = container.querySelector('.nut-switch-base')
  if (el) {
    expect(el).toHaveAttribute('class', `nut-switch switch-close  nut-switch-base switch-test`)
    expect(el).toHaveAttribute('style', `background-color: ${inactiveColor}; font-size: 12px;`)
    expect(el).toHaveTextContent(inactiveText)
    fireEvent.click(el)
    setTimeout(() => {
      //异步
      expect(el).toHaveAttribute('style', `background-color: ${activeColor};`)
      expect(el).toHaveTextContent(activeText)
      expect(testFn).toBeCalled()
    }, 100)
  }
})

test('disable test', () => {
  render(<Switch disable />)
  const el = document.getElementsByClassName('nut-switch-disable')
  expect(el.length > 0).toBe(true)
})
