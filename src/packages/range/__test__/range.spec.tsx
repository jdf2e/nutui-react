import * as React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Range from '@/packages/range'

test('range props test', () => {
  const { container } = render(
    <Range className="test-range" defaultValue={40} style={{ color: 'red' }} />
  )

  expect(container.querySelector('.nut-range-container')).toHaveClass(
    'test-range'
  )
  expect(container.querySelector('.nut-range-bar')).toHaveStyle({
    background:
      'linear-gradient(315deg, rgb(73, 143, 242) 0%, rgb(73, 101, 242) 100%)',
  })

  expect(container.querySelector('.number')?.innerHTML).toBe('40')

  expect(container).toMatchSnapshot()
})

test('range max and min test', () => {
  const { container } = render(<Range defaultValue={0} max={10} min={-10} />)
  expect(container.querySelector('.min')?.innerHTML).toBe('-10')
  expect(container.querySelector('.max')?.innerHTML).toBe('10')
})

test('range test', () => {
  const state = {
    value0: [30, 60],
  }
  const { container } = render(<Range range defaultValue={state.value0} />)
  expect(container.outerHTML).toMatchSnapshot()
})

test('range description test', () => {
  const { container } = render(
    <Range minDescription="0%" maxDescription="100%" />
  )
  expect(container.querySelector('.min')?.innerHTML).toBe('0%')
  expect(container.querySelector('.max')?.innerHTML).toBe('100%')
})

test('disabled test', () => {
  const state = {
    value0: 50,
  }
  const { container } = render(<Range disabled defaultValue={state.value0} />)
  expect(container.querySelector('.nut-range')).toHaveClass(
    'nut-range-disabled'
  )
})

test('hidden range test', () => {
  const state = {
    value0: 40,
  }
  const { container } = render(
    <Range
      maxDescription={null}
      minDescription={null}
      defaultValue={state.value0}
    />
  )
  expect(container.querySelector('.max')).toBeFalsy()
  expect(container.querySelector('.min')).toBeFalsy()
})

test('hiddenTag test', () => {
  const state = {
    value0: 40,
  }
  const { container } = render(
    <Range currentDescription={null} defaultValue={state.value0} />
  )
  expect(container.querySelector('.number')).toBeFalsy()
})

test('vertical test', () => {
  const state = {
    value0: 40,
  }
  const { container } = render(<Range vertical defaultValue={state.value0} />)
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
    <Range marks={state.marks} defaultValue={state.value0} />
  )
  expect(container.querySelector('.nut-range-mark')).toBeTruthy()
  expect(container.querySelectorAll('.nut-range-mark-text')?.length).toEqual(
    Object.keys(state.marks).length
  )
})

test('marks array', () => {
  const state = {
    value0: 40,
    marks: [
      { value: 0, label: 'start' },
      { value: 100, label: 'end' },
    ],
  }
  const { container } = render(
    <Range marks={state.marks} defaultValue={state.value0} />
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
      defaultValue={state.value0}
    />
  )

  expect(container.querySelector('.range-custom-button')).toBeTruthy()
  expect(container.querySelector('.range-custom-button')?.innerHTML).toBe('40')
})

test('desc test', () => {
  const state = {
    value0: 40,
    minDescription: 'min',
    maxDescription: 'max',
    currentDescription: 'value',
  }
  const { container } = render(
    <Range
      defaultValue={state.value0}
      minDescription={state.minDescription}
      maxDescription={state.maxDescription}
      currentDescription={(value) => `${value}%`}
    />
  )
  expect(container.querySelector('.min')?.innerHTML).toBe(state.minDescription)
  expect(container.querySelector('.max')?.innerHTML).toBe(state.maxDescription)
  expect(container.querySelector('.number')?.innerHTML).toBe('40%')
})

test('range click test', () => {
  const { container } = render(
    <Range defaultValue={40} style={{ color: 'red' }} />
  )

  if (container.querySelector('.nut-range-bar')) {
    fireEvent.click(container.querySelector('.nut-range-bar') as HTMLElement)
  }
})

test('range click test', () => {
  const state = {
    value0: [30, 60],
  }
  const { container } = render(<Range range defaultValue={state.value0} />)
  if (container.querySelector('.nut-range-bar')) {
    fireEvent.click(container.querySelector('.nut-range-bar') as HTMLElement)
  }
})

test('range click disable test', () => {
  const { container } = render(
    <Range defaultValue={40} disabled style={{ color: 'red' }} />
  )

  if (container.querySelector('.nut-range-bar')) {
    fireEvent.click(container.querySelector('.nut-range-bar') as HTMLElement)
  }
})

test('range click vertical test', () => {
  const { container } = render(
    <Range defaultValue={40} vertical style={{ color: 'red' }} />
  )

  if (container.querySelector('.nut-range-bar')) {
    fireEvent.click(container.querySelector('.nut-range-bar') as HTMLElement)
  }
})

test('range touch test', () => {
  const { container } = render(<Range defaultValue={40} />)

  const track = container.querySelector('.nut-range-button')
  const button = container.querySelector('.number')

  if (track) {
    fireEvent.touchStart(track, {
      touches: [{ clientX: 0 }],
    })
    fireEvent.touchMove(track, {
      touches: [{ clientX: 10 }],
    })
    fireEvent.touchEnd(track)
    expect(button?.innerHTML).toBe('100')
  }
})
