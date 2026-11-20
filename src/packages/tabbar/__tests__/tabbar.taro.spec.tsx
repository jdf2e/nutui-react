import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tabbar } from '../tabbar.taro'

const theme = vi.hoisted(() => ({
  getEnv: () => 'WEB',
  getSystemInfoSync: vi.fn(() => ({ theme: 'dark' })),
  onThemeChange:
    vi.fn<(listener: (event: string | { theme?: string }) => void) => void>(),
  offThemeChange: vi.fn(),
}))

vi.mock('@tarojs/taro', () => ({ default: theme }))
vi.mock('@tarojs/components', () => ({ View: 'div' }))

beforeEach(() => vi.clearAllMocks())

test('tracks the system theme only while the built-in frosted backdrop is mounted', () => {
  const { container, rerender } = render(<Tabbar />)
  expect(theme.getSystemInfoSync).not.toHaveBeenCalled()

  rerender(<Tabbar material="frosted" />)
  const backdrop = container.querySelector('.nut-tabbar-backdrop')
  expect(backdrop).toHaveStyle({ backgroundColor: 'rgba(20, 23, 26, 0.8)' })
  const [listener] = theme.onThemeChange.mock.calls[0]
  act(() => listener({ theme: 'light' }))
  expect(backdrop).toHaveStyle({ backgroundColor: 'rgba(255, 255, 255, 0.8)' })

  act(() => listener('DARK'))
  expect(backdrop).toHaveStyle({ backgroundColor: 'rgba(20, 23, 26, 0.8)' })

  theme.offThemeChange.mockImplementationOnce(() => {
    throw new Error('Unsubscribe unsupported')
  })
  rerender(<Tabbar material="frosted" skinBackground={<div>skin</div>} />)
  expect(theme.offThemeChange).toHaveBeenCalledWith(listener)
  expect(container.querySelector('.nut-tabbar-backdrop')).toBeNull()
  expect(
    container.querySelector('.nut-tabbar-skin-background')
  ).toHaveTextContent('skin')
})

test('keeps a light backdrop when the platform theme APIs are unsupported', () => {
  const unsupported = () => {
    throw new Error('Theme API unsupported')
  }
  theme.getSystemInfoSync.mockImplementationOnce(unsupported)
  theme.onThemeChange.mockImplementationOnce(unsupported)
  const { container, unmount } = render(<Tabbar material="frosted" />)
  expect(container.querySelector('.nut-tabbar-backdrop')).toHaveStyle({
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  })
  unmount()
  expect(theme.offThemeChange).not.toHaveBeenCalled()
})

test('switches frosted tabs independently of the leading slot and safe area', () => {
  const onSwitch = vi.fn()
  const items = (
    <>
      <Tabbar.Item title="Home" />
      <Tabbar.Item title="Profile" />
    </>
  )
  const { container, getByText, rerender } = render(
    <Tabbar
      material="frosted"
      addonBefore={<button>Action</button>}
      fixed
      onSwitch={onSwitch}
    >
      {items}
    </Tabbar>
  )
  expect(
    container.querySelector('.nut-safe-area-position-bottom')
  ).toBeInTheDocument()
  fireEvent.click(getByText('Action'))
  expect(onSwitch).not.toHaveBeenCalled()
  fireEvent.click(getByText('Profile'))
  expect(onSwitch).toHaveBeenCalledWith(1)
  expect(
    container.querySelector('.nut-tabbar-active-background-inner-animating')
  ).toBeInTheDocument()

  rerender(
    <Tabbar material="frosted" direction="horizontal">
      {items}
    </Tabbar>
  )
  expect(
    container.querySelector('.nut-tabbar-wrap-horizontal')
  ).toBeInTheDocument()
  expect(container.querySelector('.nut-tabbar-active-background')).toBeNull()
  expect(container.querySelector('.nut-safe-area')).toBeNull()
})
