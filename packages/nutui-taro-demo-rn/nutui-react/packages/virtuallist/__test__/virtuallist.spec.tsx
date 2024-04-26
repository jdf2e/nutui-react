import * as React from 'react'
// import * as renderer from 'react-test-renderer'

import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { VirtualList } from '../virtuallist'
import { trigger } from '@/utils/test/event'

const props = {
  list: new Array(100).fill(0),
}
describe('props', () => {
  const { getByTestId } = render(
    <>
      <VirtualList {...props} itemHeight={40} data-testid="verticalList" />
      <VirtualList
        direction="horizontal"
        {...props}
        itemHeight={100}
        data-testid="horizontalList"
      />
    </>
  )
  const horizontalListBox =
    getByTestId('horizontalList').getElementsByTagName('div')[0]
  const verticalListBox =
    getByTestId('verticalList').getElementsByTagName('div')[0]
  test('direction props', () => {
    expect(horizontalListBox).toHaveClass('nut-horizontal-box')
    expect(verticalListBox).toHaveClass('nut-vertical-box')
  })
  test('itemHeight props', () => {
    expect(horizontalListBox.style.width).toBe('10000px')
    expect(verticalListBox.style.height).toBe('4000px')
  })
})

test('renders only visible items', async () => {
  const handleScroll = vi.fn(() => {})
  const boxHeight = 500
  const itemHeight = 66
  const overscan = 2
  const visibleCount = Math.ceil(boxHeight / itemHeight) + overscan
  const { container } = render(
    <VirtualList
      {...props}
      containerHeight={boxHeight}
      itemHeight={itemHeight}
      data-testid="scrollList"
      onScroll={handleScroll}
    />
  )

  await waitFor(() => {
    const listElement = container.querySelectorAll('.nut-virtuallist-item')
    expect(listElement.length).toBe(visibleCount)
  })
})
test('scroll', async () => {
  const boxHeight = 500
  const { container } = render(
    <VirtualList
      {...props}
      containerHeight={boxHeight}
      itemEqual={false}
      data-testid="scrollList3"
    />
  )
  const track = container.querySelector('.nut-virtualList-box')
  if (track) {
    trigger(track, 'scroll', 0, 100)
    await waitFor(() => {
      const element18 = container.querySelector('[data-index="18"]')
      expect(element18).toBeTruthy()
    })
  }
})
