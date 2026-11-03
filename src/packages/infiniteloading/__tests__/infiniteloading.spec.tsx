import * as React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { trigger, triggerDrag } from '@/utils/event-mocker'
import '@testing-library/jest-dom'

import { InfiniteLoading } from '../infiniteloading'
import Demo2 from '../demos/h5/demo2'
import {
  INFINITE_LOADING_DEFAULT_COMPLETE_ICON,
  INFINITE_LOADING_DEFAULT_ICON,
  INFINITE_LOADING_PRIMARY_COMPLETE_ICON,
  INFINITE_LOADING_PRIMARY_ICON,
} from '../images'
import { sleep } from '@/utils/sleep'

test('pull base', () => {
  const refresh = vi.fn()
  const { container } = render(
    <InfiniteLoading pullRefresh loadMoreText="没有更多" onRefresh={refresh} />
  )
  const track = container.querySelector('.nut-infiniteloading')

  // pulling
  trigger(track, 'touchstart', 0, 0)
  trigger(track, 'touchmove', 0, 20)
  expect(container).toMatchSnapshot()

  // loading
  trigger(track, 'touchend', 0, 100)
  expect(container).toMatchSnapshot()

  // still loading
  triggerDrag(track, 0, 100)
  expect(refresh).toBeCalled()
})

test('pull base 03', () => {
  const refresh = vi.fn()
  const { container } = render(
    <InfiniteLoading pullRefresh pullingText="下拉刷新" onRefresh={refresh} />
  )
  const track = container.querySelector('.nut-infiniteloading')

  // pulling
  trigger(track, 'touchstart', 0, 0)
  trigger(track, 'touchmove', 0, 0)
  expect(container).toMatchSnapshot()

  // loading
  trigger(track, 'touchend', 0, 5)
  expect(container).toMatchSnapshot()

  // still loading
  triggerDrag(track, 0, 5)
  expect(refresh).toHaveBeenCalledTimes(0)
})

test('infiniteloading base', () => {
  const { container } = render(
    <ul className="infiniteUl" id="scroll">
      <InfiniteLoading target="scroll" />
    </ul>
  )
})

test('infiniteloading base 01', async () => {
  const App = () => {
    const [refreshList, setRefreshList] = React.useState<string[]>([])
    const [refreshHasMore, setRefreshHasMore] = React.useState(true)

    React.useEffect(() => {
      init()
    }, [])

    const init = () => {
      for (let i = 0; i < 10; i++) {
        refreshList.push(`${i}`)
      }
      setRefreshList([...refreshList])
    }

    const refreshLoadMore = async () => {
      await sleep(10)
      const curLen = refreshList.length
      for (let i = curLen; i < curLen + 10; i++) {
        refreshList.push(`${i}`)
      }
      if (refreshList.length >= 300) {
        setRefreshHasMore(false)
      } else {
        setRefreshList([...refreshList])
      }
    }
    return (
      <InfiniteLoading
        loadMoreText="没有更多"
        onLoadMore={refreshLoadMore}
        hasMore={refreshHasMore}
      />
    )
  }
  const { container } = render(<App />)
  await waitFor(() => expect(container).toMatchSnapshot())
})

test('infiniteloading base 02', async () => {
  const done = vi.fn()
  const App = () => {
    const [refreshList, setRefreshList] = React.useState<string[]>([])
    const [refreshHasMore, setRefreshHasMore] = React.useState(true)

    React.useEffect(() => {
      init()
    }, [])

    const init = () => {
      for (let i = 0; i < 10; i++) {
        refreshList.push(`${i}`)
      }
      setRefreshList([...refreshList])
    }

    const refreshLoadMore = async () => {
      await sleep(100)
      const curLen = refreshList.length
      for (let i = curLen; i < curLen + 10; i++) {
        refreshList.push(`${i}`)
      }
      if (refreshList.length >= 30) {
        setRefreshHasMore(false)
      } else {
        setRefreshList([...refreshList])
      }
    }
    return (
      <InfiniteLoading
        loadMoreText="没有更多"
        onLoadMore={refreshLoadMore}
        hasMore={refreshHasMore}
        onScroll={done}
      >
        {refreshList.map((item, index) => {
          return (
            <li className="infiniteLi" key={index}>
              {item}
            </li>
          )
        })}
      </InfiniteLoading>
    )
  }
  const { container } = render(<App />)
  const track = container.querySelector('.nut-infiniteloading')
  await act(() => {
    trigger(track, 'scroll', 0, 800)
  })
  expect(container).toMatchSnapshot()
  await waitFor(() => expect(done).toHaveBeenCalled())
})

test('hasMore false', () => {
  const done = vi.fn()
  const { container: container1, rerender } = render(
    <InfiniteLoading loadMoreText="没有更多" hasMore={false} onScroll={done}>
      {Array.from<string>({ length: 100 })
        .fill('NutUI')
        .map((item: string, index) => {
          return (
            <li className="infiniteLi" key={index}>
              {item}
            </li>
          )
        })}
    </InfiniteLoading>
  )
  const track1 = container1.querySelector('.nut-infiniteloading')
  trigger(track1, 'scroll', 0, 100)
})

test('hasMore', () => {
  const done = vi.fn()
  const { container } = render(
    <InfiniteLoading loadMoreText="没有更多" hasMore onScroll={done}>
      {Array.from<string>({ length: 100 })
        .fill('NutUI')
        .map((item: string, index) => {
          return (
            <li className="infiniteLi" key={index}>
              {item}
            </li>
          )
        })}
    </InfiniteLoading>
  )
  const track1 = container.querySelector('.nut-infiniteloading')
  act(() => {
    trigger(track1, 'scroll', 0, 100)
  })

  waitFor(() => {
    expect(done).toBeCalled()
  })
})

test('pull base 01', async () => {
  const refresh = async () => {
    await sleep(10)
  }
  const { container } = render(
    <InfiniteLoading pullRefresh pullingText="下拉刷新" onRefresh={refresh} />
  )
  const track = container.querySelector('.nut-infiniteloading')

  // pulling
  await act(() => {
    trigger(track, 'touchstart', 0, 0)
    trigger(track, 'touchmove', 0, 20)
    expect(container).toMatchSnapshot()
  })
})
describe('InfiniteLoading 16.0', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  test('renders the built-in icon and falls back to the default copy', () => {
    const { container, rerender } = render(<InfiniteLoading />)

    expect(container.querySelector('.nut-infiniteloading')).toHaveAttribute(
      'data-status',
      'idle'
    )
    expect(screen.getByText('上滑更多加载')).toBeInTheDocument()
    // idle 态（上滑更多加载）使用 gif 动图
    expect(
      container.querySelector('.nut-infinite-bottom-icon img')
    ).toHaveAttribute('src', INFINITE_LOADING_DEFAULT_ICON)

    rerender(<InfiniteLoading hasMore={false} />)

    expect(container.querySelector('.nut-infiniteloading')).toHaveAttribute(
      'data-status',
      'complete'
    )
    expect(screen.getByText('没有更多了')).toBeInTheDocument()
    // complete 态（没有更多了）换用静态图，不再与「加载中」共用 gif
    expect(
      container.querySelector('.nut-infinite-bottom-icon img')
    ).toHaveAttribute('src', INFINITE_LOADING_DEFAULT_COMPLETE_ICON)
  })

  test('uses the reverse icon for type="primary"', () => {
    const { container, rerender } = render(<InfiniteLoading type="primary" />)

    expect(container.querySelector('.nut-infiniteloading')).toHaveClass(
      'nut-infiniteloading-primary'
    )
    expect(
      container.querySelector('.nut-infinite-bottom-icon img')
    ).toHaveAttribute('src', INFINITE_LOADING_PRIMARY_ICON)

    // 反白态的「没有更多了」同样换成反白静态图
    rerender(<InfiniteLoading type="primary" hasMore={false} />)
    expect(
      container.querySelector('.nut-infinite-bottom-icon img')
    ).toHaveAttribute('src', INFINITE_LOADING_PRIMARY_COMPLETE_ICON)
  })

  test('keeps loading visible for 200ms and blocks duplicate triggers', async () => {
    vi.useFakeTimers()
    const onLoadMore = vi.fn(() => Promise.resolve())
    const { container } = render(
      <div data-testid="scroll-target" id="scroll-target">
        <InfiniteLoading target="scroll-target" onLoadMore={onLoadMore} />
      </div>
    )
    const target = screen.getByTestId('scroll-target')
    Object.defineProperties(target, {
      scrollHeight: { configurable: true, value: 300 },
      clientHeight: { configurable: true, value: 200 },
      scrollTop: { configurable: true, value: 100, writable: true },
    })

    await act(async () => {
      fireEvent.scroll(target)
      fireEvent.scroll(target)
      await Promise.resolve()
    })

    expect(onLoadMore).toHaveBeenCalledTimes(1)
    expect(container.querySelector('.nut-infiniteloading')).toHaveAttribute(
      'data-status',
      'loading'
    )
    expect(screen.getByText('加载中')).toBeInTheDocument()
    // loading 态继续用 gif 动图（只有「没有更多了」是静态图）
    expect(
      container.querySelector('.nut-infinite-bottom-icon img')
    ).toHaveAttribute('src', INFINITE_LOADING_DEFAULT_ICON)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(199)
    })
    expect(container.querySelector('.nut-infiniteloading')).toHaveAttribute(
      'data-status',
      'loading'
    )

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1)
    })
    expect(container.querySelector('.nut-infiniteloading')).toHaveAttribute(
      'data-status',
      'idle'
    )
  })

  test('renderIcon takes over the built-in icon and iconStyle still applies', () => {
    const { container } = render(
      <InfiniteLoading
        type="primary"
        iconStyle={{ width: 24 }}
        renderIcon={(status) => <span>custom-{status}</span>}
      />
    )

    expect(container.querySelector('.nut-infiniteloading')).toHaveClass(
      'nut-infiniteloading-primary'
    )
    // 自定义图标时不再渲染内置图片
    expect(container.querySelector('.nut-infinite-bottom-icon img')).toBeNull()
    expect(container.querySelector('.nut-infinite-bottom-icon')).toHaveStyle({
      width: '24px',
    })
    expect(screen.getByText('custom-idle')).toBeInTheDocument()
  })

  test('renders a single built-in icon in the pull-refresh demo', async () => {
    vi.useFakeTimers()
    const { container } = render(<Demo2 />)
    const target = container.querySelector('#refreshScroll') as HTMLElement
    Object.defineProperties(target, {
      scrollHeight: { configurable: true, value: 300 },
      clientHeight: { configurable: true, value: 200 },
      scrollTop: { configurable: true, value: 100, writable: true },
    })

    await act(async () => {
      fireEvent.scroll(target)
      await Promise.resolve()
    })

    expect(
      container.querySelectorAll('.nut-infinite-bottom-icon img')
    ).toHaveLength(1)
    expect(
      container.querySelector('.nut-infinite-bottom-tips-icons')
    ).toBeNull()
  })
})
