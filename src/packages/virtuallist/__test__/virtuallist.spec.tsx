import * as React from 'react'
// import * as renderer from 'react-test-renderer'

import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { VirtualList } from '../virtuallist'

const props = {
  sourceData: new Array(100).fill(0),

  //deleteTodo: jest.fn(),
}

// test('should match snapshot', () => {
//   const { wrapper } = setupByRender()
//   const { asFragment } = wrapper
//   expect(asFragment()).toMatchSnapshot()
// })

test('direction and itemSize props', () => {
  const { getByTestId } = render(
    <>
      <VirtualList {...props} itemSize={40} data-testid="verticalList" />
      <VirtualList horizontal {...props} itemSize={100} data-testid="horizontalList" />
    </>
  )
  const horizontalListBox = getByTestId('horizontalList').getElementsByTagName('div')[0]
  const verticalListBox = getByTestId('verticalList').getElementsByTagName('div')[0]
  expect(horizontalListBox).toHaveClass('nut-horizontal-box')
  expect(verticalListBox).toHaveClass('nut-vertical-box')
  expect(horizontalListBox.style.width).toBe('10000px')
  expect(verticalListBox.style.height).toBe('4000px')
})

test('visibleCount=>7', async () => {
  const boxHeight = 200
  const itemSize = 40
  const overscan = 2
  const { container, debug, getByTestId } = render(
    <VirtualList {...props} itemSize={itemSize} data-testid="scrollList" />
  )

  debug(container)
  const visibleCount = Math.ceil(boxHeight / itemSize) + overscan
  await waitFor(() => {
    // const listElement = container.querySelectorAll('.nut-virtuallist-item')
    // expect(listElement.length).toBe(visibleCount)
  })
})
