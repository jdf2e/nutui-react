import * as React from 'react'
import { act, render, waitFor } from '@testing-library/react'
import { trigger, triggerDrag } from '@/utils/test/event'
import '@testing-library/jest-dom'

import { InfiniteLoading } from '../infiniteloading'
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
