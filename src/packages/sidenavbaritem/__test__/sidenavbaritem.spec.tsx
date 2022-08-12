import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import SideNavBarItem from '@/packages/sidenavbaritem'

test('should match snapshot', () => {
  const { asFragment } = render(
    <SideNavBarItem
      data-testid="sideNavBarItem-click"
      title="一级内容1"
      ikey="1-01"
    />
  )
  expect(asFragment()).toMatchSnapshot()
})
test('should emit click event', async () => {
  const click = jest.fn(({ title, ikey }) => {
    console.log('click>>>>', title, ikey)
  })
  const { getByTestId } = render(
    <>
      <SideNavBarItem
        data-testid="sideNavBarItem-click"
        title="一级内容1"
        ikey="1-01"
        click={click}
      />
    </>
  )
  fireEvent.click(getByTestId('sideNavBarItem-click'))
  expect(click).toBeCalled()
})
