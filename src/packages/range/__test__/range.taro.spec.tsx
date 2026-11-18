import * as React from 'react'
import '@testing-library/jest-dom'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { Range } from '../range.taro'
import ConfigProvider from '@/packages/configprovider/index.taro'

type MockViewProps = React.HTMLAttributes<HTMLDivElement> & {
  catchMove?: boolean
}

vi.mock('@tarojs/components', async () => {
  const ReactModule = await import('react')
  return {
    View: ReactModule.forwardRef<HTMLDivElement, MockViewProps>(
      function MockView({ catchMove, ...props }, ref) {
        return <div ref={ref} {...props} />
      }
    ),
    Text: 'span',
  }
})

vi.mock('@tarojs/taro', async () => {
  const ReactModule = await import('react')
  return {
    default: {
      getEnv: vi.fn(() => 'WEB'),
    },
    useReady: (callback: () => void) => ReactModule.useEffect(callback, []),
    nextTick: (callback: () => void) => callback(),
  }
})

vi.mock('@/utils/taro/get-rect', () => ({
  getRectInMultiPlatform: vi.fn(async () => ({
    top: 0,
    left: 0,
    right: 100,
    bottom: 100,
    width: 100,
    height: 100,
  })),
}))

const getMarkByText = (container: HTMLElement, text: string) => {
  return Array.from(container.querySelectorAll('.nut-range-mark-text')).find(
    (item) => item.innerHTML === text
  )
}

const flushInteraction = async () => {
  await act(async () => {
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 32)
    })
  })
}

test('renders basic taro range with marks', () => {
  const { container } = render(
    <Range
      defaultValue={40}
      marks={{ 0: 'start', 40: 'current', 100: 'end' }}
    />
  )

  expect(container.querySelector('.nut-range')).toBeTruthy()
  expect(container.querySelector('.nut-range-bar')).toHaveClass(
    'nut-range-bar-animate'
  )
  expect(container.querySelectorAll('.nut-range-mark-text')).toHaveLength(3)
  expect(getMarkByText(container, 'current')?.parentElement).toHaveClass(
    'nut-range-mark-text-wrapper-active'
  )
  expect(
    container.querySelector('.nut-range-button-number-body')?.innerHTML
  ).toBe('40')
})

test('renders array marks and custom button', () => {
  const { container } = render(
    <Range
      defaultValue={40}
      marks={[
        { value: 0, label: 'start' },
        { value: 100, label: 'end' },
      ]}
      button={<div className="taro-custom-button" />}
    />
  )

  expect(container.querySelector('.taro-custom-button')).toBeTruthy()
  expect(getMarkByText(container, 'start')).toBeTruthy()
  expect(getMarkByText(container, 'end')).toBeTruthy()
})

test('uses mark value as label when taro label is missing', () => {
  const { container } = render(
    <Range defaultValue={40} marks={[{ value: 50 }]} />
  )

  expect(getMarkByText(container, '50')).toBeTruthy()
})

test('renders taro current description callback', () => {
  const { container } = render(
    <Range defaultValue={40} currentDescription={(value) => `${value}%`} />
  )

  expect(
    container.querySelector('.nut-range-button-number-body')?.innerHTML
  ).toBe('40%')
})

test('renders vertical marks and hidden descriptions', () => {
  const { container } = render(
    <Range
      vertical
      defaultValue={40}
      marks={{ 0: '0', 40: '40', 100: '100' }}
      minDescription={null}
      maxDescription={null}
      currentDescription={null}
    />
  )

  expect(container.querySelector('.nut-range-min')).toBeFalsy()
  expect(container.querySelector('.nut-range-max')).toBeFalsy()
  expect(container.querySelector('.nut-range-button-number')).toBeFalsy()
  expect(getMarkByText(container, '40')?.parentElement).toHaveClass(
    'nut-range-vertical-mark-text-wrapper'
  )
  expect(getMarkByText(container, '0')).toHaveStyle({ right: '18px' })
})

test('renders range marks in rtl mode', () => {
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Range
        range
        defaultValue={[20, 80]}
        marks={{ 0: '0', 50: '50', 100: '100' }}
      />
    </ConfigProvider>
  )

  const markWrapper = getMarkByText(container, '50')?.parentElement
  expect(markWrapper).toHaveClass('rtl-nut-range-mark-text-wrapper')
  expect(getMarkByText(container, '50')?.nextElementSibling).toHaveClass(
    'rtl-nut-range-tick'
  )
  expect(getMarkByText(container, '0')).toHaveStyle({
    transform: 'translateX(calc(-100% + 4px))',
  })
  expect(getMarkByText(container, '100')).toHaveStyle({
    transform: 'translateX(-4px)',
  })
})

test('updates single value by clicking the taro track', async () => {
  const onChange = vi.fn()
  const onEnd = vi.fn()
  const { container } = render(
    <Range defaultValue={40} onChange={onChange} onEnd={onEnd} />
  )

  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 75,
    clientY: 10,
  })
  await flushInteraction()

  expect(onChange).toHaveBeenCalledWith(75)
  expect(onEnd).toHaveBeenCalledWith(75)
  expect(
    container.querySelector('.nut-range-button-number-body')?.innerHTML
  ).toBe('75')
})

test('updates value by clicking the vertical taro track', async () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range defaultValue={40} vertical onChange={onChange} />
  )

  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 10,
    clientY: 75,
  })
  await flushInteraction()

  expect(onChange).toHaveBeenCalledWith(75)
})

test('updates the left range value by clicking the track', async () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range range defaultValue={[30, 60]} onChange={onChange} />
  )

  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 25,
    clientY: 10,
  })
  await flushInteraction()
  expect(onChange).toHaveBeenLastCalledWith([25, 60])
})

test('updates the right range value by clicking the track', async () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range range defaultValue={[30, 60]} onChange={onChange} />
  )

  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 75,
    clientY: 10,
  })
  await flushInteraction()
  expect(onChange).toHaveBeenLastCalledWith([30, 75])
})

test('updates value during taro horizontal touch', async () => {
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
  const wrapper = container.querySelector(
    '.nut-range-button-wrapper'
  ) as HTMLElement

  fireEvent.touchStart(wrapper, {
    touches: [{ clientX: 40, clientY: 10 }],
  })
  fireEvent.touchMove(wrapper, {
    touches: [{ clientX: 60, clientY: 10 }],
  })
  await flushInteraction()
  fireEvent.touchEnd(wrapper)

  await waitFor(() => expect(onChange).toHaveBeenCalledWith(60))
  expect(onStart).toHaveBeenCalledTimes(1)
  expect(onEnd).toHaveBeenCalledWith(60)
})

test('updates value during taro vertical touch', async () => {
  const onChange = vi.fn()
  const { container } = render(
    <Range defaultValue={40} vertical onChange={onChange} />
  )
  const wrapper = container.querySelector(
    '.nut-range-button-wrapper'
  ) as HTMLElement

  fireEvent.touchStart(wrapper, {
    touches: [{ clientX: 10, clientY: 40 }],
  })
  fireEvent.touchMove(wrapper, {
    touches: [{ clientX: 10, clientY: 60 }],
  })
  await flushInteraction()
  fireEvent.touchEnd(wrapper)

  await waitFor(() => expect(onChange).toHaveBeenCalledWith(60))
})

test('reverses taro range value when dragging left over right', async () => {
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
  await flushInteraction()
  fireEvent.touchEnd(leftButton)

  await waitFor(() => expect(onChange).toHaveBeenLastCalledWith([60, 100]))
  const numbers = container.querySelectorAll('.nut-range-button-number-body')
  expect(numbers[0]?.innerHTML).toBe('60')
  expect(numbers[1]?.innerHTML).toBe('100')
})

test('reverses taro touch diff direction in rtl mode', async () => {
  const onChange = vi.fn()
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Range defaultValue={40} onChange={onChange} />
    </ConfigProvider>
  )
  const wrapper = container.querySelector(
    '.nut-range-button-wrapper'
  ) as HTMLElement

  fireEvent.touchStart(wrapper, {
    touches: [{ clientX: 40, clientY: 10 }],
  })
  fireEvent.touchMove(wrapper, {
    touches: [{ clientX: 20, clientY: 10 }],
  })
  await flushInteraction()
  fireEvent.touchEnd(wrapper)

  await waitFor(() => expect(onChange).toHaveBeenCalledWith(60))
})

test('stops propagation when clicking the taro button wrapper', () => {
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

test('skips taro move when root rect is unavailable', async () => {
  const onChange = vi.fn()
  const { getRectInMultiPlatform } = await import('@/utils/taro/get-rect')
  vi.mocked(getRectInMultiPlatform).mockImplementationOnce(
    () => new Promise(() => {}) as any
  )
  const { container } = render(<Range defaultValue={40} onChange={onChange} />)
  const wrapper = container.querySelector(
    '.nut-range-button-wrapper'
  ) as HTMLElement

  fireEvent.touchStart(wrapper, {
    touches: [{ clientX: 40, clientY: 10 }],
  })
  fireEvent.touchMove(wrapper, {
    touches: [{ clientX: 60, clientY: 10 }],
  })
  await flushInteraction()

  expect(onChange).not.toHaveBeenCalled()
})

test('ignores taro interactions when disabled', async () => {
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
  await flushInteraction()
  fireEvent.touchEnd(wrapper)
  fireEvent.click(container.querySelector('.nut-range') as HTMLElement, {
    clientX: 75,
    clientY: 10,
  })
  await flushInteraction()

  expect(onChange).not.toHaveBeenCalled()
})

test('logs when taro max is not greater than min', () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  render(<Range min={10} max={10} />)
  expect(logSpy).toHaveBeenCalledWith('max 的值需要大于 min的值')
  logSpy.mockRestore()
})
