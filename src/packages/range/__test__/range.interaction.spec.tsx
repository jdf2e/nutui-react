import * as React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import Range from '@/packages/range'
import ConfigProvider from '@/packages/configprovider'

vi.mock('@/utils/get-rect', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/utils/get-rect')>()
  return {
    ...actual,
    getRect: vi.fn(() => ({
      top: 0,
      left: 0,
      right: 100,
      bottom: 100,
      width: 100,
      height: 100,
    })),
  }
})

const getMarkByText = (container: HTMLElement, text: string) => {
  return Array.from(container.querySelectorAll('.nut-range-mark-text')).find(
    (item) => item.innerHTML === text
  )
}

test('logs when max is not greater than min', () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  render(<Range min={10} max={10} />)
  expect(logSpy).toHaveBeenCalledWith('max 的值需要大于 min的值')
  logSpy.mockRestore()
})

test('updates value and triggers callbacks during horizontal touch', () => {
  const onChange = vi.fn()
  const onStart = vi.fn()
  const onEnd = vi.fn()
  const { container } = render(
    <Range
      defaultValue={40}
      onChange={onChange}
      onStart={onStart}
      onEnd={onEnd}
    />
  )
  const button = container.querySelector('.nut-range-button') as HTMLElement

  fireEvent.touchStart(button, {
    touches: [{ clientX: 40, clientY: 10 }],
  })
  fireEvent.touchMove(button, {
    touches: [{ clientX: 60, clientY: 10 }],
  })
  fireEvent.touchEnd(button)

  expect(onStart).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith(60)
  expect(onEnd).toHaveBeenCalledWith(60)
  expect(
    container.querySelector('.nut-range-button-number-body')?.innerHTML
  ).toBe('60')
})

test('updates value during vertical touch', () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range defaultValue={40} vertical onChange={onChange} />
  )
  const button = container.querySelector('.nut-range-button') as HTMLElement

  fireEvent.touchStart(button, {
    touches: [{ clientX: 10, clientY: 40 }],
  })
  fireEvent.touchMove(button, {
    touches: [{ clientX: 10, clientY: 60 }],
  })
  fireEvent.touchEnd(button)

  expect(onChange).toHaveBeenCalledWith(60)
  expect(
    container.querySelector('.nut-range-button-number-body')?.innerHTML
  ).toBe('60')
})

test('reverses range value when dragging the left button over the right one', () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range range defaultValue={[30, 60]} onChange={onChange} />
  )
  const leftButton = container.querySelector(
    '.nut-range-button-wrapper-left'
  ) as HTMLElement

  fireEvent.touchStart(leftButton, {
    touches: [{ clientX: 0, clientY: 10 }],
  })
  fireEvent.touchMove(leftButton, {
    touches: [{ clientX: 100, clientY: 10 }],
  })
  fireEvent.touchEnd(leftButton)

  expect(onChange).toHaveBeenLastCalledWith([60, 100])
  const numbers = container.querySelectorAll('.nut-range-button-number-body')
  expect(numbers[0]?.innerHTML).toBe('60')
  expect(numbers[1]?.innerHTML).toBe('100')
})

test('reverses touch diff direction in rtl mode', () => {
  const onChange = vi.fn()
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Range defaultValue={40} onChange={onChange} />
    </ConfigProvider>
  )
  const button = container.querySelector('.nut-range-button') as HTMLElement

  fireEvent.touchStart(button, {
    touches: [{ clientX: 40, clientY: 10 }],
  })
  fireEvent.touchMove(button, {
    touches: [{ clientX: 20, clientY: 10 }],
  })
  fireEvent.touchEnd(button)

  expect(onChange).toHaveBeenCalledWith(60)
})

test('uses mark value as label when label is missing', () => {
  const { container } = render(
    <Range defaultValue={40} marks={[{ value: 50 }]} />
  )

  expect(getMarkByText(container, '50')).toBeTruthy()
})

test('stops propagation when clicking the button wrapper', () => {
  const onChange = vi.fn()
  const rangeResult = render(
    <Range range defaultValue={[30, 60]} onChange={onChange} />
  )

  fireEvent.click(
    rangeResult.container.querySelector(
      '.nut-range-button-wrapper-left'
    ) as HTMLElement
  )

  const singleResult = render(<Range defaultValue={40} onChange={onChange} />)
  fireEvent.click(
    singleResult.container.querySelector(
      '.nut-range-button-wrapper'
    ) as HTMLElement
  )

  expect(onChange).not.toHaveBeenCalled()
})

test('updates single value by clicking the track', () => {
  const onChange = vi.fn()
  const onEnd = vi.fn()
  const { container } = render(
    <Range defaultValue={40} onChange={onChange} onEnd={onEnd} />
  )

  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 75,
    clientY: 10,
  })

  expect(onChange).toHaveBeenCalledWith(75)
  expect(onEnd).toHaveBeenCalledWith(75)
})

test('updates the left range value when clicking the left half', () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range range defaultValue={[30, 60]} onChange={onChange} />
  )

  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 25,
    clientY: 10,
  })

  expect(onChange).toHaveBeenCalledWith([25, 60])
})

test('updates the right range value when clicking the right half', () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range range defaultValue={[30, 60]} onChange={onChange} />
  )

  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 75,
    clientY: 10,
  })

  expect(onChange).toHaveBeenCalledWith([30, 75])
})

test('ignores touch events when disabled', () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range defaultValue={40} disabled onChange={onChange} />
  )
  const wrapper = container.querySelector(
    '.nut-range-button-wrapper'
  ) as HTMLElement

  fireEvent.touchStart(wrapper, {
    touches: [{ clientX: 40, clientY: 10 }],
  })
  fireEvent.touchMove(wrapper, {
    touches: [{ clientX: 60, clientY: 10 }],
  })
  fireEvent.touchEnd(wrapper)

  expect(onChange).not.toHaveBeenCalled()
  expect(
    container.querySelector('.nut-range-button-number-body')?.innerHTML
  ).toBe('40')
})

test('marks active range only between the two buttons', () => {
  const { container } = render(
    <Range
      range
      defaultValue={[20, 80]}
      marks={{ 20: '20', 50: '50', 80: '80', 100: '100' }}
    />
  )

  const activeMark = getMarkByText(container, '50')?.parentElement
  const inactiveMark = getMarkByText(container, '100')?.parentElement
  expect(activeMark).toHaveClass('nut-range-mark-text-wrapper-active')
  expect(inactiveMark).not.toHaveClass('nut-range-mark-text-wrapper-active')
  expect(getMarkByText(container, '50')?.nextElementSibling).toHaveClass(
    'nut-range-tick-active'
  )
})

test('renders vertical marks with corrected text position', () => {
  const { container } = render(
    <Range
      vertical
      defaultValue={40}
      marks={{ 0: '0', 40: '40', 100: '100' }}
    />
  )

  const activeMark = getMarkByText(container, '40')?.parentElement
  expect(activeMark).toHaveClass('nut-range-vertical-mark-text-wrapper')
  expect(activeMark).toHaveClass('nut-range-vertical-mark-text-active-wrapper')
  expect(getMarkByText(container, '0')).toHaveStyle({ right: '18px' })
})

test('renders marks in rtl mode with reversed boundary transforms', () => {
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Range defaultValue={40} marks={{ 0: '0', 40: '40', 100: '100' }} />
    </ConfigProvider>
  )

  const markWrapper = getMarkByText(container, '40')?.parentElement
  expect(markWrapper).toHaveClass('rtl-nut-range-mark-text-wrapper')
  expect(getMarkByText(container, '0')).toHaveStyle({
    transform: 'translateX(calc(-100% + 4px))',
  })
  expect(getMarkByText(container, '100')).toHaveStyle({
    transform: 'translateX(-4px)',
  })
  expect(getMarkByText(container, '40')?.nextElementSibling).toHaveClass(
    'rtl-nut-range-tick'
  )
})

test('bounds the release value after max changes with a coarse step', () => {
  const onEnd = vi.fn()
  const { container, rerender } = render(
    <Range defaultValue={40} min={0} max={100} step={40} onEnd={onEnd} />
  )
  const button = container.querySelector('.nut-range-button') as HTMLElement
  fireEvent.touchStart(button, {
    touches: [{ clientX: 40, clientY: 10 }],
  })
  fireEvent.touchMove(button, {
    touches: [{ clientX: 80, clientY: 10 }],
  })
  rerender(<Range defaultValue={40} min={0} max={60} step={40} onEnd={onEnd} />)
  fireEvent.touchEnd(button)
  expect(onEnd).toHaveBeenLastCalledWith(60)
})
