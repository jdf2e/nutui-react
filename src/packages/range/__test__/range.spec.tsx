import * as React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Range from '@/packages/range'

test('range props test', () => {
  const { container } = render(
    <Range
      className="test-range"
      modelValue={40}
      inactiveColor="rgba(163,184,255,1)"
      buttonColor="rgba(52,96,250,1)"
      activeColor="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      style={{ color: 'red' }}
    />
  )

  expect(container.querySelector('.nut-range-container')).toHaveClass(
    'test-range'
  )
  expect(container.querySelector('.nut-range-show-number')).toHaveAttribute(
    'style',
    'background: rgb(163, 184, 255);'
  )
  expect(container.querySelector('.nut-range-button')).toHaveAttribute(
    'style',
    'border-color: rgba(52,96,250,1);'
  )
  expect(container.querySelector('.nut-range-bar')).toHaveStyle({
    background:
      'linear-gradient(315deg, rgb(73, 143, 242) 0%, rgb(73, 101, 242) 100%)',
  })

  expect(container.querySelector('.number')?.innerHTML).toBe('40')

  expect(container).toMatchSnapshot()
})

test('range max and min test', () => {
  const { container } = render(<Range modelValue={0} max={10} min={-10} />)
  expect(container.querySelector('.min')?.innerHTML).toBe('-10')
  expect(container.querySelector('.max')?.innerHTML).toBe('10')
})

test('range test', () => {
  const state = {
    value0: [30, 60],
  }
  const { container } = render(<Range range modelValue={state.value0} />)
  expect(
    container.querySelector('.nut-range-button-wrapper-left')
  ).toHaveAttribute('aria-valuenow', '30')
  expect(
    container.querySelector('.nut-range-button-wrapper-right')
  ).toHaveAttribute('aria-valuenow', '60')
})

test('range description test', () => {
  const { container } = render(
    <Range minDesc="0%" maxDesc="100%" curValueDesc="40%" />
  )
  expect(container.querySelector('.min')?.innerHTML).toBe('0%')
  expect(container.querySelector('.max')?.innerHTML).toBe('100%')
  expect(container.querySelector('.number')?.innerHTML).toBe('40%')
})

test('disabled test', () => {
  const state = {
    value0: 50,
  }
  const { container } = render(<Range disabled modelValue={state.value0} />)
  expect(container.querySelector('.nut-range-button-wrapper')).toHaveAttribute(
    'aria-valuenow',
    '50'
  )
  expect(container.querySelector('.nut-range')).toHaveClass(
    'nut-range-disabled'
  )
  expect(screen.queryByRole('slider')).toHaveAttribute('tabindex', '-1')
})

test('hiddenRange test', () => {
  const state = {
    value0: 40,
  }
  const { container } = render(<Range hiddenRange modelValue={state.value0} />)
  expect(container.querySelector('max')).not.toBeTruthy()
  expect(container.querySelector('min')).not.toBeTruthy()
})

test('hiddenTag test', () => {
  const state = {
    value0: 40,
  }
  const { container } = render(<Range hiddenTag modelValue={state.value0} />)
  expect(container.querySelector('nut-range-button')?.innerHTML).not.toBe(
    '<div class="number">40</div>'
  )
})

test('vertical test', () => {
  const state = {
    value0: 40,
  }
  const { container } = render(<Range vertical modelValue={state.value0} />)
  expect(screen.queryByRole('slider')).toHaveAttribute('tabindex', '0')
  expect(screen.queryByRole('slider')).toHaveAttribute(
    'aria-orientation',
    'vertical'
  )
  expect(container.querySelector('.nut-range-container')).toHaveClass(
    'nut-range-container-vertical'
  )
})

test('marks test', () => {
  const state = {
    value0: 40,
    marks: {
      0: 0,
      20: 20,
      40: 40,
      60: 60,
      80: 80,
      100: 100,
    },
  }
  const { container } = render(
    <Range marks={state.marks} modelValue={state.value0} />
  )
  expect(container.querySelector('.nut-range-mark')).toBeTruthy()
  expect(container.querySelectorAll('.nut-range-mark-text')?.length).toEqual(
    Object.keys(state.marks).length
  )
})

test('custom-button test', () => {
  const state = {
    value0: 40,
  }
  const { container } = render(
    <Range
      button={<div className="range-custom-button">{state.value0}</div>}
      modelValue={state.value0}
    />
  )

  expect(container.querySelector('.range-custom-button')).toBeTruthy()
  expect(container.querySelector('.range-custom-button')?.innerHTML).toBe('40')
  expect(container.querySelector('.nut-range-button-wrapper')).toHaveAttribute(
    'aria-valuenow',
    '40'
  )
})

test('desc test', () => {
  const state = {
    value0: 40,
    minDesc: 'min',
    maxDesc: 'max',
    curValueDesc: 'value',
  }
  const { container } = render(
    <Range
      modelValue={state.value0}
      minDesc={state.minDesc}
      maxDesc={state.maxDesc}
      curValueDesc={state.curValueDesc}
    />
  )
  expect(container.querySelector('.nut-range-button-wrapper')).toHaveAttribute(
    'aria-valuenow',
    '40'
  )
  expect(container.querySelector('.min')?.innerHTML).toBe(state.minDesc)
  expect(container.querySelector('.max')?.innerHTML).toBe(state.maxDesc)
  expect(container.querySelector('.number')?.innerHTML).toBe(state.curValueDesc)
})
