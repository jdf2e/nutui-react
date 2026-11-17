import * as React from 'react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NoticeBar } from '../noticebar.taro'

const platformMocks = vi.hoisted(() => ({
  rtl: false,
  containerRect: { width: 100, height: 40 },
  getRect: vi.fn(),
  raf: vi.fn((callback: (time: number) => void) => setTimeout(callback, 0)),
  cancelRaf: vi.fn((id: ReturnType<typeof setTimeout>) => clearTimeout(id)),
}))

vi.mock('@tarojs/taro', () => ({
  nextTick: (callback: () => void) => callback(),
}))

vi.mock('@tarojs/components', async () => {
  const ReactModule = await vi.importActual<typeof import('react')>('react')
  return {
    View: ReactModule.forwardRef(
      (props: React.HTMLAttributes<HTMLDivElement>, ref) => {
        const { children, ...rest } = props
        // 小程序 View ref 不提供 DOM style，div 仅用于测试查询渲染结果。
        ReactModule.useImperativeHandle(ref, () => ({}), [])
        return ReactModule.createElement('div', rest, children)
      }
    ),
  }
})

vi.mock('@/packages/configprovider/index.taro', () => ({
  useRtl: () => platformMocks.rtl,
}))

vi.mock('@/utils/taro/get-rect', () => ({
  getRectInMultiPlatform: platformMocks.getRect,
}))

vi.mock('@/utils/raf', () => ({
  default: platformMocks.raf,
  cancelRaf: platformMocks.cancelRaf,
}))

beforeEach(() => {
  vi.clearAllMocks()
  platformMocks.rtl = false
  platformMocks.containerRect = { width: 100, height: 40 }
  platformMocks.getRect.mockImplementation((_element, id = '') => {
    if (id.startsWith('content-ref-')) {
      return Promise.resolve({ width: 240, height: 36 })
    }
    if (id.startsWith('wrap-ref-')) {
      return Promise.resolve({ width: 100, height: 36 })
    }
    return Promise.resolve(platformMocks.containerRect)
  })
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

test('taro horizontal mode measures content and starts the infinite animation', async () => {
  const handleClick = vi.fn()
  const legacyClick = vi.fn()
  const { container } = render(
    <NoticeBar
      content="可滚动公告"
      speed={50}
      onClick={handleClick}
      click={legacyClick}
    />
  )

  const content = container.querySelector(
    '.nut-noticebar-box-wrap-content'
  ) as HTMLElement
  await waitFor(() => {
    expect(platformMocks.getRect).toHaveBeenCalled()
    expect(content).toHaveClass('play')
    expect(content).toHaveStyle({ animationDuration: '4.8s' })
  })

  fireEvent.click(container.querySelector('.nut-noticebar-box') as Element)
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(legacyClick).toHaveBeenCalledTimes(1)

  fireEvent.animationEnd(content)
  await waitFor(() => {
    expect(content).toHaveClass('play-infinite')
    expect(content).toHaveStyle({
      animationDelay: '0s',
      animationDuration: '6.8s',
      transform: 'translateX(100px)',
    })
  })
})

test('taro horizontal mode supports RTL and explicit non-scrolling content', async () => {
  platformMocks.rtl = true
  const { container } = render(
    <NoticeBar content="静态公告" scrollable={false} wrap />
  )

  await act(async () => {})
  const content = container.querySelector(
    '.nut-noticebar-box-wrap-content'
  ) as HTMLElement
  expect(content).not.toHaveClass('play')
  expect(content).not.toHaveClass('nut-ellipsis')
  expect(container.querySelector('.nut-noticebar-box')).toHaveClass(
    'nut-noticebar-box-wrapable'
  )
})

test('taro horizontal mode renders auxiliary slots and deprecated right content', () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
  const { container } = render(
    <NoticeBar
      content="主文案"
      leftIcon={null}
      description="副文案"
      tag={<span>标签</span>}
      action={<span>操作</span>}
      right={<span>旧操作</span>}
    />
  )

  expect(container.querySelector('.nut-noticebar-box-left-icon')).toBeNull()
  expect(
    container.querySelector('.nut-noticebar-box-description')
  ).toHaveTextContent('副文案')
  expect(container.querySelector('.nut-noticebar-box-tag')).toHaveTextContent(
    '标签'
  )
  expect(
    container.querySelector('.nut-noticebar-box-action')
  ).toHaveTextContent('操作')
  expect(container.querySelector('.nut-noticebar-box-right')).toHaveTextContent(
    '旧操作'
  )
  expect(warn).toHaveBeenCalledTimes(1)
})

test('taro autoClose uses CSS timing, restarts, and calls the latest callback', () => {
  vi.useFakeTimers()
  const firstClose = vi.fn()
  const latestClose = vi.fn()
  const onRender = vi.fn()
  const { container, rerender } = render(
    <React.Profiler id="noticebar-taro" onRender={onRender}>
      <NoticeBar
        content="自动关闭"
        autoClose={1000}
        scrollable={false}
        onClose={firstClose}
      />
    </React.Profiler>
  )

  const initialCountdown = container.querySelector(
    '.nut-noticebar-box-close-countdown'
  ) as HTMLElement
  expect(
    initialCountdown.style.getPropertyValue('--noticebar-auto-close-duration')
  ).toBe('1000ms')

  onRender.mockClear()
  act(() => vi.advanceTimersByTime(400))
  expect(onRender).not.toHaveBeenCalled()
  rerender(
    <NoticeBar
      content="自动关闭"
      autoClose={800}
      scrollable={false}
      onClose={latestClose}
    />
  )
  expect(
    container.querySelector('.nut-noticebar-box-close-countdown')
  ).not.toBe(initialCountdown)
  act(() => vi.advanceTimersByTime(800))

  expect(firstClose).not.toHaveBeenCalled()
  expect(latestClose).toHaveBeenCalledTimes(1)
  expect(container.querySelector('.nut-noticebar-box')).toBeNull()
})

test('taro manual close invokes both callbacks and cancels autoClose', () => {
  vi.useFakeTimers()
  const close = vi.fn()
  const onClose = vi.fn()
  const { container } = render(
    <NoticeBar
      content="自动关闭"
      autoClose={1000}
      close={close}
      onClose={onClose}
    />
  )

  fireEvent.click(
    container.querySelector('.nut-noticebar-box-right-icon') as Element
  )
  act(() => vi.advanceTimersByTime(1000))

  expect(close).toHaveBeenCalledTimes(1)
  expect(onClose).toHaveBeenCalledTimes(1)
})

test('taro unmount cancels the pending autoClose callback', () => {
  vi.useFakeTimers()
  const onClose = vi.fn()
  const { unmount } = render(
    <NoticeBar content="自动关闭" autoClose={1000} onClose={onClose} />
  )

  unmount()
  act(() => vi.advanceTimersByTime(1000))
  expect(onClose).not.toHaveBeenCalled()
})

test('taro vertical list rotates, emits item clicks, and clears its interval', () => {
  vi.useFakeTimers()
  const setIntervalSpy = vi.spyOn(globalThis, 'setInterval')
  const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')
  const onItemClick = vi.fn()
  const { container, unmount } = render(
    <NoticeBar
      direction="vertical"
      list={['第一条', '第二条']}
      height={40}
      speed={10}
      duration={100}
      onItemClick={onItemClick}
      closeable
    />
  )

  expect(setIntervalSpy).toHaveBeenCalledTimes(1)
  const intervalId = setIntervalSpy.mock.results[0].value
  const firstItem = container.querySelector(
    '.nut-noticebar-box-horseLamp-list-item'
  ) as Element
  fireEvent.click(firstItem)
  expect(onItemClick).toHaveBeenCalledWith(expect.anything(), '第一条')

  const getItems = () =>
    Array.from(
      container.querySelectorAll('.nut-noticebar-box-horseLamp-list-item')
    ).map((item) => item.textContent)

  expect(
    container.querySelector('.nut-noticebar-box-horseLamp-list')
  ).toHaveStyle({ marginTop: '-40px' })
  act(() => vi.advanceTimersByTime(1000))
  expect(getItems()).toEqual(['第二条', '第一条'])
  expect(
    container.querySelector('.nut-noticebar-box-horseLamp-list')
  ).toHaveStyle({ marginTop: '' })

  act(() => vi.advanceTimersByTime(100))
  expect(
    container.querySelector('.nut-noticebar-box-horseLamp-list')
  ).toHaveStyle({ marginTop: '-40px' })
  act(() => vi.advanceTimersByTime(1000))
  expect(getItems()).toEqual(['第一条', '第二条'])

  unmount()
  expect(clearIntervalSpy).toHaveBeenCalledWith(intervalId)
})

test('taro custom vertical children use declarative styles and autoplay', async () => {
  vi.useFakeTimers()
  platformMocks.containerRect = { width: 100, height: 40 }
  const onItemClick = vi.fn()
  const { container } = render(
    <NoticeBar
      direction="vertical"
      height={40}
      speed={1}
      duration={20}
      onItemClick={onItemClick}
    >
      <span>第一条</span>
      <span>第二条</span>
    </NoticeBar>
  )

  await act(async () => {
    vi.advanceTimersByTime(0)
  })
  const track = container.querySelector(
    '.nut-noticebar-box-wrap'
  ) as HTMLElement
  expect(track).toHaveStyle({
    height: '120px',
    transform: 'translate3D(0,0px,0)',
    transitionDuration: '0ms',
  })

  act(() => vi.advanceTimersByTime(120))
  act(() => vi.runOnlyPendingTimers())
  expect(track.style.transform).toBe('translate3D(0,-40px,0)')
  expect(track.style.transitionDuration).toBe('20ms')

  fireEvent.click(track.children[1])
  expect(onItemClick).toHaveBeenCalledWith(expect.anything(), expect.anything())
})

test.each([1, 2])(
  'taro custom vertical mode cancels pending frame layer %i on unmount',
  async (pendingLayer) => {
    vi.useFakeTimers()
    const { unmount } = render(
      <NoticeBar direction="vertical" height={40} speed={1} duration={20}>
        <span>第一条</span>
        <span>第二条</span>
      </NoticeBar>
    )

    await act(async () => vi.advanceTimersByTime(0))
    act(() => vi.advanceTimersByTime(120))
    if (pendingLayer === 2) {
      // 执行第一层帧，使第二层帧成为卸载时的待执行任务。
      act(() => vi.advanceTimersToNextTimer())
    }
    expect(platformMocks.raf).toHaveBeenCalledTimes(pendingLayer)
    const pendingFrame = platformMocks.raf.mock.results[pendingLayer - 1].value

    unmount()
    expect(platformMocks.cancelRaf).toHaveBeenCalledWith(pendingFrame)
    act(() => vi.runOnlyPendingTimers())
    expect(platformMocks.raf).toHaveBeenCalledTimes(pendingLayer)
  }
)

test('taro custom vertical mode handles one child and dynamic children', async () => {
  vi.useFakeTimers()
  platformMocks.containerRect = { width: 100, height: 30 }
  const { container, rerender } = render(
    <NoticeBar direction="vertical" height={30} duration={10} speed={1}>
      <span>单条</span>
    </NoticeBar>
  )
  await act(async () => vi.advanceTimersByTime(0))
  expect(container.querySelector('.nut-noticebar-box-wrap')).toHaveStyle({
    height: '60px',
  })

  rerender(
    <NoticeBar direction="vertical" height={30} duration={10} speed={1}>
      <span>第一条</span>
      <span>第二条</span>
      {null}
    </NoticeBar>
  )
  await act(async () => vi.advanceTimersByTime(0))
  expect(container.querySelector('.nut-noticebar-box-wrap')).toHaveStyle({
    height: '90px',
  })
  expect(
    container.querySelectorAll('.nut-noticebar-box-wrap > div')
  ).toHaveLength(2)
})

test('taro vertical mode does not render an empty list', () => {
  const { container } = render(
    <NoticeBar direction="vertical" list={[]} leftIcon={null} />
  )
  expect(container.querySelector('.nut-noticebar-vertical')).toBeNull()
})
