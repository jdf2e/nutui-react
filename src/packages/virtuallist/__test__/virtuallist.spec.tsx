import * as React from 'react'
// import * as renderer from 'react-test-renderer'

import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { VirtualList } from '../virtuallist'

const props = {
  sourceData: new Array(100).fill(0),
}
describe('props', () => {
  const { getByTestId } = render(
    <>
      <VirtualList {...props} itemSize={40} data-testid="verticalList" />
      <VirtualList
        horizontal
        {...props}
        itemSize={100}
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
  test('itemSize props', () => {
    expect(horizontalListBox.style.width).toBe('10000px')
    expect(verticalListBox.style.height).toBe('4000px')
  })
})

test('renders only visible items', async () => {
  const handleScroll = jest.fn(() => {})
  const boxHeight = 500
  const itemSize = 66
  const overscan = 2
  const visibleCount = Math.ceil(boxHeight / itemSize) + overscan
  const { container } = render(
    <VirtualList
      {...props}
      containerSize={boxHeight}
      itemSize={itemSize}
      data-testid="scrollList"
      handleScroll={handleScroll}
    />
  )

  await waitFor(() => {
    const listElement = container.querySelectorAll('.nut-virtuallist-item')
    expect(listElement.length).toBe(visibleCount)
  })
})
