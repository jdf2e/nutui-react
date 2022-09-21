import * as React from 'react'
import { render } from '@testing-library/react'
import { trigger, triggerDrag } from '@/utils/test/event'
import '@testing-library/jest-dom'

import { Infiniteloading } from '../infiniteloading'

test('pull base', () => {
  const refresh = jest.fn()
  const { container } = render(
    <Infiniteloading isOpenRefresh loadMoreTxt="没有更多" onRefresh={refresh} />
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

test('infiniteloading base', () => {
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

    const refreshLoadMore = (done: () => void) => {
      setTimeout(() => {
        const curLen = refreshList.length
        for (let i = curLen; i < curLen + 10; i++) {
          refreshList.push(`${i}`)
        }
        if (refreshList.length >= 30) {
          setRefreshHasMore(false)
        } else {
          setRefreshList([...refreshList])
        }
        done()
      }, 500)
    }
    return (
      <Infiniteloading
        loadMoreTxt="没有更多"
        onLoadMore={refreshLoadMore}
        hasMore={refreshHasMore}
      />
    )
  }
  const { container } = render(<App />)
  const track = container.querySelector('.nut-infiniteloading')
  trigger(track, 'touchstart', 0, 0)
  trigger(track, 'touchmove', 0, -100)
  trigger(track, 'touchend', 0, -800)

  triggerDrag(track, 0, -800)
  expect(container).toMatchSnapshot()
})
